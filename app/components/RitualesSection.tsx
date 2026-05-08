import Link from "next/link";
import type { Ritual } from "../../lib/rituales";

interface Props {
  rituales: Ritual[];
}

export default function RitualesSection({ rituales }: Props) {
  const preview = rituales.slice(0, 3);

  return (
    <section
      id="rituales"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-base)",
        borderTop: "1px solid var(--color-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(92,32,48,0.1) 0%, transparent 60%), " +
            "radial-gradient(circle at 20% 80%, rgba(36,56,48,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "var(--color-gold)", fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 300 }}>
            — Prácticas y experiencias
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-cream)", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Rituales
          </h2>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", maxWidth: "480px", margin: "0 auto", fontWeight: 300, lineHeight: 1.7 }}>
            Guías rituales para integrar la magia en tu vida cotidiana. Prácticas accesibles, responsables y profundamente transformadoras.
          </p>
        </div>

        {/* Cards grid */}
        {preview.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid var(--color-border)" }}>
            <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2.5rem", color: "var(--color-text-muted)", opacity: 0.3, marginBottom: "1rem" }}>☽</div>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", fontStyle: "italic" }}>
              Los rituales estarán disponibles muy pronto.
            </p>
            <Link href="/rituales" className="ritual-sec-empty-link">
              Explorar rituales
            </Link>
          </div>
        ) : (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {preview.map((ritual) => (
                <Link
                  key={ritual.slug}
                  href={`/rituales/${ritual.slug}`}
                  className="ritual-card"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--color-border)", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none" }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", height: "13rem", overflow: "hidden", flexShrink: 0 }}>
                    {ritual.imagen ? (
                      <img
                        src={ritual.imagen}
                        alt={ritual.nombre}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }}
                        className="ritual-img"
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "var(--bg-surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "var(--color-text-dim)", fontSize: "2.5rem", opacity: 0.2 }}>☽</span>
                      </div>
                    )}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-card) 0%, rgba(28,21,37,0.2) 60%, transparent 100%)" }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.5rem 1.5rem 1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                      {ritual.duracion && (
                        <span style={{ color: "var(--color-text-muted)", fontSize: "0.65rem", letterSpacing: "0.08em", border: "1px solid var(--color-border)", padding: "0.2rem 0.65rem" }}>
                          {ritual.duracion}
                        </span>
                      )}
                      {ritual.nivel && (
                        <span style={{ color: "var(--color-text-muted)", fontSize: "0.65rem", letterSpacing: "0.08em", border: "1px solid var(--color-border)", padding: "0.2rem 0.65rem" }}>
                          {ritual.nivel}
                        </span>
                      )}
                    </div>
                    <h3 style={{ color: "var(--color-cream)", fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.3rem", fontWeight: 500, lineHeight: 1.25, marginBottom: "0.75rem" }}>
                      {ritual.nombre}
                    </h3>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.82rem", lineHeight: 1.7, fontWeight: 300, flex: 1, marginBottom: "1.5rem" }}>
                      {ritual.descripcion}
                    </p>
                    <span className="ritual-cta" style={{ color: "var(--color-gold)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", borderBottom: "1px solid rgba(201,168,76,0.25)", paddingBottom: "2px", display: "inline-block", transition: "letter-spacing 0.3s, border-color 0.3s" }}>
                      Acceder al ritual →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Ver todos link */}
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/rituales" className="ritual-sec-ver-todos">
                Ver todos los rituales →
              </Link>
            </div>
          </>
        )}
      </div>

      <style>{`
        .ritual-card { transition: border-color 0.3s, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s; }
        .ritual-card:hover { border-color: var(--color-border-hover) !important; transform: translateY(-5px); box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
        .ritual-card:hover .ritual-img { transform: scale(1.06); }
        .ritual-card:hover .ritual-cta { letter-spacing: 0.25em !important; border-color: rgba(201,168,76,0.6) !important; }
        .ritual-sec-ver-todos { color: var(--color-text-muted); text-decoration: none; font-size: 0.78rem; letter-spacing: 0.08em; transition: color 0.2s; }
        .ritual-sec-ver-todos:hover { color: var(--color-gold); }
        .ritual-sec-empty-link { display: inline-block; margin-top: 1.25rem; color: var(--color-gold); text-decoration: none; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 2px; }
      `}</style>
    </section>
  );
}
