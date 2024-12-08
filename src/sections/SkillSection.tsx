export default function SkillsSection() {
    const skills = [
        { name: 'React', icon: '/icons/react.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'Node.js', icon: '/icons/nodejs.svg' },
        { name: 'Python', icon: '/icons/python.svg' },
        { name: 'Git', icon: '/icons/git.svg' },

    ];

    return (
        <section className="py-5">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-2">My Skills</h2>
                    <div className="h-1 w-10 bg-primary mt-2"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <img
                                src={skill.icon}
                                alt={`${skill.name} icon`}
                                className="w-16 h-16 mb-3"
                            />
                            <span className="font-medium text-gray-800">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}