import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexHtml = join(__dirname, "..", "dist", "index.html");

// These tests verify the built site contains the load-bearing brand markers.
// CI runs `bun run build` before tests, so dist/index.html should exist.
describe("built site (dist/index.html)", () => {
  let html = "";

  beforeAll(() => {
    if (existsSync(indexHtml)) {
      html = readFileSync(indexHtml, "utf8");
    }
  });

  it("dist/index.html is produced by the build", () => {
    expect(existsSync(indexHtml)).toBe(true);
  });

  it("contains the brand's actual tagline", () => {
    expect(html).toMatch(/L'essence de votre/);
    expect(html).toMatch(/signature/i);
  });

  it("renders the WhatsApp number consistently", () => {
    expect(html).toContain("212779276395");
    expect(html).toContain("+212 7 79 27 63 95");
  });

  it("links to the real Instagram handle", () => {
    expect(html).toContain("notaperfumes.official");
  });

  it("anchors the brand in Fès, Morocco", () => {
    expect(html).toMatch(/Fès/);
    expect(html).toMatch(/Maroc/);
  });

  it("renders all seven load-bearing section ids", () => {
    expect(html).toContain('id="top"');
    expect(html).toContain('id="manifeste"');
    expect(html).toContain('id="decouvrir"');
    expect(html).toContain('id="collection"');
    expect(html).toContain('id="atelier"');
    expect(html).toContain('id="avis"');
    expect(html).toContain('id="contact"');
  });

  it("ships the luxury layers (intro, marquee, side rail, floating WhatsApp)", () => {
    expect(html).toContain("intro-loader");
    expect(html).toContain("marquee__track");
    expect(html).toContain("side-rail");
    expect(html).toContain("floating-wa");
  });

  it("renders both Femmes and Hommes tabs with 12 each", () => {
    expect(html).toContain('data-tab="femmes"');
    expect(html).toContain('data-tab="hommes"');
    expect(html).toContain("Les Femmes");
    expect(html).toContain("Les Hommes");
    // counts visible
    expect(html.match(/\(12\)/g)?.length).toBeGreaterThanOrEqual(2);
  });

  it("renders the 139 MAD pack offer", () => {
    expect(html).toMatch(/Cent trente-neuf/);
  });

  it("uses the cream theme color in the meta tag", () => {
    expect(html).toMatch(/<meta name="theme-color" content="#F5EFE4"/);
  });

  it("ships with the French html lang attribute", () => {
    expect(html).toMatch(/<html\s+lang="fr"/);
  });
});
