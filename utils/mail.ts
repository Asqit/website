import {
  ConnectConfigWithAuthentication,
  SmtpClient,
} from "https://deno.land/x/smtp/mod.ts";
import { load } from "https://deno.land/std@0.188.0/dotenv/mod.ts";

const client = new SmtpClient();

const { SEND_EMAIL, PWD, RECV_EMAIL } = Deno.env.toObject();

const connectConfig: ConnectConfigWithAuthentication = {
  hostname: "smtp.gmail.com",
  port: 465,
  username: Deno.env.get("SEND_EMAIL")!,
  password: Deno.env.get("PWD")!,
};

export async function sendMail() {
  console.log("started");

  try {
    await load();
    await client.connectTLS(connectConfig);

    await client.send({
      from: Deno.env.get("SEND_EMAIL")!,
      to: Deno.env.get("RECV_EMAIL")!,
      subject: "Welcome!",
      content: "Hi from deno!",
    });

    await client.close();
  } catch (error) {
    console.log(error);
  }
}
