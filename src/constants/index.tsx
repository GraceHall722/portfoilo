import {
  Photo2,
  Telegram,
  Email,
  Pizza,
  streamvibe,
  WalletBalance,
  Travel,
  imgg1,
  imgg2,
  imgg3,
  imgg4,
  PortR,
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
    image: PortR,
    skill: "React.js TailwindCss Typescript AlchemyAPI Figma",
    title: "Port-Radar",
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
    skillBody:
      "Ethers.js Web3.js Anchor-CLI Thirdweb Alchemy-APIs Foundry Hardhat",
  },
  {
    id: 3,
    title: "Framework/ Library",
    skillBody: "Next.js React.js TailwindCSS Vue.js ShadcnUI Bootstrap",
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
    skillBody: "Figma Git GraphQL Subgraphs Node.js ",
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
  {
    id: 9,
    title: "Redux",
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
  {
    id: 7,
    title: "Subgraphs",
  },
  {
    id: 8,
    title: "Alchemy APIs",
  },
];

export const webProjects = [
  {
    id: 1,
    image: PortR,
    tag: "DApp",
    skill: "ReatJs TailwindCss 0xAPI IPFS Ethers AlchemyAPI Figma",
    title: "PortRadar DApp (Under Development)",
    descr:
      "A web3 dashboard that aggregates all user portfolio values in real time. The DApp also aggregates relevant crypto data such as news, token prices, into clean UI.",
    link: "#",
    github: "https://github.com/Patrick-Ehimen/PortRadar",
  },

  {
    id: 2,
    image: Photo2,
    tag: "DApp Project",
    skill: "Styled-Components React React-Query ",
    title: "The Wild Oasis",
    descr:
      "A Hotel management app - A React web application that allows hotel employees to manage cabins, bookings, and guests.",
    link: "https://the-wild-oasis-zeta-coral.vercel.app/",
    github: "https://github.com/Patrick-Ehimen/the-wild-oasis",
  },
  {
    id: 3,
    image: Travel,
    tag: "Web App",
    skill: "TailwindCss React Javascript",
    title: "Travel Journal",
    descr:
      "This project is a web app, designed to track and display cities and countries that a user has visited. It features a dynamic map, authentication, and a responsive design.",
    link: "https://travel-journal-nu.vercel.app/",
    github: "https://github.com/Patrick-Ehimen/travel-journal",
  },
  {
    id: 4,
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
    id: 5,
    image: WalletBalance,
    tag: "Web3 Project",
    skill: "CSS Javascript Next Moralis",
    title: "erc20-token-balances",
    descr:
      "A simple UI used to interact and read data from the blockchain. With this DApp users can find the balance of any ERC20 token.",
    link: "https://wallet-token-balances.vercel.app/",
    github: "https://github.com/Patrick-Ehimen/wallet-token-balances",
  },
];

export const webProjects2 = [
  {
    id: 1,
    image: imgg1,
    tag: "Smart Contract",
    skill: "Solidity Foundry Uniswap-V4 Openzeppelin",
    title: "Uniswap-v4-tp-hook",
    descr:
      "This project demonstrates the implementation of a 'take-profit' orders hook for Uniswap v4. ",
    link: "#",
    github: "https://github.com/Patrick-Ehimen/uniswap-v4-tp-hook",
  },
  {
    id: 2,
    image: imgg2,
    tag: "Smart Contract",
    skill: "Solidty Hardhat",
    title: "Merkle Distributor Airdrop",
    descr:
      "This project is a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
    link: "#",
    github: "https://github.com/Patrick-Ehimen/merkle-airdrop",
  },
  {
    id: 3,
    image: imgg3,
    tag: "Smart Contract",
    skill: "Solidity Foundry Uniswap-V2",
    title: "UniswapV2 flashloan",
    descr:
      "This is a flashloan contract that is build on UniswapV2. You can borrow x token from a transaction pair, but repay with y token.",
    link: "#",
    github: "https://github.com/Patrick-Ehimen/uniswapV2-flashLoan",
  },
  {
    id: 4,
    image: imgg4,
    tag: "Smart Contract",
    skill: "Foundry Solidity Polygon",
    title: "Decentralised-Bank",
    descr:
      "Decentralised Bank offers account creation, fund management, and security features for decentralized finance.",
    link: "#",
    github: "https://github.com/Patrick-Ehimen/BankingDApp__Foundry",
  },
  {
    id: 5,
    image: imgg4,
    tag: "Smart Contract",
    skill: "Foundry Solidity",
    title: "Esan-DAO",
    descr:
      "This project implements a decentralized governance system using Solidity and OpenZeppelin contracts.",
    link: "#",
    github: "https://github.com/Patrick-Ehimen/esan-DAO",
  },
  {
    id: 6,
    image: imgg1,
    tag: "Smart Contract",
    skill: "Hardhat Javascript Solidity",
    title: "ERC20 Token",
    descr:
      "This is an ERC20 token that has been deployed across three EVM blockchains: Ethereum, Polygon, and Binance Smart Chain.",
    link: "#",
    github: "https://github.com/Patrick-Ehimen/ERC20-Token",
  },
];

export const project1 = [
  {
    id: 1,
    name: "PortRadar DApp",
  },
  {
    id: 2,
    name: "The Wild Oasis",
  },
  {
    id: 3,
    name: "Travel Journal",
  },
  {
    id: 4,
    name: "Pizza Resturant",
  },
  {
    id: 5,
    name: "erc20-token-bal",
  },
];

export const project2 = [
  {
    id: 1,
    name: "uniswapV4-tp-hook",
  },
  {
    id: 2,
    name: "Merkle Airdrop",
  },
  {
    id: 3,
    name: "UniV2 flashloan",
  },
  {
    id: 4,
    name: "Decentra-Bank",
  },
  {
    id: 5,
    name: "Esan-DAO",
  },
  {
    id: 6,
    name: "ERC20 Token",
  },
];
