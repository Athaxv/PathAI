"use server"

import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { generateNvidiaCompletion } from "@/lib/ai/nvidia"
import {
    buildPlaceholderInsightResponse,
    isInsightPending,
} from "@/lib/industryInsights"
import { inngest } from "@/lib/inngest/client"

export async function generateAIInsights( industry ){
    const startTime = Date.now();
    const prompt = `
          Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
          {
            "salaryRanges": [
              { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
            ],
            "growthRate": number,
            "demandLevel": "HIGH" | "MEDIUM" | "LOW",
            "topSkills": ["skill1", "skill2"],
            "marketOutlook": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
            "KeyTrends": ["trend1", "trend2"],
            "recommendedSkills": ["skill1", "skill2"]
          }
          
          IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
          Include at least 5 common roles for salary ranges.
          Growth rate should be a percentage.
          Include at least 5 skills and trends.
        `;
    const text = await generateNvidiaCompletion({ prompt })

    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    const insights = JSON.parse(cleanedText)
    console.info("generateAIInsights completed", { durationMs: Date.now() - startTime })
    return insights
}

export async function getIndustryInsights() {
    const startTime = Date.now();
    let status = "unknown";
    try {
        const { userId } = await auth()
        if (!userId) throw new Error("Unauthorized")

        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId
            },
            include: {
                industryInsight: true
            }
        })

        if (!user) throw new Error("User not Found")

        if (!user.industryInsight){
            status = "pending";
            if (user.industry) {
                try {
                    await inngest.send({
                        name: "industry/insight.generate",
                        data: { industry: user.industry },
                    })
                } catch (error) {
                    console.error("Error queueing industry insight generation: ", error.message)
                }
            }
            return buildPlaceholderInsightResponse(user.industry)
        }

        const pending = isInsightPending(user.industryInsight)
        status = pending ? "pending" : "ready";

        if (pending && user.industry) {
            try {
                await inngest.send({
                    name: "industry/insight.generate",
                    data: { industry: user.industry },
                })
            } catch (error) {
                console.error("Error queueing industry insight generation: ", error.message)
            }
        }

        return { ...user.industryInsight, isPending: pending }
    } catch (error) {
        status = "error";
        throw error;
    } finally {
        console.info("getIndustryInsights completed", { durationMs: Date.now() - startTime, status })
    }
}
