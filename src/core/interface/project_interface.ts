/**
 * {
            "_id": "6817552e97dd25c5597564b1",
            "status": "In Progress",
            "name": "Perkly",
            "startAt": "2021-01-05T18:30:00.000Z",
            "type": "Personal",
            "short_description": "GetYourSquad is a platform for PUBG players to find teammates. Users create accounts, post game details",
            "maintainers": [
                {
                    "_id": "6817671af7e77a6c85b82395",
                    "projectId": "6817552e97dd25c5597564b1",
                    "name": "Jack Richer",
                    "email": "connect@igaurav.dev",
                    "linkedIn": "https://www.linkedin.com/in/gaurav-kumar-1360b3231/",
                    "github": "https://github.com/frenzycoder7",
                    "twitter": "https://x.com/frenzycoder",
                    "website": "https://igaurav.dev",
                    "instagram": "https://instagram.com/dev.igaurav",
                    "createdAt": "2025-05-04T13:09:46.268Z",
                    "updatedAt": "2025-05-04T13:22:33.880Z"
                }
            ],
            "contributors": [
                {
                    "_id": "6817671af7e77a6c85b82395",
                    "projectId": "6817552e97dd25c5597564b1",
                    "name": "Jack Richer",
                    "email": "connect@igaurav.dev",
                    "linkedIn": "https://www.linkedin.com/in/gaurav-kumar-1360b3231/",
                    "github": "https://github.com/frenzycoder7",
                    "twitter": "https://x.com/frenzycoder",
                    "website": "https://igaurav.dev",
                    "instagram": "https://instagram.com/dev.igaurav",
                    "createdAt": "2025-05-04T13:09:46.268Z",
                    "updatedAt": "2025-05-04T13:22:33.880Z"
                }
            ],
            "technologies": [
                "Nest.js",
                "React.js"
            ],
            "logo": "https://gameimagebucket.s3.ap-south-1.amazonaws.com/portfolio/gaurav4149singh@gmail.com/project-6817552e97dd25c5597564b1/6817552e97dd25c5597564b1.png"
        }   
 */

export interface IProject {
    _id: string;
    name: string;
    startAt: Date;
    type: "Personal" | "Company" | "Open Source" | "Freelance";
    status: "In Progress" | "Completed";
    short_description: string;
    maintainers: IContributor[];
    contributors: IContributor[];
    technologies: string[];
    source_code: string;
    website_link: string;
    play_store_link: string;
    app_store_link: string;
    logo: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IContributor {
    _id: string;
    projectId: string;
    name: string;
    email: string;
    user_id: string;
    linkedIn: string;
    github: string;
    twitter: string;
    website: string;
    instagram: string;
}