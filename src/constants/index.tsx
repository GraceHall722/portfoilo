import { Photo1, Photo2, Photo3, Telegram, Email } from "../assets";

export const navlinks = [
  {
    id: "home",
    title: "home",
    link: "/",
  },
  {
    id: "about-me",
    title: "aboutMe",
    link: "/about-me",
  },
  {
    id: "projects",
    title: "portfolio",
    link: "/portfolio",
  },
  {
    id: "contact-me",
    title: "contacts",
    link: "/contact-me",
  },
];

export const homeProjects = [
  {
    id: 1,
    image: Photo1,
    skill: "HTML TailwindCss React",
    title: "ChertNodes",
    descr: "Minecraft server glitch Discord anti-crash bot",
    link: "#",
  },
  {
    id: 2,
    image: Photo2,
    skill: "HTML CSS React EthersJs Rust Solana",
    title: "ProtectX",
    descr: "Discord anti-crash bot Discord anti-crash bot",
    link: "#",
  },
  {
    id: 3,
    image: Photo3,
    skill: "HTML TailwindCss React Solidity NextJs",
    title: "Kahoot Answers Viewer",
    descr: "Get answers to your Kahoot quiz",
    link: "#",
  },
];

export const skills = [
  {
    id: 1,
    title: "Language",
    skillBody: "English, Russian",
  },
  {
    id: 2,
    title: "Other",
    skillBody: "English, Russian, English",
  },
  {
    id: 3,
    title: "Framework",
    skillBody: "English, Russian, Russian, English",
  },
  {
    id: 4,
    title: "Tools",
    skillBody: "English, Russian, English, Russian, asdfgh",
  },
  {
    id: 5,
    title: "Web3 Tooling",
    skillBody: "English, Russian, English, Russian, Russian, asdfgh",
  },
];

export const contact = [
  {
    id: 1,
    title: "Message me here",
    icon1: Telegram,
    icon2: Email,
  },
];
