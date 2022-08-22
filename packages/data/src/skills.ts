export interface ISkill {
  name: string;
  img: string;
  star: number;
}

export const skills: Record<
  "proglang" | "webtech" | "appframework" | "others",
  ISkill[]
> = {
  proglang: [
    {
      name: "C",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
      star: 3,
    },
    {
      name: "C++",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
      star: 4,
    },
    {
      name: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
      star: 5,
    },
    {
      name: "TypeScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      star: 5,
    },
    {
      name: "Python",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
      star: 4,
    },
    {
      name: "Dart",
      img: "https://storage.googleapis.com/datanyze-data//technologies/e5412305ba7dcf4b8dca7fe0fe97ecd444ceba25.png",
      star: 3,
    },
    {
      name: "C#",
      img: "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
      star: 2,
    },
    {
      name: "SQL",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      star: 2,
    },
  ],
  webtech: [
    {
      name: "Svelte",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
      star: 5,
    },
    {
      name: "Vue",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
      star: 3,
    },
    {
      name: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      star: 5,
    },
    {
      name: "Firebase",
      img: "https://firebase.google.com/images/brand-guidelines/logo-standard.png",
      star: 2,
    },
    {
      name: "REST API",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--RK-AgEnh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1s3bedypkt7zm8maikzg.png",
      star: 3,
    },
    {
      name: "GraphQL",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
      star: 3,
    },
  ],
  appframework: [
    {
      name: "Flutter",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png",
      star: 4,
    },
    {
      name: "Pygame",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pygame_logo.gif",
      star: 2,
    },
    {
      name: "wxWidgets (C++)",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/WxWidgets.svg/1200px-WxWidgets.svg.png",
      star: 2,
    },
    {
      name: "WinUI 2 (UWP C# .NET and C++/WinRT)",
      img: "https://docs.microsoft.com/th-th/windows/apps/images/logo-winui.png",
      star: 2,
    },
  ],
  others: [
    {
      name: "Discord Bot (discord.js)",
      img: "https://discord.js.org/static/djs_logo.png",
      star: 4,
    },
    {
      name: "GitHub Actions",
      img: "https://avatars.githubusercontent.com/u/44036562?s=280&v=4",
      star: 3,
    },
    {
      name: "CMake",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cmake.svg/1200px-Cmake.svg.png",
      star: 3,
    },
    {
      name: "Raspberry Pi",
      img: "https://www.raspberrypi.com/app/uploads/2022/02/COLOUR-Raspberry-Pi-Symbol-Registered.png",
      star: 3,
    },
    {
      name: "OpenCV",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/1200px-OpenCV_Logo_with_text_svg_version.svg.png",
      star: 3,
    },
  ],
};
