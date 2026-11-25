export const personalInfo = {
  name: "Prashant Tarbundiya",
  role: "Full Stack Developer & Systems Engineer",
  subRole: "B.Tech. in Computer Science and Engineering @ Institute of Technology, Nirma University",
  status: "Available for Winter 2027 SWE Internships & Full-Time Roles",
  portfolioUrl: "https://prashanttarbundiya.vercel.app",
  email: "prashanttarbundiya2@gmail.com",
  location: "Ahmedabad / Gujarat, India",
  summary:
    "Computer Science undergraduate with a strong foundation in programming, problem-solving, and data structures. Proficient in C++ and Python with hands-on software development experience. Focused on system software, operating systems, high-concurrency architectures, and reliable distributed applications.",
  resumeUrl: "/assets/Prashant_Tarbundiya_Resume.pdf",
  socials: {
    github: "https://github.com/PrashantTarbundiya",
    linkedin: "https://linkedin.com/in/prashant-tarbundiya",
    leetcode: "https://leetcode.com/u/sRj6itRSrz/",
    codeforces: "https://codeforces.com/profile/Prashant1304",
    email: "mailto:prashanttarbundiya2@gmail.com",
  },
};

export const heroStats = [
  {
    label: "B.Tech CGPA",
    value: "9.08",
    suffix: "/10.0",
    subtext: "Nirma University (Aug 2023 – May 2027)",
    accent: "lime",
  },
  {
    label: "The Big Code 2026",
    value: "Top 1,500",
    suffix: "",
    subtext: "Nationwide Qualifier (Google Contest)",
    accent: "coral",
  },
  {
    label: "Codeforces Rating",
    value: "Pupil",
    suffix: "",
    subtext: "Active Algorithmic Competitor",
    accent: "cyan",
  },
  {
    label: "Engineered Repos",
    value: "10+",
    suffix: "",
    subtext: "AuraPass, LabPortal, MakeChat, PlayBack",
    accent: "lime",
  },
];

export const flagshipProject = {
  id: "aurapass",
  title: "AuraPass",
  subtitle: "Enterprise Facial Recognition System",
  category: ["ai", "fullstack", "systems"],
  badge: "Featured AI-Native Flagship",
  description:
    "High-precision AI-powered enterprise attendance and access control system engineered to maintain robust recognition recall under extreme 90° head-pose rotations, integrated with dual-layer passive anti-spoofing and real-time attendance logging.",
  highlights: [
    "90° Profile Yaw Tolerance: High-precision deep learning facial recognition supporting frontal and side-face angles up to 90 degrees with rapid sub-second inference.",
    "Anti-Spoofing & Liveness Guard: Proactively detects and rejects 2D photo prints, digital display replays, and synthetic face masks via passive texture and depth verification.",
    "Enterprise Scalability & RBAC: Production-grade containerized architecture with PostgreSQL, Docker microservices, real-time attendance logging, audit trails, and Role-Based Access Control.",
    "Companion Cross-Platform App: Companion React Native mobile application for employee onboarding, kiosk verification, and shift management.",
  ],
  specs: [
    { label: "Profile Rotation", value: "90° Yaw", color: "lime" },
    { label: "Inference Latency", value: "< 220ms", color: "cyan" },
    { label: "Liveness Guard", value: "Anti-Spoof V2", color: "coral" },
    { label: "Infrastructure", value: "Docker + PostgreSQL", color: "violet" },
  ],
  tags: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "React.js",
    "PostgreSQL",
    "Docker",
    "React Native",
  ],
  githubUrl: "https://github.com/PrashantTarbundiya/RMS",
  liveUrl: "https://13-60-225-165.sslip.io/",
  architecturePipeline: [
    {
      step: "01",
      title: "INGESTION",
      heading: "90° Angle Camera Feed",
      desc: "Frontal and extreme side-profile video capture via kiosk camera or mobile stream.",
    },
    {
      step: "02",
      title: "ANTI-SPOOF",
      heading: "Liveness Detection",
      desc: "Passive depth, blink, and reflection verification preventing photo & screen replay attacks.",
    },
    {
      step: "03",
      title: "EMBEDDING",
      heading: "Convolutional Encoding",
      desc: "Transforms facial landmarks into 512-dimensional normalized biometric representation vectors.",
    },
    {
      step: "04",
      title: "MATCHING",
      heading: "Cosine Distance Index",
      desc: "Sub-second vector comparison against pre-enrolled employee biometric templates.",
    },
    {
      step: "05",
      title: "RBAC & LOG",
      heading: "PostgreSQL & RBAC",
      desc: "Shift calculations, timecard generation, and department security access enforcement.",
    },
    {
      step: "06",
      title: "CLIENTS",
      heading: "React & React Native",
      desc: "Web dashboard for HR/Admins and mobile app for kiosk verification and employee onboarding.",
    },
  ],
  securityNotes: [
    "Zero raw biometric image persistence: only encrypted 512-d embeddings are retained.",
    "Sub-220ms high-throughput pipeline designed for concurrent worker kiosk check-ins.",
  ],
};

