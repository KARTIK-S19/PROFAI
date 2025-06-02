"use client"
import React from 'react'
import HeroSection from '@/components/ui/hero'
import { features , benefits } from '@/data/features'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { howItWorks } from '@/data/howItWorks'
import { testimonial } from '@/data/testimonial'
import Image from 'next/image'
import { faqs } from '@/data/faqs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ChevronRight } from "lucide-react"

const page = () => {
  return (
    <div>
      <div className='grid-background'></div>
       
      <HeroSection/>


      {/* Features section */}
      <section className='w-full py-12 md:py-24 lg:py-28 bg-background '>
        <div className='container mx-auto px-4 md:px-6'>
          <h1 className='text-center mb-13 font-bold text-4xl tracking-tight'>Powerfull Features for Your Career Growth</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-5'>
            {features.map((feature , index) => {
              return(
                <Card key={index}
                className={'border-2 hover:border-primary transition-colors duration-300 bg-transparent'}
                >
                  <CardContent>
                    <div>{feature.icon}</div>
                    <h3 className='text-lgl font-bold'>{feature.title}</h3>
                    <p className='font-thin' >{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>



       {/* benefits section */}
      <section className="w-full bg- text-white py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-4">Why Choose Our AI-Powered Assistant?</h2>
    <p className="text-gray-400 text-lg mb-12">
      Empower your academic and career journey with intelligent tools designed just for students.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{benefit.icon} {benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

  </div>
</section>


       {/* howItWorks section */}
      <section className='w-full py-12 md:py-24 lg:py-28 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h1 className='text-center mb-2 font-bold text-4xl tracking-tight'>How it Works</h1>
          <h3 className='text-center mb-13 font-light tracking-tight text-zinc-500'>Four simple steps to accelerate your career growth</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-5'>
            {howItWorks.map((item , index) => {
              return(
                <div key={index}
                className='flex flex-col items-center text-center gap-3'>
                  <div className='w-18 h-18 flex bg-zinc-900 rounded-full items-center justify-center border-1 transition-[2s] hover:border-primary'>
                    {item.icon}
                  </div>
                  <h2 className='text-lg font-semibold'>{item.title}</h2>
                  <p className='font-extralight'>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      

      {/* testimonial section */}
      <section className='w-full py-12 md:py-24 lg:py-28 bg-transparent'>
        <div className='container w-full mx-auto px-4 md:px-6'>
          <h1 className='text-center mb-13 font-bold text-4xl tracking-tight'>What Our Users Say</h1>
          <div className='w-fit grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8'>
            {testimonial.map((feedback , index) => {
              return(
                <Card key={index}
                className={'w-fit h-fit transition-colors duration-300 mx-auto bg-zinc-950'}
                >
                  <CardContent className={"w-full h-full flex flex-col "}>
                      
                      <div className='flex gap-4 h-full w-full mb-4'>
                        <div className=' my-auto '>
                        <Image
                        width={40}
                        height={40}
                        src={feedback.image}
                        alt={feedback.author}
                        className='rounded-full'
                        />
                        </div>

                      <div className=''>

                        <h1 className='text-md'>{feedback.author}</h1>
                        <h3 className='text-sm font-extralight'>{feedback.role}</h3>
                        <h2 className='text-sm font-light'>{feedback.company}</h2>
                      
                      </div>
                      </div>


                      <div className='w-70 h-fit'>
                        <span className='text-2xl text-primary absolute -top-4 -left-2'></span>
                        <p className='text-muted-foreground italic relative'>"{feedback.quote}"</p>
                        <span className='text-2xl text-primary absolute -bottom-4'></span>
                      </div>
                    
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      
      {/* Faqs section= */}
      <section className='w-full py-12 md:py-24 lg:py-28 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h1 className='text-center mb-2 font-bold text-4xl tracking-tight'>Frequently Asked Questions</h1>
          <h3 className='text-center mb-13 font-light tracking-tight text-zinc-500'>Find answers to common questions about our platform</h3>
          <div className='max-w-6xl mx-auto'>
            <Accordion type="single" collapsible>
            {faqs.map((faqs , index) => {
              return(
                  <AccordionItem key={index} value={`item-${index}`}>      
                    <AccordionTrigger>{faqs.question}</AccordionTrigger>
                    <AccordionContent>
                      {faqs.answer}
                    </AccordionContent>
                  </AccordionItem>
              )
            })}
            </Accordion>
          </div>
        </div>
      </section>
      

      <section className="w-full h-fit size-18 py-40">
        <div className='w-fit h-fit py-5 mx-auto'>
          <div className='w-fit flex flex-col justify-center text-center gap-5 mb-15'>
            <h1 className='text-zinc-200 text-7xl tracking-tighter font-semibold' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Ready to Accelerate Your Career?</h1>
            <p className='text-lg font-thin'>Join thousands of Professional who are Advancing their career with AI-Powered guidance.</p>
          </div>

          <div className='w-fit mx-auto'>
            <Button size={"lg"} className="px-10 py-3 shadow-2xl shadow-accent-foreground hover:bg-white" >Start Your Journey Today<ChevronRight /></Button>
          </div>
        </div>
      </section>


    </div>
  )
}

export default page
