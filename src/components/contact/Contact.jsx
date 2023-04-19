import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { message } from "antd";
import 'antd/lib/message/style/index.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_i6px1lb",
      "template_53s4k27",
      form.current,
      "W9AS5xSJ57ej-IboN"
    );

    e.target.reset();
    message.success("Message has been sent");

  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hoanglg.work@gmail.com</h5>
            <a href="mailto:hoanglg.work@gmail.com" rel="noreferrer" target={"_blank"}>
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Lý Gia Hoàng</h5>
            <a href="https://m.me/hoanglg.work/" rel="noreferrer" target={"_blank"}>
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>0384038100</h5>
            <a href="tel:0384038100">Call</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
