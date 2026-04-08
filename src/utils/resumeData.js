// Structured resume data parsed and enriched from Aman's resume

export const resumeData = {
  personal: {
    name: "Aman Kumar Pandey",
    role: "Software Developer",
    tagline: "Building scalable backend systems & cloud-native APIs that power real products.",
    email: "pandeyaman997@gmail.com",
    // phone: "+919993935261",
    linkedin: "https://linkedin.com/in/aman-k-pandey",
    github: "https://github.com/aman-k-pandey",
    location: "Bhopal, India",
    resumeUrl: "#",
  },

  summary: `Software Developer with ~4 years of experience architecting robust backend systems, 
  RESTful APIs, and microservices at scale. Deep expertise in Node.js, AWS cloud infrastructure, 
  and polyglot persistence. I've owned end-to-end feature delivery for live global platforms, 
  led engineering teams, and driven product reliability from inception through production.`,

  highlights: [
    "Owned backend architecture for a live global artist marketplace",
    "Led end-to-end serverless workflows via AWS Lambda at production scale",
    "Mentored interns & junior engineers through sprint planning & code reviews",
    "Integrated payment systems (Stripe, Razorpay) and OAuth flows",
    "Configured AWS infrastructure: EC2, S3, RDS, ELB, VPC, CloudWatch",
  ],

  experience: [
    {
      id: "bookanartist",
      role: "Software Developer",
      company: "BookAnArtist",
      url: "https://bookanartist.co",
      period: "Jan 2023 – April 2026",
      type: "Full-time",
      description:
        "Sole backend owner for a global artist-client marketplace serving thousands of users.",
      achievements: [
        "Architected and maintained the full backend — API design, microservices, and feature delivery for bookanartist.co.",
        "Built a buy-now art purchase flow and a gift card system with integrated wallet functionality.",
        "Led the Feature Lambda service, designing serverless workflows powering core platform operations at scale.",
        "Managed production deployments, service reliability, and cross-functional feature ownership.",
        "Mentored interns and junior engineers, conducted code reviews, sprint planning, and technical guidance.",
      ],
      tech: ["Node.js", "MySQL", "AWS Lambda", "S3", "EC2", "Microservices"],
    },
    {
      id: "braininventory",
      role: "Software Developer",
      company: "Brain Inventory",
      url: "#",
      period: "Jul 2022 – Nov 2022",
      type: "Full-time",
      description: "Full-stack development of internal and client-facing web applications.",
      achievements: [
        "Built full-stack applications including an account management tool and a file-sharing platform.",
        "Integrated Stripe payment gateway and Google OAuth for secure authentication flows.",
        "Configured AWS S3 for scalable file storage and access control.",
      ],
      tech: [, "NodeJs", "MongoDB", "Razorpay", "AWS S3", "OAuth","TypeScript","ReactJs"
      ],
    },
  ],

  projects: [
    {
      id: "bookanartist",
      title: "BookAnArtist Platform",
      description:
        "A live global marketplace connecting artists and clients. I owned the complete backend — API design, payment flows, serverless architecture, and team leadership. The platform handles art purchases, gift card wallets, and live bookings for artists worldwide.",
      tech: ["Node.js", "MySQL", "AWS Lambda", "S3", "EC2", "Microservices"],
      live: "https://bookanartist.co",
      github: null,
      featured: true,
    },
    {
      id: "wescover",
      title: "Wescover Integration",
      description:
        "Extended platform integration for Wescover, enabling cross-platform art discovery and purchase flows. Maintained API consistency, data pipelines, and event-driven workflows connecting both ecosystems.",
      tech: ["Node.js", "REST APIs", "AWS", "MySQL"],
      live: "https://wescover.com",
      github: null,
      featured: true,
    },
    {
      id: "myfitnessmantra",
      title: "MyFitnessMantra",
      description:
        "A comprehensive fitness management platform built with a TypeScript-first backend and Angular frontend. Features include user progress tracking, workout plans, nutritional logs, and cloud-based media storage for exercise content.",
      tech: ["Node.js", "TypeScript", "Angular", "MongoDB", "S3", "EC2"],
      live: "https://myfitmantra.com",
      github: null,
      featured: true,
    },
    {
      id: "filesharingapp",
      title: "Cloud File-Sharing App",
      description:
        "A secure, full-stack file-sharing application with role-based access control, OAuth-based authentication, and scalable AWS S3 storage. Supports large file uploads, shareable links, and access management.",
      tech: ["React.js", "Node.js", "MongoDB", "AWS S3", "Google OAuth"],
      live: null,
      github: null,
      featured: false,
    },
    {
      id: "accountmgmt",
      title: "Account Management Software",
      description:
        "An enterprise-grade account management tool handling user profiles, subscription tiers, billing integrations via Stripe, and audit logging. Built with a React frontend and Express/MongoDB backend.",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe", "Express.js"],
      live: null,
      github: null,
      featured: false,
    },
  ],

  skills: {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React.js",  ],
    Backend: ["Node.js", "Express.js","TypeScript" ,"Sequelize", "Mongoose", "REST APIs", "Microservices", "Stripe", "Razorpay"],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
    Cloud: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "IAM", "ELB", "CloudWatch", "SNS", "AutoScaling"],
  },

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      location: "Bhopal, India",
      period: "Jun 2019 – Jun 2023",
    },
  ],
};
