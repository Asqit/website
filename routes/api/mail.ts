import { Handlers, Status } from "$fresh/server.ts";

/** interface representing the email form */
interface Payload {
  mail: string;
  message: string;
}

export const handler: Handlers = {
  POST: async function (req: Request) {
    const payload: Payload = await req.json();

    if (!payload) {
      return new Response("Invalid Request", { status: Status.NoContent });
    }

    const response = await fetch(
      `https://ntfy.sh/${Deno.env.get("ntfy_topic")}`,
      {
        method: "POST",
        body: JSON.stringify({
          title: `Website: new message from ${payload.mail}`,
          body: payload.message,
        }),
      },
    );

    if (response.ok) {
      return new Response("OK", { status: Status.OK });
    }

    return new Response(response.statusText, {
      status: response.status,
    });
  },
};
