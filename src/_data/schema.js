const site = require("./site.json");
const services = require("./services.json");

const makesOffer = services.items.map((s) => ({
  "@type": "Offer",
  itemOffered: {
    "@type": "MedicalProcedure",
    name: s.title,
    description: s.description,
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
}));

module.exports = {
  dentist: {
    "@context": "https://schema.org",
    "@id": site.baseUrl + "#dentist",
    "@type": ["Dentist", "MedicalBusiness"],
    name: site.name,
    alternateName: "Estética Dental y Ortodoncia",
    description:
      "Ortodoncia invisible y odontología estética en Palermo Chico. Invisalign certified provider. Dirigido por la Dra. Daniela Tkach con 17+ años de experiencia clínica.",
    url: site.baseUrl,
    telephone: site.phone,
    image: [site.baseUrl + site.ogImage],
    medicalSpecialty: ["Orthodontic", "CosmeticDentistry"],
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
    makesOffer: makesOffer,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "123",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lucas M." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Soy corredor y tenía miedo de que los alineadores me molestaran al entrenar o correr largo. Cero problema, no se sienten. El enfoque SmileRunners y cómo te explican la relación entre mordida y rendimiento es un plus enorme.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Andrés P." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Trabajo remoto y viajo bastante. Primera consulta: escaneo digital. Segunda: ya arranqué con los alineadores. La planificación es ultra precisa y el seguimiento a distancia funciona perfecto. Nivel y calidez de estándar internacional.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Carolina B." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Vale totalmente el tramo desde Zona Norte. Consultorio impecable, super moderno, y Daniela te dedica tiempo real para explicarte la planificación digital. Combinación poco común de eficiencia y trato humano.",
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
