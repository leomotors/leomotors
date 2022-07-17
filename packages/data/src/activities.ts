import Activities from "./activities.json" assert { type: "json" };

interface IActivity {
    title: string;
    desc: string;
    resume_desc?: string;
    img: string;
    link?: string;
}

export const activities: Record<"awards" | "activities", IActivity[]> =
    Activities;
