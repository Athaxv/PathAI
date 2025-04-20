"use server"
import { auth } from "@clerk/nextjs";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
})

export async function getCoverLetter() {
    const { userId } = auth();
    if (!userId) throw new Error("Unauthorized")
       
}