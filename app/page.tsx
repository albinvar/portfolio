import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projectsData, blogData } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Skills />
      
      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Featured Projects"
            description="Here are some of the projects I've worked on that showcase my skills and expertise."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {projectsData.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Recent Blog Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Recent Blog Posts"
            description="I write about web development, design, and other tech-related topics."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {blogData.slice(0, 3).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link href="/blog">
                Read All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to work together?</h2>
            <p className="text-muted-foreground mb-8 px-4">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}