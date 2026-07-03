export interface Project {
  title: string;
  description: string;
  tags: string[];
  type: string;
  motif: string;
  githubUrl?: string;
  projectUrl?: string;
}

export interface Employment {
  title: string;
  company: string;
  date: string;
  description: string;
  url?: string;
}

export interface Education {
  title: string;
  school: string;
  date: string;
  description: string;
}

export interface Honor {
  title: string;
  organization: string;
  date: string;
  category: string;
  description: string;
}

export interface SkillItem {
  name: string;
  iconUrl: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  resume: string;
}

export const projects: Project[] = [
  {
    title: "UC Santa Cruz AIEA Lab",
    description:
      "Researching large language model interpretability at the UCSC AIEA Laboratory by reproducing published experiments, analyzing neuron-level representations, and evaluating transformer models on NLI benchmarks.",
    tags: ["PyTorch", "Hugging Face", "Transformers", "NLI"],
    type: "AI Research",
    motif: "model-trace",
    projectUrl: "https://aiea-lab.github.io/",
  },
  {
    title: "GeoGrub",
    description:
      "Built an interactive location-planning MVP for food trucks and pop-up vendors, scoring candidate stops by weather, access, demand, competition, and permit readiness. Integrated Leaflet maps and the Weather.gov API to capture real coordinates, auto-score weather fit, generate route recommendations, and export reports.",
    tags: ["JavaScript", "Leaflet", "OpenStreetMap", "Weather.gov API"],
    type: "Location Tool",
    motif: "route-map",
    githubUrl: "https://github.com/ianjkim08/geogrub",
    projectUrl: "https://ianjkim08.github.io/geogrub/",
  },
  {
    title: "Hanistry",
    description:
      "Built an interactive historical mapping project that visualizes historical and geographic data using Mapbox and QGIS. The project involved collecting and organizing datasets, building map layers, and creating a web interface that lets users explore historical information spatially.",
    tags: ["Mapbox", "QGIS", "GIS", "Data Visualization"],
    type: "Historical GIS",
    motif: "archive-map",
    githubUrl: "https://github.com/ianjkim08/hanistry",
    projectUrl: "https://hanistry.vercel.app/",
  },
  {
    title: "Korean-American Reunification Study",
    description:
      "Original mixed-methods research paper examining generational differences in Korean-American perspectives on Korean reunification, using bilingual survey design and statistical analysis.",
    tags: ["Research", "SPSS", "ANOVA", "Chi-Square"],
    type: "Data Research",
    motif: "survey-grid",
  },
  {
    title: "GPA Calculator",
    description:
      "Built and maintained an academic planning spreadsheet on Google Sheets for over two years. The spreadsheet can model GPA outcomes, course schedules, degree requirements, and extracurricular opportunities.",
    tags: ["Google Sheets", "Academic Planning", "GPA Modeling", "Data"],
    type: "Planning Tool",
    motif: "sheet-model",
    projectUrl:
      "https://docs.google.com/spreadsheets/d/1s-JexTdmoTcNbIxoktxuHhE6MTaSZaptYqNakk3pXWk/edit?usp=sharing",
  },
];

export const employment: Employment[] = [
  {
    title: "Research Assistant",
    company: "University of California, Santa Cruz AIEA Laboratory",
    date: "June 2026 - Present",
    description:
      "Conducting research under Dr. Leilani Gilpin on LLM interpretability, reproducing published experiments, analyzing neuron-level representations with PyTorch and Hugging Face, and fine-tuning transformer models on NLI benchmarks using GPU computing and reproducible machine learning workflows.",
    url: "https://aiea-lab.github.io/",
  },
  {
    title: "School Chapter President",
    company: "Fulshear Historical Association",
    date: "April 2025 - May 2026",
    description:
      "Founded the first student-led chapter, organized biweekly research projects, and coordinated regional collaborations with neighboring chapters.",
  },
  {
    title: "Math Instructor",
    company: "Mathnasium",
    date: "July 2025 - February 2026",
    description:
      "Taught 200+ K-12 students in small groups across arithmetic, algebra, and geometry while adapting explanations to different learning styles.",
  },
  {
    title: "Independent Researcher",
    company: "Peaceful Unification Advisory Council",
    date: "September 2024 - April 2025",
    description:
      "Authored a mixed-methods research paper on Korean-American perspectives on reunification, using bilingual survey design and statistical analysis in SPSS.",
  },
  {
    title: "Business: What is it Good For? Seminar",
    company: "Notre Dame Leadership Seminars",
    date: "July 2025",
    description:
      "Selected as 1 of 30 students for an all-expenses-paid business and economics seminar and produced a capstone on the moral purpose of business.",
  },
];

