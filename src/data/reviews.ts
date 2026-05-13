export type Review = {
  quote: string;
  translation?: string;
  language: "fr" | "darija" | "darija-fr";
  author: string;
  fragrance?: string;
};

// All reviews are real, pulled verbatim from @notaperfumes.official Instagram stories.
// The mix of French + Darija is the brand's actual voice — we keep it.
export const reviews: Review[] = [
  {
    quote:
      "J'aime les parfums et leur senteur est identique aux parfums d'origine. Le packaging est top. Très bien emballé.",
    language: "fr",
    author: "Cliente — IG Story",
    fragrance: "Burberry Her",
  },
  {
    quote: "Merci infiniment, Nota, pour ce merveilleux parfum.",
    language: "fr",
    author: "@_bella_fati_ta",
    fragrance: "Libre",
  },
  {
    quote: "Bsahtk hbiba, had chi li kna bghyin.",
    translation: "Bonne santé ma chère — c'est exactement ce qu'on voulait.",
    language: "darija",
    author: "Cliente — IG Story",
  },
  {
    quote:
      "Ana brasi khdita mn 3ndkom, ns7ni biha wa7d dri kay3rfkom. Osara7a dakshi top, ol kaliti msoraranatan, btaman raah 9il f79.",
    translation:
      "Je l'ai acheté chez vous, une amie qui vous connaît me l'avait conseillé. Franchement c'est top, la qualité est confirmée, et le prix est imbattable.",
    language: "darija",
    author: "Cliente — IG Story",
    fragrance: "You Intensely",
  },
  {
    quote:
      "Sara7a khdmtkom lakhwya, sanaty bnsiba dyalkom mabkhwya 9adra, kifma 7abato bnabit yawmiya ozghraritl.",
    translation:
      "Honnêtement, votre service est exceptionnel — je n'ai jamais vu mieux pour ce prix. Comme un parfum que j'utilise au quotidien.",
    language: "darija",
    author: "Cliente — IG Story",
  },
  {
    quote: "Ana ga3 mswitoni ki jani l3tar.",
    translation: "Vous m'avez totalement conquise quand le parfum est arrivé.",
    language: "darija",
    author: "Cliente — IG Story",
  },
];
