"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/novedades", label: "Novedades" },
  { href: "/#cursos-destacados", label: "Cursos" },
  { href: "/tienda", label: "Tienda" },
  { href: "/rituales", label: "Rituales" },
  { href: "/galeria", label: "Galería" },
  { href: "/#nosotras", label: "Nosotras" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background: scrolled
          ? "rgba(13,11,14,0.96)"
          : "linear-gradient(to bottom, rgba(13,11,14,0.7), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled
          ? "0 1px 0 rgba(201,168,76,0.12)"
          : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── Logo ─────────────────────────────────── */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          {/* Desktop: logotipo completo SVG */}
          <img
            src="/logito2%20brujas%20morenas.svg"
            alt="Brujas Morenas"
            className="logo-desktop"
            style={{ height: "44px", width: "auto" }}
          />
          {/* Mobile: logo cuadrado */}
          <img
            src="/logocuadrado.png"
            alt="Brujas Morenas"
            className="logo-mobile"
            style={{ height: "38px", width: "auto" }}
          />
        </Link>

        {/* ── Desktop Nav ───────────────────────────── */}
        <nav
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "var(--color-cream-muted)",
                textDecoration: "none",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                fontWeight: 300,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-gold-light)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-cream-muted)")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA ───────────────────────────── */}
        <Link
          href="#cursos-destacados"
          style={{
            background: "var(--color-gold)",
            color: "#0d0b0e",
            padding: "0.55rem 1.3rem",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          className="hidden-mobile"
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.background = "var(--color-gold-light)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.background = "var(--color-gold)")
          }
        >
          Ver cursos
        </Link>

        {/* ── Mobile Hamburger ──────────────────────── */}
        <button
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
          className="show-mobile"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "var(--color-gold)",
                transformOrigin: "center",
                transition: "transform 0.25s, opacity 0.25s",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4.5px, 4.5px)"
                      : i === 1
                      ? "scaleX(0)"
                      : "rotate(-45deg) translate(4.5px, -4.5px)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile Menu ───────────────────────────── */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(20,16,24,0.98)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid var(--color-border)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
          className="show-mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                color: "var(--color-cream)",
                textDecoration: "none",
                fontSize: "1.35rem",
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontWeight: 400,
                letterSpacing: "0.05em",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#cursos-destacados"
            onClick={closeMenu}
            style={{
              background: "var(--color-gold)",
              color: "#0d0b0e",
              padding: "0.85rem",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: "0.5rem",
            }}
          >
            Ver cursos
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none  !important; }
          .logo-desktop  { display: block !important; }
          .logo-mobile   { display: none  !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none  !important; }
          .show-mobile   { display: flex  !important; }
          .logo-desktop  { display: none  !important; }
          .logo-mobile   { display: block !important; }
        }
      `}</style>
    </header>
  );
}
