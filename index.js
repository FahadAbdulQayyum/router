import express from 'express';
import dotenv from 'dotenv';

import {
  Agent,
  Runner,
  setTracingDisabled,
  tool,
  OpenAIProvider,
  setDefaultOpenAIClient,
  setOpenAIAPI,
} from "@openai/agents";
import OpenAI from "openai";
import { z } from "zod";
import fs from 'fs/promises';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

if (!process.env.BASE_URL || !process.env.API_KEY || !process.env.MODEL_NAME) {
  console.warn(
    "Warning: set BASE_URL, API_KEY, MODEL_NAME in .env for full functionality."
  );
}

// Create a custom OpenAI client and provider
const openaiClient = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: process.env.BASE_URL,
});
const modelProvider = new OpenAIProvider({
  openAIClient: openaiClient,
});
setDefaultOpenAIClient(openaiClient);
setOpenAIAPI("chat_completions");
setTracingDisabled(true);

// Tool definition
const getWeather = tool({
  name: "get_weather",
  description: "Get the weather for a city.",
  parameters: z.object({
    city: z.string().describe("The city to get weather for"),
  }),
  async execute(input) {
    console.log(`[debug] getting weather for ${input.city}`);
    // Replace this with a real API call if desired
    return `The weather in ${input.city} is sunny, 75°F, wind 5 mph.`;
  },
});

// Create a runner once and reuse it
const runner = new Runner({ modelProvider });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Dynamic route: accepts JSON { city } or query ?city=Washington
// Also accepts optional `prompt` to override the generated prompt.
app.post('/weather', async (req, res) => {
  try {
    const city = req.body.city || req.query.city;
    const prompt = req.body.prompt || req.query.prompt || (city ? `What's the weather in ${city}?` : null);

    if (!prompt) {
      return res.status(400).json({ error: 'Provide `city` or `prompt` in body or query.' });
    }

    const agent = new Agent({
      name: 'Assistant',
      instructions: 'You only respond in short sentences. Mention temperature in Farenheit and wind speed as well.',
      model: process.env.MODEL_NAME,
      tools: [getWeather],
    });

    const result = await runner.run(agent, prompt);
    return res.json({ output: result.finalOutput });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: String(err) });
  }
});

// Optional GET route for quick testing via query string
app.get('/weather', async (req, res) => {
  req.body = req.body || {};
  req.body.city = req.body.city || req.query.city;
  req.body.prompt = req.body.prompt || req.query.prompt;
  // delegate to POST handler logic
  return app._router.handle(req, res, () => {});
});

// Helper: read `AI_INTEGRATION_DATA.md` and pick relevant sections
async function getRelevantContext(question, maxChars = 3000) {
  const filePath = path.join(process.cwd(), 'AI_INTEGRATION_DATA.md');
  let md;
  try {
    md = await fs.readFile(filePath, 'utf8');
  } catch (err) {
    console.error('Could not read AI_INTEGRATION_DATA.md:', err);
    return null;
  }

  // Split into paragraphs (blocks separated by blank lines)
  const paragraphs = md.split(/\n{2,}/g).map(p => p.trim()).filter(Boolean);

  // Build keyword set from question
  const tokens = question.toLowerCase().split(/\W+/).filter(Boolean);
  const uniqueTokens = Array.from(new Set(tokens)).filter(t => t.length > 2);

  // Score paragraphs by occurrences of tokens
  const scored = paragraphs.map(p => {
    const low = p.toLowerCase();
    let score = 0;
    for (const t of uniqueTokens) {
      let idx = low.indexOf(t);
      while (idx !== -1) {
        score += 1;
        idx = low.indexOf(t, idx + t.length);
      }
    }
    return { p, score };
  });

  // Sort and pick top paragraphs
  scored.sort((a, b) => b.score - a.score);
  const selected = [];
  let total = 0;
  for (const s of scored) {
    if (s.score === 0 && selected.length > 0) break; // stop when no more relevant
    if (total + s.p.length > maxChars) break;
    selected.push(s.p);
    total += s.p.length;
    if (selected.length >= 6) break;
  }

  // Fallback: include start of document
  if (selected.length === 0) {
    return md.slice(0, maxChars);
  }

  return selected.join('\n\n');
}

// Route: ask documentation file questions
app.post('/ask-docs', async (req, res) => {
  try {
    const question = req.body.question || req.query.question;
    if (!question) return res.status(400).json({ error: 'Provide `question` in JSON body or query string.' });

    const context = await getRelevantContext(question);
    if (context === null) return res.status(500).json({ error: 'Could not load documentation file.' });

    const prompt = `Use only the following document content to answer the question. If the answer is not contained in the content, reply: \"Sorry, I don't have that information here.\"\n\nDOCUMENT:\n${context}\n\nQuestion: ${question}\n\nAnswer concisely and, if possible, cite the section heading or phrase.`;

    const agent = new Agent({
      name: 'DocAssistant',
      instructions: 'Answer only from the provided document content. If unsure, say you don\'t know. Keep answers short.',
      model: process.env.MODEL_NAME,
      tools: [],
    });

    const result = await runner.run(agent, prompt);
    return res.json({ output: result.finalOutput });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: String(err) });
  }
});

app.get('/ask-docs', async (req, res) => {
  req.body = req.body || {};
  req.body.question = req.body.question || req.query.question;
  return app._router.handle(req, res, () => {});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});