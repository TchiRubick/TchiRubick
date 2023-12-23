import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import type { Project } from "@/types";

const LIST: Project[] = [
  {
    title: "Revly",
    preview: "/revly.PNG",
    description:
      "Managing your marketing on multiple delivery platforms is a big hassle! We give you and your team the right tool to fuel your visibility and craft the best growth strategy for your brands on delivery platforms.",
    github: null,
    url: "https://www.revly.ae",
    technologies: ["ReactJS", "Material UI", "Ant Design"],
    states: ["collaborator", "ongoing", "partenariat", "best"],
  },
  {
    title: "Refuge des hauts",
    preview: "/rdh.PNG",
    description:
      "Website synced with Booking.com availability without relying to Booking.com for each check-in. Fees free.",
    github: "https://github.com/TchiRubick/refuges",
    url: "https://refugedeshauts.vercel.app",
    technologies: [
      "NextJS",
      "TRPC",
      "Vercel",
      "Scraping",
      "Host hub partenariat",
    ],
    states: ["lead", "contractor", "ongoing"],
  },
  {
    title: "Ooay",
    preview: "/ooay.PNG",
    description: "Business showcase website",
    github: "https://github.com/TchiRubick/OOAY",
    url: "https://ooay.vercel.app",
    technologies: ["NextJS", "TRPC", "Vercel"],
    states: ["lead", "contractor", "ongoing", "lowcost"],
  },
  {
    title: "Hagnere-app",
    preview: "/hagnere.PNG",
    description:
      "Hagnéré Patrimoine offers tailor-made investment projects in unfurnished or furnished rental real estate (customized strategy to be defined with our experts) with guaranteed high returns!",
    github: null,
    url: "https://hagnere-investissement.fr",
    technologies: ["Laravel", "jQuery", "MySQL"],
    states: ["contractor", "droped", "partenariat"],
  },
  {
    title: "SIRHPLUS",
    preview: "/sirh.PNG",
    description:
      "Gain efficiency and facilitate communication and collaboration within your company with our innovative HR solution.",
    github: null,
    url: "https://www.sirhplus.fr",
    technologies: ["NextJs", "Symfony", "Docker", "MySQL"],
    states: ["contractor", "lead", "droped", "partenariat"],
  },
  {
    title: "Evasion Academy Boutique",
    preview: "/eeb.PNG",
    description: "E-commerce platform for Evasion Evolution",
    github: null,
    url: "https://evasionacademyboutique.com",
    technologies: ["Prestashop", "Docker", "MySQL"],
    states: ["contractor", "maintenance", "partenariat"],
  },
  {
    title: "Evasion Evolution",
    preview: "/ee.PNG",
    description:
      "The Evasion Evolution application is a personalized sports coaching app. To better assist the trainee, an exercise can be illustrated by multimedia content (video, photos, PDF) provided by the coach. And to create a personalized session for a trainee, the coach will have to insert exercises into the session.",
    github: null,
    url: "https://evasionacademy.com",
    technologies: [
      "ReactJS",
      "Laravel",
      "InertiaJs",
      "MySQL",
      "Docker",
      "React Native",
      "Stripe",
      "API Rest",
    ],
    states: ["contractor", "maintenance", "partenariat"],
  },
  {
    title: "Hightao Recrutement",
    preview: "/ht.PNG",
    description:
      "Recruitment platform, candidate management, technical test platform the candidat and at last a backoffice for managing all the test per technologies",
    github: null,
    url: "http://vps-eb8256ad.vps.ovh.net:8300",
    technologies: ["NextJS", "docker", "Symfony", "MySQL", "Material UI"],
    states: ["contractor", "lead", "ongoing", "partenariat"],
  },
  {
    title: "openrares",
    preview: "/openrares.PNG",
    description:
      "NFT Marketplace. Contract built on top the Ethereum blockchain",
    github: null,
    url: null,
    technologies: ["NextJS", "Crypto Wallet", "Solidity", "MongoDB"],
    states: ["contractor", "partenariat", "best"],
  },
  {
    title: "Les plaisirs de l'eau",
    preview: "/lpe.PNG",
    description:
      "Aquatic spaces located in Bordeaux and Eysines where aquatic activities are offered for the whole family.",
    github: null,
    url: null,
    technologies: ["VueJs", "InertiaJS", "Laravel", "MySQL"],
    states: ["contractor", "mercenary"],
  },
  {
    title: "zeekeez",
    preview: "/zeekeez.png",
    description:
      "UAE Property Portal: Properties for Sale and Rent in Dubai, Abu Dhabi, and UAE",
    github: null,
    url: "https://zeekeez.com",
    technologies: [
      "ReactJs",
      "NextJS",
      "ExpressJS",
      "API Rest",
      "Docker",
      "SCSS",
      "Elasticsearch",
      "RabbitMQ",
      "AWS",
      "MySQL",
    ],
    states: ["collaborator", "contractor", "partenariat", "best"],
  },
  {
    title: "Carte cadeau Intersport",
    preview: "/placeholder.svg",
    description:
      "With Intersport gift cards you are sure to please! Choose your amount, add a message, choose between an envelope or a nice box (or a digital version!) and you're all set",
    github: null,
    url: null,
    technologies: ["Codeigniter", "jQuery", "Linux", "API Rest"],
    states: ["collaborator", "partenariat"],
  },
  {
    title: "Carte cadeau Cultura",
    preview: "/placeholder.svg",
    description:
      "Giving a gift card is a practical and safe solution to allow a loved one to enjoy a wide range of products or services in partner stores. Gift voucher, gift certificate, digital gift card... Discover everything you need to know about these cards that simplify your purchases.",
    github: null,
    url: null,
    technologies: ["Codeigniter", "jQuery", "Linux", "API Rest"],
    states: ["collaborator", "partenariat"],
  },
  {
    title: "E-carte cadeau Jouéclub",
    preview: "/joueclub.png",
    description:
      "Receive it instantly in your inbox. Credit freely between 15€ and 150€ Personalize your card according to the occasions. Spend it freely in one or several times",
    github: null,
    url: "https://macartecadeau.joueclub.fr",
    technologies: ["Codeigniter", "jQuery", "Linux", "API Rest"],
    states: ["collaborator", "partenariat"],
  },
  {
    title: "Easy2Play",
    preview: "/easy2play.png",
    description:
      "Easy2Play is the omnichannel solution that allows merchants to create, deploy, and manage their digital gift card program on their e-commerce site in order to increase traffic, boost sales, and retain customers.",
    github: null,
    url: "https://console.easy2play.fr",
    technologies: [
      "Codeigniter",
      "jQuery",
      "Linux",
      "MySQL",
      "API Rest",
      "Talend Open Studio",
      "Redis",
      "RabbitMQ",
      "CRON",
      "Batch",
    ],
    states: ["collaborator", "partenariat", "best"],
  },
  {
    title: "Manao Compta",
    preview: "/manao_compta.png",
    description:
      "The accounting software includes both general accounting and analytical accounting. It is multi-currency and allows for the production of personalized financial statements and automatic dashboards.",
    github: null,
    url: "https://manao.eu/fr/logiciel-gestion",
    technologies: ["Codeigniter", "jQuery", "MySQL"],
    states: ["collaborator", "partenariat"],
  },
];

export const ProjectRouter = createTRPCRouter({
  list: publicProcedure.query(() => LIST),
});
