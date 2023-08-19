import { LayoutProps } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx";
import { Footer } from "../components/index.ts";

export default function DefaultLayout(props: LayoutProps) {
  const { Component } = props;

  return (
    <>
      <Navbar />
      <Component />
      <Footer />
    </>
  );
}
