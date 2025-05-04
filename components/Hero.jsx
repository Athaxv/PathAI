"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import HeroVideoDialog from './magicui/hero-video-dialog'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className='w-full pt-36 md:pt-44 pb-10'>
      <div className='space-y-6 text-center'>
        <div className='space-y-6 mx-auto'>
          <motion.h1
            className='gradient-title text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Your AI Career Coach For
            <br />
            Professional Success
          </motion.h1>

          <motion.p
            className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Advance your career with personalized guidance, interview prep, and AI-powered tools for job success
          </motion.p>
        </div>

        <motion.div
          className='flex justify-center space-x-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Link href={"/dashboard"}>
            <Button size={"lg"} className={"px-8"}>
              Get Started
            </Button>
          </Link>
          <Link href={"https://www.youtube.com"}>
            <Button size={"lg"} variant={"outline"} className={"px-8"}>
              Tutorial
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
