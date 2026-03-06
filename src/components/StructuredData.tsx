import { useEffect } from "react";

interface LocalBusinessSchema {
  name: string;
  description: string;
  telephone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  latitude?: number;
  longitude?: number;
  image?: string;
  url?: string;
}

export const StructuredData = ({
  schema,
}: {
  schema: Record<string, any>;
}) => {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [schema]);

  return null;
};

export const createLocalBusinessSchema = (
  data: LocalBusinessSchema
): Record<string, any> => {
  const baseSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness", "Physician"],
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    telephone: data.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address,
      addressLocality: data.city,
      addressRegion: data.state,
      postalCode: data.postalCode,
      addressCountry: "BR",
    },
    priceRange: "$$$",
    areaServed: [
      {
        "@type": "City",
        name: data.city,
      },
      {
        "@type": "City",
        name: "Limoeiro",
      },
    ],
    medicalSpecialty: "Medicina de Família",
  };

  if (data.latitude && data.longitude) {
    baseSchema.geo = {
      "@type": "GeoCoordinates",
      latitude: data.latitude,
      longitude: data.longitude,
    };
  }

  return baseSchema;
};

export const createPhysicianSchema = (
  data: LocalBusinessSchema
): Record<string, any> => {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    telephone: data.telephone,
    medicalSpecialty: "Medicina de Família e Comunidade",
    knowsAbout: [
      "Medicina de Família",
      "Clínica Geral",
      "Medicina Comunitária",
      "Prevenção de Doenças",
      "Promoção da Saúde",
    ],
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: data.address,
        addressLocality: data.city,
        addressRegion: data.state,
        postalCode: data.postalCode,
        addressCountry: "BR",
      },
    },
    areaServed: ["Caruaru", "Limoeiro"],
  };
};

export const createMedicalBusinessSchema = (): Record<string, any> => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Consultório do Dr. Edvaldo Jerônimo",
    description:
      "Consultório especializado em medicina de família e clínica geral em Caruaru e Limoeiro",
    medicalSpecialty: [
      "Medicina de Família",
      "Clínica Geral",
      "Medicina Comunitária",
    ],
    areaServed: ["Caruaru", "Limoeiro", "Pernambuco"],
    telephone: "+55 81 99287-1707",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Padre Antônio Tomaz, nº 91 - Mauricio de Nassau",
      addressLocality: "Caruaru",
      addressRegion: "PE",
      postalCode: "55000-000",
      addressCountry: "BR",
    },
  };
};

export const createBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
): Record<string, any> => {
  const itemListElement = breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
};
