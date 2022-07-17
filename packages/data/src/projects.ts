import Projects from "./projects.json" assert { type: "json" };

interface IProject {
    title: string;
    link: string;
    desc: string;
    resume_desc?: string;
    language?: string;
    img: string;
    bgtl?: boolean;
}

export const projects: Record<"featured" | "big_projects", IProject[]> =
    Projects;
