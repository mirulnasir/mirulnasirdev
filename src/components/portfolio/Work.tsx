'use client'
import { cn } from "@/lib/utils";
import type Lenis from "lenis";
import { useLenis } from "lenis/react";
import Image from "next/image";
import parallax from 'parallax-js';
import React, { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/Dialog";
import { ScrollArea } from "./ui/ScrollArea";
type Project = {
    name: string;
    imageUrl: string;
    size: "wide" | "tall" | "square" | "small";
    content: ProjectContent
    css: string;
    link?: string;
    stacks?: string[];
};
type ProjectContent = {
    challenges: string[];
    role: string;
    contributions: string[];
    images?: string[];
}


const projects: Project[] = [

    {
        name: "Sitepilot",
        imageUrl: "/sitepilot-featured-alt.png",
        // image: bestariImageUrl,

        content: {
            challenges: [
                'To streamline communication for project managers and project vendors',
                'To have a single source of truth for project plans',
                'To speed up project plan iteration and approval process',
            ],
            role: 'Full Stack Development & Design',
            contributions: [
                'Design and developed a centralised communication platform for project managers and project vendors in civil engineering industry',
                'Implemented version control and approval control for project plans',
                'Implemented project plan sharing via public Url, QR code and email',
                'Implemented simple slide show maker',
                'Custom features include RBAC, team invite, and Google Drive like file manager',
            ],
            images: ['/sitepilot-plan.png', '/sitepilot-export.png', '/sitepilot-slide.png', '/sitepilot-settings.png']
        },
        size: "wide",
        css: "project-1",
        link: "bestari",
        stacks: ["React", "Next.js", "Supabase", "Typescript", "TailwindCSS"],
    },
    {
        name: "Bestari ",
        imageUrl: "/bestari-featured-alt.png",
        // image: bestariImageUrl,
        content: {
            challenges: [
                'To design and develop website that showcases human centric design and technology',
            ],
            role: 'Design & Development',
            contributions: [
                'Design and develop website using React, Next.js and TailwindCSS',
                'Implemented seamless page transition',
                'Implemented UI hotspot tracking for user behaviour analysis',

            ]
        },
        size: "wide",
        css: "project-3",
        link: "bestari",
        stacks: ["React", "Next.js", "TailwindCSS"],
    },

    {
        name: "Decathlon Australia",
        imageUrl: "/project-decathlon.png",
        size: "small",
        content: {
            challenges: [
                'To reduce customer effort in finding support articles',
                'To resolve customer issues faster',
            ],
            role: 'UX & Development',
            contributions: [
                'Collaborated & consulted Decathlon design team on how to shorten customer journey based on case studies and up to date best practices',
                'Consulted Decathlon on Freshdesk platform capabilities & limitations',
                'Developed pixel perfect template on Freshdesk platform',
                'Implemented high accessibility user interface'
            ]
        },
        // image: decathlonImageUrl,
        css: "project-4",
        stacks: ["Freshdesk", "Css3"],
    },
    {
        name: "Remove My Default",
        imageUrl: "/project-removemydefault.png",
        content: {
            challenges: [
                'To design and develop marketing website that creates trust and credibility',
            ],
            role: 'Design & Development',
            contributions: [
                'Advised busines owner on the fastest way to penetrate competitive broker market',
                'Identified and developed key features that will help business owner to stand out from the competition',
                'Designed and developed high performance website with SEO and Google AdRank in mind',
            ]
        },
        size: "small",
        css: "project-5",
        stacks: ["React", "Next.js", "TailwindCSS"],
    },

    // {
    //     name: "npiqtest",
    //     imageUrl: "/project-npiqtest.png",
    //     content: {
    //         challenges: [''],
    //         role: 'Design & Development',
    //         contributions: [
    //             'Advised busines owner on the fastest way to penetrate competitive broker market',
    //             'Identified and developed key features that will help business owner to stand out from the competition',
    //             'Designed and developed high performance website with SEO and Google AdRank in mind',
    //         ]
    //     },
    //     size: "small",
    //     css: "project-6",
    //     stacks: ["React", "Next.js", "TailwindCSS"],
    // },
];
const ProjectCard = ({ project }: { project: Project }) => {
    const [open, setOpen] = React.useState(false)
    const { name, imageUrl, size, css, link, stacks, content } = project;
    const { challenges, role, contributions, images: contentImages } = content
    const lenis = useLenis()

    const handleOpen = (open: boolean) => {
        // if (open) {
        //     lenis.destroy()

        // } else {
        //     lenis.init()

        // }

        setOpen(open)
    }
    return (
        <div
            className={cn(
                " relative group  w-full h-full object-fill flex justify-center items-center overflow-hidden pointer-events-auto cursor-pointer",

                css
            )}

        >
            <Dialog open={open} onOpenChange={handleOpen} >
                <DialogTrigger asChild><div
                    className={cn("relative rounded-xl overflow-hidden w-full h-full")}
                >
                    <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-125  transition-all duration-1000 ">
                        <Image width="1000" height="500" alt="name" src={imageUrl} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-2 md:p-6 md:py-4 bg-gradient-to-t h-1/2 flex flex-col justify-end w-full from-black/50 via-transparent  to-transparent">
                        <div className="space-y-2">
                            <h4 className="text-lg md:text-xl  text-white font-light">
                                {name}
                            </h4>
                            {stacks ? (
                                <div className="flex flex-wrap">
                                    {stacks?.map((stack, index) => (
                                        <div key={index} className="text-xs  text-white border font-light border-gray-100 px-2 py-1 rounded-full mr-2 mb-2 md:mb-0">
                                            {stack}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div></DialogTrigger>
                <DialogContent>

                    <ScrollArea >
                        <div className="flex flex-wrap -mx-5">
                            <div className="w-full lg:w-7/12 px-5">

                                <div className="grid  gap-2">
                                    <Image width="1000" height="500" alt="name" src={imageUrl} className="w-full h-full object-contain" />
                                    {contentImages?.map((contentImageUrl, index) => {
                                        return <div className="relative aspect-video overflow-hidden bg-slate-200 p-4" key={index}>
                                            <Image width="1000" height="500" alt="name" src={contentImageUrl} className="w-full h-full object-contain" />
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 px-5">
                                <div className="sticky top-0">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl lg:text-5xl font-thin mt-2 lg:mt-3 mb-1 lg:mb-1">{name}</DialogTitle>
                                        {stacks ? (
                                            <div className="flex flex-wrap">
                                                {stacks?.map((stack, index) => (
                                                    <div key={index} className="text-xs  text-foreground/90 bg-foreground/5 border font-light border-gray-100 px-2 py-1 rounded-full mr-2 mb-2 md:mb-0">
                                                        {stack}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : null}
                                    </DialogHeader>
                                    <div className="mt-5 space-y-3">
                                        <div className="">
                                            <h3 className="underline mb-0.5">
                                                Role
                                            </h3>
                                            <p className="text-foreground/70">{role}</p>
                                        </div>
                                        <div className="">
                                            <h3 className="underline mb-0.5">
                                                Challenges
                                            </h3>
                                            <ul className="text-foreground/80 space-y-0.5 list-disc list-inside">{challenges.map(
                                                (c, i) => (
                                                    <li key={i} className="leading-tight ">{c}</li>)
                                            )}</ul>
                                        </div>

                                        <div className="">
                                            <h3 className="underline mb-0.5">
                                                Contributions
                                            </h3>
                                            <ul className="text-foreground/80 space-y-0.5 list-disc list-inside">{contributions.map(
                                                (c, i) => (
                                                    <li key={i} className="leading-tight">{c}</li>)
                                            )}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>


        </div>
    )
}
type Props = {
    lenis: Lenis
}
export default function PastWork() {
    const ref = React.useRef(null)
    const parallaxRef = useRef<parallax | null>(null)

    useEffect(() => {
        // console.log("INIT", ref)
        if (ref.current) {
            console.log("INIT")
            // parallaxRef.current = new parallax(ref.current, {
            //     relativeInput: true,
            //     pointerEvents: true,

            //     limitX: 30,
            //     limitY: 30,
            //     scalarX: 10,
            //     scalarY: 10,
            //     frictionX: 0.2,
            //     frictionY: 0.2,
            // })
        }
    }, [ref])

    return (

        <div className="relative parallax-project" ref={ref}>
            <div data-depth="0.3" className="!relative">
                <div className="project-grid">
                    <div data-depth="0.0" className="project-0 flex items-end">
                        <div className="text-xl lg:text-2xl max-w-[200px] !leading-none">
                            100+ clients, here are some:
                        </div>
                    </div>
                    {
                        projects.map((project, index) => {
                            const { size, css, name, imageUrl, stacks, content } = project;
                            return (
                                <ProjectCard project={project} key={index} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}