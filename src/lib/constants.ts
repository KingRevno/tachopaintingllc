export const BUSINESS = {
  name: "Tacho Painting LLC",
  tagline: "Done Right the First Time. Every Time.",
  phone: "(919) 931-0841",
  email: "tachopaintingllc@gmail.com",
  address: "1810 Rand Rd W, Wilson, NC 27893",
  hours: {
    weekdays: "Mon – Fri: 9am – 5pm",
    saturday: "Saturday: 8am – 1pm",
    sunday: "Sunday: Closed",
  },
  social: {
    facebook: "https://www.facebook.com/Tacho-Painting-LLC",
    instagram: "https://www.instagram.com/tachopaintingllc",
    tiktok: "https://www.tiktok.com/@tachopaintingllc",
  },
  serviceArea: [
    "Wilson County",
    "Edgecombe County",
    "Johnston County",
    "Nash County",
    "Wayne County",
    "Greene County",
    "Franklin County",
    "Granville County",
    "Harnett County",
    "Durham County",
    "Wake County",
  ],
  services: [
    {
      id: "interior",
      title: "High-End Interior Painting",
      subtitle: "The Full-Home Refresh",
      description:
        "Premium interior painting with meticulous prep, sanding, caulking, and a flawless finish — from ceiling to baseboard.",
      icon: "🏠",
    },
    {
      id: "cabinets",
      title: "Cabinet Refinishing & Factory Finishes",
      subtitle: "Like-New Results Without Replacement",
      description:
        "Transform dated cabinets with professional-grade spray finishes that look and last like factory originals.",
      icon: "🪚",
    },
    {
      id: "exterior",
      title: "Specialty Exterior Coatings & Limewashing",
      subtitle: "Curb Appeal That Lasts",
      description:
        "Full exterior transformations including specialty coatings and trending limewash finishes that protect and elevate your home.",
      icon: "🏡",
    },
    {
      id: "deck",
      title: "Deck & Wood Restoration",
      subtitle: "Staining Done Right",
      description:
        "Deep-clean, prep, and stain your deck or wood surfaces so they're protected for years — not just weeks.",
      icon: "🪵",
    },
    {
      id: "epoxy",
      title: "Epoxy & Concrete Floor Coatings",
      subtitle: "Garage & Commercial Floors",
      description:
        "Industrial-strength epoxy coatings that turn dull concrete into a durable, showroom-quality floor surface.",
      icon: "🏗️",
    },
  ],
  seo: {
    defaultTitle:
      "Tacho Painting LLC | Licensed Painting Contractor — Wilson, NC",
    defaultDescription:
      "Tacho Painting LLC delivers high-end interior & exterior painting, cabinet refinishing, deck staining, and epoxy floors across Wilson, Wake, Durham, and surrounding NC counties. Licensed, insured, and done right the first time.",
    keywords: [
      "cabinet refinishing near me",
      "licensed painting contractor NC",
      "premium interior house painters",
      "high-end deck staining Wilson NC",
      "professional garage floor epoxy",
      "full home exterior painting NC",
      "local insured painting contractor",
      "painting contractor Wake County",
      "painting contractor Durham NC",
    ],
  },
  chatbot: {
    name: "Tacho Painting Assistant",
    leadEmail: "tachopaintingllc@gmail.com",
  },
  booking: {
    calendarEmail: "tachopaintingllc@gmail.com",
    appointmentLength: "25–35 minutes",
    bufferTime: "45–60 minutes",
    cancellationPolicy:
      "24 hours notice for estimate changes. 48 hours notice for confirmed projects to avoid a rescheduling fee.",
    depositPolicy:
      "No deposit required to book. Deposit collected only after quote is accepted and project is scheduled.",
  },
} as const;
