import Link from "next/link";
import type { Novedad } from "../../lib/novedades";

interface Props {
  novedades: Novedad[];
}

export default function NovedadesDestacadas({ novedades }: Props) {
  return (
    <section
      id="novedades"
      style={{
        padding: "5rem 1.5rem",
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <p style={{ color: "var(--color-gold)", fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "0.6rem", fontWeight: 300 }}>
              — Lo que se mueve
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "var(--color-cream)", lineHeight: 1.1, margin: 0 }}>
              Novedades
            </h2>
          </div>
          <Link href="/novedades" className="nov-ver-todas">
            Ver todas →
          </Link>
        </div>

        {/* Cards en arco */}
        {novedades.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem", border: "1px solid var(--color-border)" }}>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.88rem", fontStyle: "italic" }}>
              Pronto publicaremos novedades aquí. ✦
            </p>
          </div>
        ) : (
          <div className="nov-grid">
            {novedades.slice(0, 4).map((n) => (
              <Link
                key={n.slug}
                href={`/novedades/${n.slug}`}
                className="nov-arco-card"
              >
                {/* Imagen con arco */}
                <div className="nov-arco-img-wrap">
                  {n.imagen ? (
                    <img
                      src={n.imagen}
                      alt={n.titulo}
                      className="nov-arco-img"
                    />
                  ) : (
                    <div className="nov-arco-placeholder">
                      <span>☽</span>
                    </div>
                  )}
                </div>

                {/* Texto */}
                <div style={{ padding: "1.25rem 0.25rem 0.5rem" }}>
                  {n.fecha && (
                    <time style={{ color: "var(--color-text-dim)", fontSize: "0.62rem", letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                      {new Date(n.fecha).toLocaleDateString("es-MX", { month: "short", day: "numeric", year: "numeric" })}
                    </time>
                  )}
                  <h3
                    style={{
                      color: "var(--color-cream)",
                      fontFamily: "var(--font-cormorant, Georgia, serif)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "1.05rem",
                      lineHeight: 1.3,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {n.titulo}
                  </h3>
                  {n.extracto && (
                    <p className="nov-extracto" style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", lineHeight: 1.55, fontWeight: 300 }}>
                      {n.extracto.slice(0, 80)}{n.extracto.length > 80 ? "…" : ""}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .nov-ver-todas {
          color: var(--color-text-muted);
          text-decoration: none;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          transition: color 0.2s;
        }
        .nov-ver-todas:hover { color: var(--color-gold); }
        .nov-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 1.5rem;
        }
        .nov-arco-card {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s;
        }
        .nov-arco-card:hover { transform: translateY(-5px); }
        .nov-arco-img-wrap {
          border-radius: 120px 120px 0 0;
          overflow: hidden;
          aspect-ratio: 3/4;
          border: 1px solid var(--color-border);
          background: var(--bg-card);
          position: relative;
          transition: border-color 0.3s;
        }
        .nov-arco-card:hover .nov-arco-img-wrap {
          border-color: var(--color-border-hover);
        }
        .nov-arco-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .nov-arco-card:hover .nov-arco-img { transform: scale(1.06); }
        .nov-arco-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-dim);
          font-size: 2.5rem;
          opacity: 0.25;
        }
      `}</style>
    </section>
  );
}
