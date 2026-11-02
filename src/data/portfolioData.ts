import {
  SkillItem,
  ProjectItem,
  InternshipItem,
  CertificationItem,
  EducationItem,
  AchievementItem,
  DeveloperProfile
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Ajay',
  fullName: 'Ajay',
  professionalTitle: 'Computer Science Engineering Student | Aspiring Software Developer | Full-Stack Developer | AI Enthusiast',
  subtitle: 'Building Ideas Into Digital Experiences.',
  description: 'Computer Science Engineering student passionate about Full-Stack Development, Artificial Intelligence, and creating technology that solves real-world problems.',
  location: 'Chennai, Tamil Nadu, India',
  email: 'ajayraja8610@gmail.com',
  educationSnippet: 'B.E. Computer Science and Engineering, Easwari Engineering College, Chennai',
  about: `I am a passionate Computer Science Engineering student interested in software development, full-stack web development, artificial intelligence, and problem-solving.

I enjoy developing practical applications that solve real-world problems. I have experience working with modern web technologies, databases, backend development, and AI-powered applications.

I continuously improve my programming skills by building projects, exploring new technologies, participating in technical activities, and learning through practical experience.

My career goal is to become a skilled software developer and contribute to innovative technology solutions.`,
  highlights: [
    'Building responsive full-stack applications with modern frameworks',
    'Working with relational and NoSQL databases (MySQL, MongoDB, Firestore)',
    'Exploring artificial intelligence and Natural Language Processing',
    'Learning new programming languages and modern tech stacks',
    'Practicing algorithmic problem solving and clean code principles',
    'Active participation in hackathons and technical symposiums'
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming Languages
  { id: 'c', name: 'C', category: 'languages', icon: 'Code', description: 'Low-level systems programming, memory management & pointer logic' },
  { id: 'cpp', name: 'C++', category: 'languages', icon: 'Code2', description: 'Object-oriented programming, standard template library (STL) & data structures' },
  { id: 'python', name: 'Python', category: 'languages', icon: 'Terminal', description: 'AI prototyping, scripting, data manipulation & algorithmic problem solving' },
  { id: 'java', name: 'Java', category: 'languages', icon: 'Coffee', description: 'Core Java, OOP principles, multi-threading, Spring Boot enterprise logic' },
  { id: 'javascript', name: 'JavaScript', category: 'languages', icon: 'FileCode', description: 'Modern ES6+, asynchronous JavaScript, DOM manipulation, web APIs' },

  // Frontend Development
  { id: 'html5', name: 'HTML5', category: 'frontend', icon: 'Layout', description: 'Semantic structure, accessibility standards (a11y), responsive markups' },
  { id: 'css3', name: 'CSS3', category: 'frontend', icon: 'Palette', description: 'Modern flexbox, CSS grid, keyframe animations & responsive media queries' },
  { id: 'react', name: 'React.js', category: 'frontend', icon: 'Atom', description: 'Component architecture, custom hooks, state management & virtual DOM' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', icon: 'ShieldCheck', description: 'Static typing, interfaces, generics, type-safe full-stack communication' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', icon: 'Wind', description: 'Utility-first styling, rapid UI development, dark mode theming' },

  // Backend Development
  { id: 'nodejs', name: 'Node.js', category: 'backend', icon: 'Server', description: 'Event-driven server runtime, asynchronous I/O, RESTful API architecture' },
  { id: 'express', name: 'Express.js', category: 'backend', icon: 'Cpu', description: 'Middleware pipelines, routing, authentication tokens, error handling' },
  { id: 'springboot', name: 'Spring Boot', category: 'backend', icon: 'Boxes', description: 'Enterprise Java backend, dependency injection, MVC structure' },

  // Databases
  { id: 'mysql', name: 'MySQL', category: 'databases', icon: 'Database', description: 'Relational database design, ACID compliance, complex SQL queries & indexing' },
  { id: 'mongodb', name: 'MongoDB', category: 'databases', icon: 'FolderGit2', description: 'Document-oriented NoSQL storage, schema aggregation pipelines, BSON data' },
  { id: 'firebase', name: 'Firebase', category: 'databases', icon: 'Flame', description: 'Authentication, cloud functions, hosting & real-time client SDKs' },
  { id: 'firestore', name: 'Cloud Firestore', category: 'databases', icon: 'Layers', description: 'NoSQL collection-document structure, real-time listeners, security rules' },

  // Tools and Platforms
  { id: 'vscode', name: 'Visual Studio Code', category: 'tools', icon: 'Laptop', description: 'Primary IDE, debugging, extensions & workspace workflow' },
  { id: 'git', name: 'Git', category: 'tools', icon: 'GitBranch', description: 'Distributed version control, branch management, merge conflict resolution' },
  { id: 'github', name: 'GitHub', category: 'tools', icon: 'Github', description: 'Open-source collaboration, pull requests, repository workflows' },
  { id: 'googleaistudio', name: 'Google AI Studio', category: 'tools', icon: 'Sparkles', description: 'Gemini API integration, prompt engineering, multimodal testing' },
  { id: 'firebaseconsole', name: 'Firebase Console', category: 'tools', icon: 'Flame', description: 'Project configuration, Firestore security rules, auth provider management' },

  // Areas of Interest
  { id: 'ai', name: 'Artificial Intelligence', category: 'interests', icon: 'BrainCircuit', description: 'Machine learning fundamentals, predictive systems, intelligent agents' },
  { id: 'nlp', name: 'Natural Language Processing', category: 'interests', icon: 'MessageSquareCode', description: 'Sentiment analysis, entity extraction, text processing & tokenization' },
  { id: 'fullstack', name: 'Full-Stack Development', category: 'interests', icon: 'Globe', description: 'End-to-end web system architecture from client UI to database schema' },
  { id: 'dbmgmt', name: 'Database Management', category: 'interests', icon: 'HardDrive', description: 'Data modeling, schema normalization, query optimization & storage' },
  { id: 'problemsolving', name: 'Problem Solving', category: 'interests', icon: 'CheckCircle2', description: 'Data structures, algorithmic efficiency, optimization & clean coding' }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'mental-health-journal',
    title: 'Mental Health Journal & Mood Analyzer',
    subtitle: 'AI-Powered Emotional Well-Being & Analytics Platform',
    category: 'AI & ML',
    overview: 'A web-based mental wellness application designed to help users maintain personal journals, track daily moods, monitor sleep patterns, and understand emotional trends with intelligent NLP insights.',
    problemStatement: 'People often find it difficult to consistently track their emotional well-being and identify subtle patterns in their daily moods. This application provides an accessible digital platform to record daily reflections, correlate sleep with emotional vitality, and visualize wellness trends over time.',
    keyFeatures: [
      'Daily mood tracking with multidimensional affective parameters',
      'Rich text personal journal entries with encryption & privacy safeguards',
      'AI-powered journal insights for self-reflection using Google Gemini API',
      'Sentiment analysis and sentiment trajectory extraction via NLP',
      'Sleep quality correlation and rest pattern monitoring',
      'Weekly and monthly mood reflections with automated summaries',
      'Interactive mood analytics dashboard with temporal charts',
      'Secure user authentication with Firebase Auth & role guards',
      'Cloud-based persistent data storage powered by Firestore'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Firebase Auth',
      'Firestore',
      'Java',
      'Spring Boot',
      'Stanford CoreNLP',
      'Google Gemini API'
    ],
    architecture: [
      'Client-side responsive React UI with real-time mood logging inputs',
      'Express.js & Spring Boot microservice bridge for NLP linguistic parsing',
      'Stanford CoreNLP pipeline extracting sentiment scores & emotional polarity',
      'Google Gemini API generating constructive, empathetic reflection prompts',
      'Firestore collection storing user-keyed journal records and sleep metrics'
    ],
    githubUrl: 'https://github.com/ajay-dev/mental-health-journal',
    liveDemoUrl: '#demo-mental-health',
    demoType: 'mental-health'
  },
  {
    id: 'hotel-billing-management',
    title: 'Hotel Billing & Management System',
    subtitle: 'Point-of-Sale & Operations Management System',
    category: 'Full-Stack',
    overview: 'A digital hotel and restaurant management and billing web application designed to simplify dining operations, manage dynamic table states, and improve billing efficiency for small hotels.',
    problemStatement: 'Small restaurants and hotels frequently suffer from manual billing bottlenecks, order confusion between waiters and cashiers, calculation errors in GST/taxes, and lack of clear end-of-day sales auditing.',
    keyFeatures: [
      'Digital point-of-sale (POS) system with single-screen quick order workflow',
      'Real-time order management with itemized add/update/void controls',
      'Full menu management: dynamic pricing, categories, and availability toggles',
      'Table management with live visual occupancy states (Available, Occupied, Billed)',
      'Backend-verified automatic bill calculation with tax & GST computation',
      'Historical price preservation: menu changes never alter past transaction invoices',
      'Owner dashboard with today’s total sales, payment breakdown & transaction audit',
      'Cashier dashboard restricted to active order creation and bill printing',
      'Daily sales reports with breakdown by Cash, Card, and UPI payments'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Firebase Auth',
      'Firestore'
    ],
    architecture: [
      'Modular React frontend with rapid touchscreen-friendly cashier POS view',
      'Server-authoritative Express.js API calculating tax, discounts, and totals',
      'Strict role-based access control (Owner vs Cashier) verified in Firestore',
      'Immutable historical transaction collection preventing post-hoc edits',
      'Print-ready thermal and standard invoice receipt generation'
    ],
    githubUrl: 'https://github.com/ajay-dev/hotel-billing-system',
    liveDemoUrl: '#demo-hotel-billing',
    demoType: 'hotel-billing'
  }
];

