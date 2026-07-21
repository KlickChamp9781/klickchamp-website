import type { ServiceHubConfig, SubService } from "@/lib/data/services/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentRenderer } from "@/components/content/ContentRenderer";
import { buildServiceSections } from "@/lib/data/content-builders";

interface ServiceHubTemplateProps {
  service: ServiceHubConfig;
  subService?: SubService;
}

export function ServiceHubTemplate({ service, subService }: ServiceHubTemplateProps) {
  const isSubService = Boolean(subService);

  const breadcrumbItems = isSubService
    ? [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.title, href: `/services/${service.slug}` },
        { label: subService!.title, href: `/services/${service.slug}/${subService!.slug}` },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.title, href: `/services/${service.slug}` },
      ];

  const sections = buildServiceSections(service, subService);

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <ContentRenderer sections={sections} />
    </>
  );
}
