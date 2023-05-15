import { FormEvent, useState } from "react";
import Button from "~/components/button/Button";
import { FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type IFormData = {
  email: string;
  subject: string;
  message: string;
};

const initialFormData: IFormData = {
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const { t } = useTranslation();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <div className="flex-grow lg:bg-bg5 rounded-lg lg:p-4 lg:py-8 w-full">
      <h2 className="font-black text-3xl mb-8">{t("contact.form-title")}</h2>
      <form
        name="contact"
        method="POST"
        className="flex flex-col gap-4"
        data-netlify="true"
      >
		<input type="hidden" name="form-name" value="contact" />
        <input
          type="email"
          placeholder={String(t("contact.form-author-placeholder"))}
          className="input"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder={String(t("contact.form-subject-placeholder"))}
          className="input"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder={String(t("contact.form-message-placeholder"))}
          className="input resize-y h-20 max-h-60"
          name="message"
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.currentTarget.name]: e.currentTarget.value,
            })
          }
          required
        />
        <Button Icon={FaPaperPlane} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}
