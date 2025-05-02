import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animate } from 'animejs';

export default function MobileNavigation() {
    const location = useLocation();
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (navRef.current) {
            animate(navRef.current, {
                opacity: [0, 1],
                translateY: [10, 0],
                duration: 600,
                easing: 'easeOutQuad'
            });

            animate('.mobile-nav-item', {
                opacity: [0, 1],
                scale: [0.9, 1],
                delay: (_: unknown, i: number) => 200 + (i * 75),
                duration: 600,
                easing: 'easeOutQuad'
            });
        }
    }, []);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div
            ref={navRef}
            className="mt-3 px-4 py-2 opacity-0 bg-gray-800/50 backdrop-blur-sm border-t border-b border-gray-700/50"
        >
            <div className="overflow-x-auto scrollbar-hide pb-1">
                <div className="flex space-x-3 min-w-max px-1">
                    <Link
                        to="/"
                        className={`mobile-nav-item opacity-0 flex-shrink-0 px-4 py-2 rounded-full text-center text-xs font-medium transition-all duration-300 flex items-center justify-center shadow-sm
                            ${isActive('/')
                                ? 'bg-indigo-600 text-white shadow-indigo-500/20'
                                : 'bg-gray-700/70 text-gray-200 hover:bg-gray-600/70'
                            }`}
                    >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        About
                    </Link>

                    <Link
                        to="/experience"
                        className={`mobile-nav-item opacity-0 flex-shrink-0 px-4 py-2 rounded-full text-center text-xs font-medium transition-all duration-300 flex items-center justify-center shadow-sm
                            ${isActive('/experience')
                                ? 'bg-indigo-600 text-white shadow-indigo-500/20'
                                : 'bg-gray-700/70 text-gray-200 hover:bg-gray-600/70'
                            }`}
                    >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        Experience
                    </Link>

                    <Link
                        to="/projects"
                        className={`mobile-nav-item opacity-0 flex-shrink-0 px-4 py-2 rounded-full text-center text-xs font-medium transition-all duration-300 flex items-center justify-center shadow-sm
                            ${isActive('/projects')
                                ? 'bg-indigo-600 text-white shadow-indigo-500/20'
                                : 'bg-gray-700/70 text-gray-200 hover:bg-gray-600/70'
                            }`}
                    >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                        </svg>
                        Projects
                    </Link>

                    <Link
                        to="/skills"
                        className={`mobile-nav-item opacity-0 flex-shrink-0 px-4 py-2 rounded-full text-center text-xs font-medium transition-all duration-300 flex items-center justify-center shadow-sm
                            ${isActive('/skills')
                                ? 'bg-indigo-600 text-white shadow-indigo-500/20'
                                : 'bg-gray-700/70 text-gray-200 hover:bg-gray-600/70'
                            }`}
                    >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        Skills
                    </Link>

                    <Link
                        to="/community"
                        className={`mobile-nav-item opacity-0 flex-shrink-0 px-4 py-2 rounded-full text-center text-xs font-medium transition-all duration-300 flex items-center justify-center shadow-sm
                            ${isActive('/community')
                                ? 'bg-indigo-600 text-white shadow-indigo-500/20'
                                : 'bg-gray-700/70 text-gray-200 hover:bg-gray-600/70'
                            }`}
                    >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        Activities
                    </Link>
                </div>
            </div>
        </div>
    );
} 