import { getAllFotos } from "../../lib/galeria";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GaleriaGrid from "../components/GaleriaGrid";

export const metadata = {
  title: "Galería — Brujas Morenas",
  description: "Fotos de nuestra comunidad, rituales y eventos.",
};

export default function GaleriaPage() {
  const fotos = getAllFotos();

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        <div style={{ paddingTop: "7rem", paddingBottom: "3rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-surface)", borderBottom: "1px solid var(--color-border)", textAlign: "center" }}>
          <p style={{ color: "var(--color-gold)", fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 300 }}>— Nuestra comunidad</p>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontWeight: 300, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "var(--color-cream)", lineHeight: 1.1, margin: "0 0 1rem" }}>Galería</h1>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", maxWidth: "420px", margin: "0 auto", fontWeight: 300, lineHeight: 1.7 }}>Momentos de nuestra comunidad, rituales, eventos y magia cotidiana.</p>
        </div>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
          {fotos.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 2rem", border: "1px solid var(--color-border)" }}>
              <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "3rem", color: "var(--color-text-muted)", opacity: 0.5, marginBottom: "1rem" }}>✦</div>
              <p style={{ color: "var(--color-text-muted)" }}>Las fotos de nuestra comunidad aparecerán aquí pronto.</p>
            </div>
          ) : (
            <GaleriaGrid fotos={fotos} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
