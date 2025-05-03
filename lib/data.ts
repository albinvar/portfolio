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
    title: "Senior Full Stack Developer",
    description:
      "Leading development teams and architecting complex applications with a focus on scalability and performance.",
    tags: [
      "Team Leadership",
      "System Architecture",
      "DevOps",
      "Cloud Infrastructure",
    ],
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    description:
      "Built and maintained multiple web applications using modern JavaScript frameworks and backend technologies.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    year: "2019 - 2021",
    title: "Web Developer",
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
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
    content: `
# E-Commerce Platform

A comprehensive e-commerce solution built with modern technologies, focusing on performance, scalability, and user experience.

## Project Overview

This e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The project demonstrates my ability to create complex, scalable applications with multiple integrations and real-time features.

## Key Features

### Customer Features
- Intuitive product browsing and search
- Advanced filtering and sorting options
- Secure checkout process with Stripe integration
- Real-time order tracking
- Customer accounts and order history
- Wishlist and favorites
- Product reviews and ratings

### Admin Features
- Comprehensive dashboard with real-time analytics
- Inventory management system
- Order processing workflow
- Customer management
- Product catalog management
- Discount and promotion tools
- SEO optimization tools

## Technical Implementation

### Frontend Architecture
\`\`\`typescript
// Example of our product filtering system
interface FilterOptions {
  category: string;
  priceRange: [number, number];
  brands: string[];
  inStock: boolean;
}

const filterProducts = (products: Product[], filters: FilterOptions) => {
  return products.filter(product => {
    const matchesCategory = filters.category === 'all' || product.category === filters.category;
    const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);
    const matchesStock = !filters.inStock || product.stockCount > 0;
    
    return matchesCategory && matchesPrice && matchesBrand && matchesStock;
  });
};
\`\`\`

### Backend Architecture
- Node.js with Express for the API
- MongoDB for flexible data storage
- Redis for caching and session management
- AWS S3 for media storage
- Elasticsearch for product search

### Performance Optimizations
1. Implemented lazy loading for images
2. Used Redis caching for frequently accessed data
3. Optimized database queries with proper indexing
4. Utilized CDN for static assets
5. Implemented service workers for offline capabilities

## Development Process

> "The key to successful e-commerce is creating a seamless experience from browsing to checkout."

We followed an agile methodology with two-week sprints:

1. **Planning Phase**
   - Requirements gathering
   - Architecture design
   - Technology selection
   - Sprint planning

2. **Development Phase**
   - Frontend development
   - Backend API development
   - Integration testing
   - Performance optimization

3. **Deployment Phase**
   - Staging environment testing
   - Load testing
   - Security audits
   - Production deployment

## Results and Impact

### Performance Metrics
- 99.9% uptime
- < 2s average page load time
- 50% increase in conversion rate
- 30% reduction in cart abandonment

### Business Impact
- 200% increase in online sales
- 45% increase in average order value
- 60% reduction in customer support tickets
- 4.8/5 average customer satisfaction rating

## Lessons Learned

1. Early performance optimization is crucial
2. User feedback during development is invaluable
3. Automated testing saves time in the long run
4. Monitoring and analytics are essential
5. Regular security audits are non-negotiable

## Future Improvements

- [ ] AI-powered product recommendations
- [ ] AR product visualization
- [ ] International shipping calculator
- [ ] Advanced analytics dashboard
- [ ] Mobile app development

## Technologies Used

- React.js
- Node.js
- MongoDB
- Redis
- AWS (S3, CloudFront, EC2)
- Stripe
- Elasticsearch
- Docker
- Kubernetes
    `,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg",
    link: "#",
    github: "#",
  },
  {
    id: "2",
    title: "Health Tracking App",
    description:
      "Mobile application for tracking fitness goals, nutrition, and health metrics with data visualization.",
    content: `
# Health Tracking App

A comprehensive health and fitness tracking application designed to help users achieve their wellness goals through data-driven insights and personalized recommendations.

## Project Overview

This health tracking application combines the power of data analytics with user-friendly design to create a personalized health management experience. The app helps users track their fitness progress, nutrition intake, and overall wellness metrics.

## Key Features

### Fitness Tracking
- Custom workout plans
- Exercise library with video demonstrations
- Progress tracking with visual charts
- Personal records management
- Activity tracking integration

### Nutrition Management
\`\`\`typescript
interface NutritionLog {
  date: Date;
  meals: {
    type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
    foods: Array<{
      name: string;
      calories: number;
      macros: {
        protein: number;
        carbs: number;
        fats: number;
      };
    }>;
  }[];
}
\`\`\`

### Health Metrics
- Weight tracking
- Body measurements
- Sleep quality monitoring
- Stress levels
- Hydration tracking

## Technical Implementation

### Mobile Development
1. React Native for cross-platform compatibility
2. Native modules for device sensor integration
3. Offline-first architecture
4. Real-time sync with cloud

### Backend Services
- Node.js microservices
- PostgreSQL for structured data
- Redis for caching
- Firebase for real-time features
- Machine learning for recommendations

## Data Visualization

> "Seeing progress is the key to staying motivated."

The app uses various chart types to visualize data:

1. Line charts for progress tracking
2. Bar charts for daily comparisons
3. Pie charts for macro distributions
4. Radar charts for overall fitness scores

## Machine Learning Integration

### Personalization Engine
\`\`\`python
def generate_workout_recommendation(user_data):
    # Analysis of user's fitness level
    fitness_score = calculate_fitness_score(user_data)
    
    # Get appropriate exercises
    recommended_exercises = model.predict(fitness_score)
    
    # Create personalized workout plan
    return create_workout_plan(recommended_exercises)
\`\`\`

## Security Measures

1. End-to-end encryption for personal data
2. HIPAA compliance
3. Regular security audits
4. Two-factor authentication
5. Data anonymization

## Development Process

### Phase 1: Research & Planning
- User research and surveys
- Competitor analysis
- Feature prioritization
- Technical architecture design

### Phase 2: Development
- Iterative development cycles
- Regular user testing
- Performance optimization
- Security implementation

### Phase 3: Launch & Iteration
- Beta testing
- Gradual rollout
- User feedback collection
- Continuous improvement

## Results

### User Impact
- 80% of users report improved fitness awareness
- 65% achieved their fitness goals
- 90% user retention rate
- 4.8/5 App Store rating

### Technical Achievements
- 99.9% uptime
- < 100ms API response time
- 50MB app size
- Offline functionality

## Future Roadmap

1. **Q1 2024**
   - Social features integration
   - Advanced analytics dashboard
   - AI-powered coaching

2. **Q2 2024**
   - Wearable device integration
   - Virtual trainer features
   - Community challenges

3. **Q3 2024**
   - Meal planning automation
   - Genetic testing integration
   - Virtual reality workouts

## Technologies Used

- React Native
- TypeScript
- Node.js
- PostgreSQL
- Redis
- TensorFlow
- AWS Services
- Firebase
    `,
    tags: ["React Native", "Firebase", "Redux", "Chart.js"],
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
    link: "#",
    github: "#",
  },
  {
    id: "3",
    title: "Real-time Chat Application",
    description:
      "Scalable real-time chat platform with video calling capabilities and end-to-end encryption.",
    content: `
# Real-time Chat Application

A modern, secure, and scalable chat platform that prioritizes user privacy while delivering a seamless communication experience.

## Project Overview

This chat application was built to demonstrate the implementation of real-time features, security best practices, and scalable architecture in modern web applications.

## Key Features

### Messaging Capabilities
\`\`\`typescript
interface Message {
  id: string;
  content: string;
  sender: User;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  attachments?: Array<{
    type: 'image' | 'file' | 'audio';
    url: string;
    name: string;
    size: number;
  }>;
}
\`\`\`

### Video Calling
- WebRTC integration
- Screen sharing
- Multiple participant support
- Adaptive quality
- Recording capabilities

### Security Features
1. End-to-end encryption
2. Perfect forward secrecy
3. Two-factor authentication
4. Message expiration
5. Secure file transfer

## Technical Architecture

### Frontend Implementation
\`\`\`typescript
// WebSocket connection handler
class WebSocketManager {
  private socket: WebSocket;
  private messageQueue: Message[] = [];
  
  constructor(private url: string) {
    this.socket = new WebSocket(url);
    this.setupEventHandlers();
  }
  
  private setupEventHandlers() {
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.handleIncomingMessage(message);
    };
    
    this.socket.onclose = () => {
      this.handleDisconnection();
    };
  }
  
  private handleIncomingMessage(message: Message) {
    // Process incoming messages
    // Update UI and trigger notifications
  }
  
  private handleDisconnection() {
    // Implement reconnection logic
    // Save unsent messages to queue
  }
}
\`\`\`

### Backend Architecture
- Node.js with Express
- PostgreSQL for data persistence
- Redis for real-time features
- Elasticsearch for message search
- Kubernetes for orchestration

## Performance Optimizations

> "Real-time doesn't mean sacrificing performance."

### Message Handling
1. Message queuing
2. Batch processing
3. Optimistic UI updates
4. Lazy loading of history

### Media Optimization
- Image compression
- Video transcoding
- Adaptive streaming
- CDN integration

## Development Process

### Planning Phase
- Requirements analysis
- Architecture design
- Security planning
- Performance benchmarking

### Implementation Phase
1. Core messaging features
2. Video calling integration
3. Security implementation
4. UI/UX development

### Testing Phase
- Unit testing
- Integration testing
- Load testing
- Security audits

## Results

### Performance Metrics
- 50ms message delivery time
- 99.99% uptime
- 1M+ concurrent connections
- < 100ms API response time

### User Metrics
- 1M+ active users
- 4.9/5 user satisfaction
- 95% retention rate
- 500M+ messages/day

## Security Measures

### Encryption
\`\`\`typescript
interface EncryptionConfig {
  algorithm: 'AES-256-GCM';
  keySize: 256;
  ivSize: 96;
  tagLength: 128;
}

class MessageEncryption {
  private config: EncryptionConfig;
  
  constructor() {
    this.config = {
      algorithm: 'AES-256-GCM',
      keySize: 256,
      ivSize: 96,
      tagLength: 128
    };
  }
  
  async encryptMessage(message: string, key: CryptoKey): Promise<EncryptedMessage> {
    // Implement encryption logic
  }
  
  async decryptMessage(encrypted: EncryptedMessage, key: CryptoKey): Promise<string> {
    // Implement decryption logic
  }
}
\`\`\`

## Future Improvements

1. **Enhanced Features**
   - [ ] AI-powered chatbots
   - [ ] Language translation
   - [ ] Voice messages
   - [ ] Rich text formatting

2. **Technical Improvements**
   - [ ] WebAssembly optimization
   - [ ] Edge computing integration
   - [ ] Blockchain integration
   - [ ] AR/VR support

## Technologies Used

- WebSocket
- WebRTC
- Node.js
- PostgreSQL
- Redis
- Elasticsearch
- Docker
- Kubernetes
    `,
    tags: ["WebSockets", "WebRTC", "Next.js", "PostgreSQL"],
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    link: "#",
    github: "#",
  },
  {
    id: "4",
    title: "Content Management System",
    description:
      "Custom CMS with role-based access control, content versioning, and API capabilities.",
    content: `
# Content Management System

A flexible and powerful CMS designed for modern content management needs, featuring advanced workflows and API-first architecture.

## Project Overview

This custom CMS was built to provide a flexible and scalable solution for content management, featuring advanced workflows, versioning, and comprehensive API support.

## Key Features

### Content Management
\`\`\`typescript
interface Content {
  id: string;
  type: 'post' | 'page' | 'product' | 'custom';
  title: string;
  content: string;
  status: 'draft' | 'published' | 'archived';
  metadata: {
    author: User;
    created: Date;
    modified: Date;
    version: number;
    tags: string[];
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
}
\`\`\`

### Workflow System
1. Content creation
2. Review process
3. Approval workflow
4. Publishing system
5. Version control

### API Features
- RESTful endpoints
- GraphQL support
- Webhook integration
- Rate limiting
- Authentication

## Technical Implementation

### Backend Architecture
\`\`\`typescript
// Content versioning system
class ContentVersioning {
  private async createVersion(content: Content): Promise<Version> {
    const version = new Version({
      contentId: content.id,
      data: content,
      timestamp: new Date(),
      author: getCurrentUser()
    });
    
    await this.saveVersion(version);
    return version;
  }
  
  private async compareVersions(v1: Version, v2: Version): Promise<Diff[]> {
    // Implement diff logic
    return calculateDiff(v1.data, v2.data);
  }
  
  async rollback(contentId: string, versionId: string): Promise<Content> {
    // Implement rollback logic
    return this.restoreVersion(contentId, versionId);
  }
}
\`\`\`

### Database Schema
- PostgreSQL for structured data
- MongoDB for content storage
- Redis for caching
- Elasticsearch for search

## Security Implementation

### Role-Based Access Control
\`\`\`typescript
interface Permission {
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete';
  conditions?: {
    owner?: boolean;
    department?: string[];
    status?: string[];
  };
}

interface Role {
  name: string;
  permissions: Permission[];
}
\`\`\`

### Security Measures
1. Authentication system
2. Authorization framework
3. Data validation
4. Input sanitization
5. Audit logging

## Development Process

### Phase 1: Planning
- Requirements gathering
- Architecture design
- Database schema design
- API specification

### Phase 2: Implementation
1. Core CMS features
2. API development
3. Admin interface
4. Security implementation

### Phase 3: Testing
- Unit testing
- Integration testing
- Security testing
- Performance testing

## Results

### Performance Metrics
- < 100ms API response time
- 99.9% uptime
- 10,000+ concurrent users
- 1M+ content items

### Business Impact
- 50% reduction in content publishing time
- 30% increase in content engagement
- 40% reduction in training time
- 4.8/5 user satisfaction

## Future Improvements

### Short-term
- [ ] AI content suggestions
- [ ] Advanced analytics
- [ ] Automated workflows
- [ ] Media optimization

### Long-term
- [ ] Machine learning integration
- [ ] Headless CMS features
- [ ] Multi-site management
- [ ] Advanced personalization

## Technologies Used

- TypeScript
- Node.js
- PostgreSQL
- MongoDB
- Redis
- Elasticsearch
- Docker
- Kubernetes
    `,
    tags: ["TypeScript", "Express", "MySQL", "GraphQL"],
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg",
    link: "#",
    github: "#",
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
