/**
 * {
            "_id": "681754700aef6caeec6f0e10",
            "start_date": "2022-01-07T18:30:00.000Z",
            "end_date": "2023-01-03T18:30:00.000Z",
            "role": "Full Stack Developer",
            "company": "Magadh Digital Solutions",
            "short_work_description": "Led mobile and web application development using Flutter, Node.js, and React.js, delivering innovative technological solutions.",
            "skills": [
                "Flutter",
                "Node.js",
                "React.js",
                "Socket.IO",
                "Team Leadership",
                "MongoDB"
            ],
            "achievents": [
                "Spearheaded Android app development using Flutter",
                "Managed efficient teams for both Flutter and Node.js projects",
                "Successfully tackled various tasks in React.js",
                "Implemented solutions with Socket.IO for real-time communication",
                "Integrated Google Maps API for location-based services"
            ],
            "present": false
        }
 */

export interface IExperience {
    _id: string;
    start_date: string;
    end_date: string;
    role: string;
    company: string;
    short_work_description: string;
    skills: string[];
    achievents: string[];
    present: boolean;
}