import {
  Photo1,
  Photo2,
  Telegram,
  Email,
  Pizza,
  streamvibe,
  CryptoDashboard,
  Swift,
  WalletBalance,
  Travel,
} from "../assets";

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
    image: CryptoDashboard,
    skill: "Next.js TailwindCss Typescript AlchemyAPI",
    title: "Crypto- Dashboard",
    descr:
      "A web3 dashboard that aggregates all user wallet values in real time.",
    link: "#",
  },
  {
    id: 2,
    image: streamvibe,
    skill: "Typescript React TailwindCss RestAPI Figma",
    title: "StreamVibe Movie WebApp",
    descr:
      "A Movie Streaming WebApp. Built with Typescxript and React, using RapidApi to fetch movie data to the frontend.",
    link: "#",
  },
  {
    id: 3,
    image: Pizza,
    skill: "HTML Css Tailwindcss React Javascript",
    title: "Pizza Resturant App",
    descr:
      "With this app users can place an order for thier favourite pizza. A user can also choose to add a priority fee to hasten the delivery time.",
    link: "https://pizza-resturant-mu.vercel.app/",
  },
];

export const smallProjects = [
  {
    id: 1,
    skill: "HTML TailwindCss React",
    title: "ChertNodes",
    descr: "Minecraft server glitch Discord anti-crash bot",
    link: "#",
  },
  {
    id: 2,
    skill: "HTML CSS React EthersJs Rust Solana",
    title: "ProtectX",
    descr: "Discord anti-crash bot Discord anti-crash bot",
    link: "#",
  },
];

