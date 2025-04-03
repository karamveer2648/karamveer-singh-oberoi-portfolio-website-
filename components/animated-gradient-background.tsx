"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resize)
    resize()

    // Colors based on theme
    const getColors = () => {
      return theme === "dark"
        ? ["#2d1b69", "#5b21b6", "#7c3aed", "#8b5cf6", "#4c1d95"]
        : ["#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6"]
    }

    // Create gradient circles
    class Circle {
      x: number
      y: number
      radius: number
      color: string
      dx: number
      dy: number

      constructor(x: number, y: number, radius: number, color: string, dx: number, dy: number) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.dx = dx
        this.dy = dy
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        if (this.x + this.radius > width || this.x - this.radius < 0) {
          this.dx = -this.dx
        }

        if (this.y + this.radius > height || this.y - this.radius < 0) {
          this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy

        this.draw()
      }
    }

    // Create circles
    let circles: Circle[] = []
    const initCircles = () => {
      circles = []
      const colors = getColors()

      for (let i = 0; i < 5; i++) {
        const radius = Math.random() * 200 + 100
        const x = Math.random() * (width - radius * 2) + radius
        const y = Math.random() * (height - radius * 2) + radius
        const dx = (Math.random() - 0.5) * 0.2
        const dy = (Math.random() - 0.5) * 0.2
        const color = colors[Math.floor(Math.random() * colors.length)]

        circles.push(new Circle(x, y, radius, color, dx, dy))
      }
    }

    initCircles()

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, width, height)

      // Draw with blur and low opacity
      ctx.globalAlpha = 0.15
      ctx.filter = "blur(100px)"

      circles.forEach((circle) => {
        circle.update()
      })
    }

    animate()

    // Update colors when theme changes
    const handleThemeChange = () => {
      const colors = getColors()
      circles.forEach((circle, i) => {
        circle.color = colors[i % colors.length]
      })
    }

    window.addEventListener("themeChange", handleThemeChange)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("themeChange", handleThemeChange)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-20 opacity-70" />
}