export const INTERNSHIP_DATA: InternshipItem = {
  id: 'rise-internship',
  organization: 'RISE',
  position: 'Intern',
  status: 'Successfully Completed',
  duration: 'June 2025 – August 2025 (Editable Duration)',
  domain: 'Software Engineering & Web Development (Editable Domain)',
  technologies: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Git', 'Agile / Scrum'],
  responsibilities: [
    'Collaborated with engineering peers on building modular frontend web components',
    'Integrated backend REST APIs and handled asynchronous client-server communication',
    'Participated in code reviews, daily standups, and milestone sprint planning',
    'Assisted in writing unit tests and identifying edge cases across interactive forms'
  ],
  tasksCompleted: [
    'Designed responsive UI layouts adhering to modern UI/UX design standards',
    'Built reusable state-managed input components with schema validation',
    'Optimized frontend asset loading and improved lighthouse performance metrics',
    'Documented API endpoints and shared technical setup guides for team members'
  ],
  projectsDeveloped: [
    'Internal operational dashboard prototype for tracking team task workflows',
    'Client interaction demo showcasing dynamic data filtering and tabular views'
  ],
  skillsGained: [
    'Full-stack development lifecycle and industry-standard Git workflow',
    'Clean code modularization and reusable TypeScript architecture',
    'Cross-browser debugging and responsive design testing',
    'Collaborative software development in an engineering environment'
  ],
  keyLearningOutcomes: [
    'Gained hands-on experience translating real product requirements into code',
    'Deepened understanding of state synchronization and backend validation',
    'Learned how to balance rapid feature delivery with code quality and maintainability'
  ]
};

