import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function PortfolioButtonsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            animate(containerRef.current, {
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 1000,
                easing: 'easeOutQuad'
            });

            animate('.portfolio-btn', {
                scale: [0.9, 1],
                opacity: [0, 1],
                delay: (_: unknown, i: number) => 300 + (i * 100),
                duration: 600,
                easing: 'easeOutElastic(1, .6)'
            });
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="opacity-0 flex flex-wrap justify-start gap-3 bg-white/40 dark:bg-gray-800/60 p-4 rounded-2xl shadow-xl w-full backdrop-blur-md"
        >
            <a
                href="https://www.buymeacoffee.com/igaurav.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn group flex items-center px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-yellow-300/30"
            >
                <div className="bg-white rounded-lg p-1.5 mr-3 shadow">
                    <img
                        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                        alt="Buy me a coffee"
                        className="h-5 w-5"
                    />
                </div>
                <span className="group-hover:tracking-wide transition-all">Coffee ☕</span>
            </a>

            <a
                href="https://frenzycoder.medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn group flex items-center px-6 py-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-black hover:to-gray-800 text-white text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-400/30"
            >
                <svg
                    className="h-5 w-5 mr-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 1043.63 592.71"
                >
                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                </svg>
                <span className="group-hover:tracking-wide transition-all">Blogs</span>
            </a>

            <a
                href="https://discord.gg/igaurav.dev_24962"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn group flex items-center px-6 py-2 rounded-xl bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#4752C4] hover:to-[#3b45a0] text-white text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-300/30"
            >
                <svg className="h-5 w-5 mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span className="group-hover:tracking-wide transition-all">Discord</span>
            </a>

            <a
                href="https://dev.to/frenzycoder"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn group flex items-center px-6 py-2 rounded-xl bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-400/30"
            >
                <svg className="h-5 w-5 mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                </svg>
                <span className="group-hover:tracking-wide transition-all">Dev.to</span>
            </a>

            <a
                href="https://youtube.com/@jokeryt9832"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn group flex items-center px-6 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-red-300/30"
            >
                <svg className="h-5 w-5 mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="group-hover:tracking-wide transition-all">YouTube</span>
            </a>
        </div>
    );
}
