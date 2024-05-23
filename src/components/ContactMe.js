
import React from 'react';
import './ContactMe.css'; 

function ContactMe() {
  return (
    <div className="contact-section" id='contactme'>
      <h2>Contact Me</h2>
      <p>Feel free to reach out if you have any questions or inquiries. I'd love to hear from you!</p>
      <div className="contact-details">
        <p>Email: <a href="mailto:himanshu32428@gmail.com">himanshu32428@gmail.com</a></p>
        <p>Phone: <a href="tel:+919306748005">+91 9306748005</a></p>
      </div>
    </div>
  );
}

export default ContactMe;
