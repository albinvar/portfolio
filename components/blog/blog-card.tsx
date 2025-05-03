"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/data";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const publishedDate = new Date(post.date);
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
          <CardContent className="pt-6 flex-grow">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <time dateTime={post.date}>{timeAgo}</time>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
            <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          
          <CardFooter className="pt-0">
            <div className="text-sm font-medium text-primary flex items-center">
              Read article
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}