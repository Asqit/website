import { Handlers, Status } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { load } from "https://deno.land/std@0.187.0/dotenv/mod.ts";

const env = await load();

interface Payload {
  subject: string;
  message: string;
}

export const handler: Handlers = {
  async POST(request: Request) {
    const client = new SMTPClient({
      connection: {
        hostname: env["hostname"],
        port: +env["port"],

        auth: {
          username: env["username"],
          password: env["password"],
        },
      },
    });

    const payload: Payload | undefined = await request.json();

    if (payload) {
      try {
        await client.send({
          from: "ondrejtucek9@gmail.com",
          to: "ondrejtucek9@gmail.com",
          subject: `${payload.subject}`,
          content: payload.message,
        });

        await client.close();

        return new Response("", { status: Status.OK });
      } catch (e) {
        return new Response("", { status: Status.BadRequest });
      }
    }

    return new Response("", { status: Status.NoContent });
  },
};
