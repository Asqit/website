import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "../components/index.ts";

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
