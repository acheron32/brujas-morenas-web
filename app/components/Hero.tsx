import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* ── Background image ─────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
          alt=""
          aria-hidden="true"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Multi-layer dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,11,14,0.55) 0%, rgba(20,16,24,0.45) 40%, rgba(13,11,14,0.88) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(13,11,14,0.4) 0%, transparent 50%, rgba(13,11,14,0.4) 100%)",
          }}
        />
        {/* Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(13,11,14,0.6) 100%)",
          }}
        />
      </div>

      {/* ── Decorative side lines ─────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "25%",
          left: "2.5rem",
          width: "1px",
          height: "120px",
          background:
            "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)",
          display: "none",
        }}
        className="deco-side"
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "25%",
          right: "2.5rem",
          width: "1px",
          height: "120px",
          background:
            "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)",
          display: "none",
        }}
        className="deco-side"
      />

      {/* ── Hero content ──────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "6rem 1.5rem 4rem",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "3rem",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(201,168,76,0.7))",
            }}
          />
          <span
            style={{
              color: "var(--color-gold)",
              fontSize: "0.65rem",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              fontWeight: 300,
              fontFamily: "var(--font-outfit, sans-serif)",
            }}
          >
            Academia Mística
          </span>
          <span
            style={{
              display: "block",
              width: "3rem",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(201,168,76,0.7))",
            }}
          />
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant, Georgia, serif)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            margin: "0 0 1.5rem",
            color: "var(--color-cream)",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(4rem, 14vw, 9.5rem)",
            }}
          >
            Brujas
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(4rem, 14vw, 9.5rem)",
              fontStyle: "italic",
              color: "var(--color-gold-light)",
            }}
          >
            Morenas
          </span>
        </h1>

        {/* Ornamental line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.2rem",
            marginBottom: "1.75rem",
          }}
        >
          <span
            style={{
              display: "block",
              flex: 1,
              maxWidth: "120px",
              height: "1px",
              background: "var(--color-border)",
            }}
          />
          <span
            style={{
              color: "var(--color-gold)",
              fontSize: "1rem",
              opacity: 0.7,
            }}
          >
            ✦
          </span>
          <span
            style={{
              display: "block",
              flex: 1,
              maxWidth: "120px",
              height: "1px",
              background: "var(--color-border)",
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: "var(--color-cream-muted)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            fontWeight: 300,
            fontFamily: "var(--font-outfit, sans-serif)",
          }}
        >
          Un espacio donde la magia ancestral se encuentra con el conocimiento
          moderno. Aprende, practica y transforma.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Link
            href="#cursos-destacados"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--color-gold)",
              color: "#0d0b0e",
              padding: "0.9rem 2.2rem",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
          >
            Explorar Cursos →
          </Link>
          <Link
            href="#rituales"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(201,168,76,0.35)",
              color: "var(--color-cream)",
              padding: "0.9rem 2.2rem",
              fontWeight: 300,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              backdropFilter: "blur(4px)",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            Ver Rituales
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "3.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.45,
          }}
        >
          <span
            style={{
              color: "var(--color-cream-muted)",
              fontSize: "0.6rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}
          >
            Descubrir
          </span>
          <div
            className="animate-scroll-indicator"
            style={{
              width: "1px",
              height: "3rem",
              background:
                "linear-gradient(to bottom, var(--color-gold), transparent)",
            }}
          />
        </div>
      </div>

      {/* Mobile deco-side visible */}
      <style>{`
        @media (min-width: 1024px) { .deco-side { display: block !important; } }
      `}</style>
    </section>
  );
}