export const otherProjects = [
  {
    id: "lab-portal",
    title: "Lab Portal",
    subtitle: "Diagnostic Laboratory Report & Patient Portal",
    category: ["fullstack", "systems"],
    badge: "Production Healthcare System",
    description:
      "Secure, mobile-first patient report delivery and laboratory operations platform deployed 24/7 on AWS EC2 with Nginx reverse proxy, serving Company A Diagnostics.",
    highlights: [
      "Engineered automated patient report delivery via expiring OTP-gated links, multi-lingual plain-language summaries (English, Telugu, Hindi), and front-desk consoles.",
      "Implemented clinical critical-value safeguards, immediate physician alerting, and HL7/FHIR compliant laboratory diagnostic schemas.",
      "Containerized with Docker and deployed on AWS EC2 with Nginx reverse proxy, automated SSL cert rotation, and health monitoring.",
    ],
    tags: ["JavaScript", "Node.js", "Express.js", "PostgreSQL", "Docker", "AWS EC2", "Nginx"],
    githubUrl: "https://github.com/PrashantTarbundiya/lab-portal",
    liveUrl: "http://3.26.15.115",
    accent: "cyan",
  },
  {
    id: "makechat",
    title: "MakeChat",
    subtitle: "Multi-Model AI Chat Platform",
    category: ["ai", "fullstack"],
    badge: "AI-Native Orchestration",
    description:
      "Multi-model unified platform dynamically routing queries across Google Gemini, OpenRouter, Groq, and HuggingFace APIs with complete context grounding.",
    highlights: [
      "Built an AI chat platform integrating Gemini, OpenRouter, Groq, and HuggingFace through dynamic backend API routing.",
      "Implemented Retrieval-Augmented Generation (RAG) pipeline parsing PDF and DOCX documents for context-grounded AI responses.",
      "Secured with JWT and Google OAuth 2.0 authentication, persistent user chat memory, and session history in MongoDB.",
    ],
    tags: ["MERN Stack", "REST APIs", "JWT", "Google OAuth 2.0", "RAG", "MongoDB"],
    githubUrl: "https://github.com/PrashantTarbundiya/MakeChat",
    liveUrl: "https://make-chat.vercel.app/",
    accent: "coral",
  },
  {
    id: "playback",
    title: "PlayBack",
    subtitle: "AI-Enabled Video Streaming Platform",
    category: ["fullstack", "ai"],
    badge: "Media & Intelligence",
    description:
      "Production-grade video streaming platform with modular REST APIs, multi-provider OAuth, Cloudinary media storage, and Gemini-powered video summarization.",
    highlights: [
      "Developed a modular video streaming application with REST APIs for videos, playlists, subscriptions, and nested comments.",
      "Integrated Google, Facebook, and GitHub OAuth 2.0 authentication with secure JWT token revocation and session management.",
      "Engineered Cloudinary asset optimization and Gemini AI integration for instant video summaries and time-stamped contextual Q&A.",
    ],
    tags: ["MERN Stack", "REST APIs", "JWT", "OAuth 2.0", "Cloudinary", "Gemini API"],
    githubUrl: "https://github.com/PrashantTarbundiya/PlayBack",
    liveUrl: "https://play-back-frontend.vercel.app/",
    accent: "cyan",
  },
  {
    id: "scatch",
    title: "Scatch",
    subtitle: "E-commerce Authentication Platform",
    category: ["fullstack", "systems"],
    badge: "Security & Auth Microservice",
    description:
      "High-security full-stack authentication microservice featuring multi-factor email OTP verification and modular MVC middleware isolation.",
    highlights: [
      "Developed a full-stack authentication application with JWT authentication, email OTP verification, and session management.",
      "Implemented modular backend architecture using controllers, middleware, MongoDB Atlas, and Resend API with environment-based credential management.",
      "Optimized MongoDB Atlas aggregation pipelines and rate limiting guards for live production customer session verification.",
    ],
    tags: ["MERN Stack", "JWT", "MongoDB Atlas", "Express.js", "Resend API"],
    githubUrl: "https://github.com/PrashantTarbundiya/SCATCH",
    liveUrl: "https://scatch-livid.vercel.app/",
    accent: "lime",
  },
  {
    id: "revesoil",
    title: "ReveSoil 1.0",
    subtitle: "AI Soil Vision & Agricultural Analysis",
    category: ["ai"],
    badge: "MINeD Hackathon Top 10",
    description:
      "Award-winning computer vision and machine learning solution for automated structured data extraction and fertility parameter prediction from complex soil datasets.",
    highlights: [
      "Built end-to-end data preprocessing, normalization, and feature extraction pipelines for agricultural soil measurement matrices.",
      "Ensembled gradient boosting and neural network models (CatBoost, LightGBM, XGBoost, Random Forest, TensorFlow).",
      "Recognized in the Top 10 nationally at the MINeD Hackathon (Nirma University) among nationwide engineering teams.",
    ],
    tags: ["Python", "Computer Vision", "TensorFlow", "CatBoost", "LightGBM", "Scikit-Learn"],
    githubUrl: "https://github.com/PrashantTarbundiya/Reve-soil-1.0",
    accent: "lime",
  },
  {
    id: "ll1-parser",
    title: "LL(1) Parser Studio",
    subtitle: "Compiler Design & CFG Workbench",
    category: ["systems"],
    badge: "Compilers & Systems",
    description:
      "Comprehensive interactive FIRST & FOLLOW Set Calculator, LL(1) Parsing Table Generator & Context-Free Grammar simulator with 100% test pass rate (77/77).",
    highlights: [
      "Built a web-based compiler workbench that accepts arbitrary Context-Free Grammars (CFGs) and computes exact FIRST & FOLLOW sets via fixed-point iteration.",
      "Diagnoses parsing conflicts, verifies LL(1) grammar compliance, and visualizes step-by-step parsing stack execution.",
      "Engineered with 100% test coverage (77/77 unit tests passed) across complex recursive and ambiguous grammar edge cases.",
    ],
    tags: ["JavaScript", "Compiler Design", "CFG", "Algorithms", "Formal Languages"],
    githubUrl: "https://github.com/PrashantTarbundiya/LL1-Parser-Studio",
    accent: "coral",
  },
  {
    id: "mlops-studio",
    title: "Spotify Audio Intelligence",
    subtitle: "High-Dimensional Recommender & Pipeline",
    category: ["ai", "systems"],
    badge: "Audio Intelligence",
    description:
      "High-scale music analytics platform engineered to cluster and recommend audio tracks across 170,000+ tracks using high-dimensional cosine similarity projections.",
    highlights: [
      "Implemented unsupervised high-dimensional clustering and cosine similarity vector projections across 170k+ tracks.",
      "Built data drift statistical evaluation pipelines for automated model consistency.",
      "Architected FastAPI microservices with Prometheus telemetry metrics and Docker containers.",
    ],
    tags: ["Python", "FastAPI", "K-Means", "Docker", "Prometheus"],
    githubUrl: "https://github.com/PrashantTarbundiya/MLOps_Project",
    accent: "lime",
  },
  {
    id: "research-crew",
    title: "ResearchAndBlogCrew",
    subtitle: "Autonomous Multi-Agent AI System",
    category: ["ai", "systems"],
    badge: "Agentic AI & Orchestration",
    description:
      "Multi-agent AI ecosystem where autonomous specialized agents collaborate on deep topic research and technical publication.",
    highlights: [
      "Configured multi-agent role delegation, task allocation, and memory synthesis for autonomous deep research.",
      "Orchestrated sequential workflows for automated drafting and technical fact-checking.",
      "Packaged with UV package manager for high-performance dependency resolution.",
    ],
    tags: ["Python", "CrewAI", "AI Agents", "LLMs", "UV"],
    githubUrl: "https://github.com/PrashantTarbundiya/research_and_blog_crew",
    accent: "coral",
  },
  {
    id: "resume-screening",
    title: "Resume Screening System",
    subtitle: "Automated NLP Candidate Ranking Engine",
    category: ["ai", "fullstack"],
    badge: "NLP Talent Ranking",
    description:
      "Machine learning resume screening platform with multi-PDF parsing, skill extraction, candidate similarity scoring, and real-time ranking dashboards.",
    highlights: [
      "Developed an NLP engine parsing and categorizing PDF resumes with text extraction and TF-IDF vector embeddings.",
      "Interactive modern UI with batch upload, category filtering, and evaluation metrics.",
      "Trained classification models achieving high accuracy across diverse industry skill taxonomies.",
    ],
    tags: ["Python", "NLP", "Machine Learning", "PDF Parsing", "Scikit-Learn"],
    githubUrl: "https://github.com/PrashantTarbundiya/Resume-Screening-System",
    accent: "cyan",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Chemicrown Trading Co.",
    location: "Bhavnagar, India",
    period: "May 2026 – Jun 2026",
    skills: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    bullets: [
      "Developed and enhanced ERP modules for a Chemical Distribution Management System (CDMS) using React.js, Node.js, Express.js, PostgreSQL, and Prisma.",
      "Built REST APIs and responsive interfaces, implementing authentication, inventory management, and order-processing workflows for a live production system.",
    ],
  },
  {
    role: "Software Engineering Simulation",
    company: "JPMorgan Chase & Co.",
    location: "Virtual Experience",
    period: "May 2025",
    skills: ["Java", "Apache Kafka", "H2 Database", "REST APIs"],
    bullets: [
      "Constructed high-throughput financial microservice components with Java, Kafka streaming queues, H2 database, and RESTful APIs.",
    ],
  },
];

