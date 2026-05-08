import Link from "next/link";
import type { Curso } from "../../lib/cursos";

interface Props {
  curso: Curso;
  variant?: "default" | "featured";
}

export default function CursoCard({ curso, variant = "default" }: Props) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={`/cursos/${curso.slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-card)",
        border: "1px solid var(--color-border)",
        overflow: "hidden",
        textDecoration: "none",
        position: "relative",
      }}
      className="curso-card"
    >
      {/* Image container */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: isFeatured ? "4/3" : "16/9",
          flexShrink: 0,
        }}
      >
        <img
          src={curso.imagen}
          alt={curso.titulo}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
          }}
          className="curso-card-img"
        />
        {/* Image gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(28,21,37,0.65) 0%, transparent 60%)",
          }}
        />

        {/* Badges */}
        {curso.destacado && (
          <div
            style={{
              position: "absolute",
              top: "0.75rem",
              left: "0.75rem",
              background: "var(--color-gold)",
              color: "#0d0b0e",
              padding: "0.25rem 0.65rem",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Destacado
          </div>
        )}

        {/* Price chip */}
        <div
          style={{
            position: "absolute",
            bottom: "0.75rem",
            right: "0.75rem",
            background: "rgba(13,11,14,0.82)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(201,168,76,0.2)",
            padding: "0.3rem 0.7rem",
          }}
        >
          <span
            style={{
              color: "var(--color-gold-light)",
              fontSize: "0.82rem",
              fontWeight: 600,
            }}
          >
            ${curso.precio.toLocaleString("es-MX")} MXN
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.2rem 1.35rem 1.35rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            color: "var(--color-cream)",
            fontFamily: "var(--font-cormorant, Georgia, serif)",
            fontSize: "1.15rem",
            fontWeight: 500,
            lineHeight: 1.3,
            marginBottom: "0.5rem",
          }}
          className="line-clamp-2"
        >
          {curso.titulo}
        </h3>

        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.8rem",
            lineHeight: 1.6,
            fontWeight: 300,
            flex: 1,
            marginBottom: "1rem",
          }}
          className="line-clamp-2"
        >
          {curso.descripcion}
        </p>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "0.9rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {curso.fecha && (
            <span
              style={{
                color: "var(--color-text-dim)",
                fontSize: "0.7rem",
                letterSpacing: "0.05em",
              }}
            >
              {new Date(curso.fecha).toLocaleDateString("es-MX", {
                month: "short",
                year: "numeric",
              })}
            </span>
          )}
          <span
            style={{
              color: "var(--color-gold)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              marginLeft: "auto",
            }}
            className="curso-card-cta"
          >
            Ver detalle →
          </span>
        </div>
      </div>

      <style>{`
        .curso-card {
          transition: border-color 0.3s ease, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease;
        }
        .curso-card:hover {
          border-color: var(--color-border-hover) !important;
          transform: translateY(-5px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.45), 0 0 40px rgba(201,168,76,0.06);
        }
        .curso-card:hover .curso-card-img {
          transform: scale(1.06);
        }
        .curso-card:hover .curso-card-cta {
          letter-spacing: 0.18em;
        }
        .curso-card-cta {
          transition: letter-spacing 0.3s;
        }
      `}</style>
    </Link>
  );
}
