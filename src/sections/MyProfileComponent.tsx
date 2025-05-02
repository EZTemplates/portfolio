import { useEffect, useRef } from "react";
import { animate } from "animejs";
import image from "/image.png";
import x from "/x.png";
import github from "/github.png";
import instagram from "/instagram.png";
import linkedIn from "/linkedIn.png";
import email from "/email.png";
import phone from "/phone.png";

export default function MyProfileComponent() {
    const profileRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);
    const bioRef = useRef<HTMLParagraphElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const socialIconsRef = useRef<HTMLDivElement>(null);
    const resumeButtonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // Main container fade in
        if (profileRef.current) {
            animate(profileRef.current, {
                opacity: [0, 1],
                duration: 800,
                easing: "easeInOutQuad"
            });
        }

        // Avatar animation
        animate(".profile-avatar", {
            scale: [0, 1],
            rotate: [90, 0],
            opacity: [0, 1],
            delay: 300,
            duration: 1000,
            easing: "spring(1, 80, 10, 0)"
        });

        // Name animation
        if (nameRef.current) {
            animate(nameRef.current, {
                translateY: [40, 0],
                opacity: [0, 1],
                delay: 500,
                duration: 800,
                easing: "easeOutExpo"
            });
        }

        // Title animation
        if (titleRef.current) {
            animate(titleRef.current, {
                translateY: [20, 0],
                opacity: [0, 1],
                delay: 700,
                duration: 600,
                easing: "easeOutExpo"
            });
        }

        // Social icons animation
        animate(".social-icon", {
            translateY: [20, 0],
            opacity: [0, 1],
            delay: (_: unknown, i: number) => 900 + (i * 100),
            duration: 600,
            easing: "easeOutExpo"
        });

        // Bio text animation
        if (bioRef.current) {
            animate(bioRef.current, {
                translateY: [20, 0],
                opacity: [0, 1],
                delay: 1300,
                duration: 800,
                easing: "easeOutExpo"
            });
        }

        // Contact information animation
        animate(".contact-item", {
            translateY: [20, 0],
            opacity: [0, 1],
            delay: (_: unknown, i: number) => 1500 + (i * 150),
            duration: 800,
            easing: "easeOutQuad"
        });

        // Resume button animation
        if (resumeButtonRef.current) {
            animate(resumeButtonRef.current, {
                scale: [0.9, 1],
                opacity: [0, 1],
                delay: 1800,
                duration: 800,
                easing: "easeOutElastic(1, .5)"
            });
        }
    }, []);

    return (
        <div ref={profileRef} className="opacity-0 w-full">
            <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-center text-center p-3 sm:p-4 md:p-5">
                    {/* Header with Avatar and Name */}
                    <div className="relative w-full flex flex-col items-center mb-3 sm:mb-3">
                        {/* Avatar with status indicator */}
                        <div className="profile-avatar opacity-0 relative mb-3 sm:mb-3">
                            <div className="ring-2 ring-indigo-500 dark:ring-indigo-400 ring-offset-2 ring-offset-white dark:ring-offset-gray-800 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
                                <img src={image} alt="Gaurav Singh" className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-500" />
                            </div>
                            <div className="absolute -bottom-1 right-0 bg-emerald-500 text-white text-[7px] xs:text-[8px] sm:text-[8px] px-1.5 py-0.5 rounded-full shadow-sm">
                                <span className="flex items-center">
                                    <span className="h-1 w-1 bg-white rounded-full mr-0.5 animate-pulse"></span>
                                    Available
                                </span>
                            </div>
                        </div>

                        {/* Name and Title */}
                        <h1 ref={nameRef} className="text-xl sm:text-xl md:text-2xl font-bold mb-1">
                            <span className="text-gray-600 dark:text-gray-300 text-base sm:text-base md:text-lg font-light">I'M </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">Gaurav Singh</span>
                        </h1>

                        <p ref={titleRef} className="text-sm sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-3 font-medium relative">
                            <span className="relative px-3 py-1 inline-block">
                                <span className="relative z-10 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 drop-shadow-md dark:drop-shadow-lg">Software Engineer</span>
                                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/50 dark:to-blue-900/50 shadow-inner"></span>
                            </span>
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div ref={socialIconsRef} className="flex gap-3 sm:gap-3 justify-center mb-3 sm:mb-3">
                        <a href="https://github.com/frenzycoder7" target="_blank" rel="noreferrer noopener"
                            className="social-icon opacity-0 p-2 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-full transform transition-all hover:scale-110 hover:-translate-y-1 hover:bg-indigo-100 dark:hover:bg-indigo-900/50">
                            <img src={github} alt="GitHub" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                        <a href="https://www.instagram.com/frenzycoder" target="_blank" rel="noreferrer noopener"
                            className="social-icon opacity-0 p-2 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-full transform transition-all hover:scale-110 hover:-translate-y-1 hover:bg-pink-100 dark:hover:bg-pink-900/50">
                            <img src={instagram} alt="Instagram" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                        <a href="https://www.linkedin.com/in/gaurav-kumar-1360b3231/" target="_blank" rel="noreferrer noopener"
                            className="social-icon opacity-0 p-2 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-full transform transition-all hover:scale-110 hover:-translate-y-1 hover:bg-blue-100 dark:hover:bg-blue-900/50">
                            <img src={linkedIn} alt="LinkedIn" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                        <a href="https://x.com/frenzycoder" target="_blank" rel="noreferrer noopener"
                            className="social-icon opacity-0 p-2 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-full transform transition-all hover:scale-110 hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-600">
                            <img src={x} alt="X" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                    </div>

                    {/* Bio */}
                    <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-3 sm:p-3 mb-3 sm:mb-3 backdrop-blur-sm w-full">
                        <p ref={bioRef} className="text-gray-700 dark:text-gray-300 text-sm sm:text-sm max-w-lg mx-auto">
                            I am a software engineer with 3+ years of experience in building web & mobile applications
                            using React, Node, Flutter, Swift and MongoDB. I am passionate about learning new technologies
                            and building scalable applications.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div ref={contactRef} className="mb-3 sm:mb-3 w-full">
                        <div className="contact-item opacity-0 flex items-center justify-center gap-2 sm:gap-2 backdrop-blur-sm px-3 sm:px-3 py-2 sm:py-2 rounded-lg hover:bg-white/90 dark:hover:bg-gray-700/60 transition-all">
                            <img src={email} alt="Email" className="w-4 h-4 sm:w-4 sm:h-4" />
                            <span className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-sm">connect@igaurav.dev</span>
                        </div>
                        <div className="contact-item opacity-0 flex items-center justify-center gap-2 sm:gap-2 backdrop-blur-sm px-3 sm:px-3 py-2 sm:py-2 rounded-lg hover:bg-white/90 dark:hover:bg-gray-700/60 transition-all">
                            <img src={phone} alt="Phone" className="w-4 h-4 sm:w-4 sm:h-4" />
                            <span className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-sm">+91 9262715527</span>
                        </div>
                    </div>

                    {/* Resume Button */}
                    <a
                        ref={resumeButtonRef}
                        href="https://drive.google.com/file/d/1hvv3z_V8HPcTVPCzjCMokPCfb7K4aDGN/view?usp=drivesdk"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="opacity-0 w-full flex items-center justify-center gap-2 sm:gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 text-white px-4 sm:px-4 py-2.5 sm:py-2 rounded-lg text-sm sm:text-sm md:text-base font-medium shadow-md hover:shadow-lg"
                    >
                        <svg
                            className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        <span className="font-medium">Download Resume</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
