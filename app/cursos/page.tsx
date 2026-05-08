import Link from "next/link";
import { getAllCursos } from "../../lib/cursos";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Cursos — Brujas Morenas",
  description:
    "Todos los cursos de la Academia Brujas Morenas: magia ancestral, rituales, herbalismo y más.",
};

export default function CursosPage() {
  const cursos = getAllCursos();

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        {/* ── Page header ────────────────────────── */}
        <div
          style={{
            paddingTop: "7rem",
            paddingBottom: "3rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            background: "var(--bg-surface)",
            borderBottom: "1px solid var(--color-border)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--color-gold)",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              fontWeight: 300,
            }}
          >
            — Academia Mística
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--color-cream)",
              lineHeight: 1.1,
              margin: "0 0 1rem",
            }}
          >
            Todos los Cursos
          </h1>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.9rem",
              maxWidth: "480px",
              margin: "0 auto",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Aprende a tu ritmo. Cursos diseñados para acompañarte en cada etapa
            de tu camino mágico.
          </p>
        </div>

        {/* ── Course grid ────────────────────────── */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "4rem 1.5rem 6rem",
          }}
        >
          {cursos.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 2rem",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "3rem",
                  color: "var(--color-text-muted)",
                  opacity: 0.4,
                  marginBottom: "1rem",
                }}
              >
                ✦
              </div>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                }}
              >
                Pronto tendremos cursos disponibles para ti.
              </p>
              <Link href="/" className="cursos-back-link">
                ← Volver al inicio
              </Link>
            </div>
          ) : (
            <div className="cursos-grid">
              {cursos.map((curso) => (
                <Link
                  key={curso.slug}
                  href={`/cursos/${curso.slug}`}
                  className="curso-list-card"
                >
                  {/* Image */}
                  <div className="curso-list-img-wrap">
                    {curso.imagen ? (
                      <img
                        src={curso.imagen}
                        alt={curso.titulo}
                        className="curso-list-img"
                      />
                    ) : (
                      <div className="curso-list-placeholder">✦</div>
                    )}
                    <div className="curso-list-overlay" />
                    {curso.destacado && (
                      <span className="curso-list-badge">Destacado</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="curso-list-body">
                    <h3 className="curso-list-title">{curso.titulo}</h3>
                    {curso.descripcion && (
                      <p className="curso-list-desc">{curso.descripcion}</p>
                    )}
                    <div className="curso-list-footer">
                      {curso.precio !== undefined && curso.precio > 0 ? (
                        <span className="curso-list-precio">
                          ${curso.precio.toLocaleString("es-MX")} MXN
                        </span>
                      ) : (
                        <span className="curso-list-precio-free">Gratuito</span>
                      )}
                      <span className="curso-list-cta">Ver curso →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />

      <style>{`
        .cursos-back-link {
          color: var(--color-text-muted);
          text-decoration: none;
          font-size: 0.78rem;
          transition: color 0.2s;
        }
        .cursos-back-link:hover { color: var(--color-gold); }

        .cursos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .curso-list-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-card);
          border: 1px solid var(--color-border);
          overflow: hidden;
          text-decoration: none;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .curso-list-card:hover {
          border-color: var(--color-border-hover);
          transform: translateY(-5px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.45);
        }

        .curso-list-img-wrap {
          position: relative;
          height: 13.5rem;
          overflow: hidden;
          flex-shrink: 0;
        }
        .curso-list-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .curso-list-card:hover .curso-list-img { transform: scale(1.06); }
        .curso-list-placeholder {
          width: 100%;
          height: 100%;
          background: var(--bg-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-dim);
          font-size: 2.5rem;
          opacity: 0.2;
        }
        .curso-list-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--bg-card) 0%, transparent 60%);
        }
        .curso-list-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--color-gold);
          color: #0d0b0e;
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.2rem 0.65rem;
        }

        .curso-list-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 0.5rem;
        }
        .curso-list-title {
          color: var(--color-cream);
          font-family: var(--font-cormorant, Georgia, serif);
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 1.25;
          margin: 0;
        }
        .curso-list-desc {
          color: var(--color-text-muted);
          font-size: 0.82rem;
          line-height: 1.6;
          font-weight: 300;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .curso-list-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border);
        }
        .curso-list-precio {
          color: var(--color-gold);
          font-size: 0.95rem;
          font-weight: 600;
        }
        .curso-list-precio-free {
          color: var(--color-text-dim);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .curso-list-cta {
          color: var(--color-text-muted);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .curso-list-card:hover .curso-list-cta { color: var(--color-gold); }

        @media (max-width: 600px) {
          .cursos-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
