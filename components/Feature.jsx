import { features } from '@/data/features'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card'
import { howItWorks } from '@/data/howItWorks'
import { testimonial } from '@/data/testimonial'
import Image from 'next/image'
import { faqs } from '@/data/faqs'

function Feature() {
  return (
    <>
    <section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
    <div className='container mx-auto px-4 md:px-6'>
        <h2 className='text-3xl font-bold tracking-tighter text-center mb-12'>Powerful Features for Your Career Growth</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {features.map((feature, index) => {
                return (
                    <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
                <CardContent className={"pt-6 flex flex-col items-center text-center"}>
                  <div className='flex flex-col text-center items-center justify-center'>
                    {feature.icon}
                    <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                    <p className='text-muted-foreground'>{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
                )
              
            })}
        </div>
    </div>
    </section>
    <section className='w-full py-12 md:py-24 lg:py-32 bg-muted/50'>
    <div className='container mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <h3 className='text-4xl font-bold'>50+</h3>
                <p className='text-muted-foreground'>Industries Covered</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <h3 className='text-4xl font-bold'>1000+</h3>
                <p className='text-muted-foreground'>Interview Questions</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <h3 className='text-4xl font-bold'>95%</h3>
                <p className='text-muted-foreground'>Success Rate</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <h3 className='text-4xl font-bold'>24/7</h3>
                <p className='text-muted-foreground'>AI Support</p>
            </div>
        </div>
    </div>
    </section>
    <section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
    <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center max-w-6xl mx-auto mb-12'>
        <h2 className='text-3xl font-bold mb-4'>How It Works</h2>
        <p className='text-muted-foreground'>
            Four Simple Steps to accelerate your career growth
        </p>
        </div>  
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {howItWorks.map((item, index) => {
                return (
                    <div key={index} className='flex flex-col items-center text-center space-y-4'>
                        <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center'>
                            {item.icon}
                        </div>
                        <h2 className='font-semibold text-xl'>{item.title}</h2>
                        <p className='text-muted-foreground'>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
    </section>
    <section className='w-full py-12 md:py-24 lg:py-32 bg-muted/50'>
    <div className='container mx-auto px-4 md:px-6'>
        <h2 className='text-3xl font-bold tracking-tighter text-center mb-12'>What Our Users Say</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {testimonial.map((testimonial, index) => {
                return (
                    <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
                <CardContent className={"pt-1"}>
                  <div className='flex items-center space-y-4'>
                    <div className='flex items-center space-x-4'>
                        <div className='relative h-12 w-12 flex-shrink-0'><Image width={40} height={40} alt='testi' src={testimonial.image} className='rounded-full flex items-center object-cover border-2 border-primary/20 '/></div>
                    </div>
                    <div className='mb-2'>
                        <p className='font-semibiold'> {testimonial.author}</p>
                        <p className='text-sm text-muted-foreground'>{testimonial.role}</p>
                        <p className='text-sm text-primary'>{testimonial.company}</p>
                    </div>
                    </div>
                    <blockquote className='mt-2'>
                        <p className='text-muted-foreground relative italic'>
                            <span className='text-3xl text-primary absolute -top-4 -left-2'>
                                &quot;
                            </span>
                            {testimonial.quote}
                            <span className='text-3xl text-primary absolute -bottom-4'>
                                &quot;
                            </span>
                        </p>
                    </blockquote>
                  
                </CardContent>
              </Card>
                )
              
            })}
        </div>
    </div>
    </section>

    <section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
    <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center max-w-6xl mx-auto mb-12'>
        <h2 className='text-3xl font-bold mb-4'>Frequently Asked Questions</h2>
        <p className='text-muted-foreground'>
            Find answers to common questions about our platform
        </p>
        </div>  
        <div className=' max-w-6xl mx-auto'>
            {faqs.map((item, index) => {
                return (
                    <div>
                        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

                    </div>
                )
            })}
        </div>
    </div>
    </section>
    </>
  )
}

export default Feature