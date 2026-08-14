/**
 * Builders de datos estructurados (JSON-LD / schema.org).
 * Todas las URLs se construyen a partir del dominio real (Astro.site),
 * que es el que se configura en astro.config.mjs.
 */
import { site } from "./site.config";
import type { Translations } from "./i18n";

export type JsonLd = Record<string, unknown>;

const servicePath = (locale: "es" | "en", slug: string) =>
  locale === "es" ? `/servicios/${slug}/` : `/en/services/${slug}/`;

/**
 * Home: ProfessionalService con fundador, ubicación, stack y redes.
 * El @id "#service" se referencia desde las páginas de servicio.
 */
export function homeJsonLd(dict: Translations, baseUrl: URL): JsonLd {
  const sameAs = [site.socials.instagram].filter(Boolean);

  const json: JsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}#service`,
    name: site.name,
    url: baseUrl.toString(),
    image: new URL("/og-image.png", baseUrl).toString(),
    logo: new URL("/favicon.svg", baseUrl).toString(),
    email: site.email,
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Bautista Suarez",
      jobTitle: dict.hero.eyebrow,
      url: baseUrl.toString(),
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Luis",
      addressCountry: "AR",
    },
    areaServed: {
      "@type": "Place",
      name: "San Luis, Argentina",
    },
    knowsAbout: dict.about.stack,
  };

  if (sameAs.length > 0) {
    json.sameAs = sameAs;
  }

  return json;
}

/** Página de servicio: Service + Offer (presupuesto sin cargo). */
export function serviceJsonLd(
  locale: "es" | "en",
  slug: string,
  dict: Translations,
  baseUrl: URL
): JsonLd {
  const item = dict.services.items.find((s) => s.slug === slug);
  const page = dict.servicePages[slug];
  if (!item || !page) {
    throw new Error(`Falta contenido para el servicio "${slug}"`);
  }

  const url = new URL(servicePath(locale, slug), baseUrl);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url.toString(),
    name: item.title,
    description: page.metaDescription,
    url: url.toString(),
    provider: { "@id": `${baseUrl}#service` },
    serviceType: item.title,
    areaServed: "San Luis, Argentina",
    offers: {
      "@type": "Offer",
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
      description: dict.servicePage.reassurance[1], // "Presupuesto sin cargo"
    },
  };
}

/** Página de servicio: BreadcrumbList (Inicio → Servicios → Servicio). */
export function breadcrumbJsonLd(
  locale: "es" | "en",
  slug: string,
  dict: Translations,
  baseUrl: URL
): JsonLd {
  const item = dict.services.items.find((s) => s.slug === slug);
  if (!item) {
    throw new Error(`Falta el servicio "${slug}"`);
  }

  const homeName = locale === "es" ? "Inicio" : "Home";
  const homeUrl = new URL(locale === "es" ? "/" : "/en/", baseUrl);
  const servicesUrl = new URL(locale === "es" ? "/#servicios" : "/en/#servicios", baseUrl);
  const serviceUrl = new URL(servicePath(locale, slug), baseUrl);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeName, item: homeUrl.toString() },
      { "@type": "ListItem", position: 2, name: dict.nav.services, item: servicesUrl.toString() },
      { "@type": "ListItem", position: 3, name: item.title, item: serviceUrl.toString() },
    ],
  };
}
