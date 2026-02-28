import Link from "next/link";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/constants/project";
import { ProjectCard } from "@/components/common/ProjectCards";

export function Projects() {
  return (
    <Section className="space-y-12">
      {/* Section Heading */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
        <p className="text-muted-foreground md:text-lg/relaxed max-w-[700px]">
          Here are some of the projects I've worked on recently. Each one presented unique challenges and learning opportunities.
        </p>
      </div>

      {/* Top 3 Featured Projects */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center">
        <Link href="/projects">
          <Button variant="outline" size="lg" className="group">
            Check out all projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </Section>
  )
}