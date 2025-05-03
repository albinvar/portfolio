"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const rolesTitles = [
  "Full Stack Developer",
  "DevOps Engineer",
  "Vibe Coder",
  "UI/UX Enthusiast",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rolesTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.2]" />
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8"
        >
          <div className="inline-block rounded-full bg-muted px-4 py-1.5 text-sm">
            Hello, I'm Albin Varghese 👋
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight lg:leading-tight">
            I'm a{" "}
            <span className="text-primary relative inline-block min-w-[280px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {rolesTitles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded"></span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
          >
            With over 6 years of experience crafting digital solutions. Based in
            Kerala, India, I build exceptional, high-performing applications
            with clean code and intuitive design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 px-4"
          >
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/about">
                About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <Link
                href="https://drive.google.com/file/d/1SImLud00MeXW4HkvbLGk2-LONzBUO4az/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center space-x-4 pt-4"
          >
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/albinvar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/albinvar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>

            {/* <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button> */}

            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://instagram.com/albin_var"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://twitter.com/albin_var"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-center space-y-2"
        >
          <p className="text-sm text-muted-foreground">Scroll down</p>
          <div className="w-0.5 h-12 bg-border mx-auto"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
