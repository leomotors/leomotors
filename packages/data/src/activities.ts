interface IActivity {
  title: string;
  desc: string;
  resume_desc?: string;
  img: string;
  link?: string;
}

export const activities: Record<"awards" | "activities", IActivity[]> = {
  awards: [
    {
      title: "1st Prize in SIC (2019)",
      desc: "Samsung Innovation Campus (2019) is a 10-day camp learning about programming. IDEATHON is held at the end of the camp to let students apply their knowledge.",
      img: "images/innovazione.webp",
      link: "https://news.samsung.com/th/samsung-innovation-campus",
    },
    {
      title: "Silver Medal & Determination Award in TOI17",
      desc: "17th Thailand Olympiad in Informatics is a competition about solving alogrithmic puzzle. This award allows me to be accepted to Chulalongkorn University with no exam",
      resume_desc:
        "17th Thailand Olympiad in Informatics is a competition where around 90 students from each center solve algorithmic puzzle. Winning medal award in this competition open chance for students to be accepted by every university including Chulalongkorn.",
      img: "https://github.com/Leomotors/TOI17-Journey/raw/main/images/certificates/medal.jpg",
      link: "https://github.com/Leomotors/TOI17-Journey",
    },
    {
      title: "2nd Place in NITAD Hackathon (2022)",
      desc: "A Hackathon focusing on idea for innovations that solve the garbage problems in low-income community.",
      img: "images/nitad.webp",
    },
    {
      title:
        "6th Stupid Hackathon in Thailand, Most Aesthetically Pleasing Award winner",
      desc: "A Hackathon where you do anything you want without caring about anything. The awards are decided by voting",
      img: "https://github.com/cunny-SHiT6/yellow-house/raw/main/apps/lighthouse/icon.png",
      link: "https://stupidhackth.github.io/6/#cunny",
    },
  ],
  activities: [
    {
      title: "IPST Camp 2.2",
      desc: "IOI Training Camp to find representative of Thailand, made into the final selection round of 9 people",
      img: "images/imso.webp",
    },
    {
      title: "APIO 2022 Participant",
      desc: "IOI-Format contest but for Asia-Pacific, featuring very hard algorithmic problems",
      img: "https://static.wixstatic.com/media/06f6b3_3b56ae2c16174cb29f76fe1909713853~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/apio%20logo.png",
      link: "https://www.apio2022.org",
    },
    {
      title: "Code in the Wind Participant",
      desc: "Game Show for TailwindCSS users in Thailand",
      img: "images/citw1.webp",
      link: "https://showdown.space/events/code-in-the-wind-1",
    },
  ],
};
