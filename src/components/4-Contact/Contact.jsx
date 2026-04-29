import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

import doneAnimation from "../../components/Animation/done.json";
import emailAnimation from "../../components/Animation/Contact3.json";

import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("xqakvpeq");

  const doneRef = useRef(null);
  const emailRef = useRef(null);

  // Animation للإيميل
  useEffect(() => {
    const emailAnim = lottie.loadAnimation({
      container: emailRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: emailAnimation,
    });

    return () => emailAnim.destroy();
  }, []);

  // Animation النجاح (يشتغل فقط عند الإرسال)
  useEffect(() => {
    if (state.succeeded && doneRef.current) {
      const doneAnim = lottie.loadAnimation({
        container: doneRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: doneAnimation,
      });

      return () => doneAnim.destroy();
    }
  }, [state.succeeded]);

  return (
    <section className="contact-us">
      <h1 className="title">
        <FaEnvelope className="icon" />
        Contact us
      </h1>

      <p className="sub-title">
        Contact Lorem ipsum dolor sit amet consectetur...
      </p>

      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="submit"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p className="flex">
              <div
                ref={doneRef}
                style={{ height: "50px", marginTop: "6px" }}
              />
              <span>your message has been sent successfully</span>
            </p>
          )}
        </form>

        <div className="animation">
          <div
            ref={emailRef}
            style={{ width: 300, height: 300 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;