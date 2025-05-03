import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-32 pb-20">
      <article className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          )}
        </div>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="prose prose-neutral dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {project.github && (
              <Button asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                </Link>
              </Button>
            )}
            
            {project.link && (
              <Button variant="outline" asChild>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>

          <h2>Project Details</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla.
          </p>

          <h2>Technologies Used</h2>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <h2>Challenges & Solutions</h2>
          <p>
            Aenean convallis diam sit amet vulputate lobortis. Aliquam facilisis
            ultricies ligula, sed efficitur purus semper et. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Feature one description</li>
            <li>Feature two description</li>
            <li>Feature three description</li>
          </ul>
        </div>
      </article>
    </main>
  );
}