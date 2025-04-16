import { Inngest } from "inngest";

export const inngest = new Inngest({ id: "pathai", name: "PathAI", 
    credentials: {
        gemini: {
            apikey: process.env.GEMINI_API_KEY,
        }
    }
 })