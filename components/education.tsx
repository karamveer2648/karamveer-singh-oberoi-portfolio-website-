"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" ref={ref} className="py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <Badge variant="outline" className="mb-2">
          Education
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Academic Background</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="backdrop-blur-sm bg-background/50 hover:bg-background/70 transition-all duration-300 hover:shadow-lg border-l-4 border-l-purple-500">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <CardTitle>Bachelor of Engineering in Computer Science</CardTitle>
                  </div>
                  <CardDescription className="mt-1">
                    P.R. Pote Patil College of Engineering and Management, Amravati
                  </CardDescription>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  September 2023 - September 2026
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Currently pursuing a B.E. in Computer Science and Engineering, focusing on advanced programming
                concepts, AI/ML, and cloud computing technologies.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="backdrop-blur-sm bg-background/50 hover:bg-background/70 transition-all duration-300 hover:shadow-lg border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <CardTitle>Diploma in Computer Engineering</CardTitle>
                  </div>
                  <CardDescription className="mt-1">Dr. Panjabrao Deshmukh Rural Polytechnic, Amravati</CardDescription>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  January 2020 - June 2023
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Completed a Diploma in Computer Engineering with a strong foundation in programming, database
                management, and web development technologies.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