export const education = {
  degree: "B.Tech. in Computer Science and Engineering",
  institution: "Institute of Technology, Nirma University",
  location: "Ahmedabad, India",
  period: "Aug 2023 – May 2027",
  cgpa: "9.08 / 10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Computer Networks",
    "System Design & Software Engineering",
  ],
};

/**
 * Technical Skills Matrix — Clean, grounded engineering skills directly from
 * resume & production stacks (Lab Portal, Chemicrown, AuraPass)
 * No AI slop or inflated buzzwords.
 */
export const skillCategories = [
  {
    title: "Programming Languages",
    subtitle: "Core systems & development",
    icon: "code",
    skills: ["C++", "Python", "Java", "C", "JavaScript", "SQL"],
  },
  {
    title: "CS Fundamentals & Systems",
    subtitle: "Algorithmic & OS concepts",
    icon: "cpu",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Operating Systems",
      "Problem Solving",
      "System Design",
    ],
  },
  {
    title: "Web & Backend Engineering",
    subtitle: "Scalable APIs & frameworks",
    icon: "server",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Databases & ORM",
    subtitle: "Relational & Document stores",
    icon: "database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "Prisma ORM",
      "Mongoose",
    ],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Applied AI & architectures",
    icon: "brain",
    skills: ["Machine Learning", "Deep Learning", "NLP", "RAG"],
  },
  {
    title: "Developer Tools & Cloud",
    subtitle: "Containerization & deployment",
    icon: "boxes",
    skills: ["Docker", "AWS EC2", "Nginx", "Git", "GitHub", "Postman", "Linux"],
  },
];

