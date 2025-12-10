import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

// Quick guard: ensure the GEMINI_API_KEY environment variable is present.
if (!process.env.GEMINI_API_KEY) {
  console.error("Error: Missing GEMINI_API_KEY environment variable.");
  console.error("Set it in PowerShell for this session:");
  console.error("  $env:GEMINI_API_KEY = 'YOUR_API_KEY_HERE'; node index.js");
  console.error("Or persist it (Windows) for future sessions:");
  console.error("  setx GEMINI_API_KEY \"YOUR_API_KEY_HERE\"");
  process.exit(1);
}

console.log('Hello World!!!');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const customerSupportModel = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction: `
    You are an expert customer support agent.
    Your job is to clearly and politely help users with their queries.
  `,
});

async function main(query = "") {
  const result = await customerSupportModel.generateContent(query);
  const response = result.response.text();

  console.log("Final Result:", response);
}

main("How can I reset my password?");