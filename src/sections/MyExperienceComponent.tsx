import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
    skills: string[];
    color: string;
}

export default function MyExperienceComponent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const experiencesRef = useRef<HTMLDivElement>(null);

    const [activeExp, setActiveExp] = useState<number>(0);

    const experiences: Experience[] = [
        {
            id: 0,
            title: "Software Engineer",
            company: "VisionIAS",
            period: "April 2023 - Present",
            description: "At Vision IAS, I am actively contributing to product development using my Flutter expertise while enhancing my leadership and collaboration skills.",
            highlights: [
                "Optimized Flutter codebase for better performance and user experience",
                "Learned team management and improved communication skills",
                "Gained proficiency with Jira for better project management",
                "Collaborated with cross-functional teams on educational technology solutions"
            ],
            skills: ["Flutter", "Dart", "Jira", "Team Management", "Mobile Development"],
            color: "indigo"
        },
        {
            id: 1,
            title: "Full Stack Developer",
            company: "Magadh Digital Solutions",
            period: "August 2022 - March 2023",
            description: "Led mobile and web application development using Flutter, Node.js, and React.js, delivering innovative technological solutions.",
            highlights: [
                "Spearheaded Android app development using Flutter",
                "Managed efficient teams for both Flutter and Node.js projects",
                "Successfully tackled various tasks in React.js",
                "Implemented solutions with Socket.IO for real-time communication",
                "Integrated Google Maps API for location-based services"
            ],
            skills: ["Flutter", "Node.js", "React.js", "Socket.IO", "Team Leadership", "MongoDB"],
            color: "blue"
        },
        {
            id: 2,
            title: "Freelancer (FullStack)",
            company: "Freelancing",
            period: "Sept 2020 - Jan 2022",
            description: "Delivered diverse development projects including Flutter apps, educational platforms, e-commerce sites, and static websites.",
            highlights: [
                "Created personal Flutter apps hosted on Play Console using Lean App hosting",
                "Developed educational websites with Node.js and Bootstrap",
                "Built e-commerce platforms with secure payment integrations",
                "Designed and implemented static websites for various clients",
                "Managed end-to-end project lifecycles independently"
            ],
            skills: ["Flutter", "Node.js", "Express.js", "Bootstrap", "MongoDB", "Firebase"],
            color: "green"
        }
    ];

    useEffect(() => {
        if (containerRef.current) {
            animate(containerRef.current, {
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutQuad'
            });
        }

        if (titleRef.current) {
            animate(titleRef.current, {
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                delay: 200,
                easing: 'easeOutQuad'
            });

            animate('.exp-divider', {
                width: [0, 80],
                opacity: [0, 1],
                duration: 800,
                delay: 300,
                easing: 'easeInOutQuad'
            });
        }

        animateTimelineNav();
    }, []);

    useEffect(() => {
        animateActiveExp();
    }, [activeExp]);

    const animateTimelineNav = () => {
        animate('.timeline-nav-item', {
            opacity: [0, 1],
            translateY: [20, 0],
            delay: (_: unknown, i: number) => 400 + (i * 100),
            duration: 600,
            easing: 'easeOutQuad'
        });
    };

    const animateActiveExp = () => {
        animate('.exp-details', {
            opacity: [0, 1],
            translateX: [40, 0],
            duration: 600,
            easing: 'easeOutQuad'
        });

        animate('.exp-highlight', {
            opacity: [0, 1],
            translateX: [20, 0],
            delay: (_: unknown, i: number) => 200 + (i * 80),
            duration: 600,
            easing: 'easeOutQuad'
        });

        animate('.exp-skill', {
            opacity: [0, 1],
            scale: [0.8, 1],
            delay: (_: unknown, i: number) => 400 + (i * 50),
            duration: 500,
            easing: 'easeOutQuad'
        });
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-transparent opacity-0">
            <div className="mx-auto px-4 py-6">
                <div className="mb-8">
                    <h2 ref={titleRef} className="text-3xl font-bold text-gray-100 opacity-0">Experience</h2>
                    <div className="exp-divider h-1 w-0 bg-indigo-600 mt-3 opacity-0"></div>
                    <p className="mt-4 text-gray-300 max-w-3xl">
                        My professional journey across different organizations and roles, showcasing my growth as a developer.
                    </p>
                </div>

                <div className="mb-8 overflow-x-auto">
                    <div className="timeline-nav flex space-x-4 pb-4 border-b border-gray-700 min-w-max">
                        {experiences.map((exp) => (
                            <button
                                key={exp.id}
                                onClick={() => setActiveExp(exp.id)}
                                className={`timeline-nav-item opacity-0 relative px-6 py-3 rounded-lg focus:outline-none transition-all duration-300 ${activeExp === exp.id
                                    ? `bg-${exp.color}-600/20 text-${exp.color}-400 font-medium`
                                    : 'text-gray-400 hover:text-gray-200'
                                    }`}
                            >
                                <span className="flex items-center gap-2">
                                    <span className={`h-2 w-2 rounded-full ${activeExp === exp.id ? `bg-${exp.color}-500` : 'bg-gray-600'}`}></span>
                                    {exp.period}
                                </span>
                                {activeExp === exp.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div ref={experiencesRef} className="exp-details opacity-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-4">
                            <div className={`p-6 rounded-lg bg-gray-800 border-l-4 border-${experiences[activeExp].color}-500 shadow-lg`}>
                                <h3 className="text-2xl font-bold text-white mb-1">{experiences[activeExp].title}</h3>
                                <h4 className={`text-${experiences[activeExp].color}-400 text-lg font-medium mb-4`}>
                                    {experiences[activeExp].company}
                                </h4>
                                <p className="text-gray-300 mb-4">
                                    {experiences[activeExp].description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {experiences[activeExp].skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className={`exp-skill opacity-0 text-xs px-2.5 py-1 rounded-full bg-${experiences[activeExp].color}-900/30 text-${experiences[activeExp].color}-400 border border-${experiences[activeExp].color}-800/50`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                                <h4 className="text-lg font-medium text-white mb-4">Key Achievements & Responsibilities</h4>
                                <ul className="space-y-3">
                                    {experiences[activeExp].highlights.map((highlight, index) => (
                                        <li key={index} className="exp-highlight opacity-0 flex items-start">
                                            <span className={`mr-3 mt-1 text-${experiences[activeExp].color}-500`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                            <span className="text-gray-300">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 pt-6 border-t border-gray-700">
                                    <div className="flex justify-between items-center">
                                        <button
                                            onClick={() => setActiveExp(Math.max(0, activeExp - 1))}
                                            disabled={activeExp === 0}
                                            className={`px-3 py-1.5 rounded ${activeExp === 0
                                                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                                : 'bg-gray-700 text-white hover:bg-gray-600'
                                                } transition-colors`}
                                        >
                                            <span className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                                Previous
                                            </span>
                                        </button>
                                        <span className="text-gray-400 text-sm">
                                            {activeExp + 1} of {experiences.length}
                                        </span>
                                        <button
                                            onClick={() => setActiveExp(Math.min(experiences.length - 1, activeExp + 1))}
                                            disabled={activeExp === experiences.length - 1}
                                            className={`px-3 py-1.5 rounded ${activeExp === experiences.length - 1
                                                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                                : 'bg-gray-700 text-white hover:bg-gray-600'
                                                } transition-colors`}
                                        >
                                            <span className="flex items-center">
                                                Next
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
