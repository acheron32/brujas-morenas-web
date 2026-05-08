import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brujas Morenas — Academia de Magia Ancestral",
  description:
    "Un espacio donde la magia ancestral se encuentra con el conocimiento moderno. Cursos, rituales y acompañamiento espiritual para las brujas del siglo XXI.",
  keywords:
    "brujas, magia, cursos, esoterismo, hechizos, rituales, magia ancestral, brujería",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">
        {children}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
                document.head.appendChild(script);
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
            `,
          }}
        />
      </body>
    </html>
  );
}
