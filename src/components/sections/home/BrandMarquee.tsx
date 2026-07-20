"use client";

const ITEMS = [
  "Digital Marketing",
  "SEO",
  "Meta Ads",
  "Google Ads",
  "Social Media",
  "Web Design",
  "Branding",
  "Video Editing",
];

export function BrandMarquee() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden border-t border-kc-white/5">
      <div className="flex whitespace-nowrap kc-marquee">
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-16 mx-16">
            {ITEMS.map((item) => (
              <span
                key={`${setIndex}-${item}`}
                className="text-[clamp(2rem,4vw,3.5rem)] font-[family-name:var(--kc-font-heading)] font-bold text-kc-white/10 uppercase tracking-[var(--kc-tracking-widest)] select-none"
              >
                {item}
              </span>
            ))}
            <span className="w-3 h-3 rounded-full bg-kc-gold/30 flex-shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
