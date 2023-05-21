import { Button } from "../components/button/Button.tsx";
import { FaSpinner } from "react-icons/fa";
import { useCallback, useState } from "preact/hooks";

interface EmailPayload {
  email: string;
  message: string;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
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
      {isLoading
        ? (
          <div className={"flex items-center justify-center"}>
            <FaSpinner className={"text-4xl animate-spin text-white"} />
          </div>
        )
        : null}
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
        required
      >
      </textarea>
      <Button type="submit" className={"mt-4"}>send</Button>
    </form>
  );
}
