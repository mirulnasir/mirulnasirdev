'use client'
import * as React from 'react'
import { LenisRef, ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
type Props = {
    children: React.ReactNode
}

const LenisWrapper = ({ children }: Props) => {
    const lenisRef = React.useRef<LenisRef>(null)

    React.useEffect(() => {
        function update(time: any) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0);
        return () => {
            gsap.ticker.remove(update)
        }
    })

    return (
        <>
            <ReactLenis options={{
                lerp: 0.08,
                duration: 2,
            }} ref={lenisRef} autoRaf={false} root>
                {children}
            </ReactLenis>
        </>
    )
}

export default LenisWrapper