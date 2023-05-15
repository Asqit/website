import ContactForm from "../../islands/ContactForm.tsx";
import { SectionTitle } from "../section-title/SectionTitle.tsx";

export function Contact() {
  return (
    <section className={"bg-background-0 py-8"}>
      <div
        className={"container mx-auto max-w-7xl p-8 text-white "}
      >
        <SectionTitle value="Contact" />
        <div>
          <div className={"bg-orange-400 text-white rounded-md my-4 p-4"}>
            <h3 className={"font-bold text-xl"}>Warning</h3>
            <p>Sending emails is temporarily not working.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
