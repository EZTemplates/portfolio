import axios from "axios";
import { ABOUT, BLOG_DETAILS, EXPERIENCE, FETCH_BLOGS, PROFILE, PROJECT_FILTER, PROJECTS, SKILL_OVERVIEW, SKILLS, SOCIAL_LINKS } from "./endpoints";
import { IProjectFilter } from "../interface/project_filter_interface";
import { IProfile } from "../interface/profile_interface";
import { ISocialLink } from "../interface/social_link_interface";
import { IAboutInterface } from "../interface/about_interface";
import { ICoreStrengthInterface } from "../interface/core_strength_interface";
import { ISkill } from "../interface/skills_interfac";
import { IExperience } from "../interface/experience_interface";
import { IProject } from "../interface/project_interface";
import { SelectedFilter } from "../store/useFilterStore";
import { ISkillOverview } from "../interface/skill_overview_interface";
import { IBlog, IBlogItem } from "../interface/blog_item_interface";

export class API {
    static getDomain() {
        const domain = window.location.hostname;
        if (domain.includes("localhost")) {
            return "frenzycoder.biosites.in";
        }
        return domain;
    }
    static async getProjectFilter(): Promise<IProjectFilter> {
        const response = await axios.get(PROJECT_FILTER + `?domain=${this.getDomain()}`)
        return response.data.data as IProjectFilter
    }

    static async getProfile(): Promise<IProfile> {
        const response = await axios.get(PROFILE + `?domain=${this.getDomain()}`)
        return response.data.data as IProfile
    }

    static async getSocialLinks(): Promise<ISocialLink[]> {
        const response = await axios.get(SOCIAL_LINKS + `?domain=${this.getDomain()}`)
        return response.data.data as ISocialLink[]
    }

    static async getAbout(): Promise<{
        about: IAboutInterface,
        core_strengths: ICoreStrengthInterface[]
    }> {
        const response = await axios.get(ABOUT + `?domain=${this.getDomain()}`)
        return {
            about: response.data.data ?? {
                subheading: "Not Available",
                about_me: "Not Available",
                my_specialization_details: "Not Available",
                beyond_skills_details: "Not Available",
                projects_highlights: "Not Available",
                email: "Not Available",
                open_to_work: false
            },
            core_strengths: response.data.core_strengths ?? [
                { name: "Not Available", current_points: 0, max_points: 100 },
                { name: "Not Available", current_points: 0, max_points: 100 },
                { name: "Not Available", current_points: 0, max_points: 100 }
            ]
        }
    }

    static async getSkills(): Promise<ISkill[]> {
        const response = await axios.get(SKILLS + `?domain=${this.getDomain()}`)
        return response.data.data as ISkill[]
    }

    static async getExperience(): Promise<IExperience[]> {
        const response = await axios.get(EXPERIENCE + `?domain=${this.getDomain()}`)
        return response.data.data as IExperience[]
    }

    static async getProjects(page: number, filter: SelectedFilter): Promise<{
        projects: IProject[],
        nextPage: number | null,
        hasNextPage: boolean
    }> {
        let url = PROJECTS + `?domain=${this.getDomain()}&page=${page}&limit=10`
        if (filter.status !== "All") {
            url += `&status=${filter.status}`
        }
        if (filter.type !== "All") {
            url += `&type=${filter.type}`
        }
        if (filter.skill !== "All") {
            url += `&skills=${filter.skill}`
        }
        const response = await axios.get(url)
        return {
            projects: response.data.projects,
            nextPage: response.data.nextPage,
            hasNextPage: response.data.hasNextPage
        }
    }

    static async getSkillOverview(): Promise<ISkillOverview> {
        const response = await axios.get(SKILL_OVERVIEW + `?domain=${this.getDomain()}`)
        return response.data.data as ISkillOverview
    }


    static async getBlogs(page: number): Promise<{
        blogs: IBlogItem[],
        nextPage: number | null,
        hasNextPage: boolean,
        total: number
    }> {
        const response = await axios.get(FETCH_BLOGS + `?domain=${this.getDomain()}&page=${page}&limit=10`)
        return {
            blogs: response.data.blogs,
            nextPage: response.data.nextPage,
            hasNextPage: response.data.hasNextPage,
            total: response.data.total,
        }
    }


    static async fetchBlogDetails(id: string): Promise<IBlog> {
        const response = await axios.get(`${BLOG_DETAILS}/${id}?domain=${this.getDomain()}`)
        // Try both response.data.data and response.data
        return (response.data.data || response.data) as IBlog
    }
}