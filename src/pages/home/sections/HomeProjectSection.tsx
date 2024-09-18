
interface IProject {
    title: string;
    type: string; // personal , company , client
    description: string;
    iframe: string | null;
    main_image: string | null;
    link: string | null;
    github: string | null;
    skills: string[];
    project_images: string[];
}
import link from "/icons/link.png";
import github from "/github.png";
import { useState } from "react";
export default function HomeProjectSection() {

    const projects: IProject[] = [
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
            ]

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
            ]
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
            skills: ['Flutter', 'Dart', 'Hive', 'Google Maps API', 'Firebase', "Node.js", "Express.js", "MongoDB"]
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
            skills: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB']
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
            type: 'Personal'
        }

    ]

    const [selected, setSelected] = useState<IProject | null>(null);

    const openModal = (project: IProject) => {
        setSelected(project);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const d: any = document.getElementById('my_modal_1')
        d.showModal();
    }

    const closeModal = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const d: any = document.getElementById('my_modal_1');
        d.close();

    }


    return (
        <>
            <div data-theme="dim">
                <div className="container m-auto flex flex-col p-5">
                    <div className="flex flex-row justify-between">
                        <span className="text-3xl lg:text-5xl text-white mb-5">Projects</span>
                        <span className="btn btn-outline btn-secondary">See All</span>
                    </div>
                    <div className="overflow-x-auto whitespace-nowrap">
                        {
                            projects.map((project) => (
                                <div className="card bg-base-100 w-80 inline-block p-2">

                                    {
                                        project.main_image == null ? (<>
                                            {
                                                project.iframe !== null ? (<>
                                                    <figure>
                                                        <iframe
                                                            className="rounded-t-md"
                                                            src={project.iframe}
                                                            title="Project"
                                                            width="100%"
                                                            height="160px"
                                                            style={{ border: 'none' }}
                                                        ></iframe>
                                                    </figure>
                                                </>) : (<>

                                                </>)
                                            }
                                        </>) : (<>
                                            <figure>
                                                <img src={project.main_image} alt="Project" className="rounded-t-md" />
                                            </figure>
                                        </>)
                                    }
                                    <div className="card-body rounded-b-md">
                                        <h2 className="card-title">
                                            {project.title}
                                            <div className="badge badge-secondary text-white font-medium">{project.type}</div>
                                        </h2>
                                        <p className="whitespace-normal text-xs">{project.description}</p>
                                        <div className="card-actions justify-start">
                                            {
                                                project.skills.map((skill) => (
                                                    <span className="badge text-white text-xs">{skill}</span>
                                                ))
                                            }
                                        </div>
                                        <div className="flex flex-row gap-5">
                                            {
                                                project.link !== null ? (<>
                                                    <a href={project.link} target="_blank" className="">
                                                        <img src={link} alt="Link" className="w-5 h-5" />
                                                    </a>
                                                </>) : (<></>)
                                            }
                                            {
                                                project.github !== null ? (<>
                                                    <a href={project.github} target="_blank" className="">
                                                        <img src={github} alt="Github" className="w-5 h-5" />
                                                    </a>
                                                </>) : (<></>)
                                            }
                                            <span className="badge badge-secondary text-xs" onClick={() => openModal(project)}>View Images</span>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <p className="py-4">Project Images</p>
                                {
                                    selected !== null ? (<>
                                        {
                                            selected.project_images.length == 0 ? (<>
                                                <p>Project Images not added</p>
                                            </>) : (<>
                                                <ProjectImages image={selected.project_images} />
                                            </>)

                                        }
                                    </>) : (<>Project Images not added</>)
                                }
                                <div className="modal-action">

                                    <button className="btn" onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    )
}



function ProjectImages({ image }: { image: string[] }) {
    return (
        <div className="carousel w-full">

            {
                image.map((e, index) => {
                    const id = `slide${index}`
                    return (<>
                        <div id={id} className="carousel-item relative w-full">
                            <div className="flex flex-col items-center rounded-lg max-w-5xl mx-auto">
                                <img
                                    src={e}
                                    alt={`${e}'s avatar`}
                                    className="w-40 object-cover rounded-sm"
                                />
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href={index === 0 ? `#slide${image.length - 1}` : `#slide${index - 1}`} className="btn btn-circle">❮</a>
                                <a href={index === image.length - 1 ? `#slide${0}` : `#slide${index + 1}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </>)
                })
            }

        </div >
    )
}
