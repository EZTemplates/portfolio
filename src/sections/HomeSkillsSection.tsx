import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface Skill {
    name: string;
    level: number;
    category: string;
    color: string;
}

export default function HomeSkillsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    const skills: Skill[] = [
        // Frontend
        { name: 'React.js', level: 90, category: 'Frontend', color: 'blue' },
        { name: 'JavaScript', level: 95, category: 'Frontend', color: 'yellow' },
        { name: 'TypeScript', level: 85, category: 'Frontend', color: 'blue' },
        { name: 'HTML/CSS', level: 90, category: 'Frontend', color: 'orange' },
        { name: 'Tailwind CSS', level: 92, category: 'Frontend', color: 'teal' },
        { name: 'Next.js', level: 80, category: 'Frontend', color: 'gray' },

        // Mobile
        { name: 'Flutter', level: 95, category: 'Mobile', color: 'blue' },
        { name: 'Dart', level: 90, category: 'Mobile', color: 'blue' },
        { name: 'React Native', level: 75, category: 'Mobile', color: 'blue' },

        // Backend
        { name: 'Node.js', level: 85, category: 'Backend', color: 'green' },
        { name: 'Express.js', level: 88, category: 'Backend', color: 'gray' },
        { name: 'MongoDB', level: 80, category: 'Backend', color: 'green' },
        { name: 'Firebase', level: 85, category: 'Backend', color: 'yellow' },

        // Tools & Others
        { name: 'Git', level: 92, category: 'Tools', color: 'red' },
        { name: 'Docker', level: 70, category: 'Tools', color: 'blue' },
        { name: 'AWS', level: 65, category: 'Tools', color: 'yellow' },
        { name: 'Figma', level: 75, category: 'Tools', color: 'purple' }
    ];

    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

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

            animate('.skills-divider', {
                width: [0, 80],
                opacity: [0, 1],
                duration: 800,
                delay: 300,
                easing: 'easeInOutQuad'
            });
        }

        if (skillsRef.current) {
            // Animate category headers
            animate('.skill-category', {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (_: unknown, i: number) => 400 + (i * 150),
                duration: 800,
                easing: 'easeOutQuad'
            });

            // Animate skill cards
            animate('.skill-card', {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (_: unknown, i: number) => 500 + (i * 50),
                duration: 600,
                easing: 'easeOutQuad'
            });

            // Animate progress bars
            animate('.skill-progress-bar', {
                width: {
                    from: 0,
                    to: (el) => el.getAttribute('data-width') || '0%'
                },
                delay: (_: unknown, i: number) => 800 + (i * 30),
                duration: 1000,
                easing: 'easeInOutQuad'
            });
        }
    }, []);

    const getSkillLevelLabel = (level: number) => {
        if (level >= 90) return 'Expert';
        if (level >= 80) return 'Advanced';
        if (level >= 70) return 'Proficient';
        if (level >= 60) return 'Intermediate';
        return 'Beginner';
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Frontend':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                );
            case 'Mobile':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                );
            case 'Backend':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                );
            case 'Tools':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707.707-.707A1 1 0 0115 2h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-.707-.293L14 5.414l-.707.707A1 1 0 0112 7h-2a1 1 0 01-1-1V4a1 1 0 011-1h2zm2 10a1 1 0 01.707.293l.707.707.707-.707A1 1 0 0117 12h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-.707-.293L16 15.414l-.707.707A1 1 0 0114 17h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2z" clipRule="evenodd" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen p-6 opacity-0">
            <div className="mx-auto">
                <div className="mb-8">
                    <h2 ref={titleRef} className="text-3xl font-bold text-gray-100 opacity-0">Technical Skills</h2>
                    <div className="skills-divider h-1 w-0 bg-indigo-600 mt-3 opacity-0"></div>
                    <p className="mt-4 text-gray-300 max-w-3xl">
                        My technical expertise spans across various domains of software development, from frontend and backend to mobile and DevOps.
                    </p>
                </div>

                <div ref={skillsRef} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 mr-4 bg-indigo-600/20 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Profile Overview</h3>
                                    <p className="text-gray-400">Full Stack & Mobile Developer</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-medium text-gray-200 mb-2">About Me</h4>
                                    <p className="text-gray-300">
                                        Passionate developer with expertise in Full Stack and Mobile development.
                                        Committed to creating efficient, scalable, and user-friendly applications
                                        that solve real-world problems.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-medium text-gray-200 mb-2">Current Focus</h4>
                                    <p className="text-gray-300">
                                        Currently focused on mastering advanced React patterns, exploring serverless architectures,
                                        and diving deeper into mobile app performance optimization.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-900/30 text-blue-400 border border-blue-800/50">
                                        Problem Solver
                                    </span>
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-400 border border-purple-800/50">
                                        Fast Learner
                                    </span>
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-green-900/30 text-green-400 border border-green-800/50">
                                        Team Player
                                    </span>
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-yellow-900/30 text-yellow-400 border border-yellow-800/50">
                                        Detail-Oriented
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gray-800 rounded-lg p-5 shadow-lg border border-gray-700">
                                <div className="flex items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <h3 className="text-lg font-semibold text-white">Experience</h3>
                                </div>
                                <p className="text-gray-300 text-sm">3+ years of professional experience in software development across multiple domains.</p>
                                <div className="mt-3">
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-5 shadow-lg border border-gray-700">
                                <div className="flex items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    <h3 className="text-lg font-semibold text-white">Learning</h3>
                                </div>
                                <p className="text-gray-300 text-sm">Continuously expanding knowledge and staying updated with latest technologies.</p>
                                <div className="mt-3">
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-5 shadow-lg border border-gray-700">
                                <div className="flex items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                    <h3 className="text-lg font-semibold text-white">Communication</h3>
                                </div>
                                <p className="text-gray-300 text-sm">Effective communication skills for collaboration with teams and clients.</p>
                                <div className="mt-3">
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-5 shadow-lg border border-gray-700">
                                <div className="flex items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <h3 className="text-lg font-semibold text-white">Efficiency</h3>
                                </div>
                                <p className="text-gray-300 text-sm">Creating optimized solutions with clean, maintainable code.</p>
                                <div className="mt-3">
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                        <div key={category} className="skill-category opacity-0">
                            <div className="flex items-center mb-4">
                                <span className="text-gray-200">
                                    {getCategoryIcon(category)}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-100">{category} Skills</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {categorySkills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="skill-card opacity-0 bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 hover:border-indigo-500 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className={`font-medium text-${skill.color}-400`}>{skill.name}</h4>
                                            <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${skill.color}-900/30 text-${skill.color}-400`}>
                                                {getSkillLevelLabel(skill.level)}
                                            </span>
                                        </div>

                                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                                            <div
                                                className={`skill-progress-bar bg-${skill.color}-500 h-2.5 rounded-full`}
                                                data-width={`${skill.level}%`}
                                                style={{ width: '0%' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
