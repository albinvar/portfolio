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
  content: string;
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
  content: string;
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
    title: "Java Intern",
    description:
      "Leading development teams and architecting complex applications with a focus on scalability and performance.",
    tags: ["Team Leadership", "Microservices"],
  },
  {
    year: "2021 - Present",
    title: "Wexron Enterprises",
    description:
      "Built and maintained multiple web applications using modern JavaScript frameworks and backend technologies.",
    tags: ["Webhosting", "servers"],
  },
  {
    year: "2019 - 2021",
    title: "Freelance Web Developer",
    description:
      "Focused on creating responsive and accessible web applications with clean, maintainable code.",
    tags: ["JavaScript", "PHP", "Laravel", "MySQL"],
  },
  {
    year: "2017 - 2019",
    title: "Junior Developer",
    description:
      "Started my professional journey developing websites and learning the fundamentals of web development.",
    tags: ["HTML", "CSS", "jQuery", "WordPress"],
  },
];

export const projectsData: Project[] = [
  {
    id: "5",
    title: "HydroLink Plus",
    description:
      "IoT and AI-powered Smart Water Management System for real-time usage monitoring and automated billing. Transforms traditional meters into smart devices.",
    content: `
# HydroLink Plus - Smart Water Management System

A comprehensive IoT and AI-powered solution designed to transform traditional water meters into smart systems for efficient water management, real-time monitoring, and automated billing.

## Project Overview

HydroLink Plus was developed to address the critical challenge of water resource management by leveraging advanced technologies. The system retrofits existing water meters with IoT capabilities, enabling real-time monitoring and data-driven insights for both consumers and authorities.

## Key Features

### Power Management
- Solar-powered operation with MPPT charging
- Dynamic power management for extended battery life
- Deep sleep mode for energy conservation
- Backup power systems for reliability

### AI Capabilities
- Machine learning algorithms for leak detection
- Predictive maintenance notifications
- Usage pattern analysis
- Consumption forecasting

## Technical Implementation

### Hardware Architecture
The system architecture consists of a microcontroller interfacing with various sensors and communication modules. The data is transmitted to a cloud-based platform for processing and analysis.
The architecture is designed to be modular, allowing for easy upgrades and integration with existing infrastructure.

### Hardware Components
The hardware components include:
1. 3D-printed weatherproof casing
2. ESP32 microcontroller
3. Flow and pressure sensors
4. Solar panel with battery backup
5. GSM/Wi-Fi communication modules

### Firmware Development
- ESP-IDF framework for robust performance
- OTA update capabilities for remote maintenance
- Efficient deep sleep implementation
- Secure data transmission protocols

### Software Components
- Laravel-based authority portal with Next.js frontend
- React Native consumer mobile application
- Cloud-based data analytics platform
- RESTful API for system integration

## Development Process

> "Water is one of the planet's most precious resources, yet inefficiencies in its management lead to significant wastage."

The development followed a structured approach:

1. **Research Phase**
   - Water management challenges assessment
   - Technology evaluation
   - Feasibility studies
   - Stakeholder requirements gathering

2. **Design Phase**
   - System architecture planning
   - Hardware component selection
   - Software stack decisions
   - UX/UI design for applications

3. **Implementation Phase**
   - Hardware prototyping
   - Firmware development
   - Backend and frontend implementation
   - Integration testing

4. **Deployment Phase**
   - Pilot installations
   - Performance monitoring
   - Iterative improvements
   - Documentation development

## Technical Challenges

### Power Optimization
Creating an energy-efficient system that could operate reliably on solar power required careful hardware selection and sophisticated power management algorithms.

### Data Security
Implementing end-to-end encryption and secure authentication methods to protect sensitive water usage data and prevent unauthorized access.

### Scalability
Designing a system architecture that could scale from individual homes to industrial facilities and municipal water networks without significant redesign.

## Results and Impact

### Environmental Benefits
- Early leak detection prevents water wastage
- Data-driven insights encourage conservation
- Optimized distribution reduces resource consumption

### Economic Advantages
- Reduced billing costs through automation
- Decreased maintenance expenses via predictive alerts
- Lower operational costs for water authorities

### User Benefits
- Real-time consumption monitoring
- Proactive leak notifications
- Transparent billing information
- Water conservation guidance

## Future Roadmap

1. **Short-term Goals**
   - Enhanced AI prediction models
   - Additional sensor integration
   - Mobile app feature expansion
   - API improvements for third-party integration

2. **Long-term Vision**
   - Smart city water management integration
   - Blockchain-based water credits system
   - Advanced drought prediction capabilities
   - Global deployment in water-stressed regions

## Technologies Used

- ESP32 (Microcontroller)
- Laravel (Backend)
- Next.js (Web Frontend)
- React Native (Mobile App)
- TensorFlow (AI/ML)
- Solar Power Systems
- AWS (Cloud Infrastructure)
- 3D Printing (Hardware Enclosure)
    `,
    tags: ["IoT", "AI/ML", "ESP32", "Laravel", "Next.js", "React Native"],
    image: "https://i.ibb.co/Y4ZhF07S/image-12.png",
    link: "https://hydrolinkplus.in/",
    github: "https://github.com/albinvar/hydrolink-plus/",
  },
  {
    id: "6",
    title: "Cloxo AI",
    description:
      "An intuitive platform connecting users to over 50 open-source AI models, offering free access to advanced NLP, computer vision, and image generation capabilities with seamless API integration.",
    content: `

# Cloxo AI - Harness the Power of 50+ AI Models for Free

Cloxo AI is a versatile platform designed to democratize artificial intelligence by providing seamless access to more than 50 open-source AI models directly from your browser, completely free of charge. It empowers developers, researchers, and businesses to explore, integrate, and build AI-powered applications with ease.

## Project Overview

Built on the robust foundation of OpenWebUI, Cloxo AI offers unmatched scalability and adaptability for cutting-edge AI solutions. The platform supports a wide range of AI models including natural language processing, computer vision, and advanced image generation, enabling users to interact with AI in real-time and at no cost.

## Key Features

### Extensive AI Model Library

- Access to 50+ open-source AI models such as GPT-4o mini, Llama 4 Maverick, Mistral Nemo, Gemini Flash 2.0, and more.
- Models cover diverse domains: NLP, image generation, document understanding, and voice interaction.
- Rate-limited free usage plans tailored per model to ensure fair access.


### User Interaction \& Experience

- Browser-based interface requiring no installation.
- Real-time AI storytelling with the Inference API.
- Upload and interact with documents (PDFs, Word files) for smart extraction and understanding.
- Voice command support for hands-free AI interaction.


### API \& Integration

- Comprehensive API access for effortless integration into third-party applications.
- Easy API key generation and management through user dashboard.
- Support for Retrieval-Augmented Generation (RAG) to enhance AI responses with external knowledge.


### Community \& Open Source

- Powered by a vibrant community of AI enthusiasts, contributors, and donors.
- Leverages open-source technologies like OpenWebUI, Together AI, OpenAI, and Anthropic.
- Encourages collaborative innovation and transparency.


## Technical Implementation

### Architecture Overview

- Frontend: Web-based UI built on modern web frameworks for accessibility and responsiveness.
- Backend: Scalable infrastructure hosting AI models on platforms such as Hugging Face and OpenAI.
- API: RESTful endpoints enabling chat completions, prompt processing, and model management.
- Security: User data control with options for data deletion and privacy compliance.


### Example API Usage

\`\`\`bash curl -X POST https://chat.cloxo.co/api/chat/completions \\ -H "Authorization: Bearer YOUR_API_KEY" \\ -H "Content-Type: application/json" \\ -d '{   "model": "cloxoai/cloxogpt",   "messages": [{"role": "user", "content": "Hello, Cloxo AI!"}] }' \`\`\`

*Note: Replace YOUR_API_KEY with your actual API key.*

## Development Process

> "Our mission is to make artificial intelligence accessible, intuitive, and impactful for everyone."

1. **Conceptualization**
    - Identify barriers to AI accessibility.
    - Define features to support diverse AI model usage.
2. **Platform Development**
    - Build scalable UI and backend systems.
    - Integrate multiple AI models with unified API access.
    - Implement user account and API key management.
3. **Community Engagement**
    - Foster open-source contributions.
    - Encourage user feedback and iterative improvements.
4. **Launch \& Growth**
    - Deploy free access plans with rate limits.
    - Expand model library and features based on demand.

## Impact and Benefits

- Provides free, easy access to powerful AI tools for creators, developers, and businesses.
- Simplifies AI integration via robust APIs.
- Supports innovation by leveraging open-source models and community collaboration.
- Enables creative applications such as AI storytelling, image generation, and document understanding.
- Promotes responsible AI use with transparent data policies and usage controls.


## Future Roadmap

- Expand AI model offerings and capabilities.
- Enhance voice interaction and multimodal AI support.
- Improve API features for enterprise use.
- Strengthen community tools for collaborative AI development.
- Explore advanced AI personalization and training options.


## Technologies Used

- OpenWebUI (Platform foundation)
- Open-source AI models (GPT-4o mini, Llama, Mistral, Gemini, etc.)
- RESTful API
- Web technologies for frontend UI
- Cloud hosting platforms (Hugging Face, OpenAI)
- Community-driven open-source software

`,
    tags: ["AI", "Open Source", "NLP", "Computer Vision", "API", "OpenWebUI"],
    image: "https://i.ibb.co/F455pw6y/image-14.png",
    link: "https://cloxo.co",
    github: undefined,
  },
  {
    id: "6",
    title: "Wexron Hosting",
    description:
      "High-performance web hosting platform leveraging NVMe SSD storage and AMD Ryzen 9 processors, offering scalable solutions from shared hosting to enterprise reseller plans.",
    content: `
# Wexron Hosting - Next-Generation Web Infrastructure

A cutting-edge hosting platform designed to deliver enterprise-grade performance at accessible pricing, combining hardware innovation with robust software solutions.

## Project Overview

Wexron Hosting was developed to disrupt traditional hosting solutions by offering unprecedented performance metrics through strategic hardware selection and optimized server configurations. The platform serves over 500+ businesses and developers with its tiered hosting solutions[8][10].

## Key Features

### Performance Architecture


### Hosting Plans Structure
- **Starter**: 1GB NVMe, 5GB BW, 1 website [8]
- **Standard**: 3GB NVMe, 10GB BW, 3 websites
- **Premium**: 7GB NVMe, 100GB BW, 20 websites
- **Elite**: 20GB NVMe, Unlimited BW, Unlimited sites[8]

### Security Infrastructure
- Enterprise-grade Imunify360 protection
- Automated weekly JetBackups
- Free Let's Encrypt SSL
- DDoS mitigation systems
- Isolated container technology[8][4]

## Technical Implementation

### Server Architecture


### Software Stack
- **Web Server**: LiteSpeed Enterprise with LSCache
- **Control Panel**: DirectAdmin with custom skinning
- **Database**: MySQL/MariaDB with Query Cache
- **Security**: Imunify360 + ModSecurity
- **Storage**: LVM-based NVMe arrays[4][8]

## Development Process

> "Our Ryzen 9 nodes deliver 5GHz clock speeds - a game-changer for PHP application performance"[4]

1. **Hardware Selection Phase**
   - Benchmark testing of CPU architectures
   - NVMe vs SATA SSD performance analysis
   - DDR4 vs DDR5 memory throughput tests

2. **Software Optimization**
   - LiteSpeed tuning for WordPress/Ruby
   - Opcache configuration for PHP 8.3
   - Redis object caching implementation

3. **Infrastructure Scaling**
   - Automated provisioning system
   - Load-balanced storage clusters
   - Global CDN integration[4][8]

## Results and Impact

### Performance Metrics
- 98ms average TTFB (Time to First Byte)
- 1.2s full page load times
- 99.98% uptime over 12 months
- 40% faster PHP execution vs Xeon platforms[8][4]

### Business Growth
- 500+ active clients within first year
- 4.9/5 average support rating
- 300% YOY growth since launch
- 45% client base from developer community[8][10]

## Future Roadmap

1. **Q3 2024**
   - Global edge caching nodes
   - WebAssembly support
   - Automated malware remediation

2. **2025 Vision**
   - AI-driven resource allocation
   - Blockchain-based DNS
   - Green hosting initiatives[4][8]

## Technologies Used
- DirectAdmin
- LiteSpeed Enterprise
- Imunify360
- CloudLinux
- NVMe Storage
- AMD Ryzen Processors
- Redis
- PHP 8.3
  `,
    tags: ["Hosting", "DevOps", "LiteSpeed", "DirectAdmin", "CloudLinux"],
    image: "https://i.ibb.co/4nwj8X7c/image-15.png",
    link: "https://wexronhosting.com",
    github: "https://github.com/wexron",
  },
];

