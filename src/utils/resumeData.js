export const resumeData = {
  personal: {
    name: "Aman Kumar Pandey",
    role: "Full Stack Engineer",
    tagline:
      "Building scalable backend systems & cloud-native APIs that power real products.",
    email: "pandeyaman997@gmail.com",
    website: "https://amankumarpandey.com",
    linkedin: "https://linkedin.com/in/aman-k-pandey",
    github: "https://github.com/Aman620-tech",
    location: "Bhopal, India",
    resumeUrl: "#",
  },

  summary: `Full Stack Software Developer with 4+ years of experience building scalable, high-performance systems using Node.js, React, microservices architecture, and cloud-native design. Proficient in MySQL, MongoDB, Redis, Docker, Kubernetes, and queue-based systems, with strong expertise in REST API development, frontend UI development, system design patterns, database optimization, and caching strategies.

  Experienced in payment gateway integrations (Stripe, Razorpay), real-time applications, and cloud deployments across AWS, Heroku, and Netlify. Familiar with observability tooling (Grafana, New Relic), distributed systems, and MCP servers. Actively leverages AI tools and automation workflows to accelerate development and deliver reliable, production-grade software. Adaptable and quick to ramp up in any language or tech stack as the role demands.`,

  highlights: [
    "Architected backend systems capable of handling thousands of concurrent requests efficiently",
    "Developed 20+ production-grade REST and GraphQL APIs using Node.js, Express, NestJS, and Fastify",
    "Implemented Redis caching and database indexing strategies, significantly reducing load and improving response times",
    "Architected asynchronous workflows using message queues, improving reliability, fault tolerance, and throughput",
    "Managed AWS infrastructure (EC2, S3, RDS, Lambda, CloudWatch, Cognito, Secrets Manager) for scalable deployments",
    "Containerized applications using Docker and Kubernetes, with CI/CD pipelines across AWS, Heroku, and Netlify",
    "Implemented secure authentication (JWT, OAuth) and integrated payment gateways (Stripe, Razorpay)",
    "Monitored application health and performance using Grafana, New Relic, and CloudWatch",
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
        "Built and maintained scalable backend services using Node.js, Express.js, MySQL, MongoDB, and Redis in microservices architectures.",
        "Designed and optimized RESTful APIs handling high-volume requests and complex business workflows, improving response times.",
        "Implemented Redis caching strategies and database indexing to significantly reduce load and improve performance.",
        "Architected asynchronous workflows using message queues, improving reliability, fault tolerance, and throughput.",
        "Designed and implemented payment flows including Stripe, Razorpay, wallet, refund, and Buy Now with secure backend and frontend integration.",
        "Integrated Shopify APIs to sync product catalog, orders, and inventory data with internal systems, enabling seamless e-commerce workflows and real-time updates.",
        "Developed responsive, dynamic UIs using React.js and TypeScript, translating designs into production-ready components.",
        "Built reusable component libraries and managed state with Redux for consistent UX across complex workflows.",
        "Integrated frontend with RESTful and GraphQL APIs, handling authentication, error states, and real-time updates.",
        "Migrated and deployed services on AWS (Lambda, EC2, S3, CloudWatch); containerized applications using Docker and Kubernetes.",
        "Integrated third-party services including FedEx API, Stripe, Razorpay, and various AWS services.",
        "Monitored application health using Grafana, New Relic, and CloudWatch for proactive issue resolution.",
        "Designed data synchronization pipelines between MongoDB and MySQL ensuring near real-time consistency.",
        "Led the Feature Lambda service, designing serverless workflows powering core platform operations at scale.",
        "Mentored interns and junior engineers through code reviews, sprint planning, and technical guidance.",
      ],
      tech: [
        "Node.js",
        "Express.js",
        "React.js",
        "TypeScript",
        "MySQL",
        "MongoDB",
        "Redis",
        "AWS Lambda",
        "EC2",
        "S3",
        "Docker",
        "Kubernetes",
        "Microservices",
      ],
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
        "Designed and architected the MongoDB schema and overall database structure for the application.",
        "Built and owned the entire backend single-handedly — APIs, middleware, validation, and business logic.",
        "Integrated Google OAuth for secure user authentication and login flow.",
        "Integrated Razorpay payment gateway handling end-to-end transaction and order flows.",
        "Implemented AWS S3 file upload system with pre-signed URLs and server-side validation.",
      ],
      tech: [
        "Node.js",
        "MongoDB",
        "Razorpay",
        "AWS S3",
        "OAuth",
        "TypeScript",
        "React.js",
      ],
    },
  ],

  projects: [
    {
      id: "bookanartist",
      title: "BookAnArtist Platform",
      description: `Designed scalable APIs handling real-time marketplace workflows with low latency and high reliability
Developed backend APIs for artist booking workflows handling multiple concurrent user requests
Built new feature flows and Lambda cronjobs for marketing and follow-up emails
Optimized database queries and reduced API response time by ~30%
Implemented secure authentication and role-based access (users, artists, admin)
Integrated payment gateway (Razorpay/Stripe) for seamless transactions`,
      tech: [
        "Node.js",
        "React.js",
        "JavaScript",
        "MongoDB",
        "MySQL",
        "AWS Lambda",
        "S3",
        "EC2",
        "Microservices",
      ],
      live: "https://bookanartist.co",
      github: null,
      featured: true,
    },
    {
      id: "wescover",
      title: "Wescover Integration",
      description: `Worked on backend integrations using Node.js and Azure services
Built and maintained GraphQL APIs for flexible data querying and efficient data handling
Built automation workflows and Slack-based integrations
Implemented drip automation workflows for user engagement and communication
Ensured API consistency and reliability across different services`,
      tech: ["Node.js", "JavaScript", "GraphQL", "MongoDB", "Azure", "AWS"],
      live: "https://www.wescover.com",
      github: null,
      featured: true,
    },
    {
      id: "myfitnessmantra",
      title: "MyFitnessMantra",
      description: `Built full-stack fitness/gym platform for gym, trainer, and user management with library management
Designed features for workout tracking, nutrition logs, and user progress analytics
Implemented user management, Razorpay integration, and permission management
Implemented cloud-based media storage using AWS S3 for exercise content
Optimized database queries and improved API performance significantly`,
      tech: [
        "Node.js",
        "TypeScript",
        "Angular",
        "MongoDB",
        "S3",
        "EC2",
        "Razorpay",
      ],
      live: "https://myfitmantra.com",
      github: null,
      featured: true,
    },
    {
      id: "foodtaste",
      title: "Food-Taste",
      description: `Built a management system for local vendors to record payments and bills across multiple hotels/cafes
Implemented admin management and hotel item management
Built order record management functionality
Designed backend APIs for multi-hotel payment and billing tracking`,
      tech: ["Node.js", "React.js", "JavaScript", "MySQL"],
      live: null,
      github: null,
      featured: false,
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
      title:
        "Prabha Indira Security Agency Pvt. Ltd. - Employee Management System",
      description: `Developed a full-stack employee management system for a private security agency managing 50–200+ guards across multiple client sites
Built complete Tender management module - client site contracts, owner details, guard deployment tracking, and contract expiry alerts
Implemented daily Attendance system supporting Day Shift, Night Shift, and Extra Duty with bulk marking and monthly calendar view
Engineered automated Salary generation with per-day rate calculation, night allowance, Extra Duty pay, ESI and PF deductions, and locked monthly payroll
Designed Guard and Supervisor management with zone-based hierarchy, role-based access control for Director, Supervisor, and Admin roles
Created printable Salary Slip generation and Excel export for monthly payroll sheets
Built real-time Dashboard with live guard count, active tenders, today's duty summary, and absenteeism alerts
Configured CI/CD pipeline for automated deployment of frontend on Vercel and backend on cloud infrastructure`,
      tech: ["Next.js", "NestJS", "MongoDB", "CI/CD", "Vercel"],
      live: "https://frontend-tau-liard-gw91wvd620.vercel.app/",
      github: [
        "https://github.com/Aman620-tech/security_agency_nextjs",
        "https://github.com/Aman620-tech/security_agency_nestJS",
      ],
      featured: true,
    },
  ],

  skills: {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Redux",
      "React Query",
      "Ant Design",
    ],
    Backend: [
      "Node.js",
      "Python",
      "Express.js",
      "Fastify",
      "FastApi",
      "NestJS",
      "TypeScript",
      "Sequelize",
      "Mongoose",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Stripe",
      "Razorpay",
    ],
    Database: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Database Design",
      "Query Optimization",
      "Indexing",
      "Data Modeling",
    ],
    Cloud: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS RDS",
      "AWS Cognito",
      "AWS Secrets Manager",
      "IAM",
      "ELB",
      "CloudWatch",
      "SNS",
      "AutoScaling",
      "Heroku",
      "Netlify",
      "Firebase",
    ],
    DevOps: [
      "CI/CD",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Vercel",
      "PM2",
      "Nginx",
    ],
    "System Design": [
      "System Design",
      "Software Design Patterns",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Scalable Backend Systems",
    ],
    "Messaging & Async": [
      "Message Queues",
      "Background Jobs",
      "Asynchronous Processing",
      "Data Synchronization Workflows",
    ],
    "Monitoring & Performance": [
      "Grafana",
      "New Relic",
      "Application Monitoring",
      "Performance Optimization",
      "API Optimization",
      "Caching Strategies",
    ],
    "Tools & Integrations": [
      "Stripe",
      "Razorpay",
      "FedEx API",
      "Shopify API",
      "OAuth",
      "Git",
      "Postman",
      "Agile/Scrum",
      "MCP Server",
    ],
  },

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      location: "Bhopal, India",
      // period: "Jun 2019 – Jun 2023",
    },
  ],
};