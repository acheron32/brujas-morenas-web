import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCursos, getCursoBySlug } from '../../../lib/cursos';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const cursos = getAllCursos();
  return cursos.map((curso) => ({
    slug: curso.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const curso = getCursoBySlug(slug);
  
  if (!curso) {
    return { title: 'Curso no encontrado - Brujas Morenas' };
  }
  
  return {
    title: `${curso.titulo} - Brujas Morenas`,
    description: curso.descripcion,
  };
}

export default async function CursoPage({ params }: PageProps) {
  const { slug } = await params;
  const curso = getCursoBySlug(slug);

  if (!curso) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-stone-950">
      {/* Navegación */}
      <nav className="py-6 px-8 border-b border-purple-800/50">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="text-amber-400 hover:text-amber-300 flex items-center gap-2"
          >
            ← Volver a cursos
          </Link>
        </div>
      </nav>

      {/* Contenido del Curso */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Imagen Hero */}
        <div className="aspect-video rounded-2xl overflow-hidden mb-8 border-2 border-purple-700/50">
          <img 
            src={curso.imagen} 
            alt={curso.titulo}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Información del Curso */}
        <header className="mb-8">
          {curso.destacado && (
            <span className="inline-block bg-amber-500 text-purple-950 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              ✨ Curso Destacado
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-amber-100 mb-4 font-serif">
            {curso.titulo}
          </h1>
          <p className="text-xl text-purple-200 mb-6">
            {curso.descripcion}
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <div className="bg-purple-800/50 px-6 py-3 rounded-xl border border-purple-700/50">
              <span className="text-3xl font-bold text-amber-400">
                ${curso.precio.toLocaleString('es-MX')} MXN
              </span>
            </div>
            {curso.fecha && (
              <div className="bg-purple-800/30 px-4 py-3 rounded-xl border border-purple-700/30">
                <span className="text-purple-300">
                  📅 {new Date(curso.fecha).toLocaleDateString('es-MX', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Descripción Completa */}
        <div className="bg-purple-800/30 backdrop-blur rounded-2xl p-8 border border-purple-700/30 mb-8">
          <h2 className="text-2xl font-bold text-amber-100 mb-4 font-serif">
            Sobre este curso
          </h2>
          <div className="text-purple-200 leading-relaxed whitespace-pre-wrap">
            {curso.contenido || curso.descripcion}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-purple-950 mb-4 font-serif">
            ¿Quieres aprender?
          </h3>
          <p className="text-purple-900 mb-6">
            Inscríbete ahora y comienza tu camino en el mundo de la magia
          </p>
          <button className="bg-purple-950 hover:bg-purple-900 text-amber-100 px-8 py-3 rounded-full font-semibold transition-colors">
            Inscribirme Ahora
          </button>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-800/50 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-400 mb-4">
            🌙 Brujas Morenas - Donde la magia cobra vida
          </p>
          <p className="text-purple-600 text-sm">
            © {new Date().getFullYear()} Brujas Morenas. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}