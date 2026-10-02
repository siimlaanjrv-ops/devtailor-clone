// Content of the 11 case studies, extracted from devtailor.com.
// Order matches the original CMS order (used on /projects and "See more.").

export type ImageAsset = { src: string; width: number; height: number };

export type Project = {
  slug: string;
  /** Short name shown on cards, e.g. "DocAid". */
  name: string;
  /** Headline used as the case-study title. */
  title: string;
  summary: string;
  /** Bullet points shown on the home page cards. */
  highlights?: string[];
  image: ImageAsset;
  services: Service[];
  sectors: Sector[];
  technologies: string[];
  about: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  gallery: ImageAsset[];
  links: { label: string; href: string }[];
};

export const services = [
  "Handcrafted AI",
  "Design (UX/UI)",
  "Software development",
  "Big data",
  "Business analysis & automation",
  "System integrations",
] as const;
export type Service = (typeof services)[number];

export const sectors = [
  "Energy",
  "Finance",
  "Legal Services",
  "Logistics",
  "Automotive",
  "Government & Public Sector",
  "Healthcare",
  "Sports",
  "Science",
] as const;
export type Sector = (typeof sectors)[number];

export const projects: Project[] = [
  {
    slug: "docaid",
    name: "DocAid",
    title: "Transforming conversations into medical records",
    summary:
      "AI platform transforming Estonian doctor-patient conversations into properly formatted medical documentation within seconds.",
    image: {
      src: "/images/projects/docaid/card.png",
      width: 918,
      height: 670,
    },
    services: ["Software development", "Business analysis & automation", "System integrations"],
    sectors: ["Healthcare"],
    technologies: ["React", "Vite", "PostgreSQL", "OpenAI", "Amazon Web Services"],
    about: [
      {
        title: "Background",
        text: "DocAid is an Estonian startup building AI based platform that transforms doctor-patient conversations into medical documentation.",
      },
      {
        title: "Problem",
        text: "Estonian medical conversations were a blind spot for existing AI tools, leaving doctors stuck between patient care and paperwork.",
      },
      {
        title: "Solution",
        text: "AI-powered mobile application that automatically transcribes and summarizes doctor–patient consultations, capturing visit notes in real time and securely storing them in Electronic Health Systems to enhance clinical workflow and compliance.",
      },
    ],
    faq: [
      {
        question: "Project overview.",
        answer:
          "DocAid is an Estonian startup building an AI-based tool for healthcare professionals. Instead of basic speech-to-text transcription, we created a system that delivers properly formatted medical documentation ready for Estonia's digital health systems. Clean anamnesis, ready to go.",
      },
      {
        question: "Our approach.",
        answer:
          "We built the solution in two months using React, Vite, Postgres, Whisper, ChatGPT, Github, AWS, Docker. Our focus was implementing chunked audio streaming to achieve real-time processing that delivers complete medical documentation within 10–15 seconds after recording stops. We prioritized medical compliance throughout and integrated with medical databases for accurate medication names and clinical terminology.",
      },
      {
        question: "Results that matter.",
        answer:
          "DocAid is now actively used in patient consultations, enabling doctors to focus fully on their patients instead of paperwork. This real-world adoption became the foundation for the startup’s funding efforts — having a live, working product made it possible to secure significantly better terms.",
      },
      {
        question: "Lessons learned.",
        answer:
          "The system transcribes Estonian medical conversations in near real-time, overcoming a major language barrier that existing tools have failed to address. Along the way, we tested different approaches, did the research, and figured out how to make chunked audio streaming deliver results in seconds, not minutes. It was tough, but also fun to solve a problem this complex and see it work in the real world.",
      },
    ],
    gallery: [],
    links: [
      {
        label: "Visit website",
        href: "https://docaid.ai/",
      },
    ],
  },
  {
    slug: "telema",
    name: "Telema",
    title: "Baltic's leading Electronic Data Interchange (EDI) operator",
    summary:
      "We migrated the Baltic's leading EDI operator from legacy systems to modern AWS cloud infrastructure, maintaining 24/7 uptime.",
    image: {
      src: "/images/projects/telema/card.png",
      width: 912,
      height: 676,
    },
    services: ["Software development", "System integrations"],
    sectors: [],
    technologies: ["Java", "Amazon Web Services", "Angular"],
    about: [
      {
        title: "Background",
        text: "Telema is the leading EDI operator in the Baltics, powering supply chains for major retailers across the region.",
      },
      {
        title: "Problem",
        text: "Twenty years of legacy infrastructure became expensive and difficult to maintain on outdated systems.",
      },
      {
        title: "Solution",
        text: "Complete migration to AWS cloud infrastructure while maintaining 24/7 uptime for mission-critical operations.",
      },
    ],
    faq: [
      {
        question: "Project overview.",
        answer:
          "Telema is the leading electronic data interchange operator in the Baltics, powering supply chain data flows for major retailers across the region. We've been working together for seven years, but this time we partnered as co-architects to plan their migration to modern cloud infrastructure, helping them transition away from outdated systems while keeping critical data pipelines running smoothly.",
      },
      {
        question: "Our approach.",
        answer:
          "We spent about 30% of our time analyzing their existing 20-year-old system and designing the new architecture, with the remaining 70% focused on implementation. Rather than taking over their entire codebase, we worked as strategic partners — they handled the Java development in-house while we built out the complete Amazon Web Services cloud infrastructure.",
      },
      {
        question: "Results that matter.",
        answer:
          "The core project was migrating from their own infrastructure to Amazon Web Services. We successfully migrated the first critical data pipeline to the new cloud infrastructure, proving the architecture works for their high-volume, mission-critical operations.",
      },
      {
        question: "Lessons learned.",
        answer:
          "Legacy systems that have been core products for many years are complex to change. The challenge was figuring out how to rebuild it to work even better than before while dealing with such massive responsibility and service load that can't afford any downtime.",
      },
    ],
    gallery: [],
    links: [],
  },
  {
    slug: "grid-raven",
    name: "Grid Raven",
    title: "Weather-driven insights enhancing capacity",
    summary:
      "An interactive global visualization demonstrating how dynamic line ratings can unlock 30% more capacity in power grids based on real-time weather data.",
    image: {
      src: "/images/projects/grid-raven/card.jpg",
      width: 395,
      height: 296,
    },
    services: ["Software development", "System integrations"],
    sectors: ["Science"],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "NestJS", "Bash", "Prisma", "Terraform"],
    about: [
      {
        title: "Background",
        text: "GridRaven needed a compelling demonstration application to showcase their innovative power grid optimization technology to utilities, investors, and stakeholders. The goal was to prove they could model the global power grid in real time and overlay it with weather data to demonstrate the benefits of their approach.",
      },
      {
        title: "Problem",
        text: "As high-voltage powerlines throughput depends on weather conditions; they needed a way to manage throughput based on weather data. Power grids traditionally rely on static ratings, leaving significant unused capacity. This limitation restricts renewable energy integration, increases operational costs, and slows decarbonization efforts. GridRaven needed a clear, visual way to demonstrate the advantages of dynamic line ratings (DLR) to potential customers and investors.",
      },
      {
        title: "Solution",
        text: "Interactive web demo that displays the global transmission grid on a basemap, overlays wind and weather data, and computes various line ratings (static, ambient-adjusted, dynamic) in real time, showing how DLR unlocks approximately 30% more capacity.",
      },
    ],
    faq: [
      {
        question: "Project overview.",
        answer:
          "We created a comprehensive demonstration platform with a front-end featuring interactive maps, detailed views, wind overlays, and line selection capabilities. The back-end infrastructure included robust APIs, advanced rating computation algorithms, and automated data refresh jobs. The system integrated OpenStreetMap power line data with conductor parameters and pulled weather information from third-party APIs.",
      },
      {
        question: "Our approach.",
        answer:
          "We focused on creating compelling visualizations that clearly communicated the benefits of dynamic line ratings. We maintained clean separation between front-end and back-end components, integrated open data sources effectively, and ensured the design aligned with GridRaven's website branding. This approach balanced technical sophistication with clarity of communication for non-technical stakeholders.",
      },
      {
        question: "Results that matter.",
        answer:
          "The project delivered a live, global demonstration accessible via GridRaven's website, providing tangible proof of the approximately 30% extra capacity achievable through dynamic line ratings with 99% accuracy. We made complex math simple to understand visually.",
      },
      {
        question: "Lessons learned.",
        answer:
          "The project demonstrated that live, interactive visualization is far more persuasive than static reports when demonstrating complex technical benefits. We learned that a focused minimum viable product with clear messaging delivers better results than feature-heavy implementations. The experience highlighted the power of letting data tell its own story through intuitive, well-designed interfaces.",
      },
    ],
    gallery: [
      {
        src: "/images/projects/grid-raven/gallery-1.png",
        width: 800,
        height: 514,
      },
      {
        src: "/images/projects/grid-raven/gallery-2.png",
        width: 800,
        height: 514,
      },
    ],
    links: [
      {
        label: "Visit website",
        href: "https://claw.gridraven.com/world",
      },
    ],
  },
  {
    slug: "sportscientia",
    name: "SportScientia",
    title: "Biomechanical insights prevent sports injuries",
    summary: "Smart insole technology captures biomechanical data to predict and prevent sports injuries.",
    image: {
      src: "/images/projects/sportscientia/card.jpg",
      width: 395,
      height: 296,
    },
    services: ["Software development", "System integrations"],
    sectors: ["Sports"],
    technologies: ["Angular", "Flutter", "NestJS", "Node.js", "PostgreSQL", "Amazon Web Services"],
    about: [
      {
        title: "Background",
        text: "SportScientias vision was to create a smart wearable ecosystem that monitors, predicts, and prevents injuries, while also improving player performance and extending athletic careers.",
      },
      {
        title: "Problem",
        text: "Injuries cost professional football clubs millions each year — an average of $12.4M per team in 2015. Clubs lose 10–30% of payroll annually due to player absences. Meanwhile, amateur football lacks affordable monitoring, structured coaching, and injury prevention systems, limiting player development and career longevity.",
      },
      {
        title: "Solution",
        text: "Smart insole with embedded sensors that captures real-time dynamic data on weight distribution, gait, and energy expenditure. Combined with a mobile app and analytics portal, it predicts and prevents injuries, aids rehabilitation, and enhances performance for both elite and grassroots players.",
      },
    ],
    faq: [
      {
        question: "Project overview.",
        answer:
          "We developed a comprehensive technology ecosystem combining hardware and software components. The smart insole integrates sophisticated motion arrays with electronics to capture biomechanical data, while the cloud-based platform provides storage, visualization, and video integration capabilities. The system serves multiple use cases including injury prevention, rehabilitation, performance monitoring, player profiling, and grassroots development.",
      },
      {
        question: "Our approach.",
        answer:
          "We developed software focusing on creating real-time injury prediction and prevention through AI-driven analytics that process biomechanical data. The system cross-references video footage with biometric data to provide deeper performance insights.",
      },
      {
        question: "Results that matter.",
        answer:
          "The SportScientia platform offers elite clubs potential savings of millions in lost revenue through reduced injury rates and faster rehabilitation. Players benefit from increased availability and extended careers due to better injury prevention. The innovation earned SportScientia recognition as a Top 50 global sports innovation company in 2017 by the HYPE Foundation.",
      },
      {
        question: "Lessons learned.",
        answer:
          "Developing a wearable system for athletes taught us the critical importance of balancing analytical precision with practical usability in sports environments. We learned to create technology that provides actionable insights without disrupting athletic performance or training routines. The project highlighted how preventive technology can transform sports medicine from reactive treatment to proactive management, potentially extending careers and improving athletic outcomes across all levels of sport.",
      },
    ],
    gallery: [
      {
        src: "/images/projects/sportscientia/gallery-1.jpg",
        width: 800,
        height: 450,
      },
    ],
    links: [],
  },
  {
    slug: "trimtex",
    name: "Trimtex",
    title: "3D previews elevate design accuracy",
    summary:
      "Revolutionized sportswear design with a 3D visualization platform that allows clients to view custom designs from all angles before production.",
    image: {
      src: "/images/projects/trimtex/card.png",
      width: 912,
      height: 676,
    },
    services: ["Software development", "Business analysis & automation", "System integrations"],
    sectors: ["Sports"],
    technologies: ["TypeScript", "Angular", "Node.js", "PostgreSQL", "Amazon Web Services"],
    about: [
      {
        title: "Background",
        text: "Trimtex is a Norwegian sportswear manufacturer with a production facility in Estonia employing approximately 100 people, specializing in custom-designed sportswear for cycling clubs and teams.",
      },
      {
        title: "Problem",
        text: "Clients struggled to visualize designs on actual garments using static 2D mockups. The lengthy back-and-forth process between clients, sales representatives, and designers created inefficiencies and extended project timelines.",
      },
      {
        title: "Solution",
        text: "3D visualization platform that allows clients to view custom designs from all angles, with real-time application of logos and customization options like zipper colors and materials.",
      },
    ],
    faq: [
      {
        question: "Project overview.",
        answer:
          "We developed an interactive 3D visualization system that revolutionized Trimtex's design process. The platform bridges design tools with production systems while providing an intuitive interface for both internal teams and clients.",
      },
      {
        question: "Our approach.",
        answer:
          "We built a responsive 3D environment using Three.js, Angular, and Node.js. The system enables designers to apply logos directly onto accurate 3D models, while automatically generating production-ready files once designs are approved.",
      },
      {
        question: "Results that matter",
        answer:
          "The approval process shortened from weeks to days. The solution received industry recognition for its innovative approach and has become essential to Trimtex's operations. Even brief system unavailability causes significant concern, demonstrating its critical value to their business.",
      },
      {
        question: "Lessons learned.",
        answer:
          "Understanding complex business rules and design constraints was essential. The project showed how technology can transform client relationships and internal workflows, creating value beyond simple efficiency gains.",
      },
    ],
    gallery: [
      {
        src: "/images/projects/trimtex/gallery-1.png",
        width: 800,
        height: 606,
      },
      {
        src: "/images/projects/trimtex/gallery-2.png",
        width: 800,
        height: 606,
      },
    ],
    links: [
      {
        label: "Visit website",
        href: "https://trimtexcustom.com/pages/custom",
      },
    ],
  },
  {
    slug: "ai-procurement",
    name: "AI Procurement",
    title: "Procurements Made Easy",
    summary:
      "We went big by developing the infrastructure, platform, and mobile/web apps they needed to keep their cars secure.",
    highlights: [
      "Maximize Returns: Use predictive analytics to trade pre-owned and new cars, as well as real estate",
      "Data-Driven Decisions: Understand asset values and market trends effortlessly",
    ],
    image: {
      src: "/images/projects/ai-procurement/card.png",
      width: 966,
      height: 722,
    },
    services: ["Handcrafted AI", "Design (UX/UI)"],
    sectors: ["Healthcare", "Sports"],
    technologies: ["Docker", "PostgreSQL", "Node.js", "Angular"],
    about: [
      {
        title: "Business",
        text: "Sophisticated AI isn’t just for tech giants; it’s for everyone.",
      },
      {
        title: "Problem",
        text: "Your data works for you, unlocking new avenues for growth.",
      },
      {
        title: "Solution",
        text: "AI solutions that are ethical, transparent, and designed with you in mind.",
      },
    ],
    faq: [
      {
        question: "What is the project's purpose?",
        answer:
          "The project aims to provide a universal solution for managing vehicle access through a connected platform developed for Biig, a company with a focus on vehicle access management. This solution integrates with car systems and allows any car to be accessed remotely via a mobile app, facilitating vehicle sharing and access management, especially for larger clients like fleet owners or logistics companies.",
      },
      {
        question: "Who is the client?",
        answer:
          "Biig, a company seeking innovative solutions for managing vehicle access across large fleets. The company's focus is on providing efficient and scalable access management technology for their clients in the automotive and fleet management sectors.",
      },
      {
        question: "What challenges were faced?",
        answer:
          "A major challenge was designing a scalable platform that could handle millions of devices while optimizing for low power consumption. The project required solving issues related to battery life, particularly in devices that rely on GPS, which is a significant power drain. The team at Biig developed smart algorithms to manage power by using accelerometers and other sensors to minimize GPS usage when it wasn’t needed.",
      },
      {
        question: "What technologies were used?",
        answer:
          "The project involved integrating both hardware and software components. Biig's solution included cloud platforms, mobile apps, and connected devices embedded in vehicle license plates. Key technologies used were GPS, 3G connectivity, accelerometers, and custom low-power electronics, all working together to create a highly efficient vehicle access system.",
      },
      {
        question: "How was the development process structured?",
        answer:
          "While the specifics of the development methodology weren’t detailed, it is clear that Biig's team worked closely with engineers and developers to build an end-to-end solution from hardware integration to cloud-based systems and mobile app development.",
      },
      {
        question: "What were the key features or functionalities?",
        answer:
          "Remote vehicle access via a mobile app.\nIntegration with the vehicle’s license plate.\nPower-efficient device operation, ensuring long battery life.\nA scalable platform capable of handling millions of devices.\nAn event-driven system that reduces power consumption by optimizing when GPS and other sensors are activated.",
      },
      {
        question: "What was the timeline for the project?",
        answer:
          "No exact timeline was provided, but it was indicated that the project could take between 4 to 6 months depending on market factors and technical challenges.",
      },
      {
        question: "What results or impact did the project deliver?",
        answer:
          "Biig’s solution offers a robust, scalable tool for vehicle fleet management, allowing businesses to remotely manage vehicle access, enhance operational efficiency, and support large-scale deployment. It has strong potential in international markets like the USA and Finland due to its scalability.",
      },
    ],
    gallery: [
      {
        src: "/images/projects/ai-procurement/gallery-1.webp",
        width: 800,
        height: 1062,
      },
      {
        src: "/images/projects/ai-procurement/gallery-2.webp",
        width: 800,
        height: 1000,
      },
      {
        src: "/images/projects/ai-procurement/gallery-3.jpg",
        width: 800,
        height: 1143,
      },
      {
        src: "/images/projects/ai-procurement/gallery-2.webp",
        width: 800,
        height: 1000,
      },
    ],
    links: [
      {
        label: "Visit website",
        href: "https://www.framer.com",
      },
      {
        label: "See app",
        href: "https://www.framer.com",
      },
    ],
  },
  {
    slug: "suits-legal",
    name: "Suits Legal",
    title: "Improving access to legal knowledge",
    summary:
      "AI legal assistant that makes Estonian and EU law accessible through advanced vector search and LLMs, processing 250,000 pages of legal text.",
    highlights: [
      "Instant Insights: Navigate Estonian and European laws with ease",
      "Stay Compliant: Get up-to-date advice based on the latest court orders",
    ],
    image: {
      src: "/images/projects/suits-legal/card.png",
      width: 974,
      height: 712,
    },
    services: [
      "Design (UX/UI)",
      "Software development",
      "Business analysis & automation",
      "System integrations",
    ],
    sectors: [],
    technologies: ["React", "NestJS", "Amazon Web Services", "OpenAI", "Pinecone", "PostgreSQL"],
    about: [
      {
        title: "Background",
        text: "Suits Legal is a legal services AI-platform designed to make law more accessible, transparent, and user-friendly. By combining legal expertise with digital solutions, it bridges the gap between traditional legal services and the growing need for fast, clear, and affordable legal support.",
      },
      {
        title: "Problem",
        text: "Traditional legal services are often expensive, time-consuming, and difficult to access for individuals and small businesses. This creates barriers to justice and slows down decision-making in both personal and business contexts.",
      },
      {
        title: "Solution",
        text: "AI-powered assistant that leverages cutting-edge technology like large language models and advanced vector search to provide accurate, detailed legal answers based on the latest Estonian laws, EU regulations, and court cases.",
      },
    ],
    faq: [
      {
        question: "Project overview.",
        answer:
          'Suits Legal revolutionizes legal research by tackling the "needle in the haystack" problem using relational vector storage and a multi-stage query expansion strategy. The system delivers precise, citation-backed answers instantly, saving valuable time and enhancing productivity for legal professionals.',
      },
      {
        question: "Our approach.",
        answer:
          "We built a sophisticated four-stage similarity search and retrieval-augmented generation (RAG) system that sifts through vast legal databases, comprising of over quarter million of A4 equivalent of legal texts. Our solution combines advanced vector embeddings with context-rich retrieval to ensure that complex legal queries receive the most relevant answers.",
      },
      {
        question: "Results that matter.",
        answer:
          "Suits Legal has democratized access to legal expertise by making affordable and transparent services available to a wider audience. The platform significantly reduces research time for legal professionals while maintaining high standards of accuracy. By simplifying complex legal processes, we've helped bridge the accessibility gap and empowered both individuals and businesses to make informed legal decisions without prohibitive costs and helped save tens of thousands in legal fees.",
      },
      {
        question: "Lessons learned.",
        answer:
          "Developing an AI system for the legal domain taught us that continuous adaptation to legal and regulatory changes is essential for long-term success. We learned to build robust verification mechanisms into our AI to prevent hallucinations and ensure factual accuracy in a field where precision is paramount.",
      },
    ],
    gallery: [
      {
        src: "/images/projects/suits-legal/gallery-1.png",
        width: 800,
        height: 480,
      },
    ],
    links: [
      {
        label: "Visit website",
        href: "https://app.suitslegal.ee/login",
      },
    ],
  },
  {
    slug: "fleetbrains",
    name: "FleetBrains",
    title: "AI accelerates smarter automotive decisions",
    summary:
      "AI decision engine analyzes millions of car listings to predict profitability and sales speed, helping dealers make data-driven decisions in the used car market.",
    highlights: [
      "Innovative Platforms: We develop state-of-the-art software powering governmental operations",
      "Citizen-Centric Design: Enhancing accessibility and efficiency for everyone",
    ],
    image: {
      src: "/images/projects/fleetbrains/card.webp",
      width: 800,
      height: 472,
    },
    services: [
      "Handcrafted AI",
      "Software development",
      "Business analysis & automation",
      "System integrations",
    ],
    sectors: [],
    technologies: ["Amazon Web Services", "PostgreSQL", "TypeScript", "React", "NestJS", "Vite"],
    about: [
      {
        title: "Background",
        text: "Fleetbrains was conceived as an innovative solution of car/fleet sales for entrepreneurs and dealerships seeking to optimize their investment decisions in the highly competitive used car market.",
      },
      {
        title: "Problem",
        text: "Car/fleet selling involves significant financial risk with unpredictable profit margins and sales timeframes. Traditional methods rely heavily on intuition and experience rather than data-driven insights, leading to suboptimal purchasing decisions and potential losses.",
      },
      {
        title: "Solution",
        text: "AI-powered tool that revolutionizes car/fleet sales by providing data-driven insights and predictive analysis. Using advanced machine learning models and a vast dataset of historical car sales, Fleetbrains helps investors make smarter decisions by predicting profitability and sales speed.",
      },
    ],
    faq: [
      {
        question: "Project overview.",
        answer:
          "Fleetbrains transforms the car/fleet sales industry through intelligent data analysis. With features like real-time car evaluations, customizable profit margins, and dynamic pricing strategies, the platform empowers users to maximize profits while minimizing risks. Whether for seasoned car investors or newcomers, Fleetbrains simplifies market complexities by turning data into actionable intelligence.",
      },
      {
        question: "Our approach.",
        answer:
          "We built an AI-driven decision engine using OpenAI's text-embedding-3-large model at its core. The system converts car advertisements into vector embeddings, stored in a Pinecone vector database for efficient similarity searches. We implemented a retrieval-augmented generation (RAG) architecture that combines similarity search results with comprehensive red and green flag analysis to provide nuanced recommendations.",
      },
      {
        question: "Results that matter.",
        answer:
          "Fleetbrains has significantly improved investment outcomes for car dealers and independent sellers by providing confidence scores, pricing recommendations, and expected sales times based on historical market data. The platform's real-time evaluations enable users to make faster, more informed decisions at auctions and when reviewing potential purchases, leading to higher profit margins and reduced inventory holding times.",
      },
      {
        question: "Lessons learned.",
        answer:
          "Developing Fleetbrains taught us the importance of balancing algorithmic recommendations with human expertise. We discovered that creating an effective AI assistant for a specialized market requires extensive domain knowledge and careful attention to the specific factors that drive profitability in that industry. The project also highlighted how crucial user feedback loops are for continuously improving prediction accuracy in dynamic markets. Most of all, after this we know exceptionally well how to analyze tens of millions of car sales ads and do statistical analysis on it.",
      },
    ],
    gallery: [],
    links: [],
  },
  {
    slug: "jupiter",
    name: "Jupiter",
    title: "Native TV apps",
    summary:
      "Native TV apps across four platforms that bring Estonia's largest streaming platform directly to viewers' smart TVs, reaching 55k devices monthly.",
    image: {
      src: "/images/projects/jupiter/card.png",
      width: 790,
      height: 592,
    },
    services: ["Software development", "System integrations"],
    sectors: [],
    technologies: ["PostgreSQL", "Docker", "Amazon Web Services"],
    about: [
      {
        title: "Background",
        text: "Jupiter is Estonia's largest free streaming platform, offering ERR's TV shows, local content and international films and series.",
      },
      {
        title: "Problem",
        text: "Estonian Public Broadcasting was not natively available on Apple TV and other smart-tv platforms.",
      },
      {
        title: "Solution",
        text: "TV apps for smooth streaming and maximum engagement.",
      },
    ],
    faq: [
      {
        question: "Project overview.",
        answer:
          "Jupiter is Estonia’s largest free streaming platform, bringing together ERR’s best TV and radio shows along with top local and international films and series. We built native TV apps for Apple TV, Android TV, Samsung Tizen, and LG webOS so viewers could access everything directly on their smart TVs without the hassle.",
      },
      {
        question: "Our approach.",
        answer:
          "Using Flutter, Angular, SwiftUI, Typescript, GitHub, Node.js, SCSS, we built native apps across four TV platforms. Each required different development approaches since they handle navigation and rendering differently. We optimized everything to work smoothly on any TV hardware, from high-end models to basic budget devices that needed special optimization to perform.",
      },
      {
        question: "Results that matter.",
        answer:
          "Jupiter’s TV apps hit 55,000 devices monthly across Estonia – Android TV leads with 30,000 users, Samsung serves 12,000, Apple TV 6,500, and LG 5,500. Estonian viewers get their content directly on TV without clunky streaming boxes or browser hassles. Smooth streaming, maximum engagement.",
      },
      {
        question: "Lessons learned.",
        answer:
          "The project was our first serious dive into TV app development across multiple platforms. We learned that testing on actual hardware beats simulators every time, as what works perfectly on some TV might crawl on another one.",
      },
    ],
    gallery: [
      {
        src: "/images/projects/jupiter/gallery-1.webp",
        width: 800,
        height: 433,
      },
    ],
    links: [
      {
        label: "Visit website",
        href: "https://jupiter.err.ee/video",
      },
    ],
  },
  {
    slug: "burokratt",
    name: "Bürokratt",
    title: "AI chatbot connecting public services",
    summary:
      "AI-powered chatbot that creates a unified ecosystem connecting public services, enabling citizens to access government services through natural conversations.",
    image: {
      src: "/images/projects/burokratt/card.png",
      width: 790,
      height: 592,
    },
    services: [
      "Handcrafted AI",
      "Software development",
      "Big data",
      "Business analysis & automation",
      "System integrations",
    ],
    sectors: [],
    technologies: ["React", "Node.js", "PostgreSQL", "Java Spring Boot"],
    about: [
      {
        title: "Background",
        text: "Bürokratt is a government initiative aimed at simplifying interaction with public services by enabling communication through virtual assistants. It connects public sector systems with private sector solutions into a unified, user-friendly network.",
      },
      {
        title: "Problem",
        text: "Citizens and businesses currently face fragmented and often complex interactions with different government systems. Developing and maintaining the components of Bürokratt requires continuous technical expertise, planning, and adherence to strict national and EU requirements.",
      },
      {
        title: "Solution",
        text: "AI-powered platform that establishes a cohesive, standards-based ecosystem for government services. Bürokratt streamlines access to public services, reduces bureaucracy, and ensures transparency while adapting to future needs.",
      },
    ],
    faq: [
      {
        question: "Project overview.",
        answer:
          "Bürokratt revolutionizes how citizens interact with government services through an integrated network of virtual assistants. We built a comprehensive ecosystem that connects various public sector systems with private sector solutions, creating a unified and user-friendly interface for accessing government services.",
      },
      {
        question: "Our approach.",
        answer:
          "We worked closely with the contracting authority's architects to plan technical and data architecture for the system. Using agile methodologies, we iteratively developed new features and components while creating proof-of-concept solutions to test feasibility before full implementation.",
      },
      {
        question: "Results that matter.",
        answer:
          "Bürokratt is aimed to transform public service delivery in Estonia, drastically reducing bureaucratic complexity for citizens. The platform is aimed to eventually enable users to access multiple government services through natural conversations, without navigating complex portals or understanding departmental structures. This results in higher citizen satisfaction, reduced administrative burden, and more efficient government operations.",
      },
      {
        question: "Lessons learned.",
        answer:
          "Building a government-wide AI platform required balancing innovation with strict regulatory compliance. The project taught us the importance of creating flexible architecture that can evolve with changing regulations and technological advancements.",
      },
    ],
    gallery: [
      {
        src: "/images/projects/burokratt/gallery-1.png",
        width: 800,
        height: 661,
      },
      {
        src: "/images/projects/burokratt/gallery-2.png",
        width: 593,
        height: 332,
      },
    ],
    links: [
      {
        label: "Visit website",
        href: "https://buerokratt.ee",
      },
    ],
  },
  {
    slug: "ampwise",
    name: "Ampwise",
    title: "AI-powered B2B sales pipeline",
    summary:
      "AI-powered dashboard that automates the entire B2B sales pipeline, eliminating endless email exchanges and boosting quarterly revenue.",
    image: {
      src: "/images/projects/ampwise/card.png",
      width: 790,
      height: 592,
    },
    services: ["Handcrafted AI", "Software development", "System integrations"],
    sectors: [],
    technologies: ["PostgreSQL", "Docker"],
    about: [
      {
        title: "Business",
        text: "Ampwise is an Estonian company, building an AI-powered platform for B2B trading of physical goods, connecting buyers and suppliers across Europe.",
      },
      {
        title: "Problem",
        text: "Endless email exchanges eating up traders' days with meaningless back-and-forth that should be automated.",
      },
      {
        title: "Solution",
        text: "One AI-powered dashboard, that reads your emails, analyzes quotes, finds suppliers automatically. Click, submit, done.",
      },
    ],
    faq: [
      {
        question: "Project overview.",
        answer:
          "Ampwise builds AI-powered software that manages sales, customers, and deals for B2B trading of physical goods like electrical components and industrial supplies, connecting buyers and suppliers across Europe. What used to be a mess of emails, quotes, and back-and-forth negotiations became a single AI-powered dashboard.",
      },
      {
        question: "Our approach.",
        answer:
          "Over six months, we built an AI system that runs the entire sales pipeline from inquiry to quote. It connects directly to email and parses supplier quotes in any format.",
      },
      {
        question: "Results that matter.",
        answer:
          "The numbers tell the story – Ampwise went from 70k € in quarterly revenue to 1.8 M € in two years. The AI handles the grunt work so the team can focus on relationships and closing deals. This results in 10× productivity and a team that actually enjoys their work again.",
      },
      {
        question: "Lessons learned.",
        answer:
          "This was our first hands-on experience with large language models, giving practical know-how in the field. The main challenge was stopping AI from making things up — solved with better prompting and feedback loops that let users catch and correct errors.",
      },
    ],
    gallery: [
      {
        src: "/images/projects/ampwise/gallery-1.webp",
        width: 800,
        height: 428,
      },
      {
        src: "/images/projects/ampwise/gallery-2.png",
        width: 600,
        height: 450,
      },
      {
        src: "/images/projects/ampwise/gallery-3.png",
        width: 800,
        height: 426,
      },
    ],
    links: [
      {
        label: "Visit website",
        href: "https://www.ampwise.ai",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function pickProjects(...slugs: string[]) {
  return slugs.map((slug) => getProject(slug)!);
}
