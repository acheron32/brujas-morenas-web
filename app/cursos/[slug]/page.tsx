import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCursos, getCursoBySlug } from "../../../lib/cursos";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
    return { title: "Curso no encontrado — Brujas Morenas" };
  }

  return {
    title: `${curso.titulo} — Brujas Morenas`,
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
    <>
      <Header />

      <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        {/* ── Breadcrumb nav ───────────────────────── */}
        <div
          style={{
            paddingTop: "6rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            borderBottom: "1px solid var(--color-border)",
            background: "var(--bg-surface)",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link href="/" className="curso-back-link">
              ← Volver a cursos
            </Link>
          </div>
        </div>

        <article
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "3rem 1.5rem 5rem",
          }}
        >
          {/* ── Hero image ───────────────────────────── */}
          <div
            style={{
              position: "relative",
              aspectRatio: "16/7",
              overflow: "hidden",
              marginBottom: "2.5rem",
              border: "1px solid var(--color-border)",
            }}
          >
            <img
              src={curso.imagen}
              alt={curso.titulo}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Overlay bottom */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(13,11,14,0.7) 0%, transparent 50%)",
              }}
            />
            {/* Destacado badge */}
            {curso.destacado && (
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  left: "1.25rem",
                  background: "var(--color-gold)",
                  color: "#0d0b0e",
                  padding: "0.3rem 0.85rem",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                ✦ Curso Destacado
              </div>
            )}
          </div>

          {/* ── Course header ────────────────────────── */}
          <header style={{ marginBottom: "2.5rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                color: "var(--color-cream)",
                lineHeight: 1.1,
                margin: "0 0 1rem",
              }}
            >
              {curso.titulo}
            </h1>

            <p
              style={{
                color: "var(--color-cream-muted)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                fontWeight: 300,
                marginBottom: "1.75rem",
              }}
            >
              {curso.descripcion}
            </p>

            {/* Metadata chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              {/* Price */}
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--color-border)",
                  padding: "0.6rem 1.25rem",
                }}
              >
                <span
                  style={{
                    color: "var(--color-gold-light)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                  }}
                >
                  ${curso.precio.toLocaleString("es-MX")} MXN
                </span>
              </div>

              {/* Date */}
              {curso.fecha && (
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--color-border)",
                    padding: "0.6rem 1.25rem",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.82rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    📅{" "}
                    {new Date(curso.fecha).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>
          </header>

          {/* ── Gold separator ───────────────────────── */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, var(--color-gold), transparent)",
              marginBottom: "2.5rem",
              opacity: 0.3,
            }}
          />

          {/* ── Course content ───────────────────────── */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--color-border)",
              padding: "2.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 400,
                fontSize: "1.5rem",
                color: "var(--color-cream)",
                marginBottom: "1.5rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              Sobre este curso
            </h2>

            <div className="prose-dark" style={{ whiteSpace: "pre-wrap" }}>
              {curso.contenido || curso.descripcion}
            </div>
          </div>

          {/* ── CTA block ────────────────────────────── */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.2)",
              padding: "2.5rem",
              textAlign: "center",
              background: "var(--bg-card)",
            }}
          >
            {/* Background accent */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
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
                ✦ ¿Lista para empezar?
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontWeight: 300,
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  color: "var(--color-cream)",
                  margin: "0 0 0.75rem",
                }}
              >
                Inscríbete y comienza tu camino
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  maxWidth: "440px",
                  margin: "0 auto 2rem",
                  lineHeight: 1.7,
                }}
              >
                Únete a nuestra comunidad y accede a este curso, materiales
                exclusivos y acompañamiento personalizado.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <button className="curso-cta-btn">
                  Inscribirme ahora
                </button>
                <Link href="/" className="curso-cta-secondary">
                  Ver más cursos
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />

      <style>{`
        .curso-back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--color-text-muted);
          text-decoration: none;
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        .curso-back-link:hover {
          color: var(--color-gold);
        }
        .curso-cta-btn {
          background: var(--color-gold);
          color: #0d0b0e;
          border: none;
          padding: 0.85rem 2.25rem;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: var(--font-outfit, sans-serif);
          transition: background 0.2s;
        }
        .curso-cta-btn:hover {
          background: var(--color-gold-light);
        }
        .curso-cta-secondary {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--color-border);
          color: var(--color-cream-muted);
          padding: 0.85rem 1.75rem;
          font-size: 0.78rem;
          font-weight: 300;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .curso-cta-secondary:hover {
          border-color: rgba(201,168,76,0.4);
          color: var(--color-cream);
        }
      `}</style>
    </>
  );
}
