import { Handlers, Status } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { load } from "std";

interface Payload {
  email: string;
  message: string;
}

export const handler: Handlers = {
  async POST(req: Request) {
    await load();

    const { username, password, service, port } = Deno.env.toObject();

    const client = new SMTPClient({
      connection: {
        hostname: service,
        port: Number(port),
        tls: true,
        auth: {
          username: username,
          password: password,
        },
      },
    });

    const payload: Payload | undefined = await req.json();

    console.log(username, password, service, port);
    console.log(payload);

    if (payload) {
      try {
        await client.send({
          from: username,
          to: "ondrejtucek9@gmail.com",
          subject: `New email from ${payload.email}`,
          content: payload.message,
        });

        await client.close();

        return new Response("", { status: Status.OK });
      } catch (e) {
        console.log(e);
        return new Response("", { status: Status.BadRequest });
      }
    }
    return new Response("", { status: Status.NoContent });
  },
};
