import { Button } from "../components/button/Button.tsx";
import { FaSpinner } from "react-icons/fa";
import { useState } from "preact/hooks";

interface EmailPayload {
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [payload, setPayload] = useState<EmailPayload>({
    subject: "",
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <form className={"flex flex-col gap-3"} onSubmit={handleSubmit}>
      {isLoading
        ? (
          <div className={"flex items-center justify-center"}>
            <FaSpinner className={"text-4xl animate-spin text-white"} />
          </div>
        )
        : null}
      <label className={"text-slate-400"} htmlFor={"subject"}>
        Subject
      </label>
      <input
        className={"input"}
        type="text"
        id="subject"
        value={payload.subject}
        name={"subject"}
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
