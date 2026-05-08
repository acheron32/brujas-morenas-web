import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brujas Morenas - Cursos de Magia y Esoterismo",
  description: "Descubre el poder de la magia ancestral. Cursos, rituales y conocimiento místico para las brujas del siglo XXI.",
  keywords: "brujas, magia, cursos, esoterismo, hechizos, rituales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen antialiased">{children}


<script
  dangerouslySetInnerHTML={{
    __html: `
      // Cargar el widget de Netlify Identity
      (function() {
        var script = document.createElement('script');
        script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
        document.head.appendChild(script);
        
        // Escuchar el evento de login para redirigir al admin
        window.addEventListener('load', function() {
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on('init', function(user) {
              if (!user) {
                window.netlifyIdentity.on('login', function() {
                  document.location.href = '/admin/';
                });
              }
            });
          }
        });
      })();
    `
  }}
/>






      </body>
    </html>
  );
}