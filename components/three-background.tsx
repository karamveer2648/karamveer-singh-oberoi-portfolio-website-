"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { useTheme } from "next-themes"

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000

    const posArray = new Float32Array(particlesCount * 3)
    const scaleArray = new Float32Array(particlesCount)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 90
    }

    for (let i = 0; i < particlesCount; i++) {
      scaleArray[i] = Math.random()
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("scale", new THREE.BufferAttribute(scaleArray, 1))

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    })

    // Update color based on theme
    const updateColor = () => {
      if (theme === "dark") {
        particlesMaterial.color = new THREE.Color(0x9333ea) // Purple in dark mode
      } else {
        particlesMaterial.color = new THREE.Color(0x7c3aed) // Darker purple in light mode
      }
    }

    updateColor()

    // Create the particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Mouse interaction
    const mouse = {
      x: 0,
      y: 0,
    }

    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    })

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.0003
      particlesMesh.rotation.y += 0.0005

      // Follow mouse with subtle movement
      particlesMesh.rotation.x += mouse.y * 0.0003
      particlesMesh.rotation.y += mouse.x * 0.0003

      renderer.render(scene, camera)
    }

    animate()

    // Update color when theme changes
    const handleThemeChange = () => {
      updateColor()
    }

    window.addEventListener("themeChange", handleThemeChange)

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("themeChange", handleThemeChange)
      window.removeEventListener("mousemove", () => {})
    }
  }, [theme])

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" />
}

