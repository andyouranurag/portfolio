export const personalInfo = {
  name: "Anurag Dubey",
  role: "AI/ML Engineer & Researcher",
  subtitles: [
    "AI/ML Engineer Intern @ SaralPixel-AI Labs",
    "Clinical NLP & LLM Workflows (PEFT, Distillation)",
    "Nuclear AI Researcher @ AINST (NUCLID)",
    "M.Sc. AI & Data Analytics Scholar @ Amity University"
  ],
  tagline: "Engineering LLM fine-tuning pipelines, clinical NLP systems, and scientific radiation spectroscopy analyzers.",
  bio: "AI/ML Engineer and Researcher with expertise in Large Language Models, PEFT (LoRA/QLoRA), clinical NLP, inference optimization, and scientific computing. Experienced in developing medical dialogue summarizers, model distillation workflows, and automated nuclear gamma spectroscopy analysis systems.",
  location: "Greater Noida, India",
  secondaryLocation: "Mumbai, India",
  phone: "+91-915280-5940",
  email: "anuragdubey23004@gmail.com",
  linkedin: "https://www.linkedin.com/in/andyouranurag",
  linkedinHandle: "linkedin.com/in/andyouranurag",
  github: "https://github.com/andyouranurag",
  githubUsername: "andyouranurag",
  portfolio: "https://anuragdubey.vercel.app",
  resumeDrivePreview: "https://drive.google.com/file/d/1wSG3_CVzup84dzFNLw3_RMwKNlQ3xiEp/preview",
  resumeDriveDownload: "https://drive.google.com/uc?export=download&id=1wSG3_CVzup84dzFNLw3_RMwKNlQ3xiEp",
  resumeDriveView: "https://drive.google.com/file/d/1wSG3_CVzup84dzFNLw3_RMwKNlQ3xiEp/view",
  statusBadge: "Available for AI/ML Engineering & Research Roles"
};

export const stats = [
  { value: "3+", label: "Industry & Research Roles" },
  { value: "1", label: "Peer-Reviewed Paper (ICNPA '26)" },
  { value: "10K+", label: "Records Processed & Optimized" },
  { value: "60+", label: "Community Volunteering Hours" }
];

export const education = [
  {
    degree: "M.Sc. Artificial Intelligence and Data Analytics",
    institution: "Amity University",
    location: "Noida, India",
    duration: "2025 – 2027",
    highlights: "Specialization in Generative AI, Machine Learning, Statistical Modeling, and Advanced Data Analytics."
  },
  {
    degree: "B.Sc. Data Science",
    institution: "SIES College of Arts, Science and Commerce",
    location: "Mumbai, India",
    duration: "2022 – 2025",
    highlights: "Foundations in Data Science, Scientific Computing, Database Systems, and Applied Mathematics."
  }
];

export const experience = [
  {
    role: "AI/ML Engineer Intern",
    company: "SaralPixel-AI Labs Pvt. Ltd. (Innovation under DIC-JMI)",
    location: "Hybrid",
    period: "Jul 2026 – Present",
    bullets: [
      "Contributing to Stoma AI, developing LLM-powered clinical NLP workflows for doctor–patient conversation summarization, medical information extraction, and structured clinical report generation.",
      "Conducting LLM inference benchmarking across open-source and API-based models, evaluating latency, throughput, memory consumption, response quality, and deployment feasibility for clinical applications.",
      "Working on LLM training and fine-tuning workflows, including dataset preparation, prompt engineering, parameter-efficient fine-tuning (PEFT), and knowledge distillation for domain-specific clinical NLP tasks.",
      "Exploring model optimization and inference efficiency through quantization, context management, and resource-aware model selection to improve performance under computational constraints."
    ],
    tech: ["LLMs", "PEFT", "Knowledge Distillation", "Quantization", "Clinical NLP", "Benchmarking", "Prompt Engineering"]
  },
  {
    role: "Research Intern",
    company: "Amity Institute of Nuclear Science and Technology (AINST)",
    location: "Noida, India",
    period: "May 2026 – Jul 2026",
    bullets: [
      "Designed NUCLID, an AI-assisted gamma spectroscopy workstation for radioisotope identification and nuclear radiation analysis.",
      "Implemented spectrum preprocessing, baseline correction, peak detection, Gaussian peak fitting, energy calibration, and reference-library matching using Python, SciPy, and Streamlit."
    ],
    tech: ["Scientific AI", "Python", "SciPy", "Streamlit", "Gaussian Fitting", "Gamma Spectroscopy", "Energy Calibration"]
  },
  {
    role: "Database Management Intern",
    company: "ET Edge (Times Group)",
    location: "Mumbai, India",
    period: "Apr 2025 – Jul 2025",
    bullets: [
      "Cleaned and structured 10,000+ records, improved data accuracy by 30%, and removed 2,000+ duplicate CRM entries.",
      "Optimized database queries and data-processing pipelines, reducing data retrieval time by 25%."
    ],
    tech: ["SQL", "Query Optimization", "CRM Data", "Data Cleaning", "Pipeline Optimization"]
  }
];

