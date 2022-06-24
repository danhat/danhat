import React, { useRef } from 'react'
import './contact.css'
// import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
// import emailData from '../../email.json'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(emailData.SERVICE_ID, emailData.TEMPLATE_ID, form.current, emailData.PUBLIC_KEY);

    emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_PUBLIC_KEY);

    alert('Message sent.')
    e.target.reset();
  };

  return (
    <section id="contact">
      
      <h2>Contact Me</h2>
      <h5>Send Me a Message</h5>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact