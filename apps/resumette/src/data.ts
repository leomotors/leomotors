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
    years: ["June 2022", "Present"],
    details: [
      "Maintain monkeyeveryday.com and its CMS with Next.js, TailwindCSS and GraphQL",
    ],
  },
];

export const awards = [
  {
    name: "1st Prize in Samsung Innovation Campus: IDEATHON (2019)",
    details:
      "10-day camp learning about programming. IDEATHON is held at the end of the camp to let students apply their knowledge.",
  },
  {
    name: "Silver Medal Award & Determination Award in Thailand Olympiad in Informatics (2021)",
    details:
      "A competition where around 90 students from each center solve algorithmic puzzle. Winning medal award in this competition open chance for students to be accepted by every university including Chulalongkorn.",
  },
  {
    name: "2nd Place in NITAD Hackathon (2022)",
    details:
      "A Hackathon focusing on idea for innovations that solve the garbage problems in low-income community.",
  },
  {
    name: "IPST Camp 2.2 (2022)",
    details:
      "IOI Training Camp to find representative of Thailand, made it to the final selection round with 9 people",
  },
  {
    name: "APIO 2022 Participant",
    details:
      "IOI-Format contest but for Asia-Pacific, featuring very hard algorithmic problems",
  },
  {
    name: "Code in the Wind Participant",
    details: "Game Show for TailwindCSS users in Thailand",
  },
  {
    name: "6th Stupid Hackathon in Thailand, Most Aesthetically Pleasing Award winner",
    details:
      "A Hackathon where you do anything you want without caring about anything. The awards are decided by voting",
  },
];

export const projects = [
  {
    name: "Food Busters",
    details:
      "A team formed for AIS JUMP Thailand Hackathon. My role was the lead developer. My work includes building a sized app to be the prototype for our idea with Flutter, Building websites to list their Prototype, Website, and API for running the Image Classification Model, and Firebase CRUD App for storing and showing awesome quotes.",
    url: "github.com/Food-Busters",
  },
  {
    name: "Crack 'n' Code Pre-TOI18 Programming Contest",
    details:
      "Setting up servers (DigitalOcean Droplet) and CMS (github.com/cms-dev/cms) to hold a programming contest with over 150 registered contestants. I also created the website for this contest:",
    url: "cnc-pretoi18.netlify.app",
  },
  {
    name: "Anime Captcha",
    details:
      "Full-Stack web minigame written in SvelteKit inspired by Anime Captcha Meme. Feel free to try it:",
    url: "anime-captcha.vercel.app",
  },
  {
    name: "Cocoa Discord Utils",
    details:
      "Library on npm created to simplify discord bots making, is used in all of my discord bots",
    url: "github.com/Leomotors/cocoa-discord-utils",
  },
  {
    name: "RTX 2090 TiFy",
    details:
      "An app (GUI) that generates videos inspired by RTX 2090 Ti meme. Used OpenCV and wxWidgets with C++",
    url: "github.com/Leomotors/RTX-2090-TiFy",
  },
  {
    name: "Salim Bot",
    details: "A 'Salim' Discord Bot",
    url: "github.com/Leomotors/Salim-Bot",
  },
  {
    name: "Waifu Bot",
    details:
      "Multipurpose Discord Bot running on my friends' server. Can stream music from YouTube and utilizes many discord.js features. (Embed, Interaction Components, etc.)",
    url: "github.com/Leomotors/waifu-bot",
  },
  {
    name: "@leomotors/music-bot",
    details:
      "Discord Bot for streaming music from YouTube, has search feature and utilize amazing cool embed, is part of waifu bot and leomotors/cminusminus",
    url: "github.com/Leomotors/music-bot",
  },
  {
    name: "Terminal Video Player",
    details:
      "As it name suggests, play a video with ASCII characters in Terminal, it also supports color!",
    url: "github.com/Leomotors/Terminal-Video-Player",
  },
  {
    name: "Golden Frame",
    details:
      'Golden Frame "กรอบทอง" Generator. CLI App written in Python with OpenCV. My first package on PyPI.',
    url: "github.com/Leomotors/golden-frame",
  },
];

export const interests = [
  "Areas: RGB, Mechanical Keyboard, Anime, Dual Monitor Desk Setup, Windows Insider",
  "Typing: 80-100 WPM (English) 40-50 WPM (Thai)",
  "Games: Any game that can be played with friends happily",
];
