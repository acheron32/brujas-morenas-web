import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllRituales, getRitualBySlug } from "../../../lib/rituales";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface PageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllRituales().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const r = getRitualBySlug(slug);
  if (!r) return { title: "Ritual no encontrado — Brujas Morenas" };
  return { title: `${r.nombre} — Brujas Morenas`, description: r.descripcion };
}

export default async function RitualPage({ params }: PageProps) {
  const { slug } = await params;
  const ritual = getRitualBySlug(slug);
  if (!ritual) notFound();

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        <div style={{ paddingTop: "6rem", paddingBottom: "1rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", borderBottom: "1px solid var(--color-border)", background: "var(--bg-surface)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link href="/rituales" className="back-link">← Volver a rituales</Link>
          </div>
        </div>

        <article style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
          {/* Hero image */}
          {ritual.imagen && (
            <div style={{ position: "relative", aspectRatio: "16/7", overflow: "hidden", marginBottom: "2.5rem", border: "1px solid var(--color-border)" }}>
              <img src={ritual.imagen} alt={ritual.nombre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,11,14,0.7) 0%, transparent 50%)" }} />
              {ritual.destacado && (
                <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", background: "var(--color-gold)", color: "#0d0b0e", padding: "0.3rem 0.85rem", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>✦ Destacado</div>
              )}
            </div>
          )}

          {/* Header */}
          <header style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              {ritual.duracion && <span style={{ color: "var(--color-text-muted)", fontSize: "0.7rem", border: "1px solid var(--color-border)", padding: "0.25rem 0.75rem" }}>{ritual.duracion}</span>}
              {ritual.nivel && <span style={{ color: "var(--color-text-muted)", fontSize: "0.7rem", border: "1px solid var(--color-border)", padding: "0.25rem 0.75rem" }}>{ritual.nivel}</span>}
            </div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--color-cream)", lineHeight: 1.1, margin: "0 0 1rem" }}>{ritual.nombre}</h1>
            <p style={{ color: "var(--color-cream-muted)", fontSize: "1rem", lineHeight: 1.7, fontWeight: 300 }}>{ritual.descripcion}</p>
          </header>

          <div style={{ height: "1px", background: "linear-gradient(to right, var(--color-gold), transparent)", marginBottom: "2.5rem", opacity: 0.3 }} />

          {/* Materiales */}
          {ritual.materiales.length > 0 && (
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--color-border)", padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.4rem", fontWeight: 400, color: "var(--color-cream)", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--color-border)" }}>
                🌿 Materiales necesarios
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {ritual.materiales.map((m, i) => (
                  <li key={i} style={{ color: "var(--color-cream-muted)", fontSize: "0.9rem", fontWeight: 300, display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: "0.1rem" }}>✦</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pasos */}
          {ritual.pasos.length > 0 && (
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--color-border)", padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.4rem", fontWeight: 400, color: "var(--color-cream)", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--color-border)" }}>
                ☽ Pasos del ritual
              </h2>
              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {ritual.pasos.map((paso, i) => (
                  <li key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", fontWeight: 300, lineHeight: 1, flexShrink: 0, minWidth: "1.5rem" }}>{i + 1}</span>
                    <p style={{ color: "var(--color-cream-muted)", fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{paso}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Contenido extra */}
          {ritual.contenido && (
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--color-border)", padding: "2rem", marginBottom: "1.5rem" }}>
              <div className="prose-dark" style={{ whiteSpace: "pre-wrap" }}>{ritual.contenido}</div>
            </div>
          )}

          {/* Galería adicional */}
          {ritual.galeria.length > 1 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem", marginTop: "2rem" }}>
              {ritual.galeria.slice(1).map((url, i) => (
                <div key={i} style={{ border: "1px solid var(--color-border)", overflow: "hidden", aspectRatio: "1/1" }}>
                  <img src={url} alt={`${ritual.nombre} ${i + 2}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer />
      <style>{`
        .back-link { color: var(--color-text-muted); text-decoration: none; font-size: 0.78rem; transition: color 0.2s; }
        .back-link:hover { color: var(--color-gold); }
      `}</style>
    </>
  );
}
