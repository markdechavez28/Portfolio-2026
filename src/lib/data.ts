export const profile = {
  name: "Mark Jerome P. De Chavez",
  shortName: "Mark De Chavez",
  logoText: "Hi, World",
  title: "Computer Science Graduate: Research, Engineering & Data",
  location: "Malabon, Metro Manila",
  email: "markdechavez128@gmail.com",
  linkedin: "https://www.linkedin.com/in/markdechavez128/",
  github: "https://github.com/markdechavez28",
  // Recommended size: at least 2400x1600px (3:2), subject centered in the
  // middle third both ways so it survives crops from square (mobile) to
  // 21:9 (desktop).
  photoUrl: "/hero1.png",
  status: "Open to opportunities",
  heroHeadline: "Shipping AI that holds up under real usage.",
  tagline:
    "From government-funded AI research to enterprise customer analytics to whatever ships next. I'm advancing toward systems that hold up under real usage.",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export const statCards = [
  {
    eyebrow: "Research Output",
    value: "150K+",
    label: "traffic data points generated for model training",
    tag: "AI RESEARCH",
    tone: "blue" as const,
  },
  {
    eyebrow: "Customer Impact",
    value: "$2.5M+",
    label: "in enterprise account value analyzed for renewal risk",
    tag: "CUSTOMER SUCCESS",
    tone: "light" as const,
  },
  {
    eyebrow: "Case Study",
    value: "91.0%",
    label: "precision on a YOLOv8 traffic-detection model",
    tag: "COMPUTER VISION",
    tone: "gradient" as const,
  },
];

export const pillars = [
  {
    tag: "Research",
    title: "AI Research & Engineering",
    description:
      "Reading the literature, mining footage into training data, and writing the documentation that lets a team move fast.",
  },
  {
    tag: "Industry",
    title: "Customer & Data Analytics",
    description:
      "Turning enterprise account data into renewal-risk signals and dashboards people actually trust.",
  },
  {
    tag: "Leadership",
    title: "Community & Leadership",
    description:
      "Running the data-science side of a 200+ member student org's operations for a year.",
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  tag: string;
  summary: string;
  metric: { value: string; label: string };
  bullets: string[];
  link: string;
  linkLabel: string;
};

export const experiences: Experience[] = [
  {
    org: "DOST Advanced Science & Technology Institute (ASTI)",
    role: "Artificial Intelligence Intern",
    period: "Feb 2025 - Jul 2025",
    tag: "Government",
    summary:
      "One of five researchers on a nationally funded traffic-AI initiative, reading the literature, mining footage into training data, and writing the documentation that let the rest of the team move fast.",
    metric: { value: "150K+", label: "data points mined from traffic footage" },
    bullets: [
      "1 of 5 AI research assistants on Project NAIRA-BANTAI, showcased at the launch of the National AI Center for Research and Innovation (NAICRI).",
      "Synthesized 50+ papers on CNNs, transformers, and synthetic data generation to steer model selection.",
      "Owned SRS and technical documentation across 10+ project modules.",
    ],
    link: "#work",
    linkLabel: "View Projects",
  },
  {
    org: "SolarWinds",
    role: "Customer Success Intern",
    period: "Jun 2025 - Jul 2025",
    tag: "Industry",
    summary:
      "Spent two months inside enterprise account data, surfacing renewal risk, churn signals, and expansion opportunity across hundreds of accounts, then building the dashboards that kept the team looking at the same numbers.",
    metric: { value: "$30K+", label: "expansion opportunity surfaced" },
    bullets: [
      "Audited 200+ dormant enterprise accounts ($2.5M+ in account value) to flag licensing and usage gaps that reopened renewal conversations.",
      "Ran 300+ pulse surveys to catch early churn signals, routing 40+ at-risk accounts to CSMs.",
      "Shipped weekly Power BI dashboards tracking adoption, health scores, and usage segmentation.",
    ],
    link: "https://drive.google.com/file/d/10f5MSo-DR_Bq6rvHpvEXNOXHU3on1irB/view?usp=sharing",
    linkLabel: "View the Outreach Module",
  },
  {
    org: "Google Developer Student Clubs, UE Caloocan",
    role: "Data Science Lead",
    period: "Jun 2024 - May 2025",
    tag: "Leadership",
    summary:
      "Ran the data-science side of a student org's operations for a year: partnerships, scholarships, and the day-to-day coordination that keeps 200+ members actually engaged.",
    metric: { value: "30", label: "additional scholarship slots secured" },
    bullets: [
      "Helped open certification and learning pathways to 200+ student scholars through partner programs.",
      "Ran operations and member engagement alongside four associate leads across the organization.",
    ],
    link: "https://medium.com/@gdsc.ue/dataforgood-a-campaign-through-the-lense-of-datacamp-36d15c3cafa3",
    linkLabel: "Read the #DataScienceForGood Interview",
  },
];

export type Project = {
  title: string;
  org?: string;
  tag: string;
  description: string;
  metric?: { value: string; label: string };
  featured?: boolean;
  // Set to a real URL once available; left blank intentionally for now.
  link: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "NAIRA-BANTAI Traffic Zone Monitoring System",
    org: "DOST-ASTI",
    tag: "Computer Vision",
    featured: true,
    metric: { value: "91%", label: "Detection precision" },
    description:
      "Optimized and deployed a real-time computer vision pipeline for edge environments, while contributing research, technical documentation, and architecture validation across the project's modules.",
    link: "",
    image: "/projects/naira-bantai.jpg",
  },
  {
    title: "YOLOv8-Powered Bicycle Counter & Impact Estimation in Manila",
    tag: "Computer Vision",
    featured: true,
    metric: { value: "93.95%", label: "Cost reduction vs. sensors" },
    description:
      "Built and validated a YOLOv8 detection pipeline on 4,300+ annotated images (91% precision), then ran a cost-efficiency analysis showing a 93.95% cost reduction over sensor-based counters, projecting up to ₱215M in potential savings across Metro Manila's bike lane network.",
    link: "",
    image: "/projects/bicycle-counter.jpg",
  },
  {
    title:
      "ScorchAI: Hybrid ML + LLM Agent Framework for Weather-Driven Solar Output Prediction",
    tag: "AI & ML",
    featured: true,
    metric: { value: "Hybrid", label: "ML + LLM agent pipeline" },
    description:
      "Turns weather data solar and grid operators already have into an actionable output estimate, without requiring in-house remote-sensing or GIS expertise for every forecast.",
    link: "",
    image: "/projects/scorchai.jpg",
  },
  {
    title:
      "Argus Platform: Observability Infrastructure for Environmental Standards Compliance",
    tag: "Data & Research",
    featured: true,
    metric: { value: "54K+", label: "Telemetry points / hour" },
    description:
      "Built a Prometheus, Streamlit, and Grafana observability pipeline processing 54,000+ telemetry points per hour, with custom PromQL formulations turning simulated telemetry into 9 environmental performance indices refreshed every 15 seconds.",
    link: "",
    image: "/projects/argus.jpg",
  },
  {
    title: "ADVENTUS Fleet Monitoring Survey: Exploratory Data Analysis",
    org: "DOST",
    tag: "Data & Research",
    description:
      "Ran exploratory analysis on qualitative and quantitative survey data to surface pain points across administrators, fleet units, passengers, and property officers. Cleaned datasets and built visualizations presented at end-user training to validate the project's use cases.",
    link: "",
    image: "/projects/adventus.jpg",
  },
  {
    title:
      "ReceiptAgain: An Ablation Study on OCR and LLM-Assisted Receipt Entity Extraction",
    tag: "AI & ML",
    description:
      "Explores how to turn a scanned receipt or invoice into structured, usable fields at volume, without the labor cost of manual transcription for every document.",
    link: "",
    image: "/projects/receiptagain.jpg",
  },
  {
    title:
      "Combined Cryptographic and Steganographic Techniques for Image Metadata Security",
    tag: "Security",
    description:
      "Co-authored a steganalysis study reaching ~98% detection accuracy across diverse datasets, with statistical validation against 9 ISO 25010 quality criteria over 8,000+ survey responses. Presented at the True Icon International Research Conference (1 of 90+ accepted papers).",
    link: "",
    image: "/projects/security-stego.jpg",
  },
  {
    title: "STFT5000: A High-Resolution STFT Audio Dataset for AI Research",
    tag: "Data & Research",
    description:
      "Converted 5,000+ multilingual audio files (~10 hours) into normalized STFT spectrograms and built an AWS S3 pipeline managing 10,000+ raw and transformed files, publishing the dataset for public ML research use.",
    link: "",
    image: "/projects/stft5000.jpg",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Programming & Databases",
    items: ["Python (Pandas, NumPy, SciPy)", "SQL (PostgreSQL, MySQL, SQLite)"],
  },
  {
    category: "Machine Learning & AI Frameworks",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Hugging Face Transformers"],
  },
  {
    category: "Generative AI & LLMs",
    items: ["Amazon Bedrock", "Anthropic SDK", "Claude Haiku 4.5", "Ollama", "Qwen2.5-VL (3B)"],
  },
  {
    category: "Computer Vision & Geospatial",
    items: ["PaddleOCR", "Pillow (PIL)", "Rasterio", "GDAL"],
  },
  {
    category: "Cloud & Data Platforms",
    items: ["Amazon SageMaker", "Amazon S3", "AWS Lambda", "Snowflake", "Databricks"],
  },
  {
    category: "Data Visualization & BI",
    items: ["Power BI", "Tableau"],
  },
  {
    category: "MLOps, Backend & Dev Tools",
    items: ["FastAPI", "Docker", "Airflow", "Git", "GitHub", "Gradio", "Jira", "Confluence"],
  },
];

export const allSkills = skills.flatMap((group) => group.items);

export type Award = { title: string; issuer: string; date: string };

export const awards: Award[] = [
  {
    title: "Summa Cum Laude",
    issuer: "University of the East",
    date: "Jun 2026",
  },
  {
    title: "Faculty's Choice Best Computer Science Thesis, 1st Runner-Up",
    issuer: "Dept. of Computer Studies and Systems, UE",
    date: "Nov 2025",
  },
  {
    title: "Newswriter of the Year",
    issuer: "UE Dawn",
    date: "Sep 2025",
  },
  {
    title: "Top 10 Finalist, Philippine Junior Data Science Challenge",
    issuer: "UP Data Science Society",
    date: "Nov 2024",
  },
  {
    title: "Champion, Extemporaneous Speaking - Tagisan ng Talino",
    issuer: "79th UE Founding Anniversary",
    date: "Oct 2024",
  },
  {
    title: "Champion, Quiz Bee - Tagisan ng Talino",
    issuer: "78th UE Founding Anniversary",
    date: "Oct 2024",
  },
  {
    title: "Top 50 Finalist, Sikaptala Hackathon",
    issuer: "DLSU Dasmarinas",
    date: "Mar 2025",
  },
  {
    title: "Semifinalist, CodeChum National Programming Competition",
    issuer: "CodeChum",
    date: "2024 & 2025",
  },
  {
    title: "2nd Runner-Up, BrainiACSS",
    issuer: "Association of Computer Studies Students, UE",
    date: "Apr 2023",
  },
  {
    title: "University Scholar & Exemplary Academic Awardee, Top 7%",
    issuer: "University of the East",
    date: "2023 - 2026, recurring",
  },
];
