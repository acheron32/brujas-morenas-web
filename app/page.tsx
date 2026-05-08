import { getAllCursos, getCursosDestacados } from "../lib/cursos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickAccess from "./components/QuickAccess";
import CursosDestacados from "./components/CursosDestacados";
import CursosBuscador from "./components/CursosBuscador";
import ProductosSection from "./components/ProductosSection";
import RitualesSection from "./components/RitualesSection";
import SobreNosotras from "./components/SobreNosotras";
import Footer from "./components/Footer";

export default function Home() {
  const cursos = getAllCursos();
  const cursosDestacados = getCursosDestacados();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickAccess />
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
