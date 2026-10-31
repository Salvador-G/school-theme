export type PresetName = "sereno" | "editorial" | "cercano";
export type HeroVariant = "dividido" | "centrado";
export type ServiciosVariant = "rejilla" | "lista";

const FONT_FAMILIES: Record<PresetName, string> = {
  sereno:
    "family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800",
  editorial:
    "family=Newsreader:opsz,wght@6..72,600;6..72,700;6..72,800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800",
  cercano:
    "family=Nunito:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800",
};

const DEMO_ALL_FONTS =
  "family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&family=Newsreader:opsz,wght@6..72,600;6..72,700;6..72,800&family=Nunito:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800";

export function getGoogleFontsUrl(preset: PresetName = "sereno", isDemo = false): string {
  const query = isDemo ? DEMO_ALL_FONTS : (FONT_FAMILIES[preset] ?? FONT_FAMILIES.sereno);
  return `https://fonts.googleapis.com/css2?${query}&display=swap`;
}