import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import ComingSoonComponent from '../components/ComingSoonComponent';

interface Activity {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    date: string;
    type: 'learning' | 'building' | 'contributing' | 'writing';
    links?: {
        title: string;
        url: string;
    }[];
}

export default function CommunitySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const activitiesRef = useRef<HTMLDivElement>(null);

    const [likedActivities, setLikedActivities] = useState<Record<string, boolean>>({});

    const activities: Activity[] = [
        {
            id: 'act1',
            title: 'Learning Advanced React Patterns',
            description: 'Exploring compound components, render props, and custom hooks to build more reusable and flexible components.',
            techStack: ['React', 'TypeScript', 'Redux'],
            date: '2023-06-15',
            type: 'learning'
        },
        {
            id: 'act2',
            title: 'Building a Real-time Chat Application',
            description: 'Working on a scalable chat application with features like typing indicators, read receipts, and offline message queuing.',
            techStack: ['Node.js', 'Socket.IO', 'MongoDB', 'React', 'Redis'],
            date: '2023-07-02',
            type: 'building',
            links: [
                {
                    title: 'GitHub Repository',
                    url: 'https://github.com/frenzycoder7/chat-app'
                }
            ]
        },
        {
            id: 'act3',
            title: 'Contributing to Open Source',
            description: 'Contributing to the Flutter ecosystem by fixing bugs and adding features to popular packages.',
            techStack: ['Flutter', 'Dart', 'Firebase'],
            date: '2023-07-20',
            type: 'contributing',
            links: [
                {
                    title: 'Pull Requests',
                    url: 'https://github.com/flutter/flutter/pulls'
                }
            ]
        },
        {
            id: 'act4',
            title: 'Exploring Server Components in Next.js',
            description: 'Diving into the latest Next.js features, particularly server components and how they revolutionize data fetching patterns.',
            techStack: ['Next.js', 'React', 'Vercel'],
            date: '2023-08-05',
            type: 'learning'
        },
        {
            id: 'act5',
            title: 'Writing Technical Articles on Modern Web Development',
            description: 'Sharing my experience and knowledge through in-depth technical articles on Medium and Dev.to.',
            techStack: ['JavaScript', 'React', 'Node.js', 'Web Performance'],
            date: '2023-08-15',
            type: 'writing',
            links: [
                {
                    title: 'Medium Profile',
                    url: 'https://frenzycoder.medium.com'
                },
                {
                    title: 'Dev.to Profile',
                    url: 'https://dev.to/frenzycoder'
                }
            ]
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

            animate('.activities-divider', {
                width: [0, 120],
                opacity: [0, 1],
                duration: 800,
                delay: 300,
                easing: 'easeInOutQuad'
            });
        }

        if (activitiesRef.current) {
            animate('.activity-card', {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (_: unknown, i: number) => 400 + (i * 100),
                duration: 700,
                easing: 'easeOutQuad'
            });
        }
    }, []);

    const handleLike = (id: string) => {
        setLikedActivities(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleShare = async (activity: Activity) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: activity.title,
                    text: `Check out this activity: ${activity.title} - ${activity.description}`,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback for browsers that don't support the Web Share API
            alert('Share functionality not supported in this browser. You can copy the URL manually.');
        }
    };

    const getActivityIcon = (type: Activity['type']) => {
        switch (type) {
            case 'learning':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                );
            case 'building':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                );
            case 'contributing':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                );
            case 'writing':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <ComingSoonComponent />
    );

    return (
        <div ref={containerRef} className="min-h-screen opacity-0 py-10">
            <div className="mx-auto px-6 relative z-10">
                <div className="text-left mb-12">
                    <h2 ref={titleRef} className="text-4xl font-bold text-gray-100 opacity-0 mb-3">My Activities</h2>
                    <div className="activities-divider h-1 w-0 bg-gradient-to-r from-indigo-600 to-blue-600 mt-3 mb-6 opacity-0 rounded-full"></div>
                    <p className="text-gray-300 max-w-3xl">
                        Here's what I'm currently working on, learning, and contributing to. These activities reflect my ongoing journey in software development.
                    </p>
                </div>

                <div ref={activitiesRef} className="grid grid-cols-1 gap-6">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="activity-card opacity-0 bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start">
                                <div className="p-2 rounded-lg bg-gray-700/50 mr-4">
                                    {getActivityIcon(activity.type)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold text-white mb-1">{activity.title}</h3>
                                        <span className="text-sm text-gray-400">{new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">{activity.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {activity.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs border border-indigo-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {activity.links && activity.links.length > 0 && (
                                        <div className="flex gap-3 mb-4">
                                            {activity.links.map((link, index) => (
                                                <a
                                                    key={index}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-1 transition-colors"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    {link.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center pt-3 border-t border-gray-700">
                                        <button
                                            onClick={() => handleLike(activity.id)}
                                            className="flex items-center gap-1 px-3 py-1.5 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors text-sm mr-3"
                                        >
                                            {likedActivities[activity.id] ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            )}
                                            {likedActivities[activity.id] ? 'Liked' : 'Like'}
                                        </button>

                                        <button
                                            onClick={() => handleShare(activity)}
                                            className="flex items-center gap-1 px-3 py-1.5 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
