/**
 * 
 * {
        "_id": "6817b7be0b2075af5b1464e8",
        "email": "connect@igaurav.dev",
        "subheading": "My journey as a software engineer, from freelance work to corporate roles, and my passion for building innovative applications.",
        "about_me": "I'm a passionate software engineer with over 3 years of experience in building web and mobile applications. My journey in tech has taken me from freelance work to corporate roles, each adding to my technical expertise and problem-solving capabilities.",
        "my_specialization_details": "I specialize in full-stack development, creating seamless experiences from frontend to backend. My approach combines technical excellence with creative problem-solving to build applications that are not just functional but delightful to use.",
        "beyond_skills_details": "Beyond technical skills, I value continuous learning, collaborative teamwork, and adaptability. As my family's main provider, I've developed resilience and commitment that extends to my professional work, where I consistently deliver high-quality solutions on time.",
        "projects_highlights": "I've worked on a diverse range of projects, from real-time matchmaking platforms to marketing applications with map integration and remote control apps. Each project has been an opportunity to solve unique challenges and create impactful solutions.",
        "open_to_work": true
    }
 */

export interface IAboutInterface {
    _id: string;
    email: string;
    subheading: string;
    about_me: string;
    my_specialization_details: string;
    beyond_skills_details: string;
    projects_highlights: string;
    open_to_work: boolean;
}