'use client'
import { SplitText, } from '@cyriacbr/react-split-text'
import type { LineWrapperProp } from '@cyriacbr/react-split-text'
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";

{/*  @ts-ignore */ }

const LineWrapper: React.FC<LineWrapperProp> = ({ lineIndex, children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,

        offset: ["100% center", "0% center"]
    });
    return (
        <div className="relative" ref={ref}>

            <motion.span className='block  text--cool ' style={{
                backgroundPositionX: useTransform(scrollYProgress, (value) => `${value * 100}%`)

            }} data-index={lineIndex}>{children}</motion.span>
        </div>
    );
};
// const MemoizedLineWrapper = React.memo(LineWrapper);

export default function About() {


    return (
        <div className="py-16 lg:py-24" >
            <div className="text-2xl lg:text-4xl xl:text-5xl max-w-3xl xl:max-w-5xl mx-auto text-center font-light  ">

                {/*  @ts-ignore */}
                <SplitText

                    LineWrapper={LineWrapper}>
                    Hi, I&apos;m Mirul. Since 2016, I’ve partnered with enterprises to deliver scalable digital solutions — driving technical innovation, building robust platforms, and elevating user and developer experiences.
                </SplitText>
            </div>
        </div>

    )
}