export const education: Education[] = [
  {
    title: "B.S. Computational & Applied Mathematics and Computer Science",
    school: "University of Chicago",
    date: "Expected June 2029",
    description:
      "Specializing in machine learning and participating in the AI, CS, & Data Science Career Cohort and NYC Business CEW.",
  },
  {
    title: "High School Diploma, GPA 4.86/4.0, SAT 1600",
    school: "Jordan High School",
    date: "",
    description:
      "Relevant Coursework: Multivariable Calculus, Computer Science III: Data Structures, Elements of Data Science, AWS Advanced Cloud Computing, AP Computer Science A (5), AP Calculus BC (5), AP Statistics (5), AP Physics 1 (5)",
  },
];

export const honors: Honor[] = [
  {
    title: "University Scholar",
    organization: "University of Chicago",
    date: "Merit Scholarship",
    category: "Scholarship",
    description:
      "Received a University of Chicago merit scholarship as an incoming undergraduate.",
  },
  {
    title: "National Merit Finalist",
    organization: "National Merit Scholarship Program",
    date: "2026",
    category: "Academic",
    description:
      "Recognized nationally for academic achievement based on PSAT/NMSQT performance.",
  },
  {
    title: "U.S. Presidential Scholars Candidate",
    organization: "U.S. Presidential Scholars Program",
    date: "2026",
    category: "Academic",
    description:
      "Named a candidate for one of the nation's highest honors for graduating high school seniors.",
  },
  {
    title: "AP Scholar with Distinction",
    organization: "College Board",
    date: "13 AP Exams",
    category: "Academic",
    description:
      "Earned 5s on 13 AP exams and received AP Scholar with Distinction recognition.",
  },
  {
    title: "Economics State Finalist",
    organization: "Future Business Leaders of America - Texas State",
    date: "State Competition",
    category: "Economics",
    description:
      "Placed 2nd in Economics at the Texas State FBLA competition after placing 1st in Economics at Texas Area V.",
  },
  {
    title: "International History Olympiad Qualifier",
    organization: "National History Bee",
    date: "3x National, 1x International",
    category: "History",
    description:
      "Qualified three times for National History Bee and once for the International History Olympiad.",
  },
  {
    title: "Academic Decathlon Awards",
    organization: "Academic Decathlon",
    date: "Texas",
    category: "Competition",
    description:
      "Earned 3rd Place in Art at Texas Frisco State and 3rd Place in Essay at Texas Region VII.",
  },
  {
    title: "Quiz Bowl Recognition",
    organization: "Quiz Bowl",
    date: "State and National",
    category: "Quiz Bowl",
    description:
      "Placed in the top 12% individually at the 2022 High School National Championship Tournament and earned 2nd Place at 2021 State.",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      {
        name: "Python",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "HTML",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
  {
    category: "Certifications",
    items: [
      {
        name: "AWS Cloud Practitioner",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "IT Specialist - Java",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
  {
    category: "Coursework",
    items: [
      {
        name: "Data Structures",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Data Science",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Cloud Computing",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
    ],
  },
];

export const socialLinks: SocialLinks = {
  github: "https://github.com/ianjkim08",
  linkedin: "https://linkedin.com/in/ianjkim08",
  resume: "/Ian_Kim_Resume.pdf",
};

export const about =
  "I'm a math and computer science student at UChicago with an interest in quantitative research, AI, and machine learning. I also love competitive programming, data analysis, high fantasy, and history.";
