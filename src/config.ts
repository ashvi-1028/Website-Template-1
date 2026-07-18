interface SocialLinks {
  email: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

interface ProjectItem {
  name: string;
  description: string;
  link?: string;
  skills: string[];
}

interface ExperienceItem {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
}

interface EducationItem {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: SocialLinks;
  aboutMe: string;
  skills: string[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export const siteConfig: SiteConfig = {
  name: "Ashvi Gadagottu",
  title: "Student & Researcher",
  description: "Portfolio website of Ashvi Gadagottu",
  accentColor: "#1d4ed8",
  social: {
    email: "gadagottuashvi@gmail.com",
    linkedin: "https://www.linkedin.com/in/ashvi-gadagottu-77941531b/",
    twitter: "https://x.com/ashvigadagottu",
    github: "https://github.com/ashvigadagottu",
  },
  aboutMe: `I'm a student with a strong interest in biotechnology, biology, anesthesiology, and bioinformatics.
Through research, programming, and STEM outreach, I enjoy exploring how science and technology can improve the livelihood of people and the world around us.
I am passionate about learning and applying my knowledge to solve real-world problems.
I'm always seeking new opportunities to grow and develop my skills in these fields and one day be able to solve real-world problems.`,
  skills: [
    "Research & Data Analysis",
    "R Programming",
    "Python Programming",
    "JavaScript",
    "Data Visualization",
    "Scientific Literature Review",
    "Bioinformatics & FASTQ File Analysis",
    "STEM Curriculum Development",
    "Public Speaking & Science Communication",
    "Collaboration & Problem-Solving",
  ],
  projects: [
    {
      name: "Nasa Genelab 2026 Capstone Project",
      description:
        "Participated in Nasa's Genelab for Highschoolers Capstone project. Learned how to analyze OSDR data sets and investigate how spaceflight influences living systems. Through hands-on bioinformatics research, strengthening my skills in data analysis, scientific inquiry, and collaborative problem-solving.",
      link: "https://example.com/nasa-capstone",
      skills: [
        "Bioinformatics",
        "OSDR (Open Science Data Repository) Data Navigation & Analysis",
        "Biological Data Analysis",
        "Scientific Research",
        "Scientific Communication",
      ],
    },
    {
      name: "NJx Hackathon Summer 2026",
      description:
        "Participated in a local hackathon and developed a working app extension designed to help social media users stay safe online from increasing cybersecurity threats.",
      link: "https://example.com/njx-hackathon",
      skills: [
        "Cybersecurity",
        "Software Development",
        "UI/UX Design",
        "Testing & Debugging",
        "Product Development",
      ],
    },
    {
      name: "More Projects Coming Soon!",
      description: "(:",
      skills: [],
    },
  ],
  experience: [
    {
      company: "Rocket Club",
      title: "Rocket Club intership(PAID)",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Completed 100+ hours as a Curriculum Development & STEM Presentation Intern with Rocket Club",
        "Created STEM presentations for K–8 students covering science, technology, entrepreneurship, and finance",
        "Designed hands-on activities to make STEM concepts engaging and interactive",
      ],
    },
  ],
  education: [
    {
      school: "Princeton High School",
      degree: "High School Diploma",
      dateRange: "2024 - 2028",
      achievements: [
        "Overall GPA of 3.77",
        "Certified graduate of the Think Neuro 2026 Bibliometrics Research Program",
        "Completed NASA (OSDR) Open Science Training Program",
        "Selected participant in the University of North Carolina, Chapel Hills Anesthesiology Program 2025",
      ],
    },
  ],
};
