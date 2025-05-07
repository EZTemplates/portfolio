import { useFetchSkills } from '../../core/hooks/useFetchSkills'
import { skillColorOnLevel } from '../../core/static/functions'

export default function AboutMeSkills() {
    const { data, error } = useFetchSkills()



    if (error || !data) {
        return (
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-red-500/20 text-red-300 border border-red-500/30 rounded-full text-sm">
                    Failed to load skills
                </span>
            </div>
        )
    }



    return (
        <div className="flex flex-wrap gap-2">
            {data.map((skill) => (
                <span
                    key={skill._id || skill.title}
                    className={`px-3 py-1.5 ${skillColorOnLevel(skill.level).topSpan} rounded-full text-sm flex items-center`}
                >
                    <span className={`w-2 h-2 ${skillColorOnLevel(skill.level).innerSpan} rounded-full mr-1.5`}></span>
                    {skill.title}
                </span>
            ))}
        </div>
    )
}
