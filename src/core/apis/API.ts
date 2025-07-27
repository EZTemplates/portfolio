import axios from "axios";
import { ABOUT, EXPERIENCE, PROFILE, PROJECT_FILTER, PROJECTS, SKILL_OVERVIEW, SKILLS, SOCIAL_LINKS } from "./endpoints";
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

export class API {
    static getDomain() {
        const domain = window.location.hostname;
        if (domain.includes("localhost")) {
            return "igaurav.dev";
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
            about: response.data.data,
            core_strengths: response.data.core_strengths
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
}