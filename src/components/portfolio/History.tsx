import * as React from 'react'
type WorkHistory = {
    company: string;
    location: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string[] | string;
    technologies: string[];
};
const history: WorkHistory[] = [
    {
        company: 'Etiqa Insurance and Takaful',
        location: 'Malaysia',
        title: "Frontend Enginnering Lead",
        startDate: "January 2024",
        endDate: "Present",
        description: [
            "Driving adoption of a Micro Frontend architecture, enabling modular, scalable development and faster product delivery (25% shorter development time as opposed to big monolithic frontend).",
            "Partnered closely with the design team to develop a unified Design System, aligning on standards to deliver world class user experience across platforms.",
            "Led development of a JSON-to-Form engine for dynamic multi-step workflows with validation, plugin architecture, and payment integration—shipped 9 complex form modules in 2 months with a 4-person team.",
            "Led integration of a React-based purchase module into ABA Bank's Vue mobile app, working with external stakeholders to ensure secure, seamless transactions and smooth cross-framework communication via Vite bundling."
        ],
        technologies: [
            "React",
            "Typescript",
            "NextJs",
            "Tailwind",
            "Vite",
        ],
    },
    {
        company: "White Rabbit",
        location: "Australia",
        title: "Front End Developer",
        startDate: "March 2020",
        endDate: "Present",
        description:
            "Led the MVP creation for a transformative road safety system using Next.js and TypeScript, securing a major client. Routinely developed accessible, UX-focused web applications with React, integrating seamlessly with CMS platforms like Contentful,and WordPress.",
        technologies: [
            "React",
            "Typescript",
            "Web Component",
            "NextJs",
            "Tailwind",
            "AWS",
        ],
    },
    {
        company: "Bestari",
        location: "Malaysia (remote)",
        title: "Co-Founder, Front End Developer",
        startDate: "June 2018",
        endDate: "February 2021",
        description:
            "Analitically revitalised a WooCommerce site, improving UX, SEO, and reducing load times, boosting conversions by 2%. Led collaborative teams to deliver diverse digital products, while guiding clients through their digital transformation, enhancing organic sales and customer value.",
        technologies: [
            "GatsbyJs",
            "Typescript",
            "NextJs",
            "React",
            "Shopify",
            "Wordpress",
        ],
    },
    {
        company: "Freelance",
        location: "Australia",
        title: "Front End Developer",
        startDate: "December 2016",
        endDate: "October 2019",
        description:
            "Revamped Decathlon Australia's Freshdesk support website, cutting support tickets by 40% and halving response times; crafted Salesforce-based EDMs enhancing marketing reach. Achieved 4.9-star rating across 139 tasks on Airtasker. Partnered with agencies for high-fidelity web and e-commerce projects on WordPress, Shopify, Magento.",
        technologies: [
            "Html",
            "Css3",
            "Js",
            "Shopify",
            "Wordpress",
            "Salesforce",
            "Figma",
        ],
    },
];
type Props = {

}

const HistorySection = ({ }: Props) => {
    return (


        <div className="divide-y max-w-5xl mx-auto">
            {
                history.map((job, index) => {
                    const {
                        company,
                        location,
                        title,
                        startDate,
                        endDate,
                        description,
                        technologies,
                    } = job;
                    return (
                        <div key={index} className="flex flex-col md:flex-row md:justify-between  gap-x-6 gap-y-3 py-5 md:py-5 lg:py-6">
                            <div className="flex flex-col space-y-2 w-full md:w-4/12 shrink-0">
                                <div className="text-xl font-medium !leading-none ">
                                    {company}, {location}
                                </div>
                                <div className="text-lg !leading-none">{title}</div>
                                <div className="text-sm text-background/80">
                                    {startDate} - {endDate}
                                </div>
                            </div>
                            <div className="flex flex-col w-full md:w-8/12">
                                <div className="font-light mb-2 text-justify text-background/80">
                                    {Array.isArray(description) ? (
                                        <ul className="list-disc pl-4 space-y-1">
                                            {description.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        description
                                    )}
                                </div>
                                <div className="">
                                    {technologies.map((tech, index) => {
                                        return (
                                            <span key={index} className="inline-block bg-background/10 text-background/70 font-normal text-xs  px-2 py-1 mr-2 mb-2 rounded-sm">
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>

    )
}

export default HistorySection