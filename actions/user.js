"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"


export async function updateUser(data) {
    const { userId } = await auth();
    if(!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    });
    if(!user) throw new Error("User not Found");

    try {
        const result = db.$transaction(
            async(tx)=>{
            // find  if the industy exists
            let IndustryInsight = await tx.IndustryInsight.findUnique({
                where: {
                    industry: data.industry
                },
              });

            //if not industry dosen;t exists then create it with default values , later we will use AI
            if(!IndustryInsight){
                IndustryInsight = await tx.IndustryInsight.create({
                    data:{
                        industry: data.industry,
                        salaryRanges: [], // Defalut empty array
                        growthRate: 0, // Defalut value
                        demandLevel: "Medium", // Defalut value
                        topSkills: [],
                        marketOutlook: "neutral",
                        keyTrends: [],
                        recommendedSkills: [],
                        lastUpdated: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                    },
                });
            }

            // update the user
            const updatedUser = await tx.user.update({
                where: {
                    id: user.id
                },
                data: {
                    industry: data.industry,
                    experience: data.experience,
                    bio: data.bio,
                    skills: data.skills,
                }   
            }); 
                return { updatedUser , IndustryInsight };
            },
            {
                timeout: 10000, // defalut 5000
            }
        ); 
    } catch (error) {
        console.error("Error updating user and industry:", error.message );
        throw new Error("Failed to update profile");
    }
}

export async function getUserOnboardingStatus(data) {
    const { userId } = await auth();
    if(!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    });
    if(!user) throw new Error("User not Found");


    try {
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                industry: true,
            },
        });

        return { 
            isOnboarded: !!user?.industry,
        };
    } catch (error) {
        console.log("Error checking onboarding status:", error.message);
        throw new Error("Failed to check onboarding status");
    }
}