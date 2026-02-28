import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Section } from "@/components/common/Section";

export function Contact() {
  return (
    <Section id="contact" className="space-y-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in touch</h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <Button size="lg" asChild>
          <Link href="mailto:hello@example.com">
            <Mail className="mr-1 h-4 w-4" />
            Say Hello
          </Link>
        </Button>
      </div>
    </Section>
  );
}