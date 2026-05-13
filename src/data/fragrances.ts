export type OlfactoryFamily =
  | "Florale"
  | "Florale Boisée"
  | "Florale Gourmande"
  | "Florale Fruitée"
  | "Orientale"
  | "Orientale Boisée"
  | "Boisée"
  | "Boisée Épicée"
  | "Hespéridée"
  | "Aromatique"
  | "Cuir"
  | "Aquatique";

export type Fragrance = {
  number: string;
  name: string;
  inspiredBy: string;
  family: OlfactoryFamily;
  priceMad: number;
  note: string;
};

export const femmes: Fragrance[] = [
  {
    number: "01",
    name: "Kayali Marshmallow",
    inspiredBy: "Kayali Yum Pistachio Gelato",
    family: "Florale Gourmande",
    priceMad: 75,
    note: "Pistache caramélisée, vanille, fève tonka.",
  },
  {
    number: "02",
    name: "Miss Dior",
    inspiredBy: "Dior — Miss Dior",
    family: "Florale Fruitée",
    priceMad: 75,
    note: "Pivoine, rose de mai, muscs blancs.",
  },
  {
    number: "03",
    name: "L'Interdit Rouge",
    inspiredBy: "Givenchy — L'Interdit Rouge",
    family: "Florale Boisée",
    priceMad: 75,
    note: "Cannelle, rose, patchouli flamboyant.",
  },
  {
    number: "04",
    name: "L'Impératrice",
    inspiredBy: "Dolce & Gabbana — L'Impératrice",
    family: "Hespéridée",
    priceMad: 75,
    note: "Kiwi, pamplemousse rose, fleur de cyclamen.",
  },
  {
    number: "05",
    name: "Libre",
    inspiredBy: "Yves Saint Laurent — Libre",
    family: "Florale Boisée",
    priceMad: 75,
    note: "Lavande, fleur d'oranger, vanille de Madagascar.",
  },
  {
    number: "06",
    name: "Burberry Her",
    inspiredBy: "Burberry — Her",
    family: "Florale Fruitée",
    priceMad: 75,
    note: "Mûre noire, framboise, muscs poudrés.",
  },
  {
    number: "07",
    name: "L'Interdit Noir",
    inspiredBy: "Givenchy — L'Interdit (Noir)",
    family: "Florale Boisée",
    priceMad: 75,
    note: "Tubéreuse, jasmin, patchouli sombre.",
  },
  {
    number: "08",
    name: "Lancôme Idôle",
    inspiredBy: "Lancôme — Idôle",
    family: "Florale",
    priceMad: 75,
    note: "Rose turque, jasmin, muscs cachemire.",
  },
  {
    number: "09",
    name: "Prada Paradoxe",
    inspiredBy: "Prada — Paradoxe",
    family: "Florale",
    priceMad: 75,
    note: "Néroli, fleur blanche, ambre cuivré.",
  },
  {
    number: "10",
    name: "Ghobar Dabab",
    inspiredBy: "Lattafa — Khamrah",
    family: "Orientale",
    priceMad: 75,
    note: "Dattes confites, cannelle, oud doux.",
  },
  {
    number: "11",
    name: "Valentino",
    inspiredBy: "Valentino — Donna Born In Roma",
    family: "Florale Boisée",
    priceMad: 75,
    note: "Bulgare rose, jasmin, vétiver doré.",
  },
  {
    number: "12",
    name: "Light Blue",
    inspiredBy: "Dolce & Gabbana — Light Blue Femme",
    family: "Hespéridée",
    priceMad: 75,
    note: "Cèdre, pomme verte, citron de Sicile.",
  },
];

export const hommes: Fragrance[] = [
  {
    number: "13",
    name: "You Intensely",
    inspiredBy: "Yves Saint Laurent — Y EDP",
    family: "Aromatique",
    priceMad: 75,
    note: "Sauge, encens, géranium, ambre.",
  },
  {
    number: "14",
    name: "Light Blue",
    inspiredBy: "Dolce & Gabbana — Light Blue Homme",
    family: "Aromatique",
    priceMad: 75,
    note: "Pamplemousse, romarin, genévrier.",
  },
  {
    number: "15",
    name: "Creed Aventus Absolu",
    inspiredBy: "Creed — Aventus Absolu",
    family: "Boisée",
    priceMad: 75,
    note: "Ananas confit, bouleau, muscs ambré.",
  },
  {
    number: "16",
    name: "Ombre Leather",
    inspiredBy: "Tom Ford — Ombre Leather",
    family: "Cuir",
    priceMad: 75,
    note: "Cuir nu, jasmin sambac, patchouli.",
  },
  {
    number: "17",
    name: "Neroli Portofino",
    inspiredBy: "Tom Ford — Neroli Portofino",
    family: "Hespéridée",
    priceMad: 75,
    note: "Néroli de Tunisie, bergamote, fleur d'oranger.",
  },
  {
    number: "18",
    name: "Club de Nuit",
    inspiredBy: "Armaf — Club de Nuit Intense",
    family: "Boisée",
    priceMad: 75,
    note: "Ananas, bouleau noir, mousse de chêne.",
  },
  {
    number: "19",
    name: "Azzaro Wanted",
    inspiredBy: "Azzaro — The Most Wanted",
    family: "Orientale Boisée",
    priceMad: 75,
    note: "Caramel, cardamome, tabac chaud.",
  },
  {
    number: "20",
    name: "Dior Homme Intense",
    inspiredBy: "Dior — Homme Intense",
    family: "Florale Boisée",
    priceMad: 75,
    note: "Iris pallida, ambrette, cèdre de Virginie.",
  },
  {
    number: "21",
    name: "Ultra Male",
    inspiredBy: "Jean Paul Gaultier — Ultra Male",
    family: "Orientale",
    priceMad: 75,
    note: "Poire blette, lavande, vanille caramélisée.",
  },
  {
    number: "22",
    name: "Le Beau",
    inspiredBy: "Jean Paul Gaultier — Le Beau",
    family: "Boisée Épicée",
    priceMad: 75,
    note: "Noix de coco, tonka, bois de santal.",
  },
  {
    number: "23",
    name: "Sauvage",
    inspiredBy: "Dior — Sauvage",
    family: "Aromatique",
    priceMad: 75,
    note: "Bergamote de Calabre, poivre, ambroxan.",
  },
  {
    number: "24",
    name: "Valentino",
    inspiredBy: "Valentino — Uomo Born In Roma",
    family: "Boisée",
    priceMad: 75,
    note: "Gingembre, vétiver, cuir velouté.",
  },
];

export const all: Fragrance[] = [...femmes, ...hommes];

export const collectionCounts = {
  total: all.length,
  femmes: femmes.length,
  hommes: hommes.length,
};
