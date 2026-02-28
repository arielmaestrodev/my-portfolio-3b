import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-24 lg:py-32", className)} {...props}>
      {children}
    </section>
  )
}