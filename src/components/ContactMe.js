
import React from 'react';
import './ContactMe.css'; 

function ContactMe() {
  return (
    <div className="contact-section" id='contactme'>
      <h2>Contact Me</h2>
      <p>Feel free to reach out if you have any questions or inquiries. I'd love to hear from you!</p>
      <div className="contact-details">
        <p>Email: <a href="mailto:ts706893@gmail.com">ts706893@gmail.com</a></p>
        <p>Phone: <a href="tel:+919896551314">+91 9896551314</a></p>
      </div>
    </div>
  );
}

export default ContactMe;
