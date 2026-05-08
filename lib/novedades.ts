import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content/novedades");

export interface Novedad {
  slug: string;
  titulo: string;
  extracto: string;
  imagen: string;
  fecha: string;
  destacado: boolean;
  contenido: string;
}

export function getAllNovedades(): Novedad[] {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        titulo: data.titulo || "Sin título",
        extracto: data.extracto || "",
        imagen: data.imagen || "",
        fecha: data.fecha || "",
        destacado: data.destacado || false,
        contenido: content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.fecha || 0).getTime() - new Date(a.fecha || 0).getTime()
    );
}

export function getNovedadBySlug(slug: string): Novedad | null {
  const p = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(p)) return null;

  const { data, content } = matter(fs.readFileSync(p, "utf8"));
  return {
    slug,
    titulo: data.titulo || "Sin título",
    extracto: data.extracto || "",
    imagen: data.imagen || "",
    fecha: data.fecha || "",
    destacado: data.destacado || false,
    contenido: content,
  };
}

export function getNovedadesDestacadas(): Novedad[] {
  return getAllNovedades().filter((n) => n.destacado);
}
