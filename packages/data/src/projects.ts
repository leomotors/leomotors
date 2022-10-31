export interface IProject {
  title: string;
  link: string;
  desc: string;
  resume_desc?: string;
  language?: string;
  img: string;
  bgtl?: boolean;
}

export const projects: Record<"featured" | "big_projects", IProject[]> = {
  featured: [
    {
      title: "RTX 2090 TiFy",
      link: "https://github.com/Leomotors/RTX-2090-TiFy",
      desc: "Meme maker as shown in the GIF, GUI C++ Program with wxWidgets and OpenCV",
      resume_desc:
        "RTX 2090 Ti Meme maker (Video generator), GUI C++ Program with wxWidgets and OpenCV",
      language: "C++",
      img: "https://github.com/Leomotors/RTX-2090-TiFy/blob/main/assets/linus-example.gif?raw=true",
    },
    {
      title: "Anime Captcha",
      link: "https://github.com/Leomotors/anime-captcha",
      desc: "You may have seen Anime Captcha meme, I recreate that in website! available for you to try!",
      resume_desc:
        "Full-Stack web minigame written in SvelteKit inspired by Anime Captcha Meme. Feel free to try it:",
      language: "Svelte",
      img: "images/anime-captcha.webp",
      bgtl: true,
    },
    {
      title: "Leomotors Monorepo",
      link: "https://github.com/Leomotors/Leomotors",
      desc: "Monorepo including my main homepage, resume and portfolio you may be seeing right now. And other scripts such as data scraper.",
      language: "TypeScript",
      img: "images/leomotors-www.webp",
    },
    {
      title: "You are a Failure!",
      link: "https://github.com/Leomotors/you-are-a-failure",
      desc: "My first UWP Desktop C# App to fire up your motivation. Published to Microsoft Store",
      language: "C#",
      img: "https://c.tenor.com/mt2Vk3J0GPwAAAAC/failure-steven-he.gif",
    },
    {
      title: "Golden Frame",
      link: "https://github.com/Leomotors/golden-frame",
      desc: 'Golden Frame "กรอบทอง" Generator. CLI App written in Python with OpenCV. My first package on PyPI',
      language: "Python",
      img: "https://github.com/Leomotors/blog/raw/main/.gitbook/assets/image.png",
    },
    {
      title: "Simple RLC Calculator",
      link: "https://github.com/Leomotors/Simple-RLC-Calculator",
      desc: "Simple RLC Calculator with Visualization & GUI. Have used this during mid-term exam (not that useful lol), Made with pygame",
      resume_desc:
        "Simple RLC Calculator (AC Circuit) with Visualization & GUI. Have used this during mid-term exam, Made with pygame",
      language: "Python",
      img: "images/RLC.webp",
    },
    {
      title: "My Portfolio",
      link: "https://github.com/Leomotors/Leomotors",
      desc: "THIS Website you are seeing right now! Written in SvelteKit + TailwindCSS and no UI Framework",
      resume_desc: "HIDE",
      language: "Svelte",
      img: "https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg?size=626&ext=jpg",
    },
    {
      title: "Mini Vector Calculator",
      link: "https://github.com/Leomotors/Mini-Vector-Calculator",
      desc: "My First ever project, CLI program written in C as my school project. Do what its name says",
      language: "C",
      img: "images/c-vec-calc.webp",
    },
    {
      title: "Terminal Video Player",
      link: "https://github.com/Leomotors/Terminal-Video-Player",
      desc: "Video player in terminal driven by ASCII Characters. RIP My Eyes, built with OpenCV and some audio libraries",
      resume_desc:
        "Video player in terminal driven by ASCII Characters. Built with OpenCV and some audio libraries",
      language: "C++",
      img: "images/tokimekipoporon.webp",
    },
    {
      title: "Cocoa Discord Utils",
      link: "https://github.com/Leomotors/cocoa-discord-utils",
      desc: "A npm library I created to simplify creating complex discord bots with many slash commands, is used in all my discord bots",
      language: "TypeScript",
      img: "images/cdu.webp",
    },
    {
      title: "Salim Bot",
      link: "https://github.com/Leomotors/Salim-Bot",
      desc: "My First Ever Discord Bot, useless but fun to play with! Currently *active* in my friend's server",
      language: "TypeScript",
      img: "images/salim-bot.webp",
      bgtl: true,
    },
    {
      title: "Cocoa Grader",
      link: "https://github.com/Leomotors/cocoa-grader",
      desc: "'Waifu Discord Bot' A Discord Bot that will grade your code just like normal grader. Using cocoa-discord-utils",
      resume_desc:
        "A Discord Bot that will grade your code just like normal grader. Using cocoa-discord-utils",
      language: "TypeScript",
      img: "images/cocoa-grader.webp",
    },
    {
      title: "Music Bot",
      link: "https://github.com/Leomotors/music-bot",
      desc: "An npm library that ships a Discord Music Bot that can stream and send some amazing embeds",
      language: "TypeScript",
      img: "https://github.com/Leomotors/music-bot/raw/main/images/search2.png",
    },
    {
      title: "Waifu Bot",
      link: "https://github.com/Leomotors/waifu-bot",
      desc: "Most advanced (or over-engineered?) discord bot. Has miscellanous feature and also is a music bot, Feature a full-stack web application.",
      resume_desc:
        "Most advanced (or over-engineered?) discord bot. Capable of doing miscellaneous things with Discord API like embeds. Can stream musics and also feature a full-stack web application (Next, Nest, GraphQL) for users to configure their personal playlist",
      language: "TypeScript",
      img: "https://c.tenor.com/KI8wOfAPyagAAAAd/shikimori-anime-girl.gif",
    },
  ],
  big_projects: [
    {
      title: "CU Get Reg",
      link: "https://github.com/thinc-org/cugetreg",
      desc: "Collaborated to CU Get Reg, the app to help plan enrolling courses in Chulalongkorn University. Used by most of Chulalongkorn Students because it is very useful app.",
      img: "https://user-images.githubusercontent.com/33742791/142388797-fa14bcfa-b01e-45ab-a271-bfdeeb26285f.png",
    },
    {
      title: "Food Busters",
      link: "https://github.com/Food-Busters",
      desc: "Participated in AIS Jump Thailand Hackathon, Our goal is to make innovation that reduces pollution from food wastes",
      resume_desc:
        "A team formed for AIS JUMP Thailand Hackathon. My role was the lead developer. My work includes building a sized app to be the prototype for our idea with Flutter, Building websites to list their Prototype, Website, and API for running the Image Classification Model, and Firebase CRUD App for storing and showing awesome quotes",
      img: "images/somwua.webp",
    },
    {
      title: "Crack 'n' Code",
      link: "https://github.com/crackncode-th",
      desc: "Holding a programming competition with over 150 contestants",
      resume_desc:
        "Setting up servers (DigitalOcean Droplet) and CMS (github.com/cms-dev/cms) to hold a programming contest with over 150 registered contestants. I also created the website for this contest",
      img: "https://avatars.githubusercontent.com/u/104977669?s=200&v=4",
    },
  ],
};
