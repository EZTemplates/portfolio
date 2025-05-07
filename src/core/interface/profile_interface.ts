/**
 * "data": {
        "_id": "6817544e0aef6caeec6f0e03",
        "name": "Gaurav Singh",
        "current_role": "Software Engineer",
        "short_info": "I am a software engineer with 3+ years of experience in building web & mobile applications using React, Node, Flutter, Swift and MongoDB. I am passionate about learning new technologies and building scalable applications.",
        "current_location": "India, Noida",
        "number": 9262715527,
        "email": "connect@igaurav.dev",
        "country": "IND",
        "createdAt": "2025-05-04T11:49:34.492Z",
        "image": "https://gameimagebucket.s3.ap-south-1.amazonaws.com/portfolio/gaurav4149singh@gmail.com/681754590aef6caeec6f0e08.png",
        "resume_link": "https://gameimagebucket.s3.ap-south-1.amazonaws.com/portfolio/gaurav4149singh@gmail.com/resume/6817545f0aef6caeec6f0e0b.pdf",
        "createAt": "2025-05-06 21:57:17"
    }
 */

export interface IProfile {
    _id: string;
    image: string;
    name: string;
    current_role: string;
    short_info: string;
    current_location: string;
    number: number;
    email: string;
    resume_link: string;
    github_link: string;
    linkedin_link: string;
    instagram_link: string;
    x_link: string;
    country: string;
}