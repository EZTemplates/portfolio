import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function ComingSoonComponent() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // Animate the main container
            animate(containerRef.current, {
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutQuad'
            });

            // Animate the title
            animate('.coming-soon-title', {
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                delay: 200,
                easing: 'easeOutQuad'
            });

            // Animate the divider
            animate('.coming-soon-divider', {
                width: [0, 80],
                opacity: [0, 1],
                duration: 800,
                delay: 300,
                easing: 'easeInOutQuad'
            });

            // Animate the description
            animate('.coming-soon-description', {
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                delay: 400,
                easing: 'easeOutQuad'
            });

            // Animate the progress bar
            animate('.progress-bar', {
                width: ['0%', '100%'],
                duration: 2000,
                delay: 600,
                easing: 'easeInOutQuad'
            });
        }
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen flex items-center justify-center p-6 opacity-0">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="floating-element absolute top-[10%] left-[5%] w-32 h-32 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-xl"></div>
                <div className="floating-element absolute top-[40%] right-[8%] w-40 h-40 bg-blue-600/10 dark:bg-blue-500/15 rounded-full blur-xl"></div>
                <div className="floating-element absolute bottom-[15%] left-[15%] w-24 h-24 bg-purple-600/10 dark:bg-purple-500/15 rounded-full blur-xl"></div>
                <div className="floating-element absolute top-[60%] right-[20%] w-28 h-28 bg-emerald-600/10 dark:bg-emerald-500/15 rounded-full blur-xl"></div>
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h1 className="coming-soon-title text-5xl md:text-6xl font-bold text-gray-100 mb-4 opacity-0">
                    Coming Soon
                </h1>
                <div className="coming-soon-divider h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 opacity-0"></div>
                <p className="coming-soon-description text-xl text-gray-300 mb-8 opacity-0">
                    We're working on something amazing. Stay tuned for updates!
                </p>

                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-8">
                    <div className="progress-bar h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
                </div>

                {/* Social links
                <div className="flex justify-center gap-4">
                    {['GitHub', 'Twitter', 'LinkedIn'].map((platform) => (
                        <a
                            key={platform}
                            href="#"
                            className="px-6 py-2 rounded-full bg-gray-800/50 text-gray-300 
                                     border border-gray-700 hover:bg-gray-700/50 
                                     transition-all duration-300 hover:scale-105
                                     backdrop-blur-sm"
                        >
                            {platform}
                        </a>
                    ))}
                </div> */}

                {/* Notification signup */}
                <div className="mt-8">
                    <div className="flex gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-lg bg-gray-800/50 
                                     border border-gray-700 text-gray-300 
                                     placeholder-gray-500 focus:outline-none 
                                     focus:ring-2 focus:ring-indigo-500
                                     backdrop-blur-sm"
                        />
                        <button className="px-6 py-2 rounded-lg bg-gradient-to-r 
                                        from-indigo-500 to-purple-500 text-white 
                                        font-medium hover:from-indigo-600 
                                        hover:to-purple-600 transition-all 
                                        duration-300 hover:scale-105">
                            Notify Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
