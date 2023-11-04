import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xqknoyrn");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <form className="form-object" onSubmit={handleSubmit}>
      <input
        className="form-email"
        placeholder="Your Email"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className="form-body"
        placeholder="Your Message"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="button" type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}

export default ContactForm;
