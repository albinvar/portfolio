"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "all", label: "All" },
  { id: "language", label: "Languages" },
  { id: "framework", label: "Frameworks" },
  { id: "tool", label: "Tools" },
  { id: "platform", label: "Platforms" },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">My Skills & Tools</h2>
          <p className="text-muted-foreground px-4">
            Over the years, I've built expertise across a wide range of technologies,
            frameworks, and tools that enable me to create comprehensive solutions.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="h-auto p-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-3 py-1.5 text-sm"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg",
                    "border border-border bg-card hover:border-primary/50 transition-colors"
                  )}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 flex items-center justify-center">
                    <img 
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-xs md:text-sm text-center font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}