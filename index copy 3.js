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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});