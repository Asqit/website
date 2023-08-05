import { About, Contact, Footer, Hero, Projects } from "../components/index.ts";
import Navbar from "../islands/Navbar.tsx";

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
