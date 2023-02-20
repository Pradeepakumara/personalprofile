import './contact.css';
import emailjs from '@emailjs/browser'

import React, { useRef } from 'react'

const Contact = () => {

    const refForm = useRef()


        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_252sof4', 'template_tltlhr9', refForm.current, '87sHwujXpbYexvWzx')
              .then((result) => {
                alert("Message sent successfully")
                window.location.reload(false)
                  console.log(result.text);
              }, (error) => {
                alert("Failed to send the message")
                  console.log(error.text);
              });
          };

  return (
    <div className='contact-section' id='contact'>
        <h1 className='contact-title'>Contact Me</h1>
        <div className='conatct-line'></div>
        <div className="contact-container">
        <div className='contact-img contact-item'>
            <img src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=600" alt="contact" />
        </div>
        <form ref={refForm} onSubmit={sendEmail} className="contact-item" >
            <label htmlFor="name">Full Name</label>
            <input type="text" name='name' id='name' required placeholder='full name'/>

            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' required placeholder='email'/>

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name='phone' id='phone' required placeholder='phone'/>

            <label htmlFor="msg">Message</label>
            <textarea name='message' id="msg" required placeholder='type a message ....'></textarea>

            <button type='submit'>send</button>
        </form>
        </div>
        
    </div>
  )
}

export default Contact