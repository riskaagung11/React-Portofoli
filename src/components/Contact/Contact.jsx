import { useRef } from "react";
import Button from "../UI/Button/Button";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const userName = useRef();
  const userEmail = useRef();
  const message = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm("service_bg2tryc", "template_nokt2iq", form.current, "W0ZwEzwtpPjdbtgV1").then(
      (result) => {
        if (result.status === 200) {
          toast.success("Email sent successfully!");
        }
      },
      (error) => {
        console.log(error.text);
        if (error.status === 400) {
          toast.error("Message not delivered!");
        }
      }
    );

    userName.current.value = "";
    userEmail.current.value = "";
    message.current.value = "";
  };

  return (
    <section id="contact" className={styles.contact}>
      <article>
        <h2 className={styles.contact__h2}>Contact</h2>

        <div className={styles.contact__card}>
          <p className={styles.contact__title}>Send a Message</p>
          <form ref={form} onSubmit={sendEmail} className={styles.contact__form}>
            <p className={styles.contact__group}>
              <label htmlFor="name">Name</label>
              <input placeholder="" id="name" name="user_name" type="text" ref={userName} required />
            </p>
            <p className={styles.contact__group}>
              <label htmlFor="email">Email</label>
              <input placeholder="" type="email" id="email" name="user_email" ref={userEmail} required />
            </p>
            <p className={styles.contact__group}>
              <label htmlFor="comment">Message</label>
              <textarea placeholder="" id="comment" name="message" rows="5" ref={message} required></textarea>
            </p>
            <div className={styles.button}>
              <Button type="submit">Submit</Button>
              <Toaster position="top-right" containerStyle={{ top: 80 }} />
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contact;
