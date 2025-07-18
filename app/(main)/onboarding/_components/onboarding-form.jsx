"use client"

import { onboardingSchema } from '@/app/lib/page'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const OnboardingForm = ({industries}) => {
   
  const [SelectedIndustry, setSelectedIndustry] = useState(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(onboardingSchema)
  });

  const onSubmit = async (values)=> {
    console.log(values);
  }

  const watchIndustry = watch("industry")

  return (
    <div className='flex items-center justify-center bg-background'>
           <Card className={'w-full max-w-lg mt-10 mx-2 bg-transparent mb-10'}>
              <CardHeader>
                <CardTitle className={'text-4xl tracking-tighter mb-3 mt-3'}>Complete Your Profile</CardTitle>
                <CardDescription>
                  Select your Industry to get personalized career insights and recommendations 
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                  <div className='space-y-2'>
                    <Label htmlFor="industry" className='text-xl tracking-tight font-light '>Industry</Label>
                  <Select onValueChange={(value)=>{
                    setValue("industry", value)
                    setSelectedIndustry(
                      industries.find((ind)=> ind.id === value )
                    );
                    setValue("subIndustry", "")
                  }}>
                    <SelectTrigger id="industry" className="w-[100%] tracking-tight">
                      <SelectValue placeholder="Select an Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => {
                        return(
                          <SelectItem value={ind.id} key={ind.id}>{ind.name}</SelectItem>
                        )
                      })};
                    </SelectContent>
                  </Select>
                  {errors.industry && (
                    <p className='text-sm text-red-500'>
                      {errors.industry.message}
                    </p>
                  )}
                  </div>


                  { watchIndustry && (  
                    <div className='space-y-2'>
                    <Label htmlFor="subIndustry" className='text-xl tracking-tight font-light '>Specialization</Label>
                  <Select onValueChange={(value)=>{
                    setValue("subIndustry", value);
                  }}>
                    <SelectTrigger id="subIndustry" className="w-[100%] tracking-tight">
                      <SelectValue placeholder="Select an Specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      {SelectedIndustry?.subIndustries.map((ind) => {
                        return(
                          <SelectItem value={ind} key={ind}>{ind}</SelectItem>
                        );
                      })};
                    </SelectContent>
                  </Select>
                  {errors.subIndustry && (
                    <p className='text-sm text-red-500'>
                      {errors.subIndustry.message}
                    </p>
                  )}
                  </div>
                )}

                <div className='space-y-2'>
                  <Label htmlFor="experience" className='text-xl tracking-tight font-light '>Years of Experience</Label>
                  <Input 
                  id="experience"
                  type="number"
                  min="0"
                  max="50"
                  placeholder="Enter years of experience"
                  {...register("experience")}
                  />
                  
                    {errors.experience && (
                      <p className='text-sm text-red-500'>
                        {errors.experience.message}
                      </p>
                    )}
                </div>

                <div className='space-y-2'>
                  <Label htmlFor="skills" className='text-xl tracking-tight font-light '>Skills</Label>
                  <Input 
                  id="skills"
                  placeholder="e.g., Python, Javascript, Project Management"
                  {...register("skills")}
                  />
                  <p className='text-sm text-muted-foreground'>Separate multiple skills with commas</p>
                  
                    {errors.skills && (
                      <p className='text-sm text-red-500'>
                        {errors.skills.message}
                      </p>
                    )}
                </div>

                <div className='space-y-2'>
                  <Label htmlFor="bio" className='text-xl tracking-tight font-light '>Professional Bio</Label>
                  <Textarea 
                  id="bio"
                  placeholder="Tell us about Your professional background"
                  {...register("bio")}
                  />
                  <p className='text-sm text-muted-foreground'>Separate multiple skills with commas</p>
                  
                    {errors.bio && (
                      <p className='text-sm text-red-500'>
                        {errors.bio.message}
                      </p>
                    )}
                </div>

                <Button type="submit" className="w-full mt-3">Complete Profile</Button>

                </form>

              </CardContent>
            </Card>
    </div>
  )
}

export default OnboardingForm
