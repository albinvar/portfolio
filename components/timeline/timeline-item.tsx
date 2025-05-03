"use client";

import { motion } from "framer-motion";
import { TimelineItem as TimelineItemType } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps extends TimelineItemType {
  index: number;
}

export function TimelineItem({ year, title, description, tags, index }: TimelineItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-16 relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 h-full w-px bg-border -translate-x-1/2" />
      
      {/* Left side (Year) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          "flex items-center gap-4 md:w-1/2",
          index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-3 md:pl-12 md:text-left"
        )}
      >
        <div className="relative flex items-center md:justify-end w-full">
          <div className="w-3 h-3 bg-primary rounded-full absolute left-[21px] md:left-auto md:right-[-27px] z-10" />
          <span className="text-2xl font-bold pl-12 md:pl-0">{year}</span>
        </div>
      </motion.div>
      
      {/* Right side (Content) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          "pl-12 md:pl-0 md:w-1/2",
          index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:order-1"
        )}
      >
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}