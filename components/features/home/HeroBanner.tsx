import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroBanner() {
  const socials = [
    {
      name: "Github",
      icon: <Github className="h-6 w-6" />,
      link: "https://github.com/"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      link: "https://linkedin.com/"
    },
    {
      name: "Mail",
      icon: <Mail className="h-6 w-6" />,
      link: "mailto:email@portfolio.com"
    }
  ]

  return (
    <Section className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
      {/* Left Banner */}
      <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Building Exceptional <br className="hidden md:inline" />
            Digital Experiences
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a Full Stack Developer specializing in building (and occasionally designing) simple, beautiful, and intuitive interfaces.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <Link href="/projects">
            <Button size="lg" className="group w-full lg:w-auto">
              Check out my work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button size="lg" variant="outline" className="w-full lg:w-auto">
              Contact Me
            </Button>
          </Link>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 text-muted-foreground">
          {socials.map((social) => (
            <Link key={social.name} href={social.link} className="hover:text-foreground transition-colors">
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Container */}
      <div className="flex justify-center items-center">
        <Image
          src="/media/homebanner-img.avif"
          alt="Coding Environment"
          width={500}
          height={500}
          priority
          className="rounded-2xl shadow-2xl object-cover w-full max-w-[500px] aspect-square transform rotate-3 hover:rotate-0 transition-transform duration-500"
        />
      </div>
    </Section>
  )
}