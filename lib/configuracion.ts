import fs from "fs";
import path from "path";
import matter from "gray-matter";

const settingsPath = path.join(
  process.cwd(),
  "content/configuracion/settings.md"
);

export interface SiteConfig {
  imagen_fondo_hero: string;
  texto_hero: string;
  redes: {
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
    patreon?: string;
  };
}

const DEFAULTS: SiteConfig = {
  imagen_fondo_hero:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
  texto_hero:
    "Un espacio donde la magia ancestral se encuentra con el conocimiento moderno. Aprende, practica y transforma.",
  redes: {},
};

export function getSiteConfig(): SiteConfig {
  if (!fs.existsSync(settingsPath)) return DEFAULTS;

  try {
    const { data } = matter(fs.readFileSync(settingsPath, "utf8"));
    return {
      imagen_fondo_hero: data.imagen_fondo_hero || DEFAULTS.imagen_fondo_hero,
      texto_hero: data.texto_hero || DEFAULTS.texto_hero,
      redes: data.redes || {},
    };
  } catch {
    return DEFAULTS;
  }
}
