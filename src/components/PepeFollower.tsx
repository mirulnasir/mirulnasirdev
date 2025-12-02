'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface SinglePepeProps {
    size: number
    offsetX: number
    offsetY: number
    mousePos: { x: number; y: number }
}

/**
 * Single Pepe follower component that follows the mouse with inertia.
 */
function SinglePepe({ size, offsetX, offsetY, mousePos }: SinglePepeProps) {
    const [pepePos, setPepePos] = useState({ x: 0, y: 0 })
    const animationFrameRef = useRef<number | undefined>(undefined)
    const pepePosRef = useRef({ x: 0, y: 0 })
    const initializedRef = useRef(false)

    // Initialize Pepe at random edge of screen
    useEffect(() => {
        if (typeof window === 'undefined' || initializedRef.current) return

        const width = window.innerWidth
        const height = window.innerHeight

        // Pick a random edge (0: top, 1: right, 2: bottom, 3: left)
        const edge = Math.floor(Math.random() * 4)
        let x = 0
        let y = 0

        switch (edge) {
            case 0: // Top edge
                x = Math.random() * width
                y = 0
                break
            case 1: // Right edge
                x = width
                y = Math.random() * height
                break
            case 2: // Bottom edge
                x = Math.random() * width
                y = height
                break
            case 3: // Left edge
                x = 0
                y = Math.random() * height
                break
        }

        // Apply offset to create slight distance between Pepes
        pepePosRef.current = { x: x + offsetX, y: y + offsetY }
        setPepePos({ x: x + offsetX, y: y + offsetY })
        initializedRef.current = true
    }, [offsetX, offsetY])

    // Animate Pepe following mouse with inertia
    useEffect(() => {
        if (!initializedRef.current) return

        const animate = () => {
            // Smaller Pepes move slower (heavier feeling)
            // Base easing for largest size, scaled down proportionally based on Fibonacci ratio
            const baseEasing = 0.015
            const largestSize = Math.round(233 * (30 / 21) * 0.8) // Largest Pepe size (reduced by 20%)
            const easing = baseEasing * (size / largestSize)

            // Calculate distance to mouse (with offset applied)
            const targetX = mousePos.x + offsetX
            const targetY = mousePos.y + offsetY
            const dx = targetX - pepePosRef.current.x
            const dy = targetY - pepePosRef.current.y

            // Move towards mouse with easing (creates inertia effect)
            pepePosRef.current.x += dx * easing
            pepePosRef.current.y += dy * easing

            setPepePos({
                x: pepePosRef.current.x,
                y: pepePosRef.current.y,
            })

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        // Start animation loop
        animationFrameRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [mousePos, offsetX, offsetY, size])

    return (
        <div
            className="absolute transition-none"
            style={{
                left: `${pepePos.x}px`,
                top: `${pepePos.y}px`,
                transform: 'translate(-50%, -50%)',
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <Image
                src="/pepe-the-frog-torch.gif"
                alt="Pepe following mouse"
                width={size}
                height={size}
                className="w-full h-full object-contain"
                unoptimized
            />
        </div>
    )
}

/**
 * Component that renders multiple Pepe followers with varying sizes.
 * Starts at random edges of the screen and gradually moves closer to the cursor.
 */
export default function PepeFollower() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Create 6 Pepes with Fibonacci sequence sizes: 21, 34, 55, 89, 144, 233
    // Scaled so smallest is visible while maintaining Fibonacci proportions
    // Max size reduced by ~20% from original
    const fibonacciSequence = [21, 34, 55, 89, 144, 233]
    const minVisibleSize = 30
    const scaleFactor = (minVisibleSize / 21) * 0.8 // Scale reduced by 20%

    const pepes = fibonacciSequence.map((fib, index) => ({
        size: Math.round(fib * scaleFactor),
        offsetX: index % 2 === 0 ? 30 : -30,
        offsetY: index < 3 ? 30 : -30,
    }))

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {pepes.map((pepe, index) => (
                <SinglePepe
                    key={index}
                    size={pepe.size}
                    offsetX={pepe.offsetX}
                    offsetY={pepe.offsetY}
                    mousePos={mousePos}
                />
            ))}
        </div>
    )
}

