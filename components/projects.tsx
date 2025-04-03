"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "AI-Powered Attendance System",
      description:
        "Developing a facial recognition-based attendance system using Python, OpenCV, and machine learning algorithms to automate attendance tracking.",
      tags: ["Python", "OpenCV", "Machine Learning", "AI"],
      link: "#",
      github: "#",
      color: "border-t-purple-500",
    },
    {
      title: "Prima Chennai Point",
      description:
        "A digital guide to Chennai's key spots, businesses, and services, built with HTML, CSS, and Bootstrap, enhancing project management and teamwork skills.",
      tags: ["HTML", "CSS", "Bootstrap", "Web Development"],
      link: "#",
      github: "#",
      color: "border-t-blue-500",
    },
    {
      title: "Agricultural Data Analytics",
      description:
        "Applied data analytics with AI and large language models in agriculture, leveraging tools from Vodafone Idea to solve real-world problems.",
      tags: ["Data Analytics", "AI", "Python", "Tableau"],
      link: "#",
      github: "#",
      color: "border-t-green-500",
    },
    {
      title: "The Coding Corner",
      description:
        "A technical post series delivering essential programming knowledge to the community, covering various programming concepts and technologies.",
      tags: ["Technical Writing", "Programming", "Education"],
      link: "#",
      github: "#",
      color: "border-t-amber-500",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <Badge variant="outline" className="mb-2">
          Projects
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <Card
              className={`overflow-hidden backdrop-blur-sm bg-background/50 hover:bg-background/70 transition-all duration-300 hover:shadow-lg border-t-4 ${project.color}`}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild className="rounded-full">
                  <Link href={project.github}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild className="rounded-full">
                  <Link href={project.link}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

