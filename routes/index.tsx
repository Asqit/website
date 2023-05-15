import { About, Contact, Footer, Hero } from "../components/index.ts";
import Navbar from "../islands/Navbar.tsx";
import Projects from "../islands/Projects.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
