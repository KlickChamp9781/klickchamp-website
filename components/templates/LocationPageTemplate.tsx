"use client";

import type { Location } from "@/lib/data/locations";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { buildLocationSections } from "@/lib/data/content-builders";

interface LocationPageTemplateProps {
  location: Location;
}

export function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const sections = buildLocationSections(location);

  return (
    <>
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Locations", href: "/locations" },
        { label: location.title, href: `/locations/${location.slug}` },
      ]} />
      <ContentRenderer sections={sections} />
    </>
  );
}
