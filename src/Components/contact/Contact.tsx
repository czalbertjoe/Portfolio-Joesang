import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_rru22wu', 
      'template_76i2sw9', 
      form.current, 
      'lpVAfG04otitBv-JV'
      )
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get in touch</h2>
      <span className="section-subtitle">Contact Me</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3> 0
          <div className="contact-info">
            <div className="contant-card">
              <i className="bx bx-mail-send contact-card-icon"></i>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">joe.chang.9696@gmail.com</span>
              <a
                href="mailto:joe.chang.9696@gmail.com"
                className="contact-button"
              >
                Write me{' '}
                <i className="bx bx-mail-send bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>

            <div className="contant-card">
              <i className="bx bxl-whatsapp contact-card-icon"></i>

              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">506-8958-2947</span>
              <a
                href="https://api.whatsapp.com/send?phone=50689582947&text=Hello, more information!"
                className="contact-button"
              >
                Write me{' '}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>

            <div className="contant-card">
              <i className="bx bxl-messenger contact-card-icon"></i>

              <h3 className="contact-card-title">Messenger</h3>
              <span className="contact-card-data">Chang Joesang</span>
              <a href="https://www.messenger.com/t/100001910748442" className="contact-button">
                Write me{' '}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Insert your email"
                required
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Write your project"
                required
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;