import { describe, it, expect } from "vitest";
import { femmes, hommes, all, collectionCounts } from "../src/data/fragrances";
import { reviews } from "../src/data/reviews";

describe("fragrance catalogue", () => {
  it("has 12 women's fragrances", () => {
    expect(femmes).toHaveLength(12);
  });

  it("has 12 men's fragrances", () => {
    expect(hommes).toHaveLength(12);
  });

  it("counts to 24 total", () => {
    expect(all).toHaveLength(24);
    expect(collectionCounts.total).toBe(24);
    expect(collectionCounts.femmes).toBe(12);
    expect(collectionCounts.hommes).toBe(12);
  });

  it("uses sequential, unique numbers starting at 01 through 24", () => {
    const numbers = all.map((f) => f.number);
    const expected = Array.from({ length: 24 }, (_, i) =>
      String(i + 1).padStart(2, "0")
    );
    expect(numbers).toEqual(expected);
  });

  it("priced consistently at 75 MAD per unit", () => {
    all.forEach((f) => expect(f.priceMad).toBe(75));
  });

  it("every fragrance credits an inspiration", () => {
    all.forEach((f) => {
      expect(f.inspiredBy).toBeTruthy();
      expect(f.inspiredBy.length).toBeGreaterThan(3);
    });
  });

  it("every fragrance has a non-empty olfactory note", () => {
    all.forEach((f) => {
      expect(f.note).toBeTruthy();
      expect(f.note.length).toBeGreaterThan(8);
    });
  });

  it("includes the brand's confirmed Dior Homme Intense reference", () => {
    const dhi = hommes.find((f) => f.name === "Dior Homme Intense");
    expect(dhi).toBeDefined();
    expect(dhi?.number).toBe("20");
  });

  it("includes the brand's confirmed Burberry Her reference", () => {
    const bh = femmes.find((f) => f.name === "Burberry Her");
    expect(bh).toBeDefined();
    expect(bh?.number).toBe("06");
  });
});

describe("reviews", () => {
  it("includes at least one French and one Darija review", () => {
    const langs = new Set(reviews.map((r) => r.language));
    expect(langs.has("fr")).toBe(true);
    expect(langs.has("darija")).toBe(true);
  });

  it("every darija review includes a French translation", () => {
    reviews
      .filter((r) => r.language === "darija")
      .forEach((r) => {
        expect(r.translation).toBeTruthy();
        expect(r.translation!.length).toBeGreaterThan(8);
      });
  });

  it("has at least 4 reviews to populate the section grid", () => {
    expect(reviews.length).toBeGreaterThanOrEqual(4);
  });
});
