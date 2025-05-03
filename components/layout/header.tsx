"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Timeline", path: "/timeline" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-primary">Albin </span>
          <span className="text-muted-foreground">Varghese</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === item.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <span className="text-primary">Albin </span>
                  <span className="text-muted-foreground">Varghese</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8 flex-grow">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "text-lg py-2 transition-colors hover:text-primary",
                      pathname === item.path
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="border-t pt-4">
                <div className="flex justify-center space-x-4">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  © {new Date().getFullYear()} Albin Varghese
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}