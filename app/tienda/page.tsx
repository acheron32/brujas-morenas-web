import Link from "next/link";
import { getAllProductos } from "../../lib/productos";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Tienda — Brujas Morenas",
  description: "Cristales, velas, hierbas y herramientas para tu práctica mágica.",
};

export default function TiendaPage() {
  const productos = getAllProductos();

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        {/* Page header */}
        <div
          style={{
            paddingTop: "7rem",
            paddingBottom: "3rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            background: "var(--bg-surface)",
            borderBottom: "1px solid var(--color-border)",
            textAlign: "center",
          }}
        >
          <p style={{ color: "var(--color-gold)", fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 300 }}>
            — Nuestra tienda
          </p>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "var(--color-cream)", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Productos
          </h1>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", maxWidth: "460px", margin: "0 auto", fontWeight: 300, lineHeight: 1.7 }}>
            Herramientas y materiales cuidadosamente seleccionados para elevar tu práctica mágica.
          </p>
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
          {productos.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 2rem", border: "1px solid var(--color-border)" }}>
              <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "3rem", color: "var(--color-text-muted)", marginBottom: "1rem", opacity: 0.5 }}>✦</div>
              <p style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>Los productos estarán disponibles muy pronto.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {productos.map((p) => (
                <Link
                  key={p.slug}
                  href={`/tienda/${p.slug}`}
                  className="prod-card"
                  style={{ display: "flex", flexDirection: "column", background: "var(--bg-card)", border: "1px solid var(--color-border)", overflow: "hidden", textDecoration: "none" }}
                >
                  <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
                    {p.imagen && (
                      <img src={p.imagen} alt={p.nombre} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }} className="prod-img" />
                    )}
                    {!p.disponible && (
                      <div style={{ position: "absolute", inset: 0, background: "rgba(13,11,14,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "var(--color-gold)", border: "1px solid rgba(201,168,76,0.4)", padding: "0.4rem 1rem", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Agotado</span>
                      </div>
                    )}
                  </div>
                  <div style={{ padding: "1.25rem 1.35rem" }}>
                    <span style={{ color: "var(--color-text-dim)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>{p.categoria}</span>
                    <h3 style={{ color: "var(--color-cream)", fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.4rem", lineHeight: 1.3 }}>{p.nombre}</h3>
                    <p className="line-clamp-2" style={{ color: "var(--color-text-muted)", fontSize: "0.78rem", lineHeight: 1.55, fontWeight: 300, marginBottom: "0.85rem" }}>{p.descripcion}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.75rem", borderTop: "1px solid var(--color-border)" }}>
                      <span style={{ color: "var(--color-gold)", fontSize: "0.95rem", fontWeight: 600 }}>${p.precio.toLocaleString("es-MX")} MXN</span>
                      <span style={{ color: "var(--color-text-muted)", fontSize: "0.7rem" }}>Ver →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <style>{`
        .prod-card { transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s; }
        .prod-card:hover { border-color: var(--color-border-hover) !important; transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }
        .prod-card:hover .prod-img { transform: scale(1.05); }
      `}</style>
    </>
  );
}
