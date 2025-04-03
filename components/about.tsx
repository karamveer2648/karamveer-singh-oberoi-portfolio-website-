"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code2, Cloud, Database } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <Badge variant="outline" className="mb-2">
          About Me
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-6 backdrop-blur-sm bg-background/30 p-4 rounded-lg">
            I&apos;m a Computer Science Engineering student at P.R. Pote Patil College of Engineering and Management,
            Amravati, with a strong foundation in programming and a passion for emerging technologies.
          </p>
          <p className="text-muted-foreground mb-6 backdrop-blur-sm bg-background/30 p-4 rounded-lg">
            My journey in tech began with a Diploma in Computer Engineering from Dr. Panjabrao Deshmukh Rural
            Polytechnic, Amravati, and has evolved through various internships, leadership roles, and hands-on projects.
          </p>
          <p className="text-muted-foreground backdrop-blur-sm bg-background/30 p-4 rounded-lg">
            I&apos;m dedicated to AI, ML, and cloud computing, thriving on leveraging technology to address real-world
            challenges. I enjoy collaborating on impactful projects and constantly expanding my skills to create
            positive industry impacts.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: <Brain className="h-8 w-8 mb-4 text-purple-500" />,
              title: "AI/ML Enthusiast",
              description: "Passionate about artificial intelligence and machine learning applications",
              color: "border-l-purple-500",
              delay: 0.3,
            },
            {
              icon: <Code2 className="h-8 w-8 mb-4 text-blue-500" />,
              title: "Web Developer",
              description: "Experienced in Django and full-stack web development",
              color: "border-l-blue-500",
              delay: 0.4,
            },
            {
              icon: <Cloud className="h-8 w-8 mb-4 text-green-500" />,
              title: "Cloud Advocate",
              description: "IBM Cloud enthusiast with practical deployment experience",
              color: "border-l-green-500",
              delay: 0.5,
            },
            {
              icon: <Database className="h-8 w-8 mb-4 text-amber-500" />,
              title: "Data Analytics",
              description: "Skilled in data analysis with Tableau and Python",
              color: "border-l-amber-500",
              delay: 0.6,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: item.delay }}
            >
              <Card
                className={`border-l-4 ${item.color} backdrop-blur-sm bg-background/50 hover:bg-background/70 transition-all duration-300 hover:shadow-lg`}
              >
                <CardContent className="p-6">
                  {item.icon}
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

