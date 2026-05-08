import Link from "next/link";

const ITEMS = [
  {
    icon: "📚",
    title: "Cursos",
    description:
      "Aprende a tu ritmo con nuestros cursos en línea de magia, hechizos y sabiduría ancestral.",
    href: "#cursos-destacados",
    cta: "Explorar cursos",
  },
  {
    icon: "🛍️",
    title: "Productos",
    description:
      "Cristales, velas rituales, hierbas y herramientas cuidadosamente seleccionadas para tu práctica.",
    href: "#productos",
    cta: "Ver tienda",
  },
  {
    icon: "🌙",
    title: "Rituales",
    description:
      "Guías y experiencias rituales para cada fase lunar, intención y momento de tu camino.",
    href: "#rituales",
    cta: "Ver rituales",
  },
  {
    icon: "🗓️",
    title: "Próximas Clases",
    description:
      "Sesiones en vivo, talleres y encuentros especiales con nuestra comunidad de brujas.",
    href: "#cursos-destacados",
    cta: "Ver calendario",
  },
];

export default function QuickAccess() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Ornamental header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <div className="ornament-line" style={{ maxWidth: "300px", margin: "0 auto 1rem" }}>
            <span
              style={{
                color: "var(--color-gold)",
                fontSize: "1.1rem",
                padding: "0 0.75rem",
                fontFamily: "var(--font-cormorant, Georgia, serif)",
              }}
            >
              ✦
            </span>
          </div>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}
          >
            ¿Qué buscas hoy?
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1px",
            background: "var(--color-border)",
          }}
        >
          {ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              style={{
                display: "block",
                background: "var(--bg-card)",
                padding: "2rem 1.75rem",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
              }}
              className="quick-card"
            >
              {/* Top accent */}
              <div
                className="quick-card-accent"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(to right, transparent, var(--color-gold), transparent)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
              />

              <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                {item.icon}
              </div>
              <h3
                style={{
                  color: "var(--color-cream)",
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  marginBottom: "0.6rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                  marginBottom: "1.25rem",
                  fontWeight: 300,
                }}
              >
                {item.description}
              </p>
              <span
                style={{
                  color: "var(--color-gold)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  transition: "letter-spacing 0.3s",
                }}
                className="quick-cta"
              >
                {item.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .quick-card:hover .quick-card-accent { opacity: 1 !important; }
        .quick-card:hover .quick-cta { letter-spacing: 0.15em !important; }
        .quick-card { transition: background 0.25s; }
        .quick-card:hover { background: var(--bg-card-hover) !important; }
      `}</style>
    </section>
  );
}
