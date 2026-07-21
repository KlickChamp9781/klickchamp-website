import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import type { TestimonialSection } from "@/lib/content/types";

export function Testimonial({ quote, author, role }: TestimonialSection) {
  return (
    <SectionWrapper theme="card" bordered padding="section">
      <Container maxWidth="3xl">
        <div className="text-center">
          <Quote className="h-10 w-10 text-[rgb(var(--primary))]/20 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
