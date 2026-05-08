"use client";

import { useState } from "react";
import type { FotoGaleria } from "../../lib/galeria";

interface Props {
  fotos: FotoGaleria[];
}

export default function GaleriaGrid({ fotos }: Props) {
  const [active, setActive] = useState<{ img: string; titulo: string } | null>(null);

  return (
    <>
      <div className="galeria-grid">
        {fotos.map((foto) => (
          <button
            key={foto.slug}
            className="galeria-item"
            onClick={() => setActive({ img: foto.imagen, titulo: foto.titulo })}
            aria-label={`Ver foto: ${foto.titulo || foto.slug}`}
          >
            {foto.imagen && <img src={foto.imagen} alt={foto.titulo} loading="lazy" />}
            <div className="galeria-overlay">
              {foto.titulo && <span className="galeria-titulo">{foto.titulo}</span>}
              {foto.categoria && <span className="galeria-cat">{foto.categoria}</span>}
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="lb-backdrop" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={() => setActive(null)} aria-label="Cerrar">✕</button>
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={active.img} alt={active.titulo} />
            {active.titulo && <p className="lb-caption">{active.titulo}</p>}
          </div>
        </div>
      )}

      <style>{`
        .galeria-grid {
          columns: 2;
          column-gap: 1rem;
        }
        @media (min-width: 640px)  { .galeria-grid { columns: 3; } }
        @media (min-width: 1024px) { .galeria-grid { columns: 4; } }
        .galeria-item {
          display: block;
          position: relative;
          overflow: hidden;
          margin-bottom: 1rem;
          break-inside: avoid;
          background: none;
          border: 1px solid var(--color-border);
          cursor: pointer;
          padding: 0;
          width: 100%;
          transition: border-color 0.3s;
        }
        .galeria-item:hover { border-color: var(--color-border-hover); }
        .galeria-item img {
          width: 100%;
          display: block;
          transition: transform 0.5s ease;
        }
        .galeria-item:hover img { transform: scale(1.04); }
        .galeria-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(13,11,14,0.8) 0%, transparent 55%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0.85rem;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .galeria-item:hover .galeria-overlay { opacity: 1; }
        .galeria-titulo {
          color: var(--color-cream);
          font-size: 0.78rem;
          font-weight: 400;
          display: block;
        }
        .galeria-cat {
          color: var(--color-gold);
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: block;
          margin-top: 0.2rem;
        }
        .lb-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(7,5,9,0.92);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          backdrop-filter: blur(8px);
        }
        .lb-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: 1px solid var(--color-border);
          color: var(--color-cream-muted);
          width: 2.5rem;
          height: 2.5rem;
          cursor: pointer;
          font-size: 1rem;
          transition: border-color 0.2s, color 0.2s;
        }
        .lb-close:hover { border-color: var(--color-gold); color: var(--color-gold); }
        .lb-content {
          max-width: 900px;
          width: 100%;
          text-align: center;
        }
        .lb-content img {
          max-height: 80vh;
          max-width: 100%;
          object-fit: contain;
          display: block;
          margin: 0 auto;
        }
        .lb-caption {
          color: var(--color-cream-muted);
          font-size: 0.85rem;
          margin-top: 1rem;
          font-weight: 300;
        }
      `}</style>
    </>
  );
}
