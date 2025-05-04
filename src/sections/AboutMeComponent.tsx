import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

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

            animate('.about-divider', {
                width: [0, 80],
                opacity: [0, 1],
                duration: 800,
                delay: 300,
                easing: 'easeInOutQuad'
            });
        }

        if (contentRef.current) {
            // Animate content sections
            animate('.about-section', {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (_: unknown, i: number) => 400 + (i * 150),
                duration: 700,
                easing: 'easeOutQuad'
            });

            // Animate paragraphs
            animate('.about-paragraph', {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (_: unknown, i: number) => 500 + (i * 100),
                duration: 700,
                easing: 'easeOutQuad'
            });

            // Animate skills
            animate('.skill-tag', {
                opacity: [0, 1],
                scale: [0.8, 1],
                delay: (_: unknown, i: number) => 800 + (i * 30),
                duration: 500,
                easing: 'easeOutElastic(1, .5)'
            });

            // Animate buttons
            animate('.about-btn', {
                opacity: [0, 1],
                translateY: [10, 0],
                delay: (_: unknown, i: number) => 1200 + (i * 75),
                duration: 500,
                easing: 'easeOutQuad'
            });

            // Animate floating elements
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((el, i) => {
                animate(el, {
                    translateY: [0, -15, 0],
                    translateX: i % 2 === 0 ? [0, 8, 0] : [0, -8, 0],
                    duration: 6000 + (i * 1000),
                    easing: 'easeInOutSine',
                    loop: true
                });
            });
        }
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen opacity-0 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="floating-element absolute top-[10%] left-[5%] w-32 h-32 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-xl"></div>
                <div className="floating-element absolute top-[40%] right-[8%] w-40 h-40 bg-blue-600/10 dark:bg-blue-500/15 rounded-full blur-xl"></div>
                <div className="floating-element absolute bottom-[15%] left-[15%] w-24 h-24 bg-purple-600/10 dark:bg-purple-500/15 rounded-full blur-xl"></div>
                <div className="floating-element absolute top-[60%] right-[20%] w-28 h-28 bg-emerald-600/10 dark:bg-emerald-500/15 rounded-full blur-xl"></div>
            </div>

            <div className="mx-auto py-12 px-4 relative z-10">
                <div className="mb-8 text-left">
                    <h2 ref={titleRef} className="text-3xl font-bold text-gray-100 opacity-0">About Me</h2>
                    <div className="about-divider h-1 w-0 bg-indigo-600 mt-3 opacity-0"></div>
                    <p className="mt-4 text-gray-300 max-w-3xl">
                        My journey as a software engineer, from freelance work to corporate roles, and my passion for building innovative applications.
                    </p>
                </div>

                <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column - Main bio content */}
                    <div className="lg:col-span-2 about-section opacity-0">
                        <div className="relative bg-gray-800/70 backdrop-blur-sm border border-gray-700/70 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl -ml-20 -mb-20"></div>

                            <h3 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center">
                                <span className="inline-block mr-3 p-2 rounded-lg bg-indigo-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                My Journey
                            </h3>

                            <div className="relative">
                                <div className="absolute w-0.5 h-full bg-gradient-to-b from-indigo-500 to-transparent left-2 top-1"></div>

                                <div className="about-paragraph opacity-0 text-gray-300 mb-6 leading-relaxed pl-8 relative">
                                    <div className="absolute w-4 h-4 rounded-full bg-indigo-500 left-0 top-1.5 shadow-lg shadow-indigo-500/30"></div>
                                    I'm a passionate <span className="text-indigo-400 font-medium">software engineer</span> with over 3 years of experience in building web and mobile applications. My journey in tech has taken me from freelance work to corporate roles, each adding to my technical expertise and problem-solving capabilities.
                                </div>

                                <div className="about-paragraph opacity-0 text-gray-300 mb-6 leading-relaxed pl-8 relative">
                                    <div className="absolute w-4 h-4 rounded-full bg-blue-500 left-0 top-1.5 shadow-lg shadow-blue-500/30"></div>
                                    I specialize in full-stack development, creating seamless experiences from frontend to backend. My approach combines technical excellence with creative problem-solving to build applications that are not just functional but delightful to use.
                                </div>

                                <div className="about-paragraph opacity-0 text-gray-300 mb-8 leading-relaxed pl-8 relative">
                                    <div className="absolute w-4 h-4 rounded-full bg-purple-500 left-0 top-1.5 shadow-lg shadow-purple-500/30"></div>
                                    Beyond technical skills, I value continuous learning, collaborative teamwork, and adaptability. As my family's main provider, I've developed resilience and commitment that extends to my professional work, where I consistently deliver high-quality solutions on time.
                                </div>
                            </div>

                            <div className="about-paragraph opacity-0 relative bg-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-xl p-5 mt-10 mb-6">
                                <div className="absolute -top-5 left-5 inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-medium shadow-xl">
                                    Projects Highlight
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    I've worked on a diverse range of projects, from real-time matchmaking platforms to marketing applications with map integration and remote control apps. Each project has been an opportunity to solve unique challenges and create impactful solutions.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-8">
                                <a href="/experience" className="about-btn opacity-0 flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Experience
                                </a>

                                <a href="/projects" className="about-btn opacity-0 flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                    Projects
                                </a>

                                <a href="/skills" className="about-btn opacity-0 flex items-center gap-1.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    Skills
                                </a>

                                <a href="mailto:connect@igaurav.dev" className="about-btn opacity-0 flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Tech stack and stats */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="about-section opacity-0 bg-gray-800/70 backdrop-blur-sm border border-gray-700/70 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl -ml-20 -mt-20"></div>

                            <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
                                <span className="inline-block mr-2 p-1.5 rounded-lg bg-blue-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                </span>
                                Tech Stack
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                <span className="skill-tag opacity-0 px-3 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30 flex items-center">
                                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-1.5"></span>
                                    React.js
                                </span>
                                <span className="skill-tag opacity-0 px-3 py-1.5 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30 flex items-center">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
                                    Node.js
                                </span>
                                <span className="skill-tag opacity-0 px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></span>
                                    Flutter
                                </span>
                                <span className="skill-tag opacity-0 px-3 py-1.5 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30 flex items-center">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-1.5"></span>
                                    JavaScript
                                </span>
                                <span className="skill-tag opacity-0 px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></span>
                                    TypeScript
                                </span>
                                <span className="skill-tag opacity-0 px-3 py-1.5 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30 flex items-center">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
                                    MongoDB
                                </span>
                                <span className="skill-tag opacity-0 px-3 py-1.5 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30 flex items-center">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mr-1.5"></span>
                                    Swift
                                </span>
                                <span className="skill-tag opacity-0 px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-1.5"></span>
                                    Docker
                                </span>
                                <span className="skill-tag opacity-0 px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30 flex items-center">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-1.5"></span>
                                    AWS
                                </span>
                                <span className="skill-tag opacity-0 px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 flex items-center">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-1.5"></span>
                                    Tailwind CSS
                                </span>
                            </div>
                        </div>

                        <div className="about-section opacity-0 bg-gray-800/70 backdrop-blur-sm border border-gray-700/70 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl -mr-20 -mb-20"></div>

                            <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
                                <span className="inline-block mr-2 p-1.5 rounded-lg bg-purple-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </span>
                                Core Strengths
                            </h3>

                            <div className="space-y-3">
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm text-gray-300">Problem Solving</span>
                                        <span className="text-xs text-indigo-400">95%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm text-gray-300">Full-Stack Development</span>
                                        <span className="text-xs text-blue-400">90%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm text-gray-300">Mobile Development</span>
                                        <span className="text-xs text-green-400">85%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm text-gray-300">UI/UX Design</span>
                                        <span className="text-xs text-purple-400">80%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-section opacity-0 bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-gray-700/70 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="flex items-center justify-center">
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-blue-200">Open to Work</h4>
                                    <p className="text-sm text-gray-300">Available for new opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
