import { PageProps } from "$fresh/server.ts";
import { About, Contact, Footer, Hero, Projects } from "../components/index.ts";
import MouseFollower from "../islands/MouseFollower.tsx";
import Navbar from "../islands/Navbar.tsx";
import { GitHubRepo } from "../islands/SimpleProject.tsx";

export default function Home({ data }: PageProps<GitHubRepo[] | null>) {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <MouseFollower />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
