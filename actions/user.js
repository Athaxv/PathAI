"use server"
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { checkUser } from "@/lib/CheckUser";
import { buildPlaceholderInsightData } from "@/lib/industryInsights";
import { inngest } from "@/lib/inngest/client";


export async function updateuser(data) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    })

    if (!user) throw new Error("User not found")

    const startTime = Date.now();
    let status = "unknown";
    try {
        const result = await db.$transaction(
            async (tx) => {
                let industryInsight = await tx.industryInsight.findUnique({
                    where: {
                        industry: data.industry,
                    }
                })
 
                if (!industryInsight) {
                    industryInsight = await tx.industryInsight.create({
                        data: buildPlaceholderInsightData(data.industry),
                    })
                }
 
                const updatedUser = await tx.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills
                    }
                })
 
                return { updatedUser, industryInsight };
            },
            {
                timeout: 10000,
            }
        )

        try {
            await inngest.send({
                name: "industry/insight.generate",
                data: { industry: data.industry },
            });
        } catch (error) {
            console.error("Error queueing industry insight generation: ", error.message)
        }

        status = "success";
        return { success: true, ...result }
    } catch (error) {
        status = "error";
        console.error("Error updating user and industry: ", error.message)
        throw new Error("Failed to update user profile", error.message)
    } finally {
        console.info("updateuser completed", { durationMs: Date.now() - startTime, status });
    }
}

export async function getUserOnboardingStatus() {
    try {
        const user = await checkUser()
        if (!user) throw new Error("Unauthorized");
 
        return {
            isOnboarded: !!user?.industry,
        }
    } catch (error) {
        console.error("Error checking onboarding status: ", error.message)
        throw new Error("Failed to check onBoarding status");
    }
}
