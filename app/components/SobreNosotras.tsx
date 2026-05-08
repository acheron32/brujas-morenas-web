const VALORES = [
  {
    icono: "🌿",
    titulo: "Magia Ancestral",
    desc: "Rescatamos saberes milenarios de nuestra cultura para hacerlos accesibles, vivos y relevantes.",
  },
  {
    icono: "📚",
    titulo: "Aprendizaje Profundo",
    desc: "Enseñamos con rigor, cuidado y una pedagogía que respeta tu proceso y tu ritmo único.",
  },
  {
    icono: "🤝",
    titulo: "Comunidad",
    desc: "Construimos un espacio de apoyo genuino, confianza y crecimiento colectivo.",
  },
  {
    icono: "⚖️",
    titulo: "Práctica Responsable",
    desc: "La magia que enseñamos parte del respeto, la ética y la consciencia plena.",
  },
];

export default function SobreNosotras() {
  return (
    <section
      id="nosotras"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-base)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* ── Text column ──────────────────────────── */}
          <div>
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
              — Nuestra historia
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
                color: "var(--color-cream)",
                lineHeight: 1.05,
                margin: "0 0 1.75rem",
              }}
            >
              Somos Brujas
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-gold-light)",
                }}
              >
                Morenas
              </em>
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "2.5rem",
              }}
            >
              <p>
                Brujas Morenas nació de la necesidad de crear un espacio donde
                el conocimiento mágico ancestral fuera accesible, honesto y
                profundamente enraizado en nuestra identidad.
              </p>
              <p>
                No somos una academia de tendencias ni de magia decorativa.
                Enseñamos desde la práctica real, el respeto a las tradiciones
                y el amor por el camino interior.
              </p>
              <p>
                Aquí aprenderás a tu ritmo, con acompañamiento cercano y dentro
                de una comunidad que te recibe tal como eres.
              </p>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              <a
                href="#cursos-destacados"
                className="nosotras-cta-primary"
              >
                Comenzar ahora
              </a>
              <a
                href="#rituales"
                className="nosotras-cta-secondary"
              >
                Ver rituales
              </a>
            </div>
          </div>

          {/* ── Values grid ──────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "var(--color-border)",
            }}
          >
            {VALORES.map((v) => (
              <div
                key={v.titulo}
                style={{
                  background: "var(--bg-card)",
                  padding: "1.75rem 1.5rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "1.5rem",
                    marginBottom: "0.85rem",
                  }}
                >
                  {v.icono}
                </span>
                <h4
                  style={{
                    color: "var(--color-cream)",
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                    lineHeight: 1.2,
                  }}
                >
                  {v.titulo}
                </h4>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .nosotras-cta-primary {
          display: inline-flex;
          align-items: center;
          background: var(--color-gold);
          color: #0d0b0e;
          padding: 0.75rem 1.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s;
        }
        .nosotras-cta-primary:hover {
          background: var(--color-gold-light);
        }
        .nosotras-cta-secondary {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--color-border);
          color: var(--color-cream-muted);
          padding: 0.75rem 1.75rem;
          font-size: 0.75rem;
          font-weight: 300;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .nosotras-cta-secondary:hover {
          border-color: rgba(201,168,76,0.4);
          color: var(--color-cream);
        }
      `}</style>
    </section>
  );
}
