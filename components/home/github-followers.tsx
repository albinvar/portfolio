"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Users } from "lucide-react";
import { Octokit } from "octokit";

interface GitHubFollower {
  login: string;
  avatar_url: string;
  html_url: string;
}

export function GitHubFollowers() {
  const [followers, setFollowers] = useState<GitHubFollower[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.request('GET /users/{username}/followers', {
          username: 'albinvar',
          per_page: 100,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        setFollowers(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch followers');
        setIsLoading(false);
      }
    };

    fetchFollowers();
  }, []);

  if (error) {
    return (
      <div className="text-center text-muted-foreground py-4">
        {error}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="w-12 h-12 rounded-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">GitHub Followers</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Users className="h-4 w-4 mr-2" />
              View All
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>All Followers</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
              {followers.map((follower, index) => (
                <motion.a
                  key={follower.login}
                  href={follower.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <img
                    src={follower.avatar_url}
                    alt={follower.login}
                    className="w-16 h-16 rounded-full"
                  />
                  <span className="text-sm text-center font-medium truncate w-full">
                    {follower.login}
                  </span>
                </motion.a>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        <AnimatePresence>
          {followers.slice(0, 8).map((follower, index) => (
            <motion.a
              key={follower.login}
              href={follower.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={follower.avatar_url}
                alt={follower.login}
                className="w-12 h-12 rounded-full"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
                {follower.login}
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}