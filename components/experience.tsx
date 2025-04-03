"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "AI Intern",
      company: "Edunet Foundation",
      period: "Nov 2024 - Present",
      description:
        "Developing an AI-powered attendance system using Facial Recognition with guidance from industry mentors, completing weekly milestones toward project goals.",
      icon: <Briefcase className="h-5 w-5 text-purple-500" />,
    },
    {
      title: "Data Analytics Intern",
      company: "Connecting Dreams Foundation",
      period: "Oct 2024 - Present",
      description:
        "Applying data analytics with AI and large language models in agriculture, leveraging tools from Vodafone Idea to solve real-world problems.",
      icon: <Briefcase className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "AI Intern",
      company: "Edunet Foundation",
      period: "July 2024 - Aug 2024",
      description:
        "Hands-on experience in AI and IBM Cloud, developing and deploying an AI model, strengthening cloud skills and technical collaboration with tech professionals.",
      icon: <Briefcase className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Volunteer",
      company: "PrimaThink Pvt. Ltd.",
      period: "June 2022 - Sep 2022",
      description:
        "Developed 'Prima Chennai Point,' a digital guide to Chennai's key spots, enhancing project management and teamwork skills with HTML, CSS, and Bootstrap.",
      icon: <Briefcase className="h-5 w-5 text-amber-500" />,
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <Badge variant="outline" className="mb-2">
          Experience
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden backdrop-blur-sm bg-background/50 hover:bg-background/70 transition-all duration-300 hover:shadow-lg border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-primary font-medium mt-1">{exp.company}</CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl font-semibold mb-6"
        >
          Leadership Roles
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="backdrop-blur-sm bg-background/50 hover:bg-background/70 transition-all duration-300 hover:shadow-lg border-l-4 border-l-purple-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Co-Lead, Web Development at MLSC</CardTitle>
                <CardDescription className="text-primary font-medium">July 2024 - July 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Organized workshops on GitHub, VS Code, HTML/CSS, and deployment. Co-hosted "Kickstart Your Tech
                  Journey," impacting 70+ attendees with hands-on training!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="backdrop-blur-sm bg-background/50 hover:bg-background/70 transition-all duration-300 hover:shadow-lg border-l-4 border-l-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Treasurer & Technical Team Co-Head, Coding Club PRPCEM</CardTitle>
                <CardDescription className="text-primary font-medium">Sep 2024 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Played a key role in events like CODETHON 24 and an AI in Cybersecurity webinar, managing tech setups,
                  participant support, and event coordination.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

