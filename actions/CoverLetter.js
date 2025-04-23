"use server"
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/prisma"
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
})

export async function getCoverLetter() {
    const { userId } = await auth()
        if (!userId) throw new Error("Unauthorized")
    
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId
            },
        })

    if (!user) throw new Error("User not Found")

    
}