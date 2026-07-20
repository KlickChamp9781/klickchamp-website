import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "KlickChamp is Kolkata's premium digital marketing agency. We craft data-driven strategies that deliver measurable growth — SEO, Ads, Social Media, Web Design & more.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KlickChamp - Premium Digital Marketing Agency | Kolkata",
    description:
      "Premium digital marketing agency delivering measurable growth. SEO, Ads, Social Media, Web Design & more.",
    url: "https://klickchamp.com",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Phase 2: Build sections here */}
      <section className="kc-section">
        <div className="kc-container">
          <p className="text-overline kc-gold-text">Premium Digital Growth</p>
          <h1 className="text-hero font-display mt-4">
            We Build Digital
            <br />
            Empires.
          </h1>
        </div>
      </section>
    </main>
  );
}
