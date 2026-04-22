'use client'

import { useEffect, useRef } from 'react'

interface Atom {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: string
}

const COLORS = [
  'rgba(244, 162, 97, 0.55)',   // orange
  'rgba(167, 139, 250, 0.50)',  // purple
  'rgba(232, 121, 160, 0.45)',  // pink
  'rgba(96, 165, 250, 0.40)',   // blue
]

const BOND_DISTANCE = 160
const ATOM_DENSITY = 0.000035 // atoms per px² — scales with viewport

export default function MoleculeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const atomsRef = useRef<Atom[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    const dpr = Math.max(1, window.devicePixelRatio || 1)

    const resize = () => {
      width = window.innerWidth
      height = document.documentElement.scrollHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    const initAtoms = () => {
      const count = Math.max(22, Math.min(55, Math.round(width * height * ATOM_DENSITY)))
      atomsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2.2 + 1.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const atoms = atomsRef.current

      // Bonds
      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dx = atoms[i].x - atoms[j].x
          const dy = atoms[i].y - atoms[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < BOND_DISTANCE) {
            const alpha = (1 - dist / BOND_DISTANCE) * 0.22
            ctx.strokeStyle = `rgba(240, 235, 255, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(atoms[i].x, atoms[i].y)
            ctx.lineTo(atoms[j].x, atoms[j].y)
            ctx.stroke()
          }
        }
      }

      // Atoms + glow
      for (const a of atoms) {
        const grad = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.r * 5)
        grad.addColorStop(0, a.color)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r * 5, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = a.color.replace(/[\d.]+\)$/, '0.9)')
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fill()

        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > width) a.vx *= -1
        if (a.y < 0 || a.y > height) a.vy *= -1
      }

      animRef.current = requestAnimationFrame(draw)
    }

    resize()
    initAtoms()
    draw()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      // keep atoms but clamp them into the new viewport
      for (const a of atomsRef.current) {
        if (a.x > width) a.x = width
        if (a.y > height) a.y = height
      }
    })
    resizeObserver.observe(document.documentElement)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
