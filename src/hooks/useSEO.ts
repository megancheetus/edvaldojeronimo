import { useEffect } from "react";

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export const useSEO = (metadata: SEOMetadata) => {
  useEffect(() => {
    // Update document title
    document.title = metadata.title;

    // Update or create meta description
    const descriptionMeta =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    descriptionMeta.setAttribute("name", "description");
    descriptionMeta.setAttribute("content", metadata.description);
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(descriptionMeta);
    }

    // Update keywords if provided
    if (metadata.keywords) {
      const keywordsMeta =
        document.querySelector('meta[name="keywords"]') ||
        document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      keywordsMeta.setAttribute("content", metadata.keywords);
      if (!document.querySelector('meta[name="keywords"]')) {
        document.head.appendChild(keywordsMeta);
      }
    }

    // Update Open Graph tags
    if (metadata.ogTitle) {
      const ogTitleMeta =
        document.querySelector('meta[property="og:title"]') ||
        document.createElement("meta");
      ogTitleMeta.setAttribute("property", "og:title");
      ogTitleMeta.setAttribute("content", metadata.ogTitle);
      if (!document.querySelector('meta[property="og:title"]')) {
        document.head.appendChild(ogTitleMeta);
      }
    }

    if (metadata.ogDescription) {
      const ogDescMeta =
        document.querySelector('meta[property="og:description"]') ||
        document.createElement("meta");
      ogDescMeta.setAttribute("property", "og:description");
      ogDescMeta.setAttribute("content", metadata.ogDescription);
      if (!document.querySelector('meta[property="og:description"]')) {
        document.head.appendChild(ogDescMeta);
      }
    }

    // Update Twitter tags
    if (metadata.twitterTitle) {
      const twitterTitleMeta =
        document.querySelector('meta[name="twitter:title"]') ||
        document.createElement("meta");
      twitterTitleMeta.setAttribute("name", "twitter:title");
      twitterTitleMeta.setAttribute("content", metadata.twitterTitle);
      if (!document.querySelector('meta[name="twitter:title"]')) {
        document.head.appendChild(twitterTitleMeta);
      }
    }

    if (metadata.twitterDescription) {
      const twitterDescMeta =
        document.querySelector('meta[name="twitter:description"]') ||
        document.createElement("meta");
      twitterDescMeta.setAttribute("name", "twitter:description");
      twitterDescMeta.setAttribute("content", metadata.twitterDescription);
      if (!document.querySelector('meta[name="twitter:description"]')) {
        document.head.appendChild(twitterDescMeta);
      }
    }
  }, [metadata]);
};
