import { activities, projects as _projects } from "@leomotors/data";

export const fullVersionLink = "https://resume.leomotors.vercel.app";
export const sourceLink = "https://github.com/Leomotors/resumette";

export const introData = {
  name: "Nutthapat Pongtanyavichai",
  nickname: "Leo",
  phone: import.meta.env.DEV ? import.meta.env.VITE_PHONE : "",
  email: import.meta.env.DEV ? import.meta.env.VITE_EMAIL : "",
  github: "Leomotors",
  linkedin: "leo-nutthapat",
  location: "Samut Prakan, Thailand",
  website: "leomotors.me",
};

export const technologies = [
  {
    section: "Languages:",
    details:
      "C/C++, JavaScript, TypeScript (Strong), Node.js, Python, Dart, C#",
  },
  {
    section: "Preferred Combo:",
    details: "SvelteKit + TailwindCSS, TypeScript",
  },
  {
    section: "Library/Framework:",
    details:
      "React, Next, Vue, Svelte/Kit, Bootstrap, TailwindCSS, Mocha, Jest, discord.js, UWP+WinUI (C++/C#), Flutter, OpenCV, CMake",
  },
  {
    section: "Tools:",
    details:
      "Git, GitHub, VSCode, Visual Studio, zsh, Powershell, ssh, Markdown, LaTeX, Raspberry Pi",
  },
  {
    section: "IaaS, PaaS:",
    details:
      "Vercel, Netlify, GitHub Pages, Github Actions, Firebase (Firestore & Realtime Database), DigitalOcean (Droplet), Microsoft Azure (Functions)",
  },
];

export const educations = [
  {
    head: "Assumption College (Middle School)",
    details: "Gifted, 2016-2019 (GPAX 3.88)",
  },
  {
    head: "Triam Udom Suksa School (High School)",
    details: "Science Math, 2019-2022 (GPAX 3.95)",
  },
  {
    head: "Chulalongkorn University",
    details: "B.Eng. Computer Engineering, 2022-Present",
  },
];

export const workExperiences = [
  {
    position: "Frontend Developer",
    company: "Monkey Everyday",
    url: "https://monkeyeveryday.com/",
    years: "June 2022-Present",
    details: [
      "Maintain monkeyeveryday.com and its CMS with Next.js, TailwindCSS and GraphQL",
    ],
  },
];

export const awards = [...activities.awards, ...activities.activities].map(
  (o) => ({ name: o.title, details: o.resume_desc ?? o.desc })
);

export const projects = [..._projects.big_projects, ..._projects.featured]
  .filter((o) => o.resume_desc != "HIDE")
  .map((o) => ({
    name: o.title,
    details: o.resume_desc ?? o.desc,
    url: o.link.replace(/^https?:\/\//, ""),
  }));

export const interests = [
  "Areas: RGB, Mechanical Keyboard, Anime, Dual Monitor Desk Setup, Windows Insider",
  "Typing: 80-100 WPM (English) 40-50 WPM (Thai)",
  "Games: Any game that can be played with friends happily",
];
