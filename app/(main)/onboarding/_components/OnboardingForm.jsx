"use client"
import { onboardingSchema } from "@/app/lib/Schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


function OnboardingForm({ industries }) {
  const [selectIndustry, setSelectedIndustry] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });

  const watchIndustry = watch("industry")

  const onSubmit = (val) => {
    console.log(val)
  }

  return (
    <div className="flex items-center justify-center bg-background">
      <Card className={"w-full max-w-lg mt-10 mx-2"}>
        <CardHeader>
          <CardTitle className={"gradient-title text-4xl"}>
            Complete Your Profile
          </CardTitle>
          <CardDescription>
            Select your industry to get personalized career insights and
            recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
            <Select 
                onValueChange={(value) => {
                  setValue("industry", value)
                  setSelectedIndustry(
                    industries.find((ind) => ind.id === value)
                  )
                  setValue("subIndustry", "")
                }}
              >
              <SelectTrigger id="industry" className={"w-full"}>
                <SelectValue placeholder="Select an Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind, index) => {
                  return (
                    <SelectItem value={ind.id} key={index}>{ind.name}</SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-sm text-red-500">
                {errors.industry.message}
              </p>
            )}
            </div>

            { watchIndustry && (
            <div className="space-y-2">
              <Label htmlFor="subIndustry">Specialization</Label>
            <Select 
                onValueChange={(value) => setValue("subIndustry", value)}
              >
              <SelectTrigger id="subIndustry" className={"w-full"}>
                <SelectValue placeholder="Select an Industry" />
              </SelectTrigger>
              <SelectContent>
                {selectIndustry?.subIndustries.map((ind, index) => {
                  return (
                    <SelectItem value={ind} key={index}>{ind}</SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
            {errors.subIndustry && (
              <p className="text-sm text-red-500">
                {errors.subIndustry.message}
              </p>
            )}
            </div>
)}
          <div className="space-y-2">
              <Label htmlFor="subIndustry">Years of Experience</Label>
              <Input
                id="experience"
                type="number"
                min="0"
                max="50"
                placeholder="Enter years of Experience"
                {...register("experience")}
                />
            {errors.experience && (
              <p className="text-sm text-red-500">
                {errors.experience.message}
              </p>
            )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subIndustry">Skills</Label>
              <Input
                id="Skills"
                placeholder="E.g Python, Java, Project Management"
                {...register("skills")}
                />
                <p className="text-sm text-muted-foreground">
                  Separate multiple skills with commas
                </p>
            {errors.skills && (
              <p className="text-sm text-red-500">
                {errors.skills.message}
              </p>
            )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subIndustry">Professional Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about your professional background..."
                className="h-32"
                {...register("bio")}
                />
            {errors.bio && (
              <p className="text-sm text-red-500">
                {errors.bio.message}
              </p>
            )}
            </div>
            <Button type="submit" className={"w-full"}>
              Complete Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default OnboardingForm;
