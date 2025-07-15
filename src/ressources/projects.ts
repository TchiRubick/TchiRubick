export const PROJECTS = [
  {
    title: "Il Manifesto RAG-powered LLM application",
    description:
      "This web app is a RAG-powered LLM application that combines conversational AI with semantic search. Users can ask questions and receive detailed answers alongside a list of related articles. Each article page features an interactive map highlighting mentioned locations, an entity list with external links, and the full article content. The app also includes a search engine using Weaviate for vector-based queries and supports SPARQL to fetch structured data from article URLs. Most metadata and contextual insights are extracted automatically by the AI, creating a seamless exploration experience.",
    imageUrl: "/projects/mema-demo.png",
    category: "Web application",
    techs: [
      "Nextjs",
      "Typescript",
      "Weaviate",
      "SparQL",
      "Shadcn",
      "Hono",
      "Playwright",
      "Docker",
      "Github Actions",
      "Clerk",
      "i18n",
      "TailwindCSS",
    ],
  },
  {
    title: "Revly insight app",
    description:
      "Revly Insight App is a web platform designed for restaurant owners to analyze their business performance using Revly's analytics. It provides insights such as revenue, ad spend, discount usage, and menu pricing ratios based on expenses. After submitting their data, users receive a clear and concise performance summary. Behind the scenes, results are stored in an internal HubSpot system for lead tracking and follow-up, while notifications are sent to a Slack channel to keep the team instantly informed of new analyses.",
    imageUrl: "/projects/revly-insight-pika.png",
    category: "Website",
    techs: [
      "Nextjs",
      "Typescript",
      "vercel",
      "Slack API",
      "Hubspot API",
      "TailwindCSS",
    ],
    url: "https://insights.gorevly.com/food-delivery-app-health-calculator",
  },
  {
    title: "Radio grand ciel podcast app",
    description:
      "Radio Grand Ciel Podcast App is a free mobile application that allows users to listen to podcasts hosted on Radio Grand Ciel. Users can subscribe to their favorite shows, receive notifications for new episodes or recently added podcasts, and enjoy seamless background playback for uninterrupted listening.",
    imageUrl: "/projects/rgc.png",
    category: "Mobile application",
    techs: ["React native", "Expo", "Typescript", "Wordpress"],
    url: "https://play.google.com/store/apps/details?id=fr.radiograndciel.radiograndciel&hl=fr",
  },
];
