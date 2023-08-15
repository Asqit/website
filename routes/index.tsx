import {
  About,
  Contact,
  Footer,
  Hero,
  Projects,
  Skills,
} from "../components/index.ts";
import { Handlers, Status } from "$fresh/server.ts";
import { load } from "https://deno.land/std@0.198.0/dotenv/mod.ts";
import Navbar from "../islands/Navbar.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },

  async POST(req, ctx) {
    const form = await req.formData();
    const email = form.get("email")?.toString();
    const message = form.get("message")?.toString();
    let topic;

    if (!Deno.env.has("NTFY_TOPIC")) {
      const env = await load();
      topic = env["NTFY_TOPIC"];
    } else {
      topic = Deno.env.get("NTFY_TOPIC");
    }

    if (!email || !message || !topic) {
      return new Response(null, {
        status: Status.BadRequest,
      });
    }

    const response = await fetch(
      `https://ntfy.shs/${topic}`,
      {
        method: "POST",
        body: JSON.stringify({
          title: `Website: new message from ${email}`,
          body: message,
        }),
      },
    );

    const headers = new Headers();

    if (response.ok) {
      headers.set("location", "/contact-successful");
      return new Response("OK", { status: Status.SeeOther, headers });
    }

    headers.set("location", "/contact-failed");
    return new Response(response.statusText, {
      status: response.status,
      headers,
    });
  },
};

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
