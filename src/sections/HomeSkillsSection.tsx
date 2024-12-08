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
        <div>
            <div className="container m-auto flex flex-col gap-3 py-6 px-4">
                <div className="mb-5">
                    <h2 className="text-3xl font-bold mb-2">My Skills</h2>
                    <div className="h-1 w-10 bg-primary mt-2"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {
                        skills.map((skill) => (
                            <a
                                href="https://www.buymeacoffee.com/YOUR_USERNAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-950 text-white font-medium rounded-lg transition-colors"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="h-4 w-4 mr-2"
                                />
                                {skill.name}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