export const publications = [
  {
    title: "Framework for Indigenous Development of Radioisotope Identification Devices (RIIDs)",
    authors: "Anurag Dubey, Abhishek Yadav, and Alpana Goel",
    date: "Oct 2026",
    venue: "ICNPA 2026 – International Conference on Nuclear Physics and its Applications, University of Delhi",
    publicationType: "Conference Paper & Abstract Book",
    abstract: "Presents a novel, data-driven framework for indigenous Radioisotope Identification Devices (RIIDs) integrating spectral feature extraction, peak fitting algorithms, and machine learning classifiers with nuclear reference libraries for automated nuclide recognition.",
    badges: ["Nuclear Physics & AI", "RIIDs", "Spectral Analysis", "Peer-Reviewed"],
    citation: `Dubey, A., Yadav, A., & Goel, A. (2026). Framework for Indigenous Development of Radioisotope Identification Devices (RIIDs). In Abstract Book, ICNPA 2026, University of Delhi.`,
    links: {
      abstractPdf: "https://drive.google.com/file/d/1qxUmoLBX4sEhx7dUNOraOoIhPNyc1d2c/view",
      abstractBook: "https://icnpa2026.github.io/DU/"
    }
  }
];

export const flagshipProjects = [
  {
    id: "nuclid",
    title: "NUCLID – AI-Based Gamma Spectroscopy Analyzer",
    subtitle: "Radiation Monitoring & Isotope Identification Workstation",
    category: "Scientific AI / Research",
    description: "Engineered an AI/ML-driven gamma spectroscopy pipeline integrating spectral feature extraction, peak fitting, energy calibration, and automated nuclide identification from experimental detector data.",
    keyPoints: [
      "Designed ML-assisted classification framework leveraging peak energies, intensities, and FWHM features with nuclear reference libraries.",
      "Applied scientific computing and machine learning techniques for a modular, data-driven solution in nuclear spectroscopy.",
      "Implemented spectrum preprocessing, baseline correction, Gaussian peak fitting, and Streamlit UI for real-time radiation analysis."
    ],
    tech: ["Python", "SciPy", "Streamlit", "NumPy", "Gaussian Fitting", "Nuclear Libraries"],
    docLink: "https://github.com/andyouranurag",
    badge: "Flagship Research Project"
  },
  {
    id: "supplyshield",
    title: "SupplyShield – Supply Chain Risk Intelligence",
    subtitle: "AI-Powered Risk Detection & Supply Chain Analytics",
    category: "AI / Data Analytics",
    description: "Built an end-to-end supply chain risk intelligence platform leveraging machine learning models for real-time disruption detection, risk scoring, and predictive analytics across supplier networks.",
    keyPoints: [
      "Engineered ML-based risk scoring models for supplier disruption prediction using time-series anomaly detection and classification algorithms.",
      "Developed interactive dashboards with real-time KPI monitoring, risk heatmaps, and supply chain performance analytics.",
      "Integrated workforce-attrition analytics module to correlate employee turnover patterns with operational supply chain risks and production delays."
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Power BI", "SQL", "Streamlit", "Time-Series"],
    docLink: "https://github.com/andyouranurag/workforce-attrition-analytics",
    viewMoreLink: "https://github.com/andyouranurag/workforce-attrition-analytics",
    badge: "Industry Analytics Project"
  }
];

export const technicalSkills = [
  {
    category: "AI, ML & LLMs",
    icon: "cpu",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Large Language Models (LLMs)",
      "Parameter-Efficient Fine-Tuning (PEFT)",
      "Model Distillation",
      "Quantization",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Inference Benchmarking"
    ]
  },
  {
    category: "Programming Languages",
    icon: "code-slash",
    skills: ["Python", "Java", "SQL", "R", "JavaScript"]
  },
  {
    category: "Data & Databases",
    icon: "database",
    skills: [
      "Pandas",
      "NumPy",
      "SciPy",
      "Scikit-learn",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Power BI"
    ]
  },
  {
    category: "Tools & Deployment",
    icon: "terminal",
    skills: [
      "Git",
      "Linux",
      "VS Code",
      "Streamlit",
      "Hugging Face Spaces",
      "Docker"
    ]
  }
];

export const certifications = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL, IIT Kharagpur",
    date: "Jul-Oct 2024",
    link: "#"
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    date: "Certified",
    link: "#"
  },
  {
    title: "Find Insights with AI",
    issuer: "Cisco",
    date: "Certified",
    link: "#"
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    date: "Certified",
    link: "#"
  },
  {
    title: "Korea Business Culture (KBC) Training Program",
    issuer: "KOSME-AU, Amity University",
    date: "16+ Hours, Aug 2026",
    link: "#"
  }
];

export const volunteering = {
  role: "Volunteer",
  organization: "YSS Foundation",
  period: "Jan 2026 – Mar 2026",
  description: "Contributed 60+ hours to community service, environmental cleanup drives, and public awareness initiatives."
};

