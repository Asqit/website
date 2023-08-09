import {
  About,
  Contact,
  Footer,
  Hero,
  Projects,
  Skills,
} from "../components/index.ts";
import Navbar from "../islands/Navbar.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
