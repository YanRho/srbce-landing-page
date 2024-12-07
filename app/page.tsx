import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Gallery from "@/components/sections/gallery";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Gallery/>
    <Services/>
    <Contact/>
    </>

  );
}
