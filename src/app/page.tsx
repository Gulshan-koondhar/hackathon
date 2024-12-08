import About from "@/components/About";
import Blog from "@/components/Blog";
import Details from "@/components/Details";
import FoodCatalog from "@/components/FoodCatalog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHome from "@/components/HeroHome";
import WhyChooseus from "@/components/WhyChooseus";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HeroHome />
        <About />
        <FoodCatalog />
        <WhyChooseus />
        <Details />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
