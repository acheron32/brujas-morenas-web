const RITUALES = [
  {
    id: 1,
    nombre: "Ritual de Luna Nueva",
    descripcion:
      "Un ritual de siembra y nuevos comienzos. Trabaja con intenciones poderosas para manifestar desde el silencio de la luna oscura.",
    duracion: "45 min",
    nivel: "Principiante",
    imagen:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80",
  },
  {
    id: 2,
    nombre: "Limpieza Energética del Hogar",
    descripcion:
      "Guía completa para limpiar y proteger los espacios con humo sagrado, sal, sonido y visualizaciones poderosas.",
    duracion: "60 min",
    nivel: "Todos los niveles",
    imagen:
      "https://images.unsplash.com/photo-1602607144700-3347742b3e69?w=800&q=80",
  },
  {
    id: 3,
    nombre: "Baño de Florecimiento",
    descripcion:
      "Ritual de baño con flores, hierbas y afirmaciones para atraer abundancia, amor propio y una claridad renovada.",
    duracion: "30 min",
    nivel: "Principiante",
    imagen:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
  },
];

export default function RitualesSection() {
  return (
    <section
      id="rituales"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-surface2)",
        borderTop: "1px solid var(--color-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(92,32,48,0.12) 0%, transparent 60%), " +
            "radial-gradient(circle at 20% 80%, rgba(36,56,48,0.1) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
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
            — Prácticas y experiencias
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--color-cream)",
              lineHeight: 1.1,
              margin: "0 0 1rem",
            }}
          >
            Rituales
          </h2>
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
            Guías rituales para integrar la magia en tu vida cotidiana.
            Prácticas accesibles, responsables y profundamente transformadoras.
          </p>
        </div>

        {/* Ritual cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {RITUALES.map((ritual) => (
            <div
              key={ritual.id}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--color-border)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
              className="ritual-card"
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: "13rem",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src={ritual.imagen}
                  alt={ritual.nombre}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s ease",
                  }}
                  className="ritual-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, var(--bg-card) 0%, rgba(28,21,37,0.2) 60%, transparent 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "1.5rem 1.5rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* Meta tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      border: "1px solid var(--color-border)",
                      padding: "0.2rem 0.65rem",
                    }}
                  >
                    {ritual.duracion}
                  </span>
                  <span
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      border: "1px solid var(--color-border)",
                      padding: "0.2rem 0.65rem",
                    }}
                  >
                    {ritual.nivel}
                  </span>
                </div>

                <h3
                  style={{
                    color: "var(--color-cream)",
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "1.3rem",
                    fontWeight: 500,
                    lineHeight: 1.25,
                    marginBottom: "0.75rem",
                  }}
                >
                  {ritual.nombre}
                </h3>

                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.82rem",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    flex: 1,
                    marginBottom: "1.5rem",
                  }}
                >
                  {ritual.descripcion}
                </p>

                <button
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    textAlign: "left",
                    cursor: "pointer",
                    color: "var(--color-gold)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-outfit, sans-serif)",
                    borderBottom: "1px solid rgba(201,168,76,0.25)",
                    paddingBottom: "2px",
                    display: "inline-block",
                    transition: "letter-spacing 0.3s, border-color 0.3s",
                  }}
                  className="ritual-cta"
                >
                  Acceder al ritual →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ritual-card {
          transition: border-color 0.3s, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s;
        }
        .ritual-card:hover {
          border-color: var(--color-border-hover) !important;
          transform: translateY(-5px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.45);
        }
        .ritual-card:hover .ritual-img { transform: scale(1.06); }
        .ritual-card:hover .ritual-cta {
          letter-spacing: 0.25em !important;
          border-color: rgba(201,168,76,0.6) !important;
        }
      `}</style>
    </section>
  );
}