export const CERTIFICATION_DATA: CertificationItem[] = [
  {
    id: 'mongodb-course',
    title: 'MongoDB Course',
    technology: 'MongoDB',
    category: 'Database Management',
    issuingOrganization: 'MongoDB University / Recognized Learning Platform',
    completionDate: 'Completed 2025',
    status: 'Successfully Completed',
    credentialId: 'MDB-CERT-2025-AJAY',
    verificationUrl: 'https://learn.mongodb.com/credentials/verify',
    highlights: [
      'Document model design principles & BSON representation',
      'CRUD operations: insertion, complex querying, projection & updates',
      'Aggregation framework: $match, $group, $project, and index optimization',
      'Data indexing strategies and query performance profiling'
    ]
  }
];

export const EDUCATION_DATA: EducationItem = {
  id: 'easwari-cse',
  degree: 'Bachelor of Engineering (B.E.)',
  department: 'Computer Science and Engineering',
  institution: 'Easwari Engineering College',
  location: 'Chennai, Tamil Nadu, India',
  academicYear: '2023 – Present',
  expectedGraduation: '2027 (Expected)',
  cgpaOrGrade: 'Pursuing with strong academic standing',
  relevantCoursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java / C++)',
    'Database Management Systems (DBMS)',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering Methodologies',
    'Design & Analysis of Algorithms',
    'Web Technology & Cloud Computing'
  ],
  academicAchievements: [
    'Active member of the Department Technical Club & Coding Society',
    'Selected for technical seminar presentations on emerging AI technologies',
    'Consistent involvement in departmental hackathons and coding tournaments'
  ]
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    category: 'Hackathons',
    title: 'Inter-College Hackathon Participant & Finalist',
    organizationOrEvent: 'Technical Symposium & Hackathon',
    dateOrYear: '2025',
    description: 'Developed a prototype web application addressing practical community workflow challenges within a 24-hour sprint. Collaborated in team problem solving and technical pitch presentation.',
    tags: ['Hackathon', 'Rapid Prototyping', 'Teamwork', 'Full-Stack']
  },
  {
    id: 'ach-2',
    category: 'Coding Challenges',
    title: 'Competitive Coding & Algorithmic Practice',
    organizationOrEvent: 'LeetCode & HackerRank Platforms',
    dateOrYear: 'Ongoing',
    description: 'Regularly solving algorithmic problems focusing on arrays, strings, hash maps, linked lists, trees, and dynamic programming to hone analytical thinking.',
    tags: ['Data Structures', 'Algorithms', 'C++', 'Java']
  },
  {
    id: 'ach-3',
    category: 'Workshops & Seminars',
    title: 'Full-Stack Web & Cloud Architecture Workshop',
    organizationOrEvent: 'Easwari Engineering College Technical Chapter',
    dateOrYear: '2024',
    description: 'Participated in intensive hands-on workshops covering modern cloud databases, containerization basics, and RESTful API engineering.',
    tags: ['Workshop', 'Cloud Storage', 'Web Architecture']
  },
  {
    id: 'ach-4',
    category: 'Academic Projects',
    title: 'Academic Milestone Project Presentation',
    organizationOrEvent: 'Department of Computer Science and Engineering',
    dateOrYear: '2025',
    description: 'Showcased practical application of database normalization and client-server architecture before the academic evaluation panel with positive faculty appraisal.',
    tags: ['Academic Project', 'DBMS', 'Software Engineering']
  }
];

