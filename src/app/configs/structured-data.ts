/** schema.org JSON-LD describing the business and website, embedded in every page. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://vision-it.at/#business",
      name: "VisionIT",
      alternateName: "VisionIT Wien",
      url: "https://vision-it.at/",
      email: "office@vision-it.at",
      sameAs: [
        "https://www.linkedin.com/in/lena-z-230b01176",
        "https://github.com/Lenzia207",
      ],

      address: {
        "@type": "PostalAddress",
        streetAddress: "Zuckerkandlgasse 48/2",
        addressLocality: "Wien",
        postalCode: "1190",
        addressCountry: "AT",
      },

      areaServed: {
        "@type": "City",
        name: "Wien",
      },

      founder: {
        "@type": "Person",
        name: "Lena Zyadeh",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://vision-it.at/#website",
      url: "https://vision-it.at/",
      name: "VisionIT",
      alternateName: "VisionIT Wien",
      publisher: {
        "@id": "https://vision-it.at/#business",
      },
      inLanguage: ["de", "en"],
    },
  ],
};
