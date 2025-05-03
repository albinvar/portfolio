import { notFound } from "next/navigation";
import { blogData } from "@/lib/data";
import { formatDistanceToNow } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogData.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const publishedDate = new Date(post.date);
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true });

  return (
    <main className="pt-32 pb-20">
      <article className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
          <time dateTime={post.date}>{timeAgo}</time>
          <span>•</span>
          <span>5 min read</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="prose prose-neutral dark:prose-invert mx-auto">
          <p>
            {post.excerpt}
          </p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          
          <h2>Introduction</h2>
          
          <p>
            Aenean convallis diam sit amet vulputate lobortis. Aliquam facilisis ultricies ligula, sed efficitur purus semper et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec aliquet, massa non tincidunt varius, dui nisl faucibus urna, at viverra turpis massa ut dui. Morbi malesuada finibus felis, a porttitor justo scelerisque ac.
          </p>
          
          <p>
            Integer vehicula, urna in pharetra efficitur, nisl eros tincidunt nisi, venenatis vestibulum velit quam in massa. Ut ut convallis nibh. Vivamus semper hendrerit porta. Mauris arcu dolor, pulvinar quis fermentum quis, condimentum a mauris.
          </p>
          
          <h2>Main Content</h2>
          
          <p>
            Praesent interdum ut libero at lacinia. Etiam ultricies, metus vitae tincidunt convallis, neque mauris placerat nisl, non sollicitudin turpis dolor eu odio. Fusce tortor eros, tristique ac dignissim quis, consectetur ut mi. Aenean ut magna ipsum.
          </p>
          
          <ul>
            <li>First point about the topic</li>
            <li>Second important consideration</li>
            <li>Third element to remember</li>
          </ul>
          
          <p>
            Suspendisse vitae aliquam arcu. Etiam tempus enim eu orci fermentum, sed varius nulla laoreet. Proin consequat turpis eget sem semper, ut suscipit leo dictum. Morbi non elementum purus.
          </p>
          
          <h2>Conclusion</h2>
          
          <p>
            Integer ut enim sit amet justo vehicula accumsan. In hac habitasse platea dictumst. Suspendisse in quam at quam facilisis tincidunt. Nullam ac metus efficitur, consequat ex sit amet, aliquam nisi.
          </p>
          
          <p>
            Donec viverra nunc eu tellus vulputate, nec ultricies enim tempor. Nullam consectetur justo quis nisl mattis luctus. Fusce et ligula arcu. Etiam dignissim enim ac est gravida, id blandit nisl tristique.
          </p>
        </div>
      </article>
    </main>
  );
}