export const blogData: BlogPost[] = [
  {
    id: "1",
    slug: "evolution-of-javascript-frameworks",
    title: "The Evolution of JavaScript Frameworks",
    excerpt:
      "A look at how JavaScript frameworks have evolved over the years and what the future holds.",
    content: `
# The Evolution of JavaScript Frameworks

JavaScript frameworks have come a long way since their inception. This post explores the journey from simple DOM manipulation libraries to modern, full-featured frameworks.

## The Early Days
In the beginning, JavaScript was primarily used for simple form validation and basic interactivity. jQuery emerged as a game-changer, simplifying DOM manipulation and AJAX requests.

## The Rise of MVC Frameworks
Backbone.js and AngularJS introduced structured application development patterns to the frontend world. These frameworks brought concepts like:
- Model-View-Controller architecture
- Two-way data binding
- Dependency injection

## Modern Framework Era
React revolutionized frontend development with its Virtual DOM and component-based architecture. Vue.js and Angular followed with their own innovations.

## The Future
WebAssembly, Edge Computing, and AI integration are shaping the next generation of JavaScript frameworks.

## Conclusion
The evolution continues as new challenges and use cases emerge in web development.
    `,
    date: "2023-04-15",
    tags: ["JavaScript", "Web Development", "Frontend"],
  },
  {
    id: "2",
    slug: "optimizing-database-performance",
    title: "Optimizing Database Performance in High-Traffic Applications",
    excerpt:
      "Strategies for maintaining fast database performance when your application scales.",
    content: `
# Optimizing Database Performance

Learn how to maintain optimal database performance as your application grows.

## Common Performance Issues
- Slow queries
- Connection bottlenecks
- Resource constraints
- Scaling limitations

## Optimization Strategies
1. Query Optimization
   - Index management
   - Query planning
   - Caching strategies

2. Architecture Improvements
   - Sharding
   - Replication
   - Connection pooling

3. Monitoring and Maintenance
   - Performance metrics
   - Regular optimization
   - Capacity planning

## Best Practices
- Regular performance audits
- Automated monitoring
- Proactive optimization
    `,
    date: "2023-03-22",
    tags: ["Database", "Performance", "Scaling"],
  },
  {
    id: "3",
    slug: "implementing-ci-cd-pipelines",
    title: "Implementing CI/CD Pipelines for Modern Web Applications",
    excerpt:
      "A step-by-step guide to setting up continuous integration and deployment for web projects.",
    content: `
# Implementing CI/CD Pipelines

A comprehensive guide to implementing continuous integration and deployment pipelines.

## Why CI/CD?
- Faster deployment cycles
- Reduced errors
- Automated testing
- Consistent delivery

## Setting Up CI/CD
1. Version Control
   - Git workflow
   - Branch strategies
   - Code review process

2. Automated Testing
   - Unit tests
   - Integration tests
   - End-to-end tests

3. Deployment Automation
   - Environment configuration
   - Deployment scripts
   - Rollback procedures

## Best Practices
- Automated testing
- Environment parity
- Monitoring and logging
    `,
    date: "2023-02-10",
    tags: ["DevOps", "CI/CD", "Automation"],
  },
  {
    id: "4",
    slug: "building-accessible-web-applications",
    title: "Building Accessible Web Applications",
    excerpt:
      "Best practices for ensuring your web applications are accessible to all users.",
    content: `
# Building Accessible Web Applications

Learn how to create web applications that are accessible to everyone.

## Why Accessibility Matters
- Inclusive design
- Legal requirements
- Broader user base
- Better SEO

## Key Areas
1. Semantic HTML
   - Proper heading structure
   - ARIA labels
   - Form accessibility

2. Visual Design
   - Color contrast
   - Font sizes
   - Focus indicators

3. Interactive Elements
   - Keyboard navigation
   - Screen reader support
   - Touch targets

## Testing Methods
- Automated tools
- Manual testing
- User testing
    `,
    date: "2023-01-05",
    tags: ["Accessibility", "UI/UX", "HTML"],
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
  { name: "Kali", icon: "kali", category: "platform" },
];
