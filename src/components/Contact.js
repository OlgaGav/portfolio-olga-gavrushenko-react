import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkobelg");
  if (state.succeeded) {
    return (
      <div class="alert alert-success" role="alert">
        Thank you for your message!
      </div>
    );
  }

  return (
    <div className="tab-container">
      <h2>Contact</h2>
      <p />
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/olga-gavrushenko/"
          className="contact-link"
        >
          https://www.linkedin.com/in/olga-gavrushenko/
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/OlgaGav/" className="contact-link">
          https://github.com/OlgaGav/
        </a>
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:olga.gavrushenko@gmail.com?subject=[Portfolio]%20Contact"
          className="contact-link"
        >
          Olga.Gavrushenko@gmail.com
        </a>
      </p>

      <p>
        Feel free to contact in social media, email or use form below. I will
        respond as soon as I can.
      </p>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              id="name"
              name="name"
              className="form-control"
              placeholder="ex. John Smith"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="name@example.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Your message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            className="contact-button"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
