"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Code, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8 relative overflow-hidden">
      <motion.div variants={container} initial="hidden" animate="show" className="z-10">
        <motion.div variants={item}>
          <Badge
            variant="outline"
            className="mb-4 py-1.5 text-sm font-normal rounded-full backdrop-blur-sm bg-background/30"
          >
            CSE Engineer & Java/Python Developer
          </Badge>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-md">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-500 to-violet-500 text-transparent bg-clip-text">
            Karamveer
          </span>
        </motion.h1>

        <motion.h2 variants={item} className="text-2xl md:text-4xl font-semibold mb-6 drop-shadow-md">
          Building digital solutions
        </motion.h2>

        <motion.p
          variants={item}
          className="text-muted-foreground max-w-xl mb-8 text-lg backdrop-blur-sm bg-background/30 p-4 rounded-lg"
        >
          A passionate tech enthusiast dedicated to AI, ML, and cloud computing. I thrive on leveraging technology to
          address real-world challenges, collaborating on impactful projects, and constantly expanding my skills.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 mb-8">
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg hover:shadow-purple-500/20">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 backdrop-blur-sm bg-background/30 border-2 hover:bg-background/50"
          >
            <Link href="/resume.pdf" target="_blank">
              View Resume
            </Link>
          </Button>
        </motion.div>

        <motion.div variants={item} className="flex space-x-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full h-12 w-12 backdrop-blur-sm bg-background/30 hover:bg-background/50"
          >
            <Link href="https://github.com/karamveeroberoi" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full h-12 w-12 backdrop-blur-sm bg-background/30 hover:bg-background/50"
          >
            <Link href="https://www.linkedin.com/in/karamveersinghoberoi2648" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full h-12 w-12 backdrop-blur-sm bg-background/30 hover:bg-background/50"
          >
            <Link href="https://karamveeroberoi.in" target="_blank" aria-label="Portfolio">
              <Code className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block z-10">
        <Link
          href="#about"
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

