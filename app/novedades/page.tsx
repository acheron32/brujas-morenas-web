import Link from "next/link";
import { getAllNovedades } from "../../lib/novedades";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Novedades — Brujas Morenas",
  description: "Noticias, comunicados y actualizaciones de Brujas Morenas.",
};

export default function NovedadesPage() {
  const novedades = getAllNovedades();

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        <div style={{ paddingTop: "7rem", paddingBottom: "3rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-surface)", borderBottom: "1px solid var(--color-border)", textAlign: "center" }}>
          <p style={{ color: "var(--color-gold)", fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 300 }}>— Noticias y comunicados</p>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "var(--color-cream)", lineHeight: 1.1, margin: "0 0 1rem" }}>Novedades</h1>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", maxWidth: "440px", margin: "0 auto", fontWeight: 300, lineHeight: 1.7 }}>Actualizaciones, lanzamientos y comunicados de nuestra comunidad mágica.</p>
        </div>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
          {novedades.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 2rem", border: "1px solid var(--color-border)" }}>
              <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "3rem", color: "var(--color-text-muted)", opacity: 0.5, marginBottom: "1rem" }}>✦</div>
              <p style={{ color: "var(--color-text-muted)" }}>Pronto compartiremos novedades contigo.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {novedades.map((n) => (
                <Link key={n.slug} href={`/novedades/${n.slug}`} className="nov-row"
                  style={{ display: "grid", gridTemplateColumns: "180px 1fr", background: "var(--bg-card)", border: "1px solid var(--color-border)", overflow: "hidden", textDecoration: "none" }}>
                  {n.imagen ? (
                    <div style={{ height: "160px", overflow: "hidden" }}>
                      <img src={n.imagen} alt={n.titulo} className="nov-row-img"
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
                    </div>
                  ) : (
                    <div style={{ height: "160px", background: "var(--bg-surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "var(--color-text-dim)", fontSize: "2rem", opacity: 0.3 }}>✦</span>
                    </div>
                  )}
                  <div style={{ padding: "1.5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                      {n.destacado && <span style={{ color: "#0d0b0e", background: "var(--color-gold)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.15em", padding: "0.2rem 0.65rem", textTransform: "uppercase" }}>Destacado</span>}
                      {n.fecha && <span style={{ color: "var(--color-text-dim)", fontSize: "0.7rem" }}>{new Date(n.fecha).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}</span>}
                    </div>
                    <h3 style={{ color: "var(--color-cream)", fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.3rem", fontWeight: 500, lineHeight: 1.25, margin: 0 }}>{n.titulo}</h3>
                    {n.extracto && <p style={{ color: "var(--color-text-muted)", fontSize: "0.82rem", lineHeight: 1.6, fontWeight: 300, margin: 0 }}>{n.extracto}</p>}
                    <span style={{ color: "var(--color-gold)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.25rem" }}>Leer →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <style>{`
        .nov-row { transition: border-color 0.3s, transform 0.2s; }
        .nov-row:hover { border-color: var(--color-border-hover) !important; transform: translateX(4px); }
        .nov-row:hover .nov-row-img { transform: scale(1.05); }
        @media (max-width: 600px) { .nov-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
