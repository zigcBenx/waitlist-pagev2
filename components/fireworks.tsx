"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface FireworksProps {
  buttonRef: React.RefObject<HTMLButtonElement>
}

export default function Fireworks({ buttonRef }: FireworksProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !buttonRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const buttonRect = buttonRef.current.getBoundingClientRect()
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Firework particles
    const particles: Particle[] = []
    const fireworks: Firework[] = []

    // Create fireworks at button position
    const buttonCenterX = buttonRect.left + buttonRect.width / 2
    const buttonCenterY = buttonRect.top + buttonRect.height / 2

    // Create initial fireworks
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        fireworks.push(
          new Firework(
            buttonCenterX + (Math.random() * 40 - 20),
            buttonCenterY + (Math.random() * 40 - 20),
            ctx,
            particles,
          ),
        )
      }, i * 200)
    }

    // Animation loop
    let animationId: number
    function animate() {
      ctx.globalCompositeOperation = "destination-out"
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "lighter"

      // Update and draw fireworks
      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update()
        fireworks[i].draw()
        if (fireworks[i].exploded && fireworks[i].particles.length === 0) {
          fireworks.splice(i, 1)
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw()
        if (particles[i].lifespan <= 0) {
          particles.splice(i, 1)
        }
      }

      if (fireworks.length > 0 || particles.length > 0) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [buttonRef])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" style={{ position: "fixed" }} />
}

class Particle {
  x: number
  y: number
  vx: number
  vy: number
  gravity: number
  lifespan: number
  color: string
  ctx: CanvasRenderingContext2D
  size: number

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D, color: string) {
    this.x = x
    this.y = y
    this.vx = Math.random() * 3 - 1.5
    this.vy = Math.random() * -3 - 1
    this.gravity = 0.05
    this.lifespan = 100 + Math.random() * 50
    this.color = color
    this.ctx = ctx
    this.size = 2 + Math.random() * 2
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.vy += this.gravity
    this.lifespan -= 1
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size * (this.lifespan / 150), 0, Math.PI * 2)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
  }
}

class Firework {
  x: number
  y: number
  exploded: boolean
  particles: Particle[]
  ctx: CanvasRenderingContext2D
  particlesContainer: Particle[]

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D, particlesContainer: Particle[]) {
    this.x = x
    this.y = y
    this.exploded = false
    this.particles = []
    this.ctx = ctx
    this.particlesContainer = particlesContainer
    this.explode()
  }

  explode() {
    this.exploded = true
    const colors = ["#FF5E5B", "#D8D8D8", "#FFFFEA", "#00CECB", "#FFED66"]

    for (let i = 0; i < 50; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      const particle = new Particle(this.x, this.y, this.ctx, color)
      this.particles.push(particle)
      this.particlesContainer.push(particle)
    }
  }

  update() {
    if (this.exploded) {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].update()
        if (this.particles[i].lifespan <= 0) {
          this.particles.splice(i, 1)
        }
      }
    }
  }

  draw() {
    if (this.exploded) {
      for (const particle of this.particles) {
        particle.draw()
      }
    }
  }
}
