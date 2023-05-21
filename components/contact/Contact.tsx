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
          <div
            className={"bg-orange-700 text-white rounded-md my-4 p-4 text-lg"}
          >
            <h3 className={"font-black text-xl"}>Warning</h3>
            <p>Sending emails is temporarily not working.</p>
            <p>
              If you persist on contacting me, you can do so via envelope icon
              in the footer.
            </p>
            <details>
              <summary>details</summary>
              <p>
                Deno deploy doesn't support SMTP port 465 and so currently I am
                looking for another solution.
              </p>
              <p>Perhaps you might have a solution, that you wanna share?</p>
              <p>
                To do so, you can create a new{" "}
                <a
                  className={"link dark"}
                  rel="external"
                  href="https://github.com/Asqit/website/issues"
                  target={"_blank"}
                >
                  issue
                </a>{" "}
                on repo
              </p>
            </details>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
