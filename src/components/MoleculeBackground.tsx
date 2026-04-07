'use client'

import { useEffect, useRef } from 'react'

interface Atom {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  opacity: number
}

const COLORS = [
  'rgba(249, 115, 22, 0.35)',   // orange
  'rgba(168, 130, 255, 0.30)',  // purple
  'rgba(236, 72, 153, 0.25)',   // pink
  'rgba(96, 165, 250, 0.25)',   // blue
  'rgba(74, 222, 128, 0.20)',   // green
]

const BOND_COLOR = 'rgba(255, 255, 255, 0.08)'
const BOND_DISTANCE = 160
const ATOM_COUNT = 35

export default function MoleculeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const atomsRef = useRef<Atom[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    const initAtoms = () => {
      atomsRef.current = Array.from({ length: ATOM_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 1.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.5 + 0.3,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const atoms = atomsRef.current

      // Draw bonds
      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dx = atoms[i].x - atoms[j].x
          const dy = atoms[i].y - atoms[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < BOND_DISTANCE) {
            const alpha = (1 - dist / BOND_DISTANCE) * 0.15
            ctx.beginPath()
            ctx.moveTo(atoms[i].x, atoms[i].y)
            ctx.lineTo(atoms[j].x, atoms[j].y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw atoms
      for (const atom of atoms) {
        ctx.beginPath()
        ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI * 2)
        ctx.fillStyle = atom.color
        ctx.fill()

        // Subtle glow
        ctx.beginPath()
        ctx.arc(atom.x, atom.y, atom.radius * 3, 0, Math.PI * 2)
        const grad = ctx.createRadialGradient(
          atom.x, atom.y, atom.radius * 0.5,
          atom.x, atom.y, atom.radius * 3
        )
        grad.addColorStop(0, atom.color)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.fill()
      }

      // Update positions
      for (const atom of atoms) {
        atom.x += atom.vx
        atom.y += atom.vy

        if (atom.x < 0 || atom.x > canvas.width) atom.vx *= -1
        if (atom.y < 0 || atom.y > canvas.height) atom.vy *= -1
      }

      animRef.current = requestAnimationFrame(draw)
    }

    resize()
    initAtoms()
    draw()

    const resizeObserver = new ResizeObserver(() => {
      resize()
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
