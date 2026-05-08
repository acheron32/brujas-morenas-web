import Link from "next/link";
import type { Producto } from "../../lib/productos";

interface Props {
  productos: Producto[];
}

export default function ProductosSection({ productos }: Props) {
  const preview = productos.slice(0, 3);

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
            <p style={{ color: "var(--color-gold)", fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 300 }}>
              — Nuestra tienda
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-cream)", lineHeight: 1.1, margin: "0 0 0.75rem" }}>
              Productos
            </h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", fontWeight: 300, maxWidth: "420px", lineHeight: 1.6 }}>
              Herramientas y materiales cuidadosamente seleccionados para elevar tu práctica mágica.
            </p>
          </div>
          <Link href="/tienda" className="prod-sec-ver-todas">
            Ver tienda completa →
          </Link>
        </div>

        {/* Products grid */}
        {preview.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid var(--color-border)" }}>
            <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2.5rem", color: "var(--color-text-muted)", opacity: 0.3, marginBottom: "1rem" }}>✦</div>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", fontStyle: "italic" }}>
              Pronto tendremos nuevas herramientas y materiales para ti.
            </p>
            <Link href="/tienda" className="prod-sec-link-empty">
              Visitar la tienda
            </Link>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "var(--color-border)" }}>
            {preview.map((producto) => (
              <Link
                key={producto.slug}
                href={`/tienda/${producto.slug}`}
                className="producto-card"
                style={{ background: "var(--bg-card)", display: "flex", flexDirection: "column", textDecoration: "none", overflow: "hidden" }}
              >
                {/* Image */}
                <div style={{ aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
                  {producto.imagen ? (
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }}
                      className="producto-img"
                    />
                  ) : (
                    <div style={{ width: "100%", height: "100%", background: "var(--bg-surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "var(--color-text-dim)", fontSize: "2rem", opacity: 0.2 }}>✦</span>
                    </div>
                  )}
                  {!producto.disponible && (
                    <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "rgba(13,11,14,0.8)", color: "var(--color-text-muted)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.25rem 0.6rem", border: "1px solid var(--color-border)" }}>
                      Agotado
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: "1.25rem 1.35rem" }}>
                  {producto.categoria && (
                    <span style={{ color: "var(--color-text-dim)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                      {producto.categoria}
                    </span>
                  )}
                  <h3 style={{ color: "var(--color-cream)", fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.05rem", fontWeight: 500, marginBottom: "0.4rem", lineHeight: 1.3 }}>
                    {producto.nombre}
                  </h3>
                  <p className="line-clamp-2" style={{ color: "var(--color-text-muted)", fontSize: "0.78rem", lineHeight: 1.55, fontWeight: 300, marginBottom: "0.85rem" }}>
                    {producto.descripcion}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--color-gold)", fontSize: "0.9rem", fontWeight: 600 }}>
                      ${producto.precio.toLocaleString("es-MX")} MXN
                    </span>
                    <span style={{ color: "var(--color-text-muted)", fontSize: "0.68rem", letterSpacing: "0.08em" }}>Ver →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .prod-sec-ver-todas { color: var(--color-text-muted); text-decoration: none; font-size: 0.78rem; letter-spacing: 0.08em; transition: color 0.2s; white-space: nowrap; }
        .prod-sec-ver-todas:hover { color: var(--color-gold); }
        .prod-sec-link-empty { display: inline-block; margin-top: 1.25rem; color: var(--color-gold); text-decoration: none; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 2px; transition: border-color 0.2s; }
        .prod-sec-link-empty:hover { border-color: var(--color-gold); }
        .producto-card { transition: transform 0.3s, box-shadow 0.3s; }
        .producto-card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }
        .producto-card:hover .producto-img { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
