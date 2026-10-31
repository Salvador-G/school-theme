import type { SiteConfig } from "./publish-guard";

export function buildSchemaData(site: SiteConfig, siteUrl?: URL): Record<string, unknown> {
  const redes = Object.values(site.contacto.redes).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "School",
    name: site.nombre,
    description: site.seo.descripcion,
    telephone: site.contacto.telefono,
    email: site.contacto.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contacto.direccion,
      addressCountry: "PE",
    },
    ...(siteUrl ? { url: siteUrl.href } : {}),
    ...(redes.length ? { sameAs: redes } : {}),
  };
}