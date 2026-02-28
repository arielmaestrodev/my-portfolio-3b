import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  project: {
    title: string;
    category?: string;
    description: string;
    tags: string[];
    image: string;
    links: {
      demo: string;
      github: string;
    }
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      {/* Card Header */}
      <div className="relative aspect-video overflow-hidden rounded-md bg-gradient-to-br from-primary/20 via-primary/10 to-background border flex items-center justify-center shrink-0">
        <div className="text-muted-foreground font-medium flex flex-col items-center gap-2">
          <div className="rounded-full bg-background/50 backdrop-blur-sm">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {project.category && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium border shadow-sm">
            {project.category}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 space-y-4 flex flex-col flex-grow">
        <div className="space-y-2">
          <h3 className="font-bold text-xl group-hover:underline decoration-primary decoration-2 underline-offset-4">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex pt-4 mt-auto border-t">
          <div className="flex gap-2 w-full">
            <Button size="sm" className="flex-1" asChild>
              <Link href={project.links.github}>
                <Github className="h-4 w-4 mr-2 shrink-0" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link href={project.links.demo}>
                <ExternalLink className="h-4 w-4 mr-2 shrink-0" />
                Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}