import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface AppNavigationBarProps {
    showProfileLink?: boolean;
}

export default function AppNavigationBar({ showProfileLink = false }: AppNavigationBarProps) {
    const location = useLocation();
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (navRef.current) {
            animate(navRef.current, {
                opacity: [0, 1],
                translateY: [-10, 0],
                duration: 600,
                easing: 'easeOutQuad'
            });

            animate('.nav-link', {
                opacity: [0, 1],
                translateY: [-10, 0],
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
        <nav ref={navRef} className="h-16 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 opacity-0 z-10">
            <ul className="flex space-x-6 md:space-x-8">
                {showProfileLink && (
                    <li>
                        <Link
                            to="/profile"
                            className={`nav-link opacity-0 flex flex-col items-center transition-all duration-300 ${isActive('/profile')
                                ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                                : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                                }`}
                        >
                            <span className="text-sm md:text-base">Profile</span>
                            {isActive('/profile') && <span className="h-0.5 w-4/6 bg-indigo-600 dark:bg-indigo-400 mt-1 rounded-full"></span>}
                        </Link>
                    </li>
                )}
                <li>
                    <Link
                        to="/"
                        className={`nav-link opacity-0 flex flex-col items-center transition-all duration-300 ${isActive('/')
                            ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                            }`}
                    >
                        <span className="text-sm md:text-base">About</span>
                        {isActive('/') && <span className="h-0.5 w-4/6 bg-indigo-600 dark:bg-indigo-400 mt-1 rounded-full"></span>}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/experience"
                        className={`nav-link opacity-0 flex flex-col items-center transition-all duration-300 ${isActive('/experience')
                            ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                            }`}
                    >
                        <span className="text-sm md:text-base">Experience</span>
                        {isActive('/experience') && <span className="h-0.5 w-4/6 bg-indigo-600 dark:bg-indigo-400 mt-1 rounded-full"></span>}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        className={`nav-link opacity-0 flex flex-col items-center transition-all duration-300 ${isActive('/projects')
                            ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                            }`}
                    >
                        <span className="text-sm md:text-base">Projects</span>
                        {isActive('/projects') && <span className="h-0.5 w-4/6 bg-indigo-600 dark:bg-indigo-400 mt-1 rounded-full"></span>}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/skills"
                        className={`nav-link opacity-0 flex flex-col items-center transition-all duration-300 ${isActive('/skills')
                            ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                            }`}
                    >
                        <span className="text-sm md:text-base">Skills</span>
                        {isActive('/skills') && <span className="h-0.5 w-4/6 bg-indigo-600 dark:bg-indigo-400 mt-1 rounded-full"></span>}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/community"
                        className={`nav-link opacity-0 flex flex-col items-center transition-all duration-300 ${isActive('/community')
                            ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                            }`}
                    >
                        <span className="text-sm md:text-base">My Activities</span>
                        {isActive('/community') && <span className="h-0.5 w-4/6 bg-indigo-600 dark:bg-indigo-400 mt-1 rounded-full"></span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
