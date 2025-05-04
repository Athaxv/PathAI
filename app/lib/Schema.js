import { z } from "zod";

export const onboardingSchema = z.object({
    industry: z.string({
        required_error: "Please select an Industry"
    }),
    subIndustry: z.string({
        required_error: "Please select a specialization"
    }),
    bio: z.string().max(500).optional(),
    experience: z.string()
                 .transform((val) => parseInt(val, 10))
                 .pipe(
                    z.number()
                     .min(0, "Experience must be atleast 0 years")
                     .max(49, "Experience cannot exceed 49 years")
                 ),
    skills: z.string().transform((val) => 
        val
            ? val
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean)
            : undefined
            ),
})

export const contactSchema = z.object({
    email: z.string().email("Invalid email address"),
    mobile: z.string().optional(),
    linkedin: z.string().optional,
    twitter: z.string().optional(),
})

export const entrySchema = z.object({
    title: z.string().min(1, "Title is required"),
    organization: z.string().min(1, "organization is required"),
    startDate: z.string().min(1, "Starte Date is required"),
    endDate: z.string().optional(),
    description: z.string().min(1, "Description is required"),
    current: z.boolean().default(false)
}).refine((data) => {
    if (!data.current && !data.endDate){
        return false;
    }
    return true
},
    {
        message: "End date is required unless this is your current position",
        path: ["endDate"],
    }
)

export const resumeSchema = z.object({
    contactInfo: contactSchema,
    summary: z.string().min(1, "Professional summary is required"),
    skills: z.string().min(1, "Skills are required"),
    experience: z.array(entrySchema),
    education: z.array(entrySchema),
    projects: z.array(entrySchema)
})

export const coverLetterSchema = z.object({
    companyName: z.string().min(3, "Company Name is Required"),
    jobTitle: z.string().min(3, "Title of the Job must be specified"),
    jobDescription: z.string().min(10, "A description of the job is must").max(500, "Job Description must not be more than 500 Characters")
})