export const smallProjects2 = [
  {
    id: 1,
    skill: "HTML TailwindCss React Solidity NextJs",
    title: "Kahoot Answers Viewer",
    descr: "Get answers to your Kahoot quiz",
    link: "#",
  },
  {
    id: 2,
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
    skillBody: "HTML CSS Javascript Typescript Solidity Rust",
  },
  {
    id: 2,
    title: "Web3 Tooling",
    skillBody: "Ethers.js Web3.js Anchor-CLI Thirdweb Foundry Hardhat",
  },
  {
    id: 3,
    title: "Framework/ Library",
    skillBody: "Next.js React.js TailwindCSS Vue.js",
  },
  {
    id: 4,
    title: "Networks",
    skillBody:
      "Ethereum Polygon Solana Biance-Smart-Chain Polkadot Avalanche Flow",
  },
  {
    id: 5,
    title: "Others",
    skillBody: "Figma Git GraphQL Node.js, Russian asdfgh",
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

export const tech1 = [
  {
    id: 1,
    title: "Javascript (ES6+)",
  },
  {
    id: 2,
    title: "Typescript",
  },
  {
    id: 3,
    title: "Solidity",
  },
  {
    id: 4,
    title: "Rust",
  },
  {
    id: 5,
    title: "Tailwindcss",
  },
  {
    id: 6,
    title: "Ethereum (EVM Chains)",
  },
  {
    id: 7,
    title: "Solana",
  },
  {
    id: 8,
    title: "IPFS",
  },
];

export const tech2 = [
  {
    id: 1,
    title: "Ethers.Js",
  },
  {
    id: 2,
    title: "React.Js",
  },
  {
    id: 3,
    title: "Next.Js",
  },
  {
    id: 4,
    title: "Foundry",
  },
  {
    id: 5,
    title: "Hardhat",
  },
  {
    id: 6,
    title: "Figma",
  },
];

export const webProjects = [
  {
    id: 1,
    image: CryptoDashboard,
    tag: "DApp",
    skill: "Next TailwindCss TailwindCss Ethers Subgraphs AlchemyAPI Figma",
    title: "CryptoDashboard",
    descr:
      "A web3 dashboard that aggregates all user portfolio values in real time. The DApp also aggregates relevant crypto data such as news, token prices, etc into clean UI.",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    image: streamvibe,
    tag: "WebApp Project",
    skill: "HTML TailwindCss React Figma Typescript",
    title: "Streamvibe Movie WebApp ",
    descr:
      "A Movie Streaming WebApp. Built with Typescxript and React, using Api to fetch movie data. StreamVibe is the best streaming experience for watching your favorite movies.",
    link: "#",
    github: "https://github.com/Patrick-Ehimen/streamvibes-movies-app",
  },
  {
    id: 3,
    image: Photo2,
    tag: "DApp Project",
    skill: "HTML TailwindCss React",
    title: "sgdhfjf",
    descr:
      "A web3 dashboard that aggregates all user portfolio values in real time. Minecraft server glitch Discord.",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    image: Travel,
    tag: "Web App",
    skill: "TailwindCss React Javascript",
    title: "Travel Journal",
    descr:
      "This project is a web app, designed to track and display cities and countries that a user has visited. It features a dynamic map, authentication, and a responsive design.",
    link: "https://m2e-landing-page.vercel.app/",
    github: "https://github.com/Patrick-Ehimen/travel-journal",
  },
  {
    id: 5,
    image: Pizza,
    tag: "WebApp Project",
    skill: "CSS React Javascript",
    title: "Pizza Resturant",
    descr:
      "With this app users can place an order for thier favourite pizza. User can also choose to add a priority fee to hasten the delivery time.",
    link: "https://pizza-resturant-mu.vercel.app/",
    github: "https://github.com/Patrick-Ehimen/PizzaResturant",
  },
  {
    id: 6,
    image: Swift,
    tag: "DApp Project",
    skill: "TailwindCss React Javascript Figma",
    title: "Swift Blockchain LandingPage",
    descr:
      "A simple langing page for a Blockchain network. Built with Javascript+React and styled with tailwindcss.",
    link: "https://m2e-landing-page.vercel.app/",
    github: "https://github.com/Patrick-Ehimen/m2e-landing-page",
  },
  {
    id: 7,
    image: WalletBalance,
    tag: "Web3 Project",
    skill: "CSS Javascript Next Moralis",
    title: "erc20-token-balances",
    descr:
      "A simple UI used to interact and read data from the blockchain. With this DApp users can find the balance of any ERC20 token.",
    link: "https://wallet-token-balances.vercel.app/",
    github: "https://github.com/Patrick-Ehimen/wallet-token-balances",
  },
  {
    id: 8,
    image: Photo2,
    tag: "Web3 Project",
    skill: "HTML TailwindCss Next",
    title: "solana-token-balance",
    descr:
      "A simple UI used to read data from the solana blockchain. With this DApp users can find the balance of any sol token.",
    link: "#",
    github: "#",
  },
  {
    id: 9,
    image: Photo2,
    skill: "HTML TailwindCss React",
    title: "bnmdfasdffvkkk",
    descr: "Minecraft server glitch Discord anti-crash bot",
    link: "#",
    github: "#",
  },
  {
    id: 10,
    image: Photo2,
    skill: "HTML TailwindCss React",
    title: "bnmdfasdffvkkk",
    descr: "Minecraft server glitch Discord anti-crash bot",
    link: "#",
    github: "#",
  },
];

export const webProjects2 = [
  {
    id: 1,
    image: Photo2,
    tag: "DApp",
    skill: "Solidity Foundry ChainLink Openzeppelin",
    title: "OSE Stablecoin",
    descr:
      "This project is a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
    link: "#",
    github: "https://github.com/Patrick-Ehimen/OSE-StableCoin",
  },
  {
    id: 2,
    image: Pizza,
    tag: "DApp",
    skill: "HTML TailwindCss React",
    title: "ABCDEF",
    descr:
      "This project is a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    image: Photo2,
    tag: "DApp Project",
    skill: "HTML TailwindCss React",
    title: "sgdhfjf",
    descr:
      "This project is a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    image: Photo1,
    tag: "DApp Project",
    skill: "HTML TailwindCss React",
    title: "Travel  journal",
    descr:
      "This project is a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    image: Photo2,
    tag: "DApp Project",
    skill: "Hardhat Solidity React",
    title: "Decentralised-Bank",
    descr:
      "Decentralised Bank offers account creation, fund management, and security features for decentralized finance.",
    link: "#",
    github: "#",
  },
];

export const project1 = [
  {
    id: 1,
    name: "CryptoWhale DApp",
  },
  {
    id: 2,
    name: "Streamvibe App ",
  },
  {
    id: 3,
    name: "NFTMarketPlace",
  },
  {
    id: 4,
    name: "Travel Journal",
  },
  {
    id: 5,
    name: "Pizza Resturant",
  },
  {
    id: 6,
    name: "Swift Blockchain ",
  },
  {
    id: 7,
    name: "erc20-token-bal",
  },
  {
    id: 8,
    name: "solana-token-bal",
  },
  {
    id: 9,
    name: "Decentra-Bank",
  },
  {
    id: 10,
    name: "Multihain DApp",
  },
];

export const project2 = [
  {
    id: 1,
    name: "OSE stablecoin",
  },
  {
    id: 2,
    name: "NFTMarketPlace",
  },
  {
    id: 3,
    name: "CryptoWhale DApp",
  },
  {
    id: 4,
    name: "Multihain DApp",
  },
  {
    id: 5,
    name: "Decentra-Bank",
  },
];
