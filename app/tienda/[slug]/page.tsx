import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProductos, getProductoBySlug } from "../../../lib/productos";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface PageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllProductos().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const p = getProductoBySlug(slug);
  if (!p) return { title: "Producto no encontrado — Brujas Morenas" };
  return { title: `${p.nombre} — Brujas Morenas`, description: p.descripcion };
}

export default async function ProductoPage({ params }: PageProps) {
  const { slug } = await params;
  const producto = getProductoBySlug(slug);
  if (!producto) notFound();

  const waText = encodeURIComponent(`Hola, me interesa el producto: ${producto.nombre}`);
  const waLink = producto.whatsapp ? `https://wa.me/${producto.whatsapp}?text=${waText}` : null;

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        <div style={{ paddingTop: "6rem", paddingBottom: "1rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", borderBottom: "1px solid var(--color-border)", background: "var(--bg-surface)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <Link href="/tienda" className="back-link">← Volver a la tienda</Link>
          </div>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>
            {/* Galería de imágenes */}
            <div>
              {producto.imagen && (
                <div style={{ border: "1px solid var(--color-border)", overflow: "hidden", marginBottom: "1rem" }}>
                  <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }} />
                </div>
              )}
              {producto.galeria.length > 1 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem" }}>
                  {producto.galeria.map((url, i) => (
                    <div key={i} style={{ border: "1px solid var(--color-border)", overflow: "hidden", aspectRatio: "1/1" }}>
                      <img src={url} alt={`${producto.nombre} ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info del producto */}
            <div>
              {producto.categoria && (
                <span style={{ color: "var(--color-text-dim)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>{producto.categoria}</span>
              )}
              <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 2.75rem)", color: "var(--color-cream)", lineHeight: 1.1, margin: "0 0 1rem" }}>
                {producto.nombre}
              </h1>
              <p style={{ color: "var(--color-cream-muted)", fontSize: "1rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.5rem" }}>{producto.descripcion}</p>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                <span style={{ color: "var(--color-gold-light)", fontSize: "2rem", fontWeight: 700, fontFamily: "var(--font-cormorant, Georgia, serif)" }}>
                  ${producto.precio.toLocaleString("es-MX")} MXN
                </span>
                {!producto.disponible && (
                  <span style={{ color: "var(--color-text-muted)", border: "1px solid var(--color-border)", padding: "0.3rem 0.75rem", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Agotado</span>
                )}
              </div>

              {waLink && producto.disponible && (
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="wa-btn">
                  <span>📱</span> Comprar por WhatsApp
                </a>
              )}
              {!waLink && producto.disponible && (
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", fontStyle: "italic" }}>Para adquirir este producto, contáctanos por nuestras redes sociales.</p>
              )}

              {producto.contenido && (
                <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
                  <div className="prose-dark" style={{ whiteSpace: "pre-wrap" }}>{producto.contenido}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        .back-link { color: var(--color-text-muted); text-decoration: none; font-size: 0.78rem; transition: color 0.2s; }
        .back-link:hover { color: var(--color-gold); }
        .wa-btn { display: inline-flex; align-items: center; gap: 0.6rem; background: #25d366; color: #fff; padding: 0.9rem 2rem; font-size: 0.82rem; font-weight: 600; letter-spacing: 0.08em; text-decoration: none; transition: background 0.2s; }
        .wa-btn:hover { background: #20ba5a; }
      `}</style>
    </>
  );
}
