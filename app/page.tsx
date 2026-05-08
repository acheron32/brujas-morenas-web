import { getAllCursos, getCursosDestacados } from "../lib/cursos";
import { getNovedadesDestacadas } from "../lib/novedades";
import { getSiteConfig } from "../lib/configuracion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NovedadesDestacadas from "./components/NovedadesDestacadas";
import CursosDestacados from "./components/CursosDestacados";
import CursosBuscador from "./components/CursosBuscador";
import ProductosSection from "./components/ProductosSection";
import RitualesSection from "./components/RitualesSection";
import SobreNosotras from "./components/SobreNosotras";
import Footer from "./components/Footer";

export default function Home() {
  const cursos = getAllCursos();
  const cursosDestacados = getCursosDestacados();
  const novedadesDestacadas = getNovedadesDestacadas();
  const config = getSiteConfig();

  return (
    <>
      <Header />
      <main>
        <Hero heroImage={config.imagen_fondo_hero} heroText={config.texto_hero} />
        <NovedadesDestacadas novedades={novedadesDestacadas} />
        <CursosDestacados cursos={cursosDestacados} />
        <CursosBuscador cursos={cursos} />
        <ProductosSection />
        <RitualesSection />
        <SobreNosotras />
      </main>
      <Footer />
    </>
  );
}
