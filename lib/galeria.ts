import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content/galeria");

export interface FotoGaleria {
  slug: string;
  titulo: string;
  imagen: string;
  categoria: string;
  fecha: string;
}

export function getAllFotos(): FotoGaleria[] {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return {
        slug,
        titulo: data.titulo || "",
        imagen: data.imagen || "",
        categoria: data.categoria || "",
        fecha: data.fecha || "",
      };
    })
    .sort(
      (a, b) =>
        new Date(b.fecha || 0).getTime() - new Date(a.fecha || 0).getTime()
    );
}
