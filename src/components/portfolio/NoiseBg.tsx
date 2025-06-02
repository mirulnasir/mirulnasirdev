'use client'
import * as React from 'react'

type Props = {}

const NoiseBg = ({ }: Props) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null)
    const noiseDataRef = React.useRef<ImageData[]>([])
    const frameRef = React.useRef(0)
    const loopTimeoutRef = React.useRef<number | null>(null)
    const resizeThrottleRef = React.useRef<number | null>(null)

    const createNoise = () => {
        if (!ctxRef.current || !canvasRef.current) return

        const idata = ctxRef.current.createImageData(
            canvasRef.current.width,
            canvasRef.current.height
        )
        const buffer32 = new Uint32Array(idata.data.buffer)
        const len = buffer32.length

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.2) {
                buffer32[i] = 0xff000000
            }
        }

        noiseDataRef.current.push(idata)
    }

    const paintNoise = () => {
        if (!ctxRef.current || !noiseDataRef.current.length) return

        if (frameRef.current === 9) {
            frameRef.current = 0
        } else {
            frameRef.current++
        }

        ctxRef.current.putImageData(noiseDataRef.current[frameRef.current], 0, 0)
    }

    const loop = () => {
        paintNoise()

        loopTimeoutRef.current = window.setTimeout(() => {
            window.requestAnimationFrame(loop)
        }, (1000 / 25))
    }

    const setup = () => {
        if (!canvasRef.current) return

        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight

        for (let i = 0; i < 10; i++) {
            createNoise()
        }

        loop()
    }

    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottleRef.current ?? 0)

            resizeThrottleRef.current = window.setTimeout(() => {
                window.clearTimeout(loopTimeoutRef.current ?? 0)
                setup()
            }, 200)
        }, false)
    }

    React.useEffect(() => {
        if (!canvasRef.current) return

        ctxRef.current = canvasRef.current.getContext('2d')
        setup()
        reset()

        return () => {
            window.clearTimeout(loopTimeoutRef.current ?? 0)
            window.clearTimeout(resizeThrottleRef.current ?? 0)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className='absolute top-0 left-0 w-full h-full pointer-events-none opacity-50'
        />
    )
}

export default NoiseBg