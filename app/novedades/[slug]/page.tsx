import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNovedades, getNovedadBySlug } from "../../../lib/novedades";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface PageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllNovedades().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const n = getNovedadBySlug(slug);
  if (!n) return { title: "No encontrado — Brujas Morenas" };
  return { title: `${n.titulo} — Brujas Morenas`, description: n.extracto };
}

export default async function NovedadPage({ params }: PageProps) {
  const { slug } = await params;
  const novedad = getNovedadBySlug(slug);
  if (!novedad) notFound();

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        <div style={{ paddingTop: "6rem", paddingBottom: "1rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", borderBottom: "1px solid var(--color-border)", background: "var(--bg-surface)" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <Link href="/novedades" className="back-link">← Volver a novedades</Link>
          </div>
        </div>

        <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
          {novedad.imagen && (
            <div style={{ border: "1px solid var(--color-border)", overflow: "hidden", marginBottom: "2.5rem", aspectRatio: "16/7" }}>
              <img src={novedad.imagen} alt={novedad.titulo} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          )}

          <header style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              {novedad.destacado && (
                <span style={{ color: "#0d0b0e", background: "var(--color-gold)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", padding: "0.2rem 0.65rem", textTransform: "uppercase" }}>Destacado</span>
              )}
              {novedad.fecha && (
                <time style={{ color: "var(--color-text-dim)", fontSize: "0.78rem" }}>
                  {new Date(novedad.fecha).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              )}
            </div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--color-cream)", lineHeight: 1.1, margin: "0 0 1rem" }}>{novedad.titulo}</h1>
            {novedad.extracto && <p style={{ color: "var(--color-cream-muted)", fontSize: "1.05rem", lineHeight: 1.7, fontWeight: 300 }}>{novedad.extracto}</p>}
          </header>

          <div style={{ height: "1px", background: "linear-gradient(to right, var(--color-gold), transparent)", marginBottom: "2.5rem", opacity: 0.3 }} />

          <div style={{ background: "var(--bg-card)", border: "1px solid var(--color-border)", padding: "2.5rem" }}>
            <div className="prose-dark" style={{ whiteSpace: "pre-wrap" }}>{novedad.contenido}</div>
          </div>
        </article>
      </main>
      <Footer />
      <style>{`
        .back-link { color: var(--color-text-muted); text-decoration: none; font-size: 0.78rem; transition: color 0.2s; }
        .back-link:hover { color: var(--color-gold); }
        .prose-dark { color: var(--color-cream-muted); font-size: 0.9rem; line-height: 1.85; font-weight: 300; }
        .prose-dark strong { color: var(--color-cream); font-weight: 600; }
      `}</style>
    </>
  );
}
