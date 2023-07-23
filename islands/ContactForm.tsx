import { useCallback, useState } from "preact/hooks";
import { Button, Spinner } from "../components/index.ts";

interface EmailPayload {
  email: string;
  message: string;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [payload, setPayload] = useState<EmailPayload>({
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const target = e.currentTarget;
    const value = target.value;
    const name = target.name;

    setPayload({
      ...payload,
      [name]: value,
    });
  };

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

      if (response.status !== 200) throw Error;

      setIsSuccess(true);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
    }
  }, [payload]);

  return (
    <form
      className={"flex flex-col gap-3"}
      onSubmit={handleSubmit}
      method={"POST"}
    >
      {isSuccess
        ? (
          <h2
            className={"bg-primary-10 text-white p-8 rounded-md font-black text-3xl"}
          >
            Success
          </h2>
        )
        : null}
      {isError
        ? (
          <h2
            className={"bg-red-600 text-white p-8 rounded-md font-black text-3xl"}
          >
            Error
          </h2>
        )
        : null}
      {isLoading ? <Spinner /> : null}
      <label className={"text-slate-400"} htmlFor={"email"}>
        Email
      </label>
      <input
        className={"input"}
        type="text"
        id="email"
        value={payload.email}
        name={"email"}
        onChange={handleChange}
        required
      />

      <label className={"text-slate-400"} htmlFor={"message"}>
        Message
      </label>
      <textarea
        className={"input min-h-[100px]"}
        name={"message"}
        value={payload.message}
        onChange={handleChange}
        id={"message"}
        minLength={12}
        required
      >
      </textarea>
      <Button type="submit" className={"mt-4"}>send</Button>
    </form>
  );
}
