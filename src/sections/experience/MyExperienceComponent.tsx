import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { useFetchExperience } from '../../core/hooks/useFetchExperience';
import ExperienceShimmer from '../../components/shimmers/ExperienceShimmer';
import { Helmet } from 'react-helmet-async';

const getColorByIndex = (index: number) => {
    const colors = [
        {
            primary: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
            secondary: 'emerald-400',
            border: 'emerald-500/20',
            text: 'emerald-300',
            gradient: 'from-emerald-500 to-emerald-600'
        },
        {
            primary: 'from-sky-500/10 via-sky-500/5 to-transparent',
            secondary: 'sky-400',
            border: 'sky-500/20',
            text: 'sky-300',
            gradient: 'from-sky-500 to-sky-600'
        },
        {
            primary: 'from-violet-500/10 via-violet-500/5 to-transparent',
            secondary: 'violet-400',
            border: 'violet-500/20',
            text: 'violet-300',
            gradient: 'from-violet-500 to-violet-600'
        }
    ];
    return colors[index % colors.length];
};

export default function MyExperienceComponent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const { data, isLoading, error } = useFetchExperience();

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

            animate('.experience-divider', {
                width: [0, 80],
                opacity: [0, 1],
                duration: 800,
                delay: 300,
                easing: 'easeInOutQuad'
            });
        }

        if (contentRef.current) {
            // Animate experience cards
            animate('.experience-card', {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (_: unknown, i: number) => 400 + (i * 150),
                duration: 700,
                easing: 'easeOutQuad'
            });

            // Animate skill tags
            animate('.skill-tag', {
                opacity: [0, 1],
                scale: [0.8, 1],
                delay: (_: unknown, i: number) => 800 + (i * 30),
                duration: 500,
                easing: 'easeOutElastic(1, .5)'
            });

            // Animate achievement items
            animate('.achievement-item', {
                opacity: [0, 1],
                translateX: [-10, 0],
                delay: (_: unknown, i: number) => 1000 + (i * 50),
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
    }, [data]);

    if (isLoading) return <ExperienceShimmer />;
    if (error || !data) {
        return (
            <div className="flex items-start">
                <p className="text-red-500">Failed to load experience data</p>
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
        });
    };

    return (
        <>
            <Helmet>
                <title>My Experience</title>
                <meta name="description" content="My professional journey across different organizations and roles, showcasing my growth." />
            </Helmet>
            <div ref={containerRef} className="min-h-screen relative overflow-hidden opacity-0">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="floating-element absolute top-[10%] left-[5%] w-32 h-32 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute top-[40%] right-[8%] w-40 h-40 bg-blue-600/10 dark:bg-blue-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute bottom-[15%] left-[15%] w-24 h-24 bg-purple-600/10 dark:bg-purple-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute top-[60%] right-[20%] w-28 h-28 bg-emerald-600/10 dark:bg-emerald-500/15 rounded-full blur-xl"></div>
                </div>

                <div className="mx-auto py-12 px-4 relative z-10">
                    {/* Header Section */}
                    <div className="mb-8 text-left">
                        <h2 ref={titleRef} className="text-3xl font-bold text-gray-100 opacity-0">My Experience</h2>
                        <div className="experience-divider h-1 w-0 bg-indigo-600 mt-3 opacity-0"></div>
                        <p className="mt-4 text-gray-300 max-w-3xl">
                            My professional journey across different organizations and roles, showcasing my growth as a developer.
                        </p>
                    </div>

                    {/* Experience Cards */}
                    <div ref={contentRef} className="relative space-y-4">
                        {data.map((exp, index) => {
                            const color = getColorByIndex(index);
                            return (
                                <div key={exp._id}
                                    className="experience-card group relative">
                                    {/* Card Content */}
                                    <div className="relative rounded-lg bg-gray-900/90 backdrop-blur-xl 
                                              border border-gray-700/50 overflow-hidden
                                              hover:border-gray-600/50 transition-all duration-300">
                                        {/* Animated Left Border Line */}
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 
                                                   bg-gradient-to-b ${color.gradient}
                                                   before:absolute before:inset-0
                                                   before:bg-gradient-to-b before:from-white/20 before:to-transparent
                                                   before:animate-shimmer`}></div>

                                        <div className="p-4 pl-5">
                                            {/* Header Section */}
                                            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                                                <div className="flex items-center gap-3">
                                                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                                                    <span className={`text-${color.text} text-sm`}>
                                                        {exp.company}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-400 text-sm">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>
                                                        {formatDate(exp.start_date)} - {exp.present ? 'Present' : formatDate(exp.end_date)}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-300 text-sm mb-3">
                                                {exp.short_work_description}
                                            </p>

                                            {/* Skills Section */}
                                            <div className="mb-3">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {exp.skills.map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className={`skill-tag px-2 py-0.5 rounded-full text-xs 
                                                                  bg-gradient-to-r ${color.gradient}
                                                                  text-white font-medium
                                                                  hover:shadow-lg hover:shadow-${color.secondary}/20
                                                                  hover:-translate-y-0.5
                                                                  transition-all duration-300`}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Achievements Section */}
                                            <div className="bg-gray-800/50 rounded p-3">
                                                <h5 className="text-white text-sm font-medium mb-2 flex items-center gap-1.5">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                    </svg>
                                                    Key Achievements
                                                </h5>
                                                <ul className="space-y-1.5">
                                                    {exp.achievents.map((achievement, achievementIndex) => (
                                                        <li key={achievementIndex}
                                                            className="achievement-item flex items-start gap-2 group/item 
                                                                 hover:bg-gray-700/50 p-1.5 rounded 
                                                                 transition-all duration-300">
                                                            <span className={`text-${color.text} mt-0.5 flex-shrink-0`}>
                                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                        d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            </span>
                                                            <span className="text-gray-300 text-sm">{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
