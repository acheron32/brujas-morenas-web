"use client";

import { useState, useMemo } from "react";
import type { Curso } from "../../lib/cursos";
import CursoCard from "./CursoCard";

interface Props {
  cursos: Curso[];
}

export default function CursosBuscador({ cursos }: Props) {
  const [query, setQuery] = useState("");
  const [soloDestacados, setSoloDestacados] = useState(false);

  const filtrados = useMemo(() => {
    return cursos.filter((c) => {
      const q = query.trim().toLowerCase();
      const matchQuery =
        q === "" ||
        c.titulo.toLowerCase().includes(q) ||
        c.descripcion.toLowerCase().includes(q);
      const matchDestacado = !soloDestacados || c.destacado;
      return matchQuery && matchDestacado;
    });
  }, [cursos, query, soloDestacados]);

  const clearFilters = () => {
    setQuery("");
    setSoloDestacados(false);
  };

  const hasActiveFilters = query.trim() !== "" || soloDestacados;

  return (
    <section
      id="todos-los-cursos"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
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
            — Catálogo completo
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--color-cream)",
              lineHeight: 1.1,
              margin: "0 0 2rem",
            }}
          >
            Todos los Cursos
          </h2>

          {/* Filter bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            {/* Search input */}
            <div style={{ position: "relative", flex: "1", minWidth: "240px", maxWidth: "420px" }}>
              <span
                style={{
                  position: "absolute",
                  left: "0.9rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-text-muted)",
                  fontSize: "0.85rem",
                  pointerEvents: "none",
                }}
              >
                ⌕
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar cursos..."
                style={{
                  width: "100%",
                  background: "var(--bg-card)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-cream)",
                  padding: "0.7rem 1rem 0.7rem 2.4rem",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-outfit, sans-serif)",
                  outline: "none",
                  transition: "border-color 0.2s",
                  boxSizing: "border-box",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(201,168,76,0.45)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--color-border)")
                }
              />
            </div>

            {/* Destacados toggle */}
            <button
              onClick={() => setSoloDestacados((v) => !v)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.7rem 1.2rem",
                border: soloDestacados
                  ? "1px solid var(--color-gold)"
                  : "1px solid var(--color-border)",
                background: soloDestacados ? "var(--color-gold)" : "transparent",
                color: soloDestacados ? "#0d0b0e" : "var(--color-text-muted)",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                fontWeight: soloDestacados ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "var(--font-outfit, sans-serif)",
                whiteSpace: "nowrap",
              }}
            >
              ✦ Solo destacados
            </button>

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--color-text-muted)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  letterSpacing: "0.06em",
                  fontFamily: "var(--font-outfit, sans-serif)",
                  transition: "color 0.2s",
                  padding: "0.5rem",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-gold)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-text-muted)")
                }
              >
                Limpiar filtros ×
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        {cursos.length > 0 && (
          <p
            style={{
              color: "var(--color-text-dim)",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              marginBottom: "1.5rem",
            }}
          >
            {filtrados.length} curso{filtrados.length !== 1 ? "s" : ""}{" "}
            {hasActiveFilters ? "encontrado" + (filtrados.length !== 1 ? "s" : "") : "disponible" + (filtrados.length !== 1 ? "s" : "")}
          </p>
        )}

        {/* Cards or empty state */}
        {filtrados.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "5rem 2rem",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "3rem",
                color: "var(--color-text-muted)",
                marginBottom: "1rem",
                opacity: 0.5,
              }}
            >
              ☽
            </div>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              {cursos.length === 0
                ? "Aún no hay cursos disponibles. ¡Vuelve pronto!"
                : "No encontramos cursos con esa búsqueda."}
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                style={{
                  background: "none",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-gold)",
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-outfit, sans-serif)",
                  transition: "border-color 0.2s",
                }}
              >
                Limpiar filtros
              </button>
            )}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {filtrados.map((curso) => (
              <CursoCard key={curso.slug} curso={curso} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
