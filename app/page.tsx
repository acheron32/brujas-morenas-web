import Link from 'next/link';
import { getAllCursos, getCursosDestacados } from '../lib/cursos';

export const dynamic = 'force-dynamic';

export default function Home() {
  const cursos = getAllCursos();
  const cursosDestacados = getCursosDestacados();

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-stone-950">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-100 mb-6 font-serif">
            Brujas Morenas
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Descubre el poder de la magia ancestral. Cursos, rituales y conocimiento 
            místico para las brujas del siglo XXI.
          </p>
          <Link 
            href="#cursos" 
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Explorar Cursos
          </Link>
        </div>
      </section>

      {/* Cursos Destacados */}
      {cursosDestacados.length > 0 && (
        <section id="cursos-destacados" className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-100 mb-8 text-center font-serif">
              ✨ Cursos Destacados
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cursosDestacados.map((curso) => (
                <Link 
                  key={curso.slug}
                  href={`/cursos/${curso.slug}`}
                  className="group bg-purple-800/50 backdrop-blur rounded-2xl overflow-hidden border border-purple-700/50 hover:border-amber-500/50 transition-all hover:scale-105"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={curso.imagen} 
                      alt={curso.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-amber-500 text-purple-950 px-3 py-1 rounded-full text-sm font-semibold">
                      Destacado
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amber-100 mb-2 font-serif">
                      {curso.titulo}
                    </h3>
                    <p className="text-purple-200 text-sm mb-4 line-clamp-2">
                      {curso.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-400">
                        ${curso.precio.toLocaleString('es-MX')} MXN
                      </span>
                      <span className="text-purple-300 text-sm">
                        Ver más →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Todos los Cursos */}
      <section id="cursos" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-100 mb-8 text-center font-serif">
            🌙 Todos los Cursos
          </h2>
          
          {cursos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-purple-300 text-lg">
                Aún no hay cursos disponibles. ¡Vuelve pronto!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cursos.map((curso) => (
                <Link 
                  key={curso.slug}
                  href={`/cursos/${curso.slug}`}
                  className="group bg-purple-800/30 backdrop-blur rounded-2xl overflow-hidden border border-purple-700/30 hover:border-purple-500/50 transition-all hover:scale-105"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={curso.imagen} 
                      alt={curso.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amber-100 mb-2 font-serif">
                      {curso.titulo}
                    </h3>
                    <p className="text-purple-200 text-sm mb-4 line-clamp-2">
                      {curso.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-amber-400">
                        ${curso.precio.toLocaleString('es-MX')} MXN
                      </span>
                      <span className="text-purple-300 text-sm">
                        Ver más →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-400 mb-4">
            🌙 Brujas Morenas - Donde la magia cobra vida
          </p>
          <p className="text-purple-600 text-sm">
            © {new Date().getFullYear()} Brujas Morenas. Todos los derechos reservados.
          </p>
          <p className="text-purple-600 text-xs mt-2">
            Admin: <Link href="/admin" className="text-amber-500 hover:underline">Acceder al panel</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}