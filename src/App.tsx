import { Hero, Contact, Projects, About, Knowledge } from "~/sections";
import { Navbar, Footer } from "~/components";

export default function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Knowledge />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
