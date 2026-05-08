import Link from "next/link";
import type { Curso } from "../../lib/cursos";
import CursoCard from "./CursoCard";

interface Props {
  cursos: Curso[];
}

export default function CursosDestacados({ cursos }: Props) {
  if (cursos.length === 0) return null;

  return (
    <section
      id="cursos-destacados"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-base)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header row */}
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
              — Selección especial
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--color-cream)",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Cursos Destacados
            </h2>
          </div>

          <Link
            href="/cursos"
            className="dest-ver-todos"
          >
            Ver todos los cursos →
          </Link>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {cursos.map((curso) => (
            <CursoCard key={curso.slug} curso={curso} variant="featured" />
          ))}
        </div>
      </div>

      <style>{`
        .dest-ver-todos {
          color: var(--color-text-muted);
          text-decoration: none;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .dest-ver-todos:hover {
          color: var(--color-gold);
        }
      `}</style>
    </section>
  );
}
