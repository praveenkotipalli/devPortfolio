import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Praveen Kotipalli",
  initials: "PK",
  url: "https://praveenkotipalli.dev",
  location: "Guntur, India",
  locationLink: "https://www.google.com/maps/place/guntur",
  description:
    "Results-driven and certified Salesforce Developer with expertise in Apex, Lightning Web Components, and API integration.",
  summary:
    "Results-driven and certified Salesforce Developer with a strong foundation in Apex, Lightning Web Components (LWC), and API integration. Proven expertise in building scalable applications, demonstrated by a B.Tech in Computer Science and hands-on project development. Adept at migrating Java (Spring Boot) and React (MERN) skills to the Salesforce platform. Eager to leverage development and AI certifications to build robust solutions.",
  avatarUrl: "/praveen.jpg",
  skills: [
    "Apex",
    "Lightning Web Components",
    "SOQL",
    "SOSL",
    "Aura",
    "Lightning Data Service",
    "Platform Events",
    "Experience Cloud",
    "Einstein AI",
    "RESTful APIs",
    "Apex Callouts",
    "Connected Apps",
    "Salesforce Identity",
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "C++",
    "React.js",
    "Node.js",
    "Spring Boot",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "GitHub Actions",
    "CI/CD",
    "Docker",
    "Salesforce DX",
    "SF CLI",
    "MySQL",
    "PostgreSQL",
    "Firebase Firestore",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "2200032132cseh@gmail.com",
    tel: "+91 7286929137",
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/praveenkumarkotipalli/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:2200032132cseh@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [] as Array<{
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string | null;
    description: string;
  }>,
  education: [
    {
      school: "KL University",
      href: "https://www.kluniversity.in",
      degree: "B.Tech in Computer Science Engineering, CGPA: 8.9 / 10.0",
      logoUrl: "/praveen.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Enterprise Project Management Suite",
      href: "#",
      dates: "Academic Project",
      active: true,
      description:
        "Architected a scalable PM application on Salesforce using custom objects (Project__c, Task__c) and developed a real-time dashboard with Lightning Web Components. Wrote complex Apex Triggers for business logic (e.g., auto-updating Project__c status from child Tasks) and Batch Apex to handle large data rollups. Integrated a real-time chat system using Platform Events and built Apex REST APIs to expose project data to external systems.",
      technologies: [
        "Salesforce",
        "Apex",
        "Lightning Web Components",
        "Platform Events",
        "Batch Apex",
        "REST APIs",
        "SOQL",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Developer Portfolio Site",
      href: "#",
      dates: "Personal Project",
      active: true,
      description:
        "Built and deployed a personal portfolio website using Salesforce Experience Cloud (LWR) to showcase projects, skills, and certifications in a responsive, mobile-friendly layout. Implemented custom Lightning Web Components (LWC) and Apex controllers to dynamically fetch and render project data from Salesforce custom objects. Integrated the Salesforce Web-to-Lead feature in the Contact Me section to enable automated lead capture and CRM tracking.",
      technologies: [
        "Salesforce Experience Cloud",
        "Lightning Web Components",
        "Apex",
        "LWR",
        "Web-to-Lead",
      ],
      links: [
        {
          type: "Website",
          href: "https://praveen5-dev-ed.develop.my.site.com/myportfolio/s/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Salesforce Certified Platform Developer I (PD1)",
      dates: "Salesforce Certification",
      location: "Salesforce",
      description:
        "Certified Salesforce Platform Developer I with expertise in Apex, Lightning Web Components, and Salesforce platform development.",
      image: "",
      links: [],
    },
    {
      title: "Salesforce Certified AI Associate",
      dates: "Salesforce Certification",
      location: "Salesforce",
      description:
        "Certified in Salesforce AI technologies and Einstein AI capabilities.",
      image: "",
      links: [],
    },
    {
      title: "RedHat Enterprise Application Developer",
      dates: "RedHat Certification",
      location: "RedHat",
      description:
        "Certified Enterprise Application Developer with expertise in RedHat technologies.",
      image: "",
      links: [],
    },
    {
      title: "Postman API Expert",
      dates: "Postman Certification",
      location: "Postman",
      description:
        "Certified API Expert with comprehensive knowledge of API development and testing using Postman.",
      image: "",
      links: [],
    },
    {
      title: "GitHub Foundations",
      dates: "GitHub Certification",
      location: "GitHub",
      description:
        "Certified in GitHub fundamentals and best practices for version control and collaboration.",
      image: "",
      links: [],
    },
    {
      title: "LeetCode Problem Solving",
      dates: "Ongoing",
      location: "LeetCode",
      description:
        "Solved 100+ problems on LeetCode, specializing in Data Structures (Graphs, Trees, Dynamic Programming).",
      image: "",
      links: [],
    },
    {
      title: "TryHackMe Cybersecurity",
      dates: "Ongoing",
      location: "TryHackMe",
      description:
        "Ranked in the Top 8% of global users on the TryHackMe cybersecurity platform.",
      image: "",
      links: [],
    },
  ],
} as const;
