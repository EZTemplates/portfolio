import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { useFetchSkills } from '../core/hooks/useFetchSkills';
import { useFetchSkillOverview } from '../core/hooks/useFetchSkillOverview';
import HomeSkillsShimmer from '../components/shimmers/HomeSkillsShimmer';
import { Helmet } from 'react-helmet-async';
import { useProfileStore } from '../core/store/useProfileStore';

const tagColors = [
    { bg: 'bg-blue-900/30', text: 'text-blue-400', border: 'border-blue-800/50' },
    { bg: 'bg-purple-900/30', text: 'text-purple-400', border: 'border-purple-800/50' },
    { bg: 'bg-green-900/30', text: 'text-green-400', border: 'border-green-800/50' },
    { bg: 'bg-pink-900/30', text: 'text-pink-400', border: 'border-pink-800/50' },
    { bg: 'bg-indigo-900/30', text: 'text-indigo-400', border: 'border-indigo-800/50' },
    { bg: 'bg-cyan-900/30', text: 'text-cyan-400', border: 'border-cyan-800/50' },
];

export default function HomeSkillsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const { profile } = useProfileStore()

    const { data: skills } = useFetchSkills();
    const { isLoading, data: overview } = useFetchSkillOverview();

    const runAnimations = () => {
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
            animate('.skill-category', {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (_: unknown, i: number) => 400 + (i * 150),
                duration: 800,
                easing: 'easeOutQuad'
            });

            animate('.skill-card', {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (_: unknown, i: number) => 500 + (i * 50),
                duration: 600,
                easing: 'easeOutQuad'
            });
        }
    };

    useEffect(() => {
        if (!isLoading) {
            runAnimations();
        }
    }, [isLoading]);

    if (isLoading) {
        return <HomeSkillsShimmer />;
    }

    const getSkillColor = (level: string) => {
        const levelMap = {
            expert: 'from-green-400 to-green-600',
            advanced: 'from-blue-400 to-blue-600',
            proficient: 'from-indigo-400 to-indigo-600',
            intermediate: 'from-yellow-400 to-yellow-600',
            beginner: 'from-red-400 to-red-600'
        };
        return `bg-gradient-to-br ${levelMap[level.toLowerCase() as keyof typeof levelMap] || levelMap.beginner}`;
    };

    return (
        <>
            <Helmet>
                <title>{profile?.name} | My Skills</title>
                <meta name="description" content={profile?.short_info} />
            </Helmet>
            <div ref={containerRef} className="min-h-screen p-6 opacity-0">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="floating-element absolute top-[10%] left-[5%] w-32 h-32 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute top-[40%] right-[8%] w-40 h-40 bg-blue-600/10 dark:bg-blue-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute bottom-[15%] left-[15%] w-24 h-24 bg-purple-600/10 dark:bg-purple-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute top-[60%] right-[20%] w-28 h-28 bg-emerald-600/10 dark:bg-emerald-500/15 rounded-full blur-xl"></div>
                </div>
                <div className="mx-auto">
                    <div className="mb-8">
                        <h2 ref={titleRef} className="text-3xl font-bold text-gray-100 opacity-0">
                            My Skills
                        </h2>
                        <div className="skills-divider h-1 w-0 bg-indigo-600 mt-3 opacity-0"></div>
                        <p className="mt-4 text-gray-300 max-w-3xl">
                            {overview?.subtitle}
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
                                    <p className="text-gray-400">{overview?.role}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-medium text-gray-200 mb-2">About Me</h4>
                                    <p className="text-gray-300">
                                        {overview?.about_me}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-200 mb-2">Current Focus</h4>
                                    <p className="text-gray-300">
                                        {overview?.current_focus}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {overview?.tags.map((tag, index) => {
                                        const colorIndex = index % tagColors.length;
                                        const { bg, text, border } = tagColors[colorIndex];

                                        return (
                                            <span
                                                key={tag}
                                                className={`text-xs px-2.5 py-1 rounded-full ${bg} ${text} border ${border}
                                                      transition-all duration-300 hover:scale-110`}
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
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
                                {skills?.map((skill) => (
                                    <div
                                        key={skill._id}
                                        className={`
                                        skill-chip
                                        flex items-center px-5 py-2 rounded-full shadow-md
                                        ${getSkillColor(skill.level)}
                                        text-white font-semibold text-sm
                                        transition-transform duration-300
                                        hover:scale-110 hover:shadow-xl
                                    `}
                                    >
                                        <span className="truncate">{skill.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
