import { Handlers, Status } from "$fresh/server.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

interface Payload {
  mail: string;
  message: string;
}

export const handler: Handlers = {
  async POST(req: Request) {
    const env = config();

    const { ntfy_topic } = env;

    const payload: Payload | undefined = await req.json();

    if (payload) {
      try {
        await fetch(`https://ntfy.sh/${ntfy_topic}`, {
          method: "POST",
          body: JSON.stringify({
            title: `Portfolio: New message from ${payload.mail}`,
            message: payload.message,
          }),
        });

        return new Response("", { status: Status.OK });
      } catch {
        return new Response("", { status: Status.BadRequest });
      }
    }

    return new Response("", { status: Status.NoContent });
  },
};
