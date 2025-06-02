'use client'
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Script from 'next/script';

const Shift = () => {
    const dynamicLoad = async () => {


    }
    useEffect(() => {
        if (window) {
            dynamicLoad()
        }
    }, [])
    return (
        <main className="relative">
            {/* <Script
                src="../static/noise.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
            <Script
                src="../static/shift.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`shift`)
                }
            />
            {/* <div className="frame"> */}
            {/* <div className="frame__title-wrap">
                    <h1 className="frame__title">Ambient Canvas Backgrounds</h1>
                </div> */}
            {/* <a className="frame__github" href="https://github.com/codrops/AmbientCanvasBackgrounds/">GitHub</a>
                <div className="frame__links">
                    <a href="https://tympanus.net/Development/MotionTransitionEffect/">Previous Demo</a>
                    <a href="https://tympanus.net/codrops/?p=36743">Article</a>
                </div>
                <div className="frame__demos">
                    <a href="index.html" className="frame__demo">Aurora</a>
                    <a href="index2.html" className="frame__demo">Swirl</a>
                    <a href="index3.html" className="frame__demo frame__demo--current">Shift</a>
                    <a href="index4.html" className="frame__demo">Coalesce</a>
                    <a href="index5.html" className="frame__demo">Pipeline</a>
                </div> */}
            {/* </div> */}
            <div className="content--canvas">

            </div>

        </main>
    )
}
export default Shift
