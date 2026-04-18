// Structured resume data parsed and enriched from Aman's resume

export const resumeData = {
  personal: {
    name: "Aman Kumar Pandey",
    role: "Software Developer",
    tagline:
      "Building scalable backend systems & cloud-native APIs that power real products.",
    email: "pandeyaman997@gmail.com",
    // phone: "+919993935261",
    linkedin: "https://linkedin.com/in/aman-k-pandey",
    github: "https://github.com/aman-k-pandey",
    location: "Bhopal, India",
    resumeUrl: "#",
  },

  summary: `Backend-focused Full Stack Developer specializing in building high-performance, scalable APIs and distributed systems using Node.js. Experienced in designing efficient database architectures with MongoDB and MySQL, and deploying production-grade applications on AWS.

  Skilled in developing end-to-end solutions with React on the frontend, ensuring seamless client-server integration. Strong focus on writing clean, maintainable code and optimizing systems for performance, reliability, and scalability in real-world environments.`,

  highlights: [
    "Architected backend systems capable of handling thousands of concurrent requests efficiently",
    "Developed 20+ production-grade REST APIs using Node.js and Express",
    "Optimized database performance using indexing, query restructuring, and aggregation pipelines",
    "Reduced API response time by 30–50% through query optimization and efficient data fetching strategies",
    "Managed AWS infrastructure (EC2, S3, RDS, Lambda, VPC) for scalable and reliable deployments",
    "Implemented secure authentication (JWT, OAuth) and integrated payment gateways (Stripe, Razorpay)",
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
      description:
        "Full-stack development of internal and client-facing web applications.",
      achievements: [
        "Built full-stack applications including an account management tool and a file-sharing platform.",
        "Integrated Stripe payment gateway and Google OAuth for secure authentication flows.",
        "Configured AWS S3 for scalable file storage and access control.",
      ],
      tech: [
        ,
        "NodeJs",
        "MongoDB",
        "Razorpay",
        "AWS S3",
        "OAuth",
        "TypeScript",
        "ReactJs",
      ],
    },
  ],

  projects: [
    {
      id: "bookanartist",
      title: "BookAnArtist Platform",
      description: `Developed backend APIs for artist booking workflows handling multiple concurrent user requests
Designed scalable architecture capable of supporting thousands of users and bookings
Optimized database queries and reduced API response time by ~30%
Implemented secure authentication and role-based access (users, artists, admin)
Integrated payment gateway (Razorpay/Stripe) for seamless transactions`,
      tech: ["Node.js", "MySQL", "AWS Lambda", "S3", "EC2", "Microservices"],
      live: "https://bookanartist.co",
      github: null,
      featured: true,
    },
    {
      id: "wescover",
      title: "Wescover Integration",
      description: `Developed backend APIs supporting cross-platform art discovery and workflows
Built and maintained GraphQL APIs for flexible data querying and efficient data handling
Implemented drip automation workflows for user engagement and communication
Ensured API consistency and reliability across different services`,
      tech: ["Node.js", "GraphQL", "REST APIs", "AWS", "MongoDB"],
      live: "https://wescover.com",
      github: null,
      featured: true,
    },
    {
      id: "myfitnessmantra",
      title: "MyFitnessMantra",
      description: `Built full-stack fitness platform with scalable backend using Node.js and TypeScript
Designed features for workout tracking, nutrition logs, and user progress analytics
Implemented cloud-based media storage using AWS S3 for exercise content
Optimized database queries and improved API performance significantly
Integrated secure authentication and user data management systems`,
      tech: ["Node.js", "TypeScript", "Angular", "MongoDB", "S3", "EC2"],
      live: "https://myfitmantra.com",
      github: null,
      featured: true,
    },
    {
      id: "filesharingapp",
      title: "Cloud File-Sharing App",
      description: `Built a file-sharing application allowing users to upload and download files easily
Implemented secure file upload and storage using AWS S3
Generated shareable file links enabling other users to access and download files
Handled file retrieval and download functionality through backend APIs
Designed a simple and efficient system for file access and transfer`,
      tech: ["React.js", "Node.js", "MongoDB", "AWS S3"],
      live: null,
      github: null,
      featured: false,
    },
    {
      id: "accountmgmt",
      title: "Account Management Software",
      description: `Developed a full-stack account management system for handling user profiles and subscriptions
Implemented Stripe integration for billing and payment workflows
Built secure authentication and user session management
Designed backend APIs for managing users, plans, and transactions
Added audit logging for tracking user actions and system activities`,
      tech: ["React.js", "Node.js", "MongoDB", "Razorpay", "Express.js"],
      live: null,
      github: null,
      featured: false,
    },
    {
      id: "prabhaaindira",
      title: "Prabha Indira Security Agency Pvt. Ltd. — Employee Management System",
      description: `Developed a full-stack employee management system for a private security agency managing 50–200+ guards across multiple client sites Built complete Tender management module — client site contracts, owner details, guard deployment tracking, and contract expiry alerts Implemented daily Attendance system supporting Day Shift, Night Shift, and Extra Duty with bulk marking and monthly calendar view Engineered automated Salary generation with per-day rate calculation, night allowance, Extra Duty pay, ESI and PF deductions, and locked monthly payroll Designed Guard and Supervisor management with zone-based hierarchy, role-based access control for Director, Supervisor, and Admin roles Created printable Salary Slip generation and Excel export for monthly payroll sheets Built real-time Dashboard with live guard count, active tenders, today's duty summary, and absenteeism alerts Configured CI/CD pipeline for automated deployment of frontend on Vercel and backend on cloud infrastructure`,
      tech: ["Next.js", "NestJS", "MongoDB", "CI/CD", "Vercel"],
      live: "https://frontend-tau-liard-gw91wvd620.vercel.app/",
      github: [
        "https://github.com/Aman620-tech/security_agency_nextjs",
        "https://github.com/Aman620-tech/security_agency_nestJS"
      ],
      featured: true,
    },
  ],

  skills: {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "NextJS"],
    Backend: [
      "Node.js", "Express.js", "Fastify", "NestJS", "TypeScript",
      "Sequelize", "Mongoose", "REST APIs", "Microservices", "Stripe", "Razorpay",
    ],
    Database: ["MongoDB", "MySQL", "PostgreSQL"],
    Cloud: [
      "AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS",
      "IAM", "ELB", "CloudWatch", "SNS", "AutoScaling",
    ],
    DevOps: [
      "CI/CD", "GitHub Actions", "Docker", "Vercel", "PM2", "Nginx",
    ],
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
