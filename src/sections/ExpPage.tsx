export default function ExpPage() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col container mx-auto px-4 py-6 md:p-10">
                <div className="mb-5">
                    <h2 className="text-3xl font-bold mb-2">Experience</h2>
                    <div className="h-1 w-20 bg-primary mt-4"></div>
                </div>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-middle">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="white"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <time className="text-sm font-mono text-primary">April 2023 - Present</time>
                                <h3 className="text-xl font-bold text-secondary mt-2">Software Engineer</h3>
                                <h4 className="text-lg font-serif text-primary italic">VisionIAS</h4>
                                <p className="mt-3 text-base-content/80 leading-relaxed">
                                    At Vision IAS, I am actively contributing to their product development using my skills in optimizing Flutter code. Besides that, I am focused on personal growth, learning how to manage teams more effectively, and enhancing my communication skills. Additionally, I am acquiring proficiency in using Jira for software development, which allows for better project management.
                                </p>
                            </div>
                        </div>
                        <hr className="bg-primary" />
                    </li>

                    <li>
                        <div className="timeline-middle">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="white"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="timeline-end mb-10">
                            <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <time className="text-sm font-mono text-primary">August 2022 - March 2023</time>
                                <h3 className="text-xl font-bold text-secondary mt-2">Full Stack Developer</h3>
                                <h4 className="text-lg font-serif text-primary italic">Magadh Digital Solutions</h4>
                                <p className="mt-3 text-base-content/80 leading-relaxed">
                                    In my role at Magadh Digital Solutions, I spearheaded Android app development using Flutter and managed efficient teams for both Flutter and Node.js projects. My expertise in Node.js allowed me to handle backend development seamlessly. Additionally, I successfully tackled tasks in React.js. My strong grasp of Socket.IO with Node.js and Flutter further contributed to the company's technological edge.
                                </p>
                            </div>
                        </div>
                        <hr className="bg-primary" />
                    </li>

                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-middle">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="white"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <div className="bg-base-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <time className="text-sm font-mono text-primary">Sept 2020 - Jan 2022</time>
                                <h3 className="text-xl font-bold text-secondary mt-2">Freelancer (FullStack)</h3>
                                <h4 className="text-lg font-serif text-primary italic">Freelancing</h4>
                                <p className="mt-3 text-base-content/80 leading-relaxed">
                                    During my freelance career from Sept 2020 to Jan 2022, I accomplished diverse projects. I crafted personal Flutter apps, which I hosted on my Play Console ID using Lean App hosting. Additionally, I worked on educational, e-commerce, and static websites utilizing Node.js and Bootstrap, helping clients achieve their online goals effectively.
                                </p>
                            </div>
                        </div>
                        <hr className="bg-primary" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