export const achievements = [
  {
    title: "The Big Code 2026 — Round 2 Qualifier",
    organization: "Google Programming Competition",
    tag: "Top 1,500 Nationwide",
    desc: "Qualified for Round 2 of Google's national programming competition after clearing Round 1 among thousands of competitors across India.",
    icon: "trophy",
    color: "lime",
  },
  {
    title: "Codeforces Pupil Profile",
    organization: "Competitive Programming",
    tag: "Active Competitor",
    desc: "Actively solving algorithmic challenges under strict real-time complexity and memory constraints on Codeforces.",
    link: "https://codeforces.com/profile/Prashant1304",
    icon: "terminal",
    color: "cyan",
  },
  {
    title: "Top 10 — MINeD National Hackathon",
    organization: "Nirma University",
    tag: "National Finalist",
    desc: "Developed ReveSoil 1.0, an AI-powered end-to-end computer vision solution for automated structured data extraction from complex soil datasets.",
    link: "https://github.com/PrashantTarbundiya/Reve-soil-1.0",
    icon: "medal",
    color: "coral",
  },
  {
    title: "Finalist — HackNUThon",
    organization: "March 2025",
    tag: "Hackathon Finalist",
    desc: "Prototyped full-stack real-time web application within 36 hours, advancing to the final judging round for architectural execution and performance.",
    icon: "flame",
    color: "lime",
  },
  {
    title: "JPMorgan Chase Software Engineering",
    organization: "Job Simulation",
    tag: "Certified Simulation",
    desc: "Constructed high-throughput financial microservices components using Java, Apache Kafka distributed messaging, and RESTful APIs.",
    icon: "shield-check",
    color: "coral",
  },
  {
    title: "LeetCode Competitive Practice",
    organization: "Algorithmic Problem Solving",
    tag: "DSA Mastery",
    desc: "Extensive problem-solving portfolio spanning trees, graphs, dynamic programming, binary search, and mathematical optimizations.",
    link: "https://leetcode.com/u/sRj6itRSrz/",
    icon: "check-circle",
    color: "cyan",
  },
];
