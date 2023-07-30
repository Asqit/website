import { About, Contact, Footer, Hero, Projects } from "../components/index.ts";
import Navbar from "../islands/Navbar.tsx";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
