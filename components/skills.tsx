"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const programmingSkills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "HTML/CSS", level: 75 },
    { name: "JavaScript", level: 70 },
  ]

  const frameworkSkills = [
    { name: "Django", level: 75 },
    { name: "TensorFlow", level: 65 },
    { name: "scikit-learn", level: 70 },
    { name: "Keras", level: 60 },
  ]

  const toolsSkills = [
    { name: "IBM Cloud", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "GitHub", level: 85 },
    { name: "Tableau", level: 75 },
  ]

  return (
    <section id="skills" ref={ref} className="py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <Badge variant="outline" className="mb-2">
          Skills
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-sm bg-background/30 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Programming Languages</h3>
          <div className="space-y-6">
            {programmingSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="backdrop-blur-sm bg-background/30 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Frameworks</h3>
          <div className="space-y-6">
            {frameworkSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="backdrop-blur-sm bg-background/30 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Tools & Platforms</h3>
          <div className="space-y-6">
            {toolsSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 backdrop-blur-sm bg-background/30 p-6 rounded-lg"
      >
        <h3 className="text-xl font-semibold mb-6 text-center">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Basics of Linux Operating",
            "Data Analytics With Specialisation in Tableau",
            "Certificate of Participation in Ethos 2024",
            "Certificate of Participation in TATA Crucible Campus Quiz 2024",
            "Accenture Innovation Challenge 2024",
            "IBM SkillsBuild",
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
            >
              <Badge
                variant="secondary"
                className="py-2 px-4 text-center justify-center w-full hover:bg-primary/20 transition-colors cursor-default"
              >
                {cert}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

