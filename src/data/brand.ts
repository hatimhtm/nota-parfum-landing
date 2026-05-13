// Source of truth for the brand's contact channels and identity strings.
// Used by Nav, Hero, Ritual, Collection, Footer, Layout, tests.

// Prefix a public-folder path with Astro's configured base so the same `src`
// works whether the site lives at the root (Vercel) or a subpath (GH Pages).
// We normalize both ends — BASE_URL is not guaranteed to have a trailing slash
// when `trailingSlash: "ignore"` is set in astro.config.
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  const left = base.endsWith("/") ? base : base + "/";
  const right = path.startsWith("/") ? path.slice(1) : path;
  return left + right;
};

export const brand = {
  name: "Nota Parfum",
  tagline: "L'essence de votre signature.",
  city: "Fès",
  country: "Maroc",
  instagramHandle: "notaperfumes.official",
  instagramUrl: "https://www.instagram.com/notaperfumes.official",
  whatsappNumber: "212779276395",
  whatsappDisplay: "+212 7 79 27 63 95",
  isWhatsAppBusiness: true,
} as const;

const waBase = `https://wa.me/${brand.whatsappNumber}`;

export const whatsapp = {
  general: `${waBase}?text=${encodeURIComponent("Bonjour Nota Parfum.")}`,
  collection: `${waBase}?text=${encodeURIComponent(
    "Bonjour Nota Parfum, je suis intéressé(e) par votre collection."
  )}`,
  order: `${waBase}?text=${encodeURIComponent(
    "Bonjour Nota Parfum, je voudrais commander."
  )}`,
  trio: `${waBase}?text=${encodeURIComponent(
    "Bonjour Nota Parfum, je souhaite composer le pack de trois à 139 dh."
  )}`,
  question: `${waBase}?text=${encodeURIComponent(
    "Bonjour Nota Parfum, j'ai une question sur la collection."
  )}`,
} as const;
