import { FaSpinner } from "react-icons/fa";
import { Button } from "../components/index.ts";
import { useCallback, useState } from "preact/hooks";

interface EmailPayload {
  email: string;
  message: string;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [payload, setPayload] = useState<EmailPayload>({
    email: "",
    message: "",
  });

  const handleChange = useCallback((e: any) => {
    const target = e.currentTarget;
    const value = target.value;
    const name = target.name;

    setPayload({
      ...payload,
      [name]: value,
    });
  }, []);

  const handleSubmit = useCallback(async (event: Event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          mail: payload.email,
          message: payload.message,
        }),
      });

      if (response.status !== 200) {
        throw new Error();
      }

      setIsSuccess(true);
      setIsLoading(false);
    } catch (_) {
      setError("An error occurred while sending your email");
    }
  }, [payload]);

  return (
    <form method={"POST"} onSubmit={handleSubmit}>
      {isSuccess
        ? (
          <span
            className={"bg-primary-10 text-white p-2 block rounded-md my-3 font-bold"}
          >
            Email was successfully sent
          </span>
        )
        : null}
      {error
        ? (
          <span
            className={"bg-red-700 text-white p-2 block rounded-md my-3 font-bold"}
          >
            {error}
          </span>
        )
        : null}
      {isLoading
        ? <FaSpinner className={"animate-spin my-4 text-3xl mx-auto"} />
        : (
          <>
            <div className={"flex flex-col gap-3 my-3"}>
              <label className={"text-slate-200"} htmlFor={"email"}>
                Email Address
              </label>
              <input
                type="email"
                value={payload.email}
                className={"input"}
                id="email"
                name="email"
                required
              />
              {emailError
                ? <span className={"text-red-400"}>{emailError}</span>
                : null}
            </div>

            <div className={"flex flex-col gap-3 my-3"}>
              <label className={"text-slate-200"} htmlFor={"message"}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={"input min-h-[100px] resize-y"}
                value={payload.message}
                minLength={12}
                required
              />
              {messageError
                ? <span className={"text-red-400"}>{messageError}</span>
                : null}
            </div>

            <Button type="submit" className={"w-full my-3"}>Send</Button>
          </>
        )}
    </form>
  );
}
