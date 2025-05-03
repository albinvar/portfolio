"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { projectsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const allTags = Array.from(
  new Set(projectsData.flatMap((project) => project.tags))
).sort();

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const filteredProjects = selectedTag
    ? projectsData.filter((project) => project.tags.includes(selectedTag))
    : projectsData;

  return (
    <main className="pt-32 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Projects"
          description="Explore the projects I've worked on throughout my career."
        />
        
        <div className="flex flex-wrap gap-2 justify-center mb-12 mt-8 px-4">
          <Badge
            variant={selectedTag === null ? "default" : "outline"}
            className="cursor-pointer text-sm px-4 py-2"
            onClick={() => setSelectedTag(null)}
          >
            All
          </Badge>
          
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer text-sm px-4 py-2"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects found with the selected tag.</p>
          </div>
        )}
      </div>
    </main>
  );
}