import { StaticImageData } from "next/image";

// Types
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: "language" | "framework" | "tool" | "platform";
}

// Data
export const timelineData: TimelineItem[] = [
  {
    year: "2023 - Present",
    title: "Senior Full Stack Developer",
    description: "Leading development teams and architecting complex applications with a focus on scalability and performance.",
    tags: ["Team Leadership", "System Architecture", "DevOps", "Cloud Infrastructure"]
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    description: "Built and maintained multiple web applications using modern JavaScript frameworks and backend technologies.",
    tags: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    year: "2019 - 2021",
    title: "Web Developer",
    description: "Focused on creating responsive and accessible web applications with clean, maintainable code.",
    tags: ["JavaScript", "PHP", "Laravel", "MySQL"]
  },
  {
    year: "2017 - 2019",
    title: "Junior Developer",
    description: "Started my professional journey developing websites and learning the fundamentals of web development.",
    tags: ["HTML", "CSS", "jQuery", "WordPress"]
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg",
    link: "#",
    github: "#"
  },
  {
    id: "2",
    title: "Health Tracking App",
    description: "Mobile application for tracking fitness goals, nutrition, and health metrics with data visualization.",
    tags: ["React Native", "Firebase", "Redux", "Chart.js"],
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
    link: "#",
    github: "#"
  },
  {
    id: "3",
    title: "Real-time Chat Application",
    description: "Scalable real-time chat platform with video calling capabilities and end-to-end encryption.",
    tags: ["WebSockets", "WebRTC", "Next.js", "PostgreSQL"],
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    link: "#",
    github: "#"
  },
  {
    id: "4",
    title: "Content Management System",
    description: "Custom CMS with role-based access control, content versioning, and API capabilities.",
    tags: ["TypeScript", "Express", "MySQL", "GraphQL"],
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg",
    link: "#",
    github: "#"
  },
];

export const blogData: BlogPost[] = [
  {
    id: "1",
    slug: "evolution-of-javascript-frameworks",
    title: "The Evolution of JavaScript Frameworks",
    excerpt: "A look at how JavaScript frameworks have evolved over the years and what the future holds.",
    date: "2023-04-15",
    tags: ["JavaScript", "Web Development", "Frontend"]
  },
  {
    id: "2",
    slug: "optimizing-database-performance",
    title: "Optimizing Database Performance in High-Traffic Applications",
    excerpt: "Strategies for maintaining fast database performance when your application scales.",
    date: "2023-03-22",
    tags: ["Database", "Performance", "Scaling"]
  },
  {
    id: "3",
    slug: "implementing-ci-cd-pipelines",
    title: "Implementing CI/CD Pipelines for Modern Web Applications",
    excerpt: "A step-by-step guide to setting up continuous integration and deployment for web projects.",
    date: "2023-02-10",
    tags: ["DevOps", "CI/CD", "Automation"]
  },
  {
    id: "4",
    slug: "building-accessible-web-applications",
    title: "Building Accessible Web Applications",
    excerpt: "Best practices for ensuring your web applications are accessible to all users.",
    date: "2023-01-05",
    tags: ["Accessibility", "UI/UX", "HTML"]
  },
];

export const skills: Skill[] = [
  { name: "HTML", icon: "html", category: "language" },
  { name: "CSS", icon: "css", category: "language" },
  { name: "JavaScript", icon: "js", category: "language" },
  { name: "TypeScript", icon: "ts", category: "language" },
  { name: "PHP", icon: "php", category: "language" },
  { name: "Python", icon: "py", category: "language" },
  { name: "Java", icon: "java", category: "language" },
  { name: "C", icon: "c", category: "language" },
  { name: "Node.js", icon: "nodejs", category: "framework" },
  { name: "SASS", icon: "sass", category: "framework" },
  { name: "MySQL", icon: "mysql", category: "tool" },
  { name: "PostgreSQL", icon: "postgres", category: "tool" },
  { name: "SQLite", icon: "sqlite", category: "tool" },
  { name: "Supabase", icon: "supabase", category: "platform" },
  { name: "Redis", icon: "redis", category: "tool" },
  { name: "Bootstrap", icon: "bootstrap", category: "framework" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "framework" },
  { name: "Astro", icon: "astro", category: "framework" },
  { name: "Vue", icon: "vue", category: "framework" },
  { name: "Nuxt.js", icon: "nuxtjs", category: "framework" },
  { name: "Flask", icon: "flask", category: "framework" },
  { name: "Django", icon: "django", category: "framework" },
  { name: "Laravel", icon: "laravel", category: "framework" },
  { name: "FastAPI", icon: "fastapi", category: "framework" },
  { name: "Arduino", icon: "arduino", category: "platform" },
  { name: "jQuery", icon: "jquery", category: "framework" },
  { name: "Anaconda", icon: "anaconda", category: "tool" },
  { name: "Bash", icon: "bash", category: "language" },
  { name: "PowerShell", icon: "powershell", category: "language" },
  { name: "VS Code", icon: "vscode", category: "tool" },
  { name: "PyCharm", icon: "pycharm", category: "tool" },
  { name: "PhpStorm", icon: "phpstorm", category: "tool" },
  { name: "WebStorm", icon: "webstorm", category: "tool" },
  { name: "Android Studio", icon: "androidstudio", category: "tool" },
  { name: "Sublime", icon: "sublime", category: "tool" },
  { name: "Vim", icon: "vim", category: "tool" },
  { name: "Adobe Illustrator", icon: "ai", category: "tool" },
  { name: "Photoshop", icon: "ps", category: "tool" },
  { name: "After Effects", icon: "ae", category: "tool" },
  { name: "Premiere Pro", icon: "pr", category: "tool" },
  { name: "Adobe XD", icon: "xd", category: "tool" },
  { name: "Figma", icon: "figma", category: "tool" },
  { name: "Firebase", icon: "firebase", category: "platform" },
  { name: "WordPress", icon: "wordpress", category: "platform" },
  { name: "Git", icon: "git", category: "tool" },
  { name: "GitHub", icon: "github", category: "platform" },
  { name: "GitLab", icon: "gitlab", category: "platform" },
  { name: "npm", icon: "npm", category: "tool" },
  { name: "Yarn", icon: "yarn", category: "tool" },
  { name: "pnpm", icon: "pnpm", category: "tool" },
  { name: "Bun", icon: "bun", category: "tool" },
  { name: "Vite", icon: "vite", category: "tool" },
  { name: "Postman", icon: "postman", category: "tool" },
  { name: "AWS", icon: "aws", category: "platform" },
  { name: "Azure", icon: "azure", category: "platform" },
  { name: "Heroku", icon: "heroku", category: "platform" },
  { name: "Vercel", icon: "vercel", category: "platform" },
  { name: "Netlify", icon: "netlify", category: "platform" },
  { name: "Cloudflare", icon: "cloudflare", category: "platform" },
  { name: "Docker", icon: "docker", category: "tool" },
  { name: "Windows", icon: "windows", category: "platform" },
  { name: "Linux", icon: "linux", category: "platform" },
  { name: "Ubuntu", icon: "ubuntu", category: "platform" },
  { name: "Kali", icon: "kali", category: "platform" }
];