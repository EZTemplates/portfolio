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

    const getSkillColor = (level: number) => {
        if (level >= 90) return 'bg-gradient-to-br from-green-400 to-green-600'; // Expert
        if (level >= 80) return 'bg-gradient-to-br from-blue-400 to-blue-600'; // Advanced
        if (level >= 70) return 'bg-gradient-to-br from-indigo-400 to-indigo-600'; // Proficient
        if (level >= 60) return 'bg-gradient-to-br from-yellow-400 to-yellow-600'; // Intermediate
        return 'bg-gradient-to-br from-red-400 to-red-600'; // Beginner
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

                <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                    <div>
                        <h3 className="text-xl font-semibold text-gray-100 mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-3 justify-center mb-6">
                            <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 border border-white/20"></span>
                                <span className="text-xs text-gray-200">Expert</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border border-white/20"></span>
                                <span className="text-xs text-gray-200">Advanced</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border border-white/20"></span>
                                <span className="text-xs text-gray-200">Proficient</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border border-white/20"></span>
                                <span className="text-xs text-gray-200">Intermediate</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-red-600 border border-white/20"></span>
                                <span className="text-xs text-gray-200">Beginner</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {skills.map((skill, i) => (
                                <div
                                    key={skill.name}
                                    className={`
                                        skill-chip
                                        flex items-center px-5 py-2 rounded-full shadow-md
                                        ${getSkillColor(skill.level)}
                                        text-white font-semibold text-sm
                                        transition-transform duration-300
                                        hover:scale-110 hover:shadow-xl
                                        animate-fade-in-up
                                    `}
                                    style={{
                                        animationDelay: `${i * 60}ms`,
                                        minWidth: 0,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <span className="truncate">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
