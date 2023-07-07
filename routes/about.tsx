import { About, Footer } from "../components/index.ts";
import Navbar from "../islands/Navbar.tsx";

export default function AboutRoute() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
