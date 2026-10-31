import type siteData from "../data/site.json";

export type SiteConfig = typeof siteData;

const hayMarcadores = (v: unknown): boolean =>
  typeof v === "string"
    ? /\[[^\]]+\]/.test(v)
    : Array.isArray(v)
      ? v.some(hayMarcadores)
      : v && typeof v === "object"
        ? Object.values(v).some(hayMarcadores)
        : false;

export function verifyPublishReadiness(site: SiteConfig, isDemo: boolean, isProd: boolean): void {
  const pendientes: string[] = [];
  if (hayMarcadores(site)) {
    pendientes.push("quedan [marcadores] sin reemplazar en site.json");
  }

  if (isProd && !isDemo && pendientes.length > 0) {
    throw new Error(`No se puede publicar: ${pendientes.join("; ")}.`);
  }
}