const PRODUCTOS = [
  {
    id: 1,
    nombre: "Kit de Cristales Lunares",
    descripcion:
      "Cuarzo rosa, amatista y selenita para rituales de luna llena y claridad mental.",
    precio: 850,
    categoria: "Cristales",
    imagen:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
  },
  {
    id: 2,
    nombre: "Velas Rituales Artesanales",
    descripcion:
      "Set de 7 velas con hierbas y aceites esenciales para intenciones específicas.",
    precio: 420,
    categoria: "Velas",
    imagen:
      "https://images.unsplash.com/photo-1602607144700-3347742b3e69?w=600&q=80",
  },
  {
    id: 3,
    nombre: "Diario de Bruja",
    descripcion:
      "Cuaderno de tapas duras con páginas para registrar hechizos, sueños y lunas.",
    precio: 380,
    categoria: "Papelería",
    imagen:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
  },
  {
    id: 4,
    nombre: "Bolsa de Hierbas Mágicas",
    descripcion:
      "Mix de lavanda, romero, salvia y más para baños rituales y limpiezas.",
    precio: 290,
    categoria: "Hierbas",
    imagen:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&q=80",
  },
];

export default function ProductosSection() {
  return (
    <section
      id="productos"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-base)",
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
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
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
              — Nuestra tienda
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--color-cream)",
                lineHeight: 1.1,
                margin: "0 0 0.75rem",
              }}
            >
              Productos
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.85rem",
                fontWeight: 300,
                maxWidth: "420px",
                lineHeight: 1.6,
              }}
            >
              Herramientas y materiales cuidadosamente seleccionados para
              elevar tu práctica mágica.
            </p>
          </div>

          {/* Próximamente badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "var(--color-gold)",
              padding: "0.65rem 1.25rem",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            ✦ Próximamente
          </div>
        </div>

        {/* Products grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1px",
            background: "var(--color-border)",
          }}
        >
          {PRODUCTOS.map((producto) => (
            <div
              key={producto.id}
              style={{
                background: "var(--bg-card)",
                position: "relative",
                overflow: "hidden",
              }}
              className="producto-card"
            >
              {/* Coming soon overlay (shows on hover) */}
              <div
                className="producto-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(13,11,14,0.5)",
                  backdropFilter: "blur(2px)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
              >
                <span
                  style={{
                    color: "var(--color-gold)",
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    border: "1px solid rgba(201,168,76,0.4)",
                    padding: "0.6rem 1.4rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  Próximamente
                </span>
              </div>

              {/* Image */}
              <div
                style={{
                  aspectRatio: "1/1",
                  overflow: "hidden",
                }}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s ease",
                    opacity: 0.75,
                  }}
                  className="producto-img"
                />
              </div>

              {/* Info */}
              <div style={{ padding: "1.25rem 1.35rem" }}>
                <span
                  style={{
                    color: "var(--color-text-dim)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  {producto.categoria}
                </span>
                <h3
                  style={{
                    color: "var(--color-cream)",
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    marginBottom: "0.4rem",
                    lineHeight: 1.3,
                  }}
                >
                  {producto.nombre}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                    fontWeight: 300,
                    marginBottom: "0.85rem",
                  }}
                  className="line-clamp-2"
                >
                  {producto.descripcion}
                </p>
                <span
                  style={{
                    color: "var(--color-gold)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  ${producto.precio.toLocaleString("es-MX")} MXN
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .producto-card:hover .producto-overlay { opacity: 1 !important; }
        .producto-card:hover .producto-img { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
