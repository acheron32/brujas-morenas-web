import Link from "next/link";

const NAV = [
  { href: "#cursos-destacados", label: "Cursos" },
  { href: "#productos", label: "Productos" },
  { href: "#rituales", label: "Rituales" },
  { href: "#nosotras", label: "Sobre nosotras" },
];

const REDES = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "TikTok" },
  { href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  display: "block",
                  color: "var(--color-gold)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                ☽ Academia Mística
              </span>
              <span
                style={{
                  color: "var(--color-cream)",
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                }}
              >
                Brujas Morenas
              </span>
            </div>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.8rem",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: "240px",
              }}
            >
              Academia de magia ancestral y conocimiento espiritual para las
              brujas del siglo XXI.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5
              style={{
                color: "var(--color-cream-muted)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                fontWeight: 400,
              }}
            >
              Navegación
            </h5>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h5
              style={{
                color: "var(--color-cream-muted)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                fontWeight: 400,
              }}
            >
              Contacto
            </h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <a
                href="mailto:hola@brujasmorenas.com"
                className="footer-nav-link"
              >
                hola@brujasmorenas.com
              </a>
              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  marginTop: "0.25rem",
                }}
              >
                {REDES.map((red) => (
                  <a
                    key={red.label}
                    href={red.href}
                    className="footer-social-link"
                  >
                    {red.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)",
            marginBottom: "1.5rem",
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              color: "var(--color-text-dim)",
              fontSize: "0.72rem",
              letterSpacing: "0.04em",
              margin: 0,
            }}
            suppressHydrationWarning
          >
            © {new Date().getFullYear()} Brujas Morenas. Todos los derechos
            reservados.
          </p>
          <Link
            href="/admin"
            className="footer-admin-link"
          >
            Admin
          </Link>
        </div>
      </div>

      <style>{`
        .footer-nav-link {
          color: var(--color-text-muted);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 300;
          transition: color 0.2s;
        }
        .footer-nav-link:hover {
          color: var(--color-gold);
        }
        .footer-social-link {
          color: var(--color-text-muted);
          text-decoration: none;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          transition: color 0.2s;
        }
        .footer-social-link:hover {
          color: var(--color-gold);
        }
        .footer-admin-link {
          color: var(--color-text-dim);
          text-decoration: none;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .footer-admin-link:hover {
          opacity: 0.9;
        }
      `}</style>
    </footer>
  );
}
