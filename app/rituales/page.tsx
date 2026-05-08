import Link from "next/link";
import { getAllRituales } from "../../lib/rituales";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Rituales — Brujas Morenas",
  description: "Guías rituales para integrar la magia en tu vida cotidiana.",
};

export default function RitualesPage() {
  const rituales = getAllRituales();

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        <div style={{ paddingTop: "7rem", paddingBottom: "3rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-surface)", borderBottom: "1px solid var(--color-border)", textAlign: "center" }}>
          <p style={{ color: "var(--color-gold)", fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 300 }}>— Prácticas y experiencias</p>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "var(--color-cream)", lineHeight: 1.1, margin: "0 0 1rem" }}>Rituales</h1>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", maxWidth: "480px", margin: "0 auto", fontWeight: 300, lineHeight: 1.7 }}>
            Guías para integrar la magia en tu vida cotidiana. Prácticas accesibles y profundamente transformadoras.
          </p>
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
          {rituales.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 2rem", border: "1px solid var(--color-border)" }}>
              <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "3rem", color: "var(--color-text-muted)", opacity: 0.5, marginBottom: "1rem" }}>☽</div>
              <p style={{ color: "var(--color-text-muted)" }}>Los rituales estarán disponibles muy pronto.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {rituales.map((r) => (
                <Link key={r.slug} href={`/rituales/${r.slug}`} className="ritual-page-card"
                  style={{ display: "flex", flexDirection: "column", background: "var(--bg-card)", border: "1px solid var(--color-border)", overflow: "hidden", textDecoration: "none" }}>
                  {r.imagen && (
                    <div style={{ position: "relative", height: "13rem", overflow: "hidden", flexShrink: 0 }}>
                      <img src={r.imagen} alt={r.nombre} className="ritual-page-img"
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-card) 0%, transparent 60%)" }} />
                    </div>
                  )}
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
                      {r.duracion && <span style={{ color: "var(--color-text-muted)", fontSize: "0.65rem", border: "1px solid var(--color-border)", padding: "0.2rem 0.65rem", letterSpacing: "0.05em" }}>{r.duracion}</span>}
                      {r.nivel && <span style={{ color: "var(--color-text-muted)", fontSize: "0.65rem", border: "1px solid var(--color-border)", padding: "0.2rem 0.65rem", letterSpacing: "0.05em" }}>{r.nivel}</span>}
                    </div>
                    <h3 style={{ color: "var(--color-cream)", fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.25, marginBottom: "0.65rem" }}>{r.nombre}</h3>
                    <p className="line-clamp-2" style={{ color: "var(--color-text-muted)", fontSize: "0.82rem", lineHeight: 1.6, fontWeight: 300, marginBottom: "1rem" }}>{r.descripcion}</p>
                    <span style={{ color: "var(--color-gold)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Ver ritual →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <style>{`
        .ritual-page-card { transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s; }
        .ritual-page-card:hover { border-color: var(--color-border-hover) !important; transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }
        .ritual-page-card:hover .ritual-page-img { transform: scale(1.06); }
      `}</style>
    </>
  );
}
