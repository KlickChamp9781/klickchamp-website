import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageJsonLd } from "@/lib/seo/jsonld";
import { Badge } from "@/components/ui/badge";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Terms of Service",
    description: `Terms of service for ${SITE_NAME}. Read about the terms and conditions governing the use of our services.`,
    path: "/terms",
  });
}

export default function TermsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd({ name: "Terms of Service", description: `Terms of service for ${SITE_NAME}`, url: `${SITE_URL}/terms` })) }} />
      <section className="relative pt-40 pb-20">
        <div className="container-main max-w-3xl">
          <Badge className="mb-6">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-12">
            Terms of Service
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by KlickChamp, you agree to be bound
                by these Terms of Service. If you do not agree to these terms, please do not use
                our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">2. Services</h2>
              <p>
                KlickChamp provides digital marketing, graphic design, video editing, and website
                design and development services. The scope, deliverables, and timelines for each
                project are defined in separate agreements or statements of work.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">3. Payment Terms</h2>
              <p>
                Payment terms are defined in individual project agreements. Invoices are due
                within the timeframe specified in the applicable statement of work. Late payments
                may incur additional charges as outlined in the agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
              <p>
                Upon full payment, clients receive ownership of all deliverables created specifically
                for their project. KlickChamp retains the right to display work in portfolios and
                marketing materials unless otherwise agreed upon.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p>
                KlickChamp shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages resulting from the use of our services. Our total liability
                shall not exceed the amount paid for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at
                klickchamp5@gmail.com or through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
