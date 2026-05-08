import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content/productos");

export interface Producto {
  slug: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  galeria: string[];
  categoria: string;
  disponible: boolean;
  whatsapp: string;
  contenido: string;
}

export function getAllProductos(): Producto[] {
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
        precio: Number(data.precio) || 0,
        imagen: data.imagen || "",
        galeria: Array.isArray(data.galeria) ? data.galeria : [],
        categoria: data.categoria || "",
        disponible: data.disponible !== false,
        whatsapp: data.whatsapp || "",
        contenido: content,
      };
    });
}

export function getProductoBySlug(slug: string): Producto | null {
  const p = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(p)) return null;

  const { data, content } = matter(fs.readFileSync(p, "utf8"));
  return {
    slug,
    nombre: data.nombre || "Sin nombre",
    descripcion: data.descripcion || "",
    precio: Number(data.precio) || 0,
    imagen: data.imagen || "",
    galeria: Array.isArray(data.galeria) ? data.galeria : [],
    categoria: data.categoria || "",
    disponible: data.disponible !== false,
    whatsapp: data.whatsapp || "",
    contenido: content,
  };
}
