import { Handlers, Status } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

interface Payload {
  mail: string;
  message: string;
}

export const handler: Handlers = {
  async POST(req: Request) {
    const env = config();

    const { username, password, service, port, target } = env;

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

    if (payload) {
      try {
        await client.send({
          from: username,
          to: target,
          subject: `New email from ${payload.mail}`,
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
