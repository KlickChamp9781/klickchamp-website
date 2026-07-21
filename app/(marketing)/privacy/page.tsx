import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Privacy Policy",
    description: `Privacy policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information.`,
    path: "/privacy",
  });
}

export default function PrivacyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd({ name: "Privacy Policy", description: `Privacy policy for ${SITE_NAME}`, url: `${SITE_URL}/privacy` })) }} />
      <section className="relative pt-40 pb-20">
        <div className="container-main max-w-3xl">
          <Badge className="mb-6">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-12">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, including your name, email address,
                phone number, company name, and any other information you choose to provide when
                contacting us or using our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services,
                to communicate with you, to send you marketing communications, and to comply with
                legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with
                third-party service providers who assist us in operating our website and providing
                our services, subject to confidentiality obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information.
                You may also opt out of receiving marketing communications from us at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at
                klickchamp5@gmail.com or reach out via our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
