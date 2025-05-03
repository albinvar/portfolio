import { SectionHeading } from "@/components/ui/section-heading";
import { BlogCard } from "@/components/blog/blog-card";
import { blogData } from "@/lib/data";

export default function BlogPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Blog"
          description="Thoughts, insights, and tutorials on web development and technology."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {blogData.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}