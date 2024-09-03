interface ISkillItem {
    name: string;
    icon: string;
    progress_percentage: number;
}
export default function HomeSkillsSection() {

    const skills: ISkillItem[] = [
        { name: "Flutter", icon: "/skills_images/flutter.png", progress_percentage: 70 },
        { name: "React", icon: "/skills_images/reactjs.png", progress_percentage: 50 },
        { name: "Javascript", icon: "/skills_images/javascript.png", progress_percentage: 80 },
        { name: "Docker", icon: "/skills_images/docker.png", progress_percentage: 30 },
        { name: "Linux", icon: "/skills_images/linux.png", progress_percentage: 80 },
        { name: "Mongodb", icon: "/skills_images/mongodb.png", progress_percentage: 60 },
        { name: "Nest.JS", icon: "/skills_images/nest.png", progress_percentage: 60 },
        { name: "Node.JS", icon: "/skills_images/nodejs.png", progress_percentage: 80 },
        { name: "Redis", icon: "/skills_images/redis.png", progress_percentage: 55 },
        { name: "SwiftUI", icon: "/skills_images/swift.png", progress_percentage: 55 },
        { name: "Typescript", icon: "/skills_images/typescript.png", progress_percentage: 55 },
        { name: "Nginx", icon: "/skills_images/nginx.png", progress_percentage: 90 },
    ]

    return (
        <div data-theme="dim">
            <div className="container m-auto flex flex-col gap-3 p-10">
                <span className="text-3xl lg:text-5xl text-white text-center">My Skills</span>
                <span className="text-white text-center">I have worked on various technologies and tools. Here are some of them.</span>
                <div className="grid md:grid-cols-4 grid-cols-3 gap-2">
                    {
                        skills.map((skill, index) => (
                            <>
                                <div key={index} className="shadow-xl w-full bg-slate-700 rounded p-3 flex flex-col justify-center items-center lg:justify-start lg:items-start">
                                    <img src={skill.icon} alt="" className="h-8 w-8 lg:h-10 lg:w-10 lg:mt-2" />
                                    <span className="text-white font-serif lg:text-2xl lg:mt-2 lg:mb-2">{skill.name}</span>
                                    <progress className="progress progress-primary mt-2" value={skill.progress_percentage} max="100">67</progress>
                                </div>
                            </>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
