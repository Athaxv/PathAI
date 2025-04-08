import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import HeroVideoDialog from './magicui/hero-video-dialog'

function Hero() {
  return (
    <section className='w-full pt-36 md:pt-44 pb-10'>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='gradient-title text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl '>
                    Your AI Career Coach For
                    <br />
                    Professional Success
                </h1>
                <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                    Advance your career with personalized guidance, interview prep, and AI-powered tools for job success
                </p>
            </div>
            <div className='flex justify-center space-x-4'>
                <Link href={"/dashboard"}>
                    <Button size={"lg"} className={"px-8"}>
                        Get Started
                    </Button>
                </Link>
                <Link href={"/www.youtube.com"}>
                    <Button size={"lg"} variant={"outline"} className={"px-8"}>
                        Get Started
                    </Button>
                </Link>
            </div>

            <div>
            <div className="flex justify-center items-center pt-10 z-1">
      <HeroVideoDialog
        className="block dark:hidden w-[500px] md:w-[700px] max-w-full"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block w-[500px] md:w-[1100px] max-w-full"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
            </div>
        </div>
    </section>
  )
}

export default Hero