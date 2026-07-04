import { Course, Review, FAQItem, RoadmapCheckpoint } from '../types';

export const COURSES: Course[] = [
  {
    id: 'forex-trading',
    title: 'Forex Trading Mastery',
    slug: 'forex-trading',
    category: 'forex',
    isFlagship: true,
    shortDesc: 'Master institutional price action, order blocks, Smart Money Concepts (SMC), and professional risk mitigation rules.',
    overview: 'This is METRO Educational & Trading Academy\'s crown-jewel flagship curriculum. Engineered from the ground up for premium on-site physical learning in Islamabad, this masterclass transitions you from standard lagging retail indicators to advanced institutional order flow, liquidity dynamics, and rigorous risk engineering. This course is strictly educational, focusing purely on building independent consistency, market understanding, and risk-adjusted discipline during live interactive sessions.',
    duration: '12 Weeks (On-Site Classes)',
    level: 'Beginner to Professional',
    rating: 4.9,
    studentsCount: 2450,
    certification: 'Certified Financial Markets Practitioner (CFMP)',
    instructor: {
      name: 'Haris Munir',
      title: 'Senior Portfolio Manager & Head of Trading',
      bio: 'Ex-institutional prop trader with over 9 years of active market experience specializing in high-frequency trading models and G10 currencies order flow.',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Master Smart Money Concepts (SMC) and decipher institutional market maker footprints.',
      'Develop a bulletproof Risk-to-Reward (R:R) ratio system ensuring long-term conservation of trading capital.',
      'Construct personal, rule-based discretionary trading playbooks for live sessions.',
      'Acquire elite technical skills and high-discipline risk practices required to trade independent accounts with confidence.',
      'Understand advanced G10 macro correlation matrices and interest rates influence.'
    ],
    curriculum: [
      {
        section: 'Phase 1: Trading Mechanics & Liquidity Dynamics',
        items: [
          'The Forex Infrastructure: How Market Makers & Central Banks Inject Volume',
          'Interbank Price Delivery Algorithm (IPDA) and True Market Cycles',
          'Bid-Ask Spreads, Slippage Controls, and Advanced Leverage Mathematics'
        ]
      },
      {
        section: 'Phase 2: Modern Institutional Market Structure',
        items: [
          'Fractal Market Structure: Break of Structure (BOS) vs. Change of Character (CHoCH)',
          'Identifying Valid Order Blocks (OB) & Fair Value Gaps (FVG)',
          'Liquidity Swings: Stop Hunts, Equal Highs, and Session Liquidity Sweeps'
        ]
      },
      {
        section: 'Phase 3: The Art of Risk Engineering & Psychology',
        items: [
          'Advanced Position Sizing Formulas & Dynamic Drawdown Ceilings',
          'R:R Optimization: Scaling-In and Multi-Dimensional Take Profit Systems',
          'Eliminating Cognitive Biases: The Neuroscience of disciplined Execution'
        ]
      },
      {
        section: 'Phase 4: Live Battle-Testing & On-Site Practice',
        items: [
          'Live Practice: Execution Rules for High-Consistency Independent Accounts',
          'Developing your Trading Journal & Performance Analytics Sheets',
          'Live Trading Room Execution: Reading real-time volume blocks in class'
        ]
      }
    ],
    faq: [
      { q: 'Do I need previous financial experience to join?', a: 'None required. The program begins with foundational mechanics and builds directly to advanced Smart Money Concepts and live physical laboratory drills.' },
      { q: 'Is there access to live trading sessions?', a: 'Yes, all enrolled student members gain permanent access to our premium physical daily live trading room led by Haris Munir.' },
      { q: 'Does this prepare me for live market trading?', a: 'Absolutely. Over 65% of our Phase 4 curriculum is explicitly dedicated to practical on-site session drills and real-time execution mapping.' }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Network Defense',
    slug: 'cyber-security',
    category: 'tech',
    isFlagship: false,
    shortDesc: 'Protect enterprise infrastructure. Conduct penetration testing, exploit analysis, and vulnerability threat assessments.',
    overview: 'As corporations face exponential digital threats, secure infrastructure is the ultimate corporate shield. This hands-on cyber defense initiative equips you with actionable offensive and defensive intelligence, security audits, and penetration mechanics designed for tier-1 security operations center analyst roles.',
    duration: '8 Weeks (On-Site Labs)',
    level: 'Intermediate',
    rating: 4.8,
    studentsCount: 920,
    certification: 'Certified Security Analyst (CSA)',
    instructor: {
      name: 'Dr. Shahzad Amin',
      title: 'Infrastructure & Forensic consultant',
      bio: 'Over 14 years of industry penetration consulting experience. Certified CEH, CISSP, and executive cyber security researcher.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Master shell-level scripting and target network enumeration protocols.',
      'Identify critical OWASP Top 10 vulnerabilities within live server endpoints.',
      'Deploy incident response structures to quickly triage and neutralize cloud-level security breaches.',
      'Execute industry-standard network audits following NIST policies.'
    ],
    curriculum: [
      {
        section: 'Module 1: Offensive Enumeration & Network Scanning',
        items: [
          'Active & Passive Footprinting: Mastering Nmap, Shodan, and Wireshark',
          'Vulnerability Scanning Engines: Nessus configuration & triage'
        ]
      },
      {
        section: 'Module 2: Penetration Frameworks & System Exploits',
        items: [
          'Exploit Engineering: Deploying Metasploit and crafting custom shells',
          'Buffer Overflows, SQL Injections, and Cross-Site-Scripting (XSS) logic'
        ]
      },
      {
        section: 'Module 3: Defensive Shield & Incident Engineering',
        items: [
          'SIEM Dashboards: Configuring Splunk logs and custom network rules',
          'Hardening SSH Protocols, TLS handshakes, and Enterprise Firewalls'
        ]
      }
    ],
    faq: [
      { q: 'What software configuration do I need?', a: 'We will configure VirtualBox running Kali Linux and Parrot OS inside your local ecosystem during the first module.' }
    ]
  },
  {
    id: 'web-development',
    title: 'Full Stack Web Engineering',
    slug: 'web-development',
    category: 'tech',
    isFlagship: false,
    shortDesc: 'Build modern, responsive full-stack applications using React, Node.js, and lightning-fast cloud databases.',
    overview: 'This comprehensive modern web curriculum focuses on real-world delivery pipelines. Move from foundational syntax to multi-tier architectures running React, Vite, Express backends, and server-side optimizations.',
    duration: '10 Weeks (On-Campus Labs)',
    level: 'Beginner to Advanced',
    rating: 4.85,
    studentsCount: 1150,
    certification: 'Full-Stack Certified Engineer (FSCE)',
    instructor: {
      name: 'Engr. Bilal Khalid',
      title: 'Lead Software Architect',
      bio: 'Senior full-stack systems developer with an extensive portfolio in modular JavaScript systems and enterprise cloud engines.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Build fully static and dynamically active responsive client-side SPA dashboards.',
      'Construct standard RESTful APIs running Node.js, Express, and JWT encryption protocols.',
      'Integrate durable client storage systems and design query tables.',
      'Deploy production projects into secure Cloud Run and Vercel networks.'
    ],
    curriculum: [
      {
        section: 'Module 1: Front-End Architecture & Styling Mastery',
        items: [
          'Modern JavaScript (ES6+) and Component modularity techniques',
          'Advanced Tailwind CSS layout design: Fluid layouts, grid-bento, and variables'
        ]
      },
      {
        section: 'Module 2: React State & Interactivity Platforms',
        items: [
          'Custom React Hooks and clean event routing algorithms',
          'Performance optimizations: Memoization, React.memo, and lazy chunking'
        ]
      },
      {
        section: 'Module 3: The Full-Stack Back-End Infrastructure',
        items: [
          'Express server design: Middleware layers, CORS, and robust error handlers',
          'Databases integrations: Schemas modeling, indexing, and connection pools'
        ]
      }
    ],
    faq: [
      { q: 'Will I build a portfolio of work?', a: 'Yes, you will complete four comprehensive, deployment-ready projects including an active financial transaction manager and a client directory.' }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth Hacking',
    slug: 'digital-marketing',
    category: 'marketing',
    isFlagship: false,
    shortDesc: 'Formulate hyper-targeted conversion models, programmatic ad structures, and data SEO strategies.',
    overview: 'A premium, metrics-focused growth curricula. Discover how to build acquisition channels, configure advanced pixel tracking API parameters, and automate multi-channel campaigns with absolute ROI precision.',
    duration: '6 Weeks (On-Campus)',
    level: 'Beginner to Intermediate',
    rating: 4.75,
    studentsCount: 780,
    certification: 'KPI Specialist Certification (KSC)',
    instructor: {
      name: 'Saira Ahmed',
      title: 'Global Growth Campaign Director',
      bio: 'Consultant for top-tier e-commerce channels with a track record managing over $2M in programmatic ad configurations.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Design, execute, and scale high-conversion Meta and Google Ad sets.',
      'Deploy pixel configurations, server-side conversions tool tracking, and custom events.',
      'Craft SEO-resilient search-optimized copy matching search engine intent.',
      'Perform detailed A/B multivariate marketing testing.'
    ],
    curriculum: [
      {
        section: 'Module 1: Facebook Pixel & GTM Conversions API',
        items: [
          'Pixel custom configurations inside React & static HTML environments',
          'Establishing custom events tracking parameters for precise funnel audits'
        ]
      },
      {
        section: 'Module 2: Programmatic Optimization Engine',
        items: [
          'Targeting algorithms: Lookalike populations and behavior clusters',
          'Bidding engineering: CPA controls, target CPM limits, and dynamic ads scheduling'
        ]
      }
    ],
    faq: [
      { q: 'Is there a live budget provided?', a: 'Yes, we allocate a structured academy budget for live test campaigns run by teams during training.' }
    ]
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing & Brand Architecture',
    slug: 'graphic-designing',
    category: 'creative',
    isFlagship: false,
    shortDesc: 'Craft elite corporate identities. Learn typography ratios, layout layouts, and brand manual guides.',
    overview: 'Enter the executive design standard. Master vector layout, balanced asymmetric spacing, professional corporate identities, and modern digital asset kits.',
    duration: '8 Weeks (On-Campus)',
    level: 'Beginner to Professional',
    rating: 4.8,
    studentsCount: 890,
    certification: 'Professional Graphic Architect (PGA)',
    instructor: {
      name: 'Kamran Raza',
      title: 'Principal Brand Strategist',
      bio: 'Award-winning vector artist and typography consultant with decades of experience creating modern design portfolios.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Assemble comprehensive corporate brand guidelines and asset guidelines.',
      'Master industry tools including Photoshop, Illustrator, and Figma wireframing.',
      'Understand typography hierarchy, strict contrast guidelines, and geometric grids.'
    ],
    curriculum: [
      {
        section: 'Module 1: Visual Composition & Vector Excellence',
        items: [
          'The Golden Ratio and Asymmetrical grid distribution grids',
          'Pen tool wizardry and complex vector illustration in Adobe Illustrator'
        ]
      }
    ],
    faq: [
      { q: 'Do I need a high-end graphics tablet?', a: 'Not required. All core lessons are tailored around professional vector mouse-precision drafting.' }
    ]
  },
  {
    id: 'video-editing',
    title: 'Video Production & Cinematic Editing',
    slug: 'video-editing',
    category: 'creative',
    isFlagship: false,
    shortDesc: 'Harness high-end audio engineering, multi-track dynamic cuts, soundscapes design, and Premiere/After Effects panels.',
    overview: 'Unlock cinematic-quality outputs. Move past raw cuts to master sophisticated sound design, professional color grading wheels, and fast paced, retention-optimized pacing styles.',
    duration: '8 Weeks (On-Campus Labs)',
    level: 'Beginner to Advanced',
    rating: 4.85,
    studentsCount: 710,
    certification: 'Cinematic Post-Production Engineer (CPPE)',
    instructor: {
      name: 'Asad Ali',
      title: 'Lead Visual Editor & VFX Lead',
      bio: 'Film producer and commercial post-production consultant editing media for millions of views globally.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Master Adobe Premiere Pro timelines and raw multi-cam editing tracks.',
      'Execute high-end color grading setups using Lumetri color wheels.',
      'Integrate dynamic motion assets via After Effects keyframing.'
    ],
    curriculum: [
      {
        section: 'Module 1: Non-Linear Timeline Masterclass',
        items: [
          'Timeline pacing rules and high-impact transition techniques',
          'Audio curation: Dynamic compression, leveling, and environmental sound texturing'
        ]
      }
    ],
    faq: [
      { q: 'What computer specifications are suggested?', a: 'An Intel i5 or Ryzen 5 processor with 16GB of system memory is highly recommended for smooth 1080p workflow rendering.' }
    ]
  },
  {
    id: 'e-commerce',
    title: 'Executive E-Commerce & Global Trade',
    slug: 'e-commerce',
    category: 'marketing',
    isFlagship: false,
    shortDesc: 'Initialize scale-to-growth Shopify, Amazon FBA, and overseas product sourcing frameworks.',
    overview: 'A rigorous blueprint for active dropshipping and global private label business structure. Source quality inventory, formulate robust pricing algorithms, and drive buyer acquisition pipelines.',
    duration: '6 Weeks (On-Campus Labs)',
    level: 'Beginner to Intermediate',
    rating: 4.7,
    studentsCount: 650,
    certification: 'E-commerce Trade Specialist (ETS)',
    instructor: {
      name: 'Zane Malik',
      title: 'Full-Scale Amazon consultant',
      bio: 'E-commerce business general manager driving multiple seven-figure stores via private brands design.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Establish global-ready dropshipping operations with synchronized inventory flows.',
      'Target high-margin products using database analytics search platforms.',
      'Configure optimized Shopify stores built for checkout stability.'
    ],
    curriculum: [
      {
        section: 'Module 1: Product Sourcing & Logistics',
        items: [
          'Sourcing high-quality supplier partners overseas',
          'Calculating custom delivery profiles, duty rates, and buffer margin levels'
        ]
      }
    ],
    faq: [
      { q: 'Can I launch with a small initial store setup budget?', a: 'Yes, we optimize product selection to ensure scalable launches with small, controlled budgets.' }
    ]
  },
  {
    id: 'ielts',
    title: 'IELTS Academic & General Elite Prep',
    slug: 'ielts',
    category: 'academic',
    isFlagship: false,
    shortDesc: 'Unlock 8.0+ Band scores via systematic, examiner-level training, writing templates, and simulation trials.',
    overview: 'A elite academic training system engineered specifically to clear critical threshold targets. Learn standard structural layouts for essays, score templates, and mock speaking metrics.',
    duration: '6 Weeks (On-Campus)',
    level: 'Intermediate to Advanced',
    rating: 4.9,
    studentsCount: 1340,
    certification: 'METRO Educational & Trading Academy IELTS Band Readiness Certificate',
    instructor: {
      name: 'Prof. Maria Baig',
      title: 'Intercontinental Language trainer',
      bio: 'Senior linguist tutor with over 11 years of official IELTS tutoring. Holds an expert academic master\'s degree.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Consistently output structured Band-8 essays matching grading rubrics.',
      'Perfect active listening skills to lock down critical question types.',
      'Deliver fluid, dynamic speaking interactions during examiners review.'
    ],
    curriculum: [
      {
        section: 'Module 1: Writing & Grammar Precision Tasks',
        items: [
          'Task 1: Graphic and data matrix explanations layouts',
          'Task 2: Advanced opinion prompts, complex coordinate argumentation, and paragraph structure'
        ]
      }
    ],
    faq: [
      { q: 'Are assessment markers verified?', a: 'Yes, your written scripts receive direct grades and actionable notes based exactly on official guidelines.' }
    ]
  },
  {
    id: 'basic-computer',
    title: 'Basic Computer Course & Office Suite',
    slug: 'basic-computer',
    category: 'academic',
    isFlagship: false,
    shortDesc: 'Establish structural computer hardware literacy, enterprise email workflows, and advanced spreadsheets/Word setups.',
    overview: 'Designed to build foundational security, digital literacy, and executive presentation formatting for any corporate administration entry role.',
    duration: '4 Weeks (On-Campus Labs)',
    level: 'Beginner',
    rating: 4.6,
    studentsCount: 410,
    certification: 'Digital Literacy Certificate (DLC)',
    instructor: {
      name: 'Ayesha Khan',
      title: 'Academy Informatics Lead',
      bio: 'Informatics professional dedicated to building fundamental tech-fluency and corporate literacy frameworks.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Deploy spreadsheets utilizing nested equations and reference tables.',
      'Format professional executive business memos and documentation.',
      'Understand cloud drives, backup directories, and standard internet protocols.'
    ],
    curriculum: [
      {
        section: 'Module 1: Dynamic Spreadsheet Automation',
        items: [
          'Spreadsheet math: Dynamic ranges, VLOOKUP, and pivot analysis',
          'Building custom automated invoice worksheets'
        ]
      }
    ],
    faq: [
      { q: 'Is this course suitable for complete beginners?', a: 'Yes, it assumed zero prior operating system knowledge and acts as a reassuring step-by-step ladder.' }
    ]
  },
  {
    id: 'cambridge-o-levels',
    title: 'Cambridge O-Levels Academic Prep',
    slug: 'cambridge-o-levels',
    category: 'academic',
    isFlagship: false,
    shortDesc: 'Unlock dynamic A* grades in Mathematics, Physics, Chemistry & English with examiner-led past paper drills.',
    overview: 'Our senior Cambridge faculty provides rigorous conceptual drilling, targeted question formulation blueprints, and comprehensive evaluation mechanics to score maximum grades.',
    duration: 'Full Session (Regular Drills)',
    level: 'O-Level Students',
    rating: 4.88,
    studentsCount: 950,
    certification: 'CIE Exam Preparedness Certificate',
    instructor: {
      name: 'Sir Farhan Qadri',
      title: 'Senior Physics & Math Faculty Specialist',
      bio: 'Renowned academic with a 15-year reputation for steering hundreds of students to clean national distinctions and outstanding A* results.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Deep conceptual command of Cambridge O-Level curricula.',
      'Surgical precision in solving previous 15+ years of past paper series.',
      'Optimized exam-taking habits designed to avoid common threshold traps.'
    ],
    curriculum: [
      {
        section: 'Phase 1: Conceptual Core Symmetries',
        items: [
          'Detailed syllabus mapping following CAIE guidelines',
          'Targeted concept modules addressing critical friction zones'
        ]
      }
    ],
    faq: [
      { q: 'Do you offer online sessions as well?', a: 'Yes, high-definition live interactive online versions are fully parallel to physical campuses.' }
    ]
  },
  {
    id: 'cambridge-a-levels',
    title: 'Cambridge A-Levels Elite Curricula',
    slug: 'cambridge-a-levels',
    category: 'academic',
    isFlagship: false,
    shortDesc: 'Pre-university preparation across key Science & Commerce subjects. Clear high-threshold benchmarks.',
    overview: 'Enter high-tier tertiary academics with our specialist mentors. Command Advanced Physics, Further Mathematics, Economics, and Business frameworks to solidify overseas college applications.',
    duration: 'Full Session (Regular Drills)',
    level: 'A-Level Students',
    rating: 4.92,
    studentsCount: 880,
    certification: 'CIE Advanced Level Certificate',
    instructor: {
      name: 'Dr. Tariq Jamil',
      title: 'Lead Academic Chair & Chemistry Advisor',
      bio: 'Post-doctoral academic mentor delivering elite pre-university training for over 18 years.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Absolute mastery over complex Advanced level matrices.',
      'Rigorous application of experimental and mock theoretical assessment criteria.'
    ],
    curriculum: [
      {
        section: 'Phase 1: Advanced Theoretical Syntheses',
        items: [
          'Structural proofs, advanced mechanics, and organic processes logic',
          'Rigorous assessment evaluations targeting CIE threshold dynamics'
        ]
      }
    ],
    faq: [
      { q: 'What is the schedule of masterclasses?', a: 'Flexible morning and evening batches are optimized to suit college-goers.' }
    ]
  },
  {
    id: 'test-series-9-10',
    title: '9th & 10th Metric Board Test Series',
    slug: 'test-series-9-10',
    category: 'academic',
    isFlagship: false,
    shortDesc: 'Intensive prep series modeled on board exam patterns. Boost scores with professional evaluation.',
    overview: 'A targeted drilling series focused strictly on maximizing board metrics. Fully covers Chemistry, Physics, Mathematics, and Biology syllabus milestones via systematic tests.',
    duration: '3 Months Intensive',
    level: '9th & 10th Grade Board Aspirants',
    rating: 4.82,
    studentsCount: 1650,
    certification: 'METRO Educational & Trading Academy Board Score Excellence Achievement',
    instructor: {
      name: 'Sir Amjad Bashir',
      title: 'Senior Board Examiner Expert',
      bio: 'Veteran assessor and author with decades of experience preparing students directly to list on matric boards.',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
    },
    outcomes: [
      'Master perfect test presentation layout formats according to federal boards standards.',
      'Achieve maximum velocity in solving mathematical queries.',
      'Overcome paper pressure via timed full-length board paper simulations.'
    ],
    curriculum: [
      {
        section: 'Phase 1: Syllabus Core Checkpoints',
        items: [
          'High-yield topics analysis and conceptual brush-up',
          'Chapter-wise written diagnostic tasks'
        ]
      }
    ],
    faq: [
      { q: 'Is individual checking and feedback shared?', a: 'Yes, every test paper is graded with professional remarks showing exactly where marks are lost.' }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Mustafa Hassan',
    role: 'Independent Trader',
    text: 'METRO Educational & Trading Academy completely overhauled my perspective of risk management. Using their institutional liquidity concepts, I mastered live trading order flows in high-performance on-site classes. They are miles ahead of traditional academies in Pakistan.',
    rating: 5,
    achievement: '1:3 Risk Consistency',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev-2',
    name: 'Aisha Siddiqui',
    role: 'Independent Arbitrageur',
    text: 'The SMC module was a revelation. Haris Munir breaks down interbank price algorithms with absolute surgical clarity. I no longer trade blind support or resistance lines; I trade absolute order blocks. The consistency reflects it.',
    rating: 5,
    achievement: '72% Win-Rate locked',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev-3',
    name: 'Hamza Farooq',
    role: 'Cyber Security Operations Specialist',
    text: 'While the academy focuses beautifully on Forex, their Cyber Defense module was incredibly practical. Dr. Shahzad Amin helped me secure a security analyst position at a top financial house within weeks of completing my certification.',
    rating: 5,
    achievement: 'CSA Certified / Hired',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

export const ROADMAP: RoadmapCheckpoint[] = [
  {
    step: 'Phase 01',
    title: 'Foundational Market Mechanics',
    desc: 'Deconstruct global transaction mechanics, spreads, leverage, and pip values.',
    milestone: 'Master the Math of Position Sizing'
  },
  {
    step: 'Phase 02',
    title: 'Institutional Structure Mastery',
    desc: 'Unveil change of characters, liquidity zones, order blocks, and market maker sweeps.',
    milestone: 'Draft a Custom Discretionary Playbook'
  },
  {
    step: 'Phase 03',
    title: 'Neuromorphic Psychology',
    desc: 'Shatter emotional execution traps through rule-based quantitative entries.',
    milestone: 'Maintain clean drawdown discipline for 60 consecutive days'
  },
  {
    step: 'Phase 04',
    title: 'On-Site Live Practice',
    desc: 'Join our interactive live sessions inside the Islamabad terminal lab to trade with active coaches.',
    milestone: 'Achieve high consistency under master guidance'
  }
];

export const FAQS: FAQItem[] = [
  {
    q: 'How does METRO Educational & Trading Academy differ from normal local training courses?',
    a: 'We operate as a premium fintech educational institute rather than a simple tutor. Our curriculum bypasses outdated textbook templates to focus 75% of resources on institutional Forex trading, live order flow data, and independent risk-adjusted trading strategies. We treat professional education with absolute discipline.'
  },
  {
    q: 'Are the certificates internationally recognized?',
    a: 'Yes, our Certified Financial Markets Practitioner (CFMP) and Cyber Security defense pathways carry institutional stamps backing your practical framework mastery globally.'
  },
  {
    q: 'Can I attend the classes online or on-campus?',
    a: 'Our physical on-site campus in Islamabad is fully equipped with advanced modern labs, live trading session displays, physical helpdesks, and supportive digital material archives.'
  },
  {
    q: 'How do I initiate enrollment to a program?',
    a: 'Simply select your desired pathway, fill in the secure digital reservation form, or request a technical advisory session with an intake counselor who will evaluate your objectives.'
  }
];
