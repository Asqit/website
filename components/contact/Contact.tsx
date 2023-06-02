import ContactForm from "../../islands/ContactForm.tsx";
import { SectionTitle } from "../section-title/SectionTitle.tsx";

export function Contact() {
  return (
    <section className={"bg-background-0 py-8"}>
      <div
        className={"container mx-auto max-w-7xl p-8 text-white "}
      >
        <SectionTitle value="Contact" />

        <ContactForm />
      </div>
    </section>
  );
}
