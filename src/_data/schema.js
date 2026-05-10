const site = require("./site.json");

module.exports = {
  dentist: {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    url: site.baseUrl,
    telephone: site.phone,
    image: [site.baseUrl + site.ogImage],
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Buenos Aires" },
      { "@type": "AdministrativeArea", name: "CABA" },
      { "@type": "AdministrativeArea", name: "Zona Norte (Gran Buenos Aires)" },
      { "@type": "City", name: "San Isidro" },
      { "@type": "City", name: "Vicente López" },
      { "@type": "City", name: "Tigre" },
    ],
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Rep%C3%BAblica+de+la+India+2731%2C+Buenos+Aires",
    sameAs: [
      ...site.instagram.map((i) => i.url),
      site.docturnoUrl,
      site.smileViewUrl,
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ortodoncia invisible con alineadores transparentes",
        },
      },
    ],
  },

  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.doctorName,
    jobTitle: site.doctorJobTitle,
    worksFor: { "@type": "Dentist", name: site.name, url: site.baseUrl },
    image: site.baseUrl + "/img/dani_tkach.jpg",
    knowsAbout: ["Invisalign", "Ortodoncia invisible", "Alineadores transparentes", "Carillas dentales"],
  },
};
