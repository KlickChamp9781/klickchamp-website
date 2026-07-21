import { Heading } from "@/components/content/Heading";
import { CheckItem } from "@/components/content/CheckItem";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Container } from "@/components/content/Container";
import { SITE_NAME } from "@/lib/constants";
import type { CheckListSection } from "@/lib/content/types";

export function CheckList({ heading, headingGold, items, variant = "check", theme = "default", columns = 2 }: CheckListSection) {
  const colsClass = columns === 3 ? "lg:grid-cols-3" : columns === 1 ? "max-w-3xl" : "md:grid-cols-2";

  return (
    <SectionWrapper
      theme={theme}
      bordered={theme === "default"}
      padding={theme === "secondary" ? "section" : "section"}
    >
      <Container maxWidth={columns === 1 ? "3xl" : "default"}>
        <Heading gold={headingGold}>{heading}</Heading>
        <div className={`grid grid-cols-1 ${colsClass} gap-${columns === 1 ? "6" : "8"}`}>
          {items.map((item, i) => (
            <CheckItem
              key={i}
              title={item.title}
              description={item.description}
              text={item.text}
              numbered={variant === "numbered"}
              index={i}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
