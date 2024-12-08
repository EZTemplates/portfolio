import { useState } from 'react';

interface Project {
    title: string;
    type: string; // personal , company , client
    description: string;
    iframe: string | null;
    main_image: string | null;
    link: string | null;
    github: string | null;
    skills: string[];
    project_images: string[];
    status: 'Ongoing' | 'Completed';
}

export default function ProjectSection() {
    const [filters, setFilters] = useState({
        technology: '',
        platform: '',
        status: ''
    });

    // Example projects data
    const projects: Project[] = [
        {
            title: 'GetYourSquad-Web',
            type: 'Personal',
            description: 'GetYourSquad is a platform for PUBG players to find teammates. Users create accounts, post game details, search for profiles, and send messages to connect. Once chosen for a team, users can disable their profile to stop further messages.',
            iframe: 'https://getyoursquad.in',
            main_image: null,
            link: 'https://getyoursquad.in',
            github: null,
            skills: ['React.js', 'Node.js', 'RabbitMQ', 'Socket.IO', 'MongoDB'],
            project_images: [
                "/getYourSquad/getYourSquad.png",
            ],
            status: "Completed"
        },
        {
            title: 'GetYourSquad-App',
            type: 'Personal',
            description: 'GetYourSquad is a platform for PUBG players to find teammates. Users create accounts, post game details, search for profiles, and send messages to connect. Once chosen for a team, users can disable their profile to stop further messages.',
            github: null,
            iframe: null,
            main_image: null,
            link: null,
            skills: ['Node.js', 'Express.js', 'MongoDB', 'Flutter(app)'],
            project_images: [
                "/getYourSquad/1.JPG",
                "/getYourSquad/2.JPG",
                "/getYourSquad/3.JPG",
                "/getYourSquad/4.JPG",
                "/getYourSquad/5.JPG",
                "/getYourSquad/6.JPG",
                "/getYourSquad/7.JPG",
                "/getYourSquad/8.JPG",
            ],
            status: "Completed"
        },
        {
            title: 'Magadh Marketing ',
            type: 'Company',
            description: "Introducing the cutting-edge Magadh Marketing Android Application, meticulously crafted with Flutter and proudly published under our company's Play Console ID. Packed with an array of features, including Map Implementation, it conveniently displays nearby shops within a 500-meter radius. Seamlessly integrated APIs facilitate real-time data retrieval, while the Hive database ensures ecient data storage. Supporting oine usage, it eortlessly syncs data upon internet connectivity. With over 1 lakh API calls and a dedicated user base of 100+ marketing ocers from Magadh Industries, an investor in Magadh Digital Solutions, our app stands as a testament to technological excellence and user satisfaction. Company - MAGADH DIGITAL SOLUTIONS PVT. LTD. ",
            github: null,
            iframe: null,
            link: "https://play.google.com/store/apps/details?id=com.magadh.mdspl_marketing&pcampaignid=web_share",
            main_image: null,
            project_images: [
                "https://play-lh.googleusercontent.com/YjB2J7o2Fm8A4anfTokFVv1EIT1Qj1kSc-imJoAfemuDZWUXx0-YeMVegQuPDFpvYfg=w2560-h1440",
                "https://play-lh.googleusercontent.com/BwFvMrhSfPU7NeLFJguhv-rxneAp0VquSHx48OGE9khhhI4vBwQE1cy-fFqXc1xQVEs=w2560-h1440",
                "https://play-lh.googleusercontent.com/Ju9R3tbZo1LVvTI4Vj8FPPCVs62LAedQ8woND0N7moWXGPblK6Or1KnGjtxvy6coxCc=w2560-h1440",
                "https://play-lh.googleusercontent.com/D_pKmaB49MCSvPNm81ICUe5BZ-8ZLeX4MTeaWtss9R7-l6uIeCr2naRo8Jbw9G8n2DY=w2560-h1440",
                "https://play-lh.googleusercontent.com/DjQOlV-H5e1fcO992lvA3LstY_Dlf-3xKyflNLLcOB05nPNxtnTmFzrRboasBg_i7J6I=w2560-h1440",
                "https://play-lh.googleusercontent.com/EPPS2Kulnf7DcFzuIjzJEEcJnC5kzVYar0Sp2s9lPjqlN2ukzQXg3rphxVHlVMVU4sM=w2560-h1440",
                "https://play-lh.googleusercontent.com/DB6kYziOm-TqVGgNFn1D8C3GWoQJznI0O59V2daj8MB-1lDbV6fUh-_97RHd8Ab81ol2=w2560-h1440",
                "https://play-lh.googleusercontent.com/_HitvTV4GDDLC6AdU4ESK_NRHxJi2aHNr8TFLq0iZUt4hwQW9QRk7lPVexMMaB8RgSXk=w2560-h1440",
                "https://play-lh.googleusercontent.com/HhTQTQfEDS6NV6xtfkYDbJRrw1Cc_4_kcJA37sQwSah7vTnw4VlN0ZyBoDPS4uz1tbbj=w2560-h1440",


            ],
            skills: ['Flutter', 'Dart', 'Hive', 'Google Maps API', 'Firebase', "Node.js", "Express.js", "MongoDB"],
            status: "Ongoing"
        },
        {
            title: "Notes River - Flutter & Node.js",
            type: "Personal",
            description: "Notes River is an ambitious startup project aimed at revolutionizing the way users share PDF books and notes through personalized readlists, akin to virtual groups. Powered by a Node.js backend that is currently in development, the app promises a seamless and engaging experience for users. As I diligently work towards completing the backend, my vision is to establish a thriving company that fosters knowledge sharing and enhances the learning journey for individuals and communities alike. github:- https://github.com/Notes-River",
            github: "https://github.com/Notes-River",
            link: "https://github.com/Notes-River",
            iframe: null,
            main_image: null,
            project_images: [
                "https://github.com/Notes-River/.github/blob/master/login.jpg?raw=true",
                "https://github.com/Notes-River/.github/blob/master/otp.jpg?raw=true",
                "https://github.com/Notes-River/.github/blob/master/verified.jpg?raw=true",
                "https://github.com/Notes-River/.github/blob/master/home_with_post.jpg?raw=true",
                "https://github.com/Notes-River/.github/blob/master/drawer.jpg?raw=true",
                "https://github.com/Notes-River/.github/blob/master/create_readlist2.jpg?raw=true",
                "https://github.com/Notes-River/.github/blob/master/create_notes.jpg?raw=true",
                "https://github.com/Notes-River/.github/blob/master/profile.jpg?raw=true",
                "https://github.com/Notes-River/.github/blob/master/readlists.jpg?raw=true",
                "https://github.com/Notes-River/.github/blob/master/upload_notes.jpg?raw=true",

            ],
            skills: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB'],
            status: "Ongoing"
        },
        {
            title: 'pcController',
            description: "pcController is an innovative solution that allows users to remotely control their personal computers using their mobile devices. This seamless setup requires the use of the lpcpanel package, which can be easily installed from npmjs.com. Easy Account Creation: Users start by creating an account and logging into the mobile app. Create and Link Machines: Within the app, users create a new machine profile using the Create Machine button. This generates a unique Machine ID, which will be used to connect their PC to the mobile app. Setup with lpcpanel: After copying the Machine ID, users need to install lpcpanel on their computer using a simple command. They then configure it using the copied Machine ID, effectively linking the PC to the mobile app. Monitor PC Status: Once set up, users can effortlessly monitor their PC's status (online/offline) and control it remotely from their mobile device.",
            github: "https://github.com/frenzycoders/lpcpanel.git",
            link: "https://play.google.com/store/apps/details?id=com.booringcodes.pccontroller&pcampaignid=web_share",
            iframe: null,
            main_image: null,
            project_images: [
                "https://play-lh.googleusercontent.com/oyjncQTQVVjsgFSPvA9aiTVjJVApIaNRMVHPGJAVymaOojCzA0k_NIpCeaWaLhrC_o1b=w526-h296",
                "https://play-lh.googleusercontent.com/z5GwX3IqeE4iHDKk2PIkwGg2v-Czn9v0sPAs7DFrXoznBqMDhHqEt3YdyFYOw-kvGbU=w526-h296",
                "https://play-lh.googleusercontent.com/PWSEG4_c9yFsL2RClkxih_OETV__f8v5EhDZAv7IfBN-ozfRAsd09d157cwCghD9NA=w526-h296",
                "https://play-lh.googleusercontent.com/_F8hpuzgZ2vR5AV91B_YCAIk3wawnuPjYypgroErurqIDtfCCdmlEBTga59tIDZ2zIk=w526-h296",
                "https://play-lh.googleusercontent.com/oiL885Eyje2cNPxtyUE_4_Az218d08QZ78du-AQoSA-Jj82M_y_zIC8GThcgzGVHcY0=w526-h296",
                "https://play-lh.googleusercontent.com/5M3Kc2MvJ6FEH86vWCD_hA2QRPqrww6jV3KTrAEyl7gih5wiNXNrAoKaII9giTxwaQ=w526-h296",
                "https://play-lh.googleusercontent.com/8aA-XHKCI9WzVwzApkcRFqHz1t1cYxLZs4-GK_GZpzvG0A2QAuFnsBvnYg_JjbpYgA=w526-h296",
                "https://play-lh.googleusercontent.com/mGu6Uc1AOAbh4zOa83N83dtQXkW3Ya-BLyOfe7GiuE-t1QkJ0cqhr12BcQiWhUMzzhU=w526-h296",
            ],
            skills: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB'],
            type: 'Personal',
            status: "Completed"
        }

    ]

    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

    const handleFilterChange = (filterType: string, value: string) => {
        const newFilters = { ...filters, [filterType]: value };
        setFilters(newFilters);

        // Apply filters
        const filtered = projects.filter(project => {
            const techMatch = !newFilters.technology || project.skills.includes(newFilters.technology);
            const platformMatch = !newFilters.platform || project.type === newFilters.platform;
            const statusMatch = !newFilters.status || project.status === newFilters.status;
            return techMatch && platformMatch && statusMatch;
        });

        setFilteredProjects(filtered);
    };

    return (
        <section className="py-6">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-2">Projects</h2>
                    <div className="h-1 w-20 bg-primary mt-4"></div>
                </div>

                <div className="flex gap-4 mb-8">
                    <select
                        className="border p-2 rounded"
                        onChange={(e) => handleFilterChange('technology', e.target.value)}
                        value={filters.technology}
                    >
                        <option value="">All Technologies</option>
                        <option value="React">React</option>
                        <option value="Node.js">Node.js</option>
                        {/* Add more technology options */}
                    </select>

                    <select
                        className="border p-2 rounded"
                        onChange={(e) => handleFilterChange('platform', e.target.value)}
                        value={filters.platform}
                    >
                        <option value="">All Platforms</option>
                        <option value="Web">Web</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Desktop">Desktop</option>
                    </select>

                    <select
                        className="border p-2 rounded"
                        onChange={(e) => handleFilterChange('status', e.target.value)}
                        value={filters.status}
                    >
                        <option value="">All Status</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map(project => (
                        <div
                            key={project.title}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-64 bg-gray-100">
                                {project.project_images.length > 0 && (
                                    <img
                                        src={project.project_images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-4 py-1 rounded-full text-sm font-medium ${project.status === 'Ongoing'
                                        ? 'bg-blue-100 text-blue-600'
                                        : 'bg-green-100 text-green-600'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                                        {project.type}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-4">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary-dark transition-colors"
                                        >
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Live Demo
                                            </span>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 transition-colors"
                                        >
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                GitHub
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