export const PROFILES_DATA: DeveloperProfile[] = [
  {
    id: 'github',
    platform: 'GitHub',
    username: 'ajay-dev',
    profileUrl: 'https://github.com',
    description: 'Explore my open-source code repositories, personal side projects, and continuous software development contributions.',
    metricLabel: 'Activity',
    metricValue: 'Active Repositories & Commits'
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    username: 'ajay-cse',
    profileUrl: 'https://linkedin.com',
    description: 'Connect with me professionally, explore my education timeline, technical interests, and career journey.',
    metricLabel: 'Network',
    metricValue: 'Professional Connections'
  },
  {
    id: 'leetcode',
    platform: 'LeetCode',
    username: 'ajay_coder',
    profileUrl: 'https://leetcode.com',
    description: 'Practicing foundational data structures and algorithm challenges in C++, Java, and Python.',
    metricLabel: 'Focus',
    metricValue: 'DSA & Problem Solving'
  },
  {
    id: 'hackerrank',
    platform: 'HackerRank',
    username: 'ajay_cs',
    profileUrl: 'https://hackerrank.com',
    description: 'Solving programming exercises in Java, C++, SQL databases, and fundamental problem-solving domains.',
    metricLabel: 'Domain',
    metricValue: 'Languages & Problem Solving'
  }
];
