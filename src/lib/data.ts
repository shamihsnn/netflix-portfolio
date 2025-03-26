export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface ContentCategory {
  id: string;
  title: string;
  projects: Project[];
}

export const myInfo = {
  name: "USAMA HASSAN",
  role: "Software Engineer & Designer",
  bio: "Passionate about creating beautiful, functional, and user-centered digital experiences.",
  location: "San Francisco, CA",
  email: "hello@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

export const featuredProject: Project = {
  id: "featured-1",
  title: "E-Commerce Platform",
  description: "A full-stack e-commerce platform with a modern UI, payment processing, and inventory management system.",
  thumbnail: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  category: "Web Development",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
  link: "https://example.com",
  github: "https://github.com/yourusername/ecommerce",
};

export const contentRows: ContentCategory[] = [
  {
    id: "web-development",
    title: "Web Development",
    projects: [
      {
        id: "web-1",
        title: "Personal Portfolio",
        description: "A responsive personal portfolio website showcasing my projects and skills.",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        category: "Web Development",
        technologies: ["React", "Tailwind CSS", "Vite"],
      },
      {
        id: "web-2",
        title: "Task Manager",
        description: "A task management application with drag-and-drop functionality and user authentication.",
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        category: "Web Development",
        technologies: ["React", "Firebase", "Tailwind CSS"],
      },
      {
        id: "web-3",
        title: "Weather Dashboard",
        description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
        thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
        category: "Web Development",
        technologies: ["JavaScript", "OpenWeather API", "CSS"],
      },
      {
        id: "web-4",
        title: "Recipe Finder",
        description: "A recipe finder application that allows users to search for recipes based on ingredients they have.",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
        category: "Web Development",
        technologies: ["React", "Spoonacular API", "CSS"],
      },
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    projects: [
      {
        id: "mobile-1",
        title: "Fitness Tracker",
        description: "A mobile app that tracks workouts, nutrition, and progress towards fitness goals.",
        thumbnail: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        category: "Mobile Development",
        technologies: ["React Native", "Firebase", "Redux"],
      },
      {
        id: "mobile-2",
        title: "Social Media App",
        description: "A social media application with features like posts, comments, likes, and user profiles.",
        thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
        category: "Mobile Development",
        technologies: ["React Native", "Firebase", "Node.js"],
      },
      {
        id: "mobile-3",
        title: "Travel Companion",
        description: "A travel companion app that helps users plan trips, find attractions, and track expenses.",
        thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        category: "Mobile Development",
        technologies: ["Flutter", "Google Maps API", "Firebase"],
      },
    ],
  },
  {
    id: "ui-design",
    title: "UI/UX Design",
    projects: [
      {
        id: "design-1",
        title: "E-learning Platform",
        description: "UI/UX design for an e-learning platform with a focus on accessibility and user engagement.",
        thumbnail: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
        category: "UI/UX Design",
        technologies: ["Figma", "Adobe XD", "Illustrator"],
      },
      {
        id: "design-2",
        title: "Banking Application",
        description: "UI/UX design for a banking application with a focus on security and user trust.",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        category: "UI/UX Design",
        technologies: ["Figma", "Sketch", "Principle"],
      },
      {
        id: "design-3",
        title: "Health Dashboard",
        description: "UI/UX design for a health dashboard that visualizes health data and provides insights.",
        thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        category: "UI/UX Design",
        technologies: ["Figma", "Adobe XD", "Photoshop"],
      },
    ],
  },
];

export const skills = [
  {
    category: "Frontend",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Angular", "Tailwind CSS", "SASS"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Express", "Python", "Django", "Ruby on Rails", "PHP", "Java", "Spring Boot"],
  },
  {
    category: "Database",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Elasticsearch"],
  },
  {
    category: "DevOps",
    techs: ["Git", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "CI/CD", "Jenkins"],
  },
  {
    category: "Design",
    techs: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "InDesign"],
  },
];
