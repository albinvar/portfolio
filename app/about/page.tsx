import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import { GitHubFollowers } from "@/components/home/github-followers";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          description="Get to know more about me and my journey as a developer."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted relative">
              <Image
                src="https://i.ibb.co/kgwTr3g3/Cropped-Image-3.png"
                alt="Albin Varghese"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            {/* <GitHubFollowers /> */}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Albin Varghese</h3>
            <p className="text-muted-foreground">
              I'm a <strong>Full Stack Developer</strong> with over 6 years of
              experience crafting digital solutions. Based in Kerala, India, I
              specialize in building exceptional websites, applications, and
              everything in between.
            </p>

            <p className="text-muted-foreground">
              My journey as a developer began in 2017, and since then, I've
              worked with a diverse range of technologies and frameworks. I'm
              passionate about creating clean, efficient code and delivering
              user-friendly experiences.
            </p>

            <p className="text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing my knowledge
              through blog posts and mentoring fellow developers.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link
                  href="https://drive.google.com/file/d/1SImLud00MeXW4HkvbLGk2-LONzBUO4az/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">6+</div>
            <div className="text-lg font-medium">Years of Experience</div>
            <p className="text-muted-foreground text-sm mt-2">
              Working with various technologies and clients across different
              industries.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-lg font-medium">Projects Completed</div>
            <p className="text-muted-foreground text-sm mt-2">
              Delivering solutions ranging from small websites to complex
              enterprise applications.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-lg font-medium">Happy Clients</div>
            <p className="text-muted-foreground text-sm mt-2">
              Building long-term relationships through quality work and
              excellent communication.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-lg font-medium">Technologies</div>
            <p className="text-muted-foreground text-sm mt-2">
              Proficient in multiple programming languages, frameworks, and
              tools.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
