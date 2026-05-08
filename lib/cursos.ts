import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const cursosDirectory = path.join(process.cwd(), 'content/cursos');

export interface Curso {
  slug: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  precio: number;
  imagen: string;
  destacado: boolean;
  contenido: string;
}

function parseFecha(fechaStr: string): Date {
  try {
    return new Date(fechaStr);
  } catch {
    return new Date();
  }
}

export function getAllCursos(): Curso[] {
  if (!fs.existsSync(cursosDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(cursosDirectory);
  const cursos = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(cursosDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        titulo: data.titulo || 'Sin título',
        descripcion: data.descripcion || '',
        fecha: data.fecha || '',
        precio: data.precio || 0,
        imagen: data.imagen || '/placeholder.jpg',
        destacado: data.destacado || false,
        contenido: content,
      };
    });

  return cursos.sort((a, b) => {
    const dateA = parseFecha(a.fecha);
    const dateB = parseFecha(b.fecha);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getCursoBySlug(slug: string): Curso | null {
  const fullPath = path.join(cursosDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    titulo: data.titulo || 'Sin título',
    descripcion: data.descripcion || '',
    fecha: data.fecha || '',
    precio: data.precio || 0,
    imagen: data.imagen || '/placeholder.jpg',
    destacado: data.destacado || false,
    contenido: content,
  };
}

export function getCursosDestacados(): Curso[] {
  const allCursos = getAllCursos();
  return allCursos.filter((curso) => curso.destacado);
}