import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content/rituales");

export interface Ritual {
  slug: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  galeria: string[];
  duracion: string;
  nivel: string;
  materiales: string[];
  pasos: string[];
  destacado: boolean;
  contenido: string;
}

export function getAllRituales(): Ritual[] {
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
        nombre: data.nombre || "Sin nombre",
        descripcion: data.descripcion || "",
        imagen: data.imagen || "",
        galeria: Array.isArray(data.galeria) ? data.galeria : [],
        duracion: data.duracion || "",
        nivel: data.nivel || "",
        materiales: Array.isArray(data.materiales) ? data.materiales : [],
        pasos: Array.isArray(data.pasos) ? data.pasos : [],
        destacado: data.destacado || false,
        contenido: content,
      };
    });
}

export function getRitualBySlug(slug: string): Ritual | null {
  const p = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(p)) return null;

  const { data, content } = matter(fs.readFileSync(p, "utf8"));
  return {
    slug,
    nombre: data.nombre || "Sin nombre",
    descripcion: data.descripcion || "",
    imagen: data.imagen || "",
    galeria: Array.isArray(data.galeria) ? data.galeria : [],
    duracion: data.duracion || "",
    nivel: data.nivel || "",
    materiales: Array.isArray(data.materiales) ? data.materiales : [],
    pasos: Array.isArray(data.pasos) ? data.pasos : [],
    destacado: data.destacado || false,
    contenido: content,
  };
}

export function getRitualesDestacados(): Ritual[] {
  return getAllRituales().filter((r) => r.destacado);
}
