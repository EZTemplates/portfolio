/**
 * "data": {
        "status": [
            "All",
            "In Progress",
            "Completed"
        ],
        "type": [
            "All",
            "Personal",
            "Company",
            "Open Source",
            "Freelance"
        ],
        "skills": [
            "All",
            "Nest.js"
        ]
    }
 */

export interface IProjectFilter {
    status: string[]
    type: string[]
    skills: string[]
}