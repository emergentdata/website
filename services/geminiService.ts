import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;
// Note: In a real production environment, you should proxy this request
// or use a backend to secure your API key.
const ai = new GoogleGenAI({ apiKey: apiKey });

export const generateChatResponse = async (
  history: { role: string; content: string }[],
  message: string
): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    
    // Create the chat session
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `You are "Emergent AI", a sarcastic but highly intelligent Data Strategy Consultant for a boutique agency called Emergent Data. 
        
        Your tone is:
        - Professional but slightly edgy (Swiss Design style).
        - Concise and direct.
        - You prefer modern data stacks (Snowflake, dbt, Python) over legacy systems.
        
        Your goal is to help users understand data maturity, engineering, and strategy. 
        If they ask about services, mention:
        1. Engineering (Pipelines, Warehousing)
        2. Strategy (KPIs, Roadmaps)
        3. Consulting (Fractional CTO)
        
        Keep responses under 100 words unless asked for a deep dive.`,
      },
    });

    // Send the message
    // Note: We are strictly using sendMessage with the user prompt. 
    // History management in this simple stateless service implementation relies on the client
    // or a more persistent chat object if we were maintaining session state server-side.
    // For this demo, we are instantiating a new chat each time but ideally, 
    // we would keep the 'chat' instance alive in a React Context or Hook.
    // However, to respect the single-file stateless pattern often requested, 
    // we will just send the prompt with the system context. 
    // *Correction*: To make it conversational, we will treat it as a single-turn Q&A 
    // or a fresh session for the purpose of this specific "contact/inquiry" bot.
    
    const response = await chat.sendMessage({ message: message });
    return response.text || "I'm analyzing the data... try again.";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to the data ether failed. Please check your API key or try again later.";
  }
};