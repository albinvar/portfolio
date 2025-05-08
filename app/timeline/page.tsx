import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/timeline/timeline-item";
import { timelineData } from "@/lib/data";

export default function TimelinePage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Journey"
          description="A timeline of my professional experience and career milestones."
        />

        <div className="max-w-5xl mx-auto mt-16">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.year}
              index={index}
              year={item.year}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
