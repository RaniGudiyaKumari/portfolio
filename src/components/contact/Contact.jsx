import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  {useRef } from 'react';
import emailjs from 'emailjs-com'

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ujgvgag', 'template_elza6yf', form.current, 'BLIbwDQERA_ZS1fs1')

    e.target.reset()
     
  };

  return (
    <section id='contact'>
   <h5>Get In Touch</h5>
   <h2>Contact Me</h2>

   <div className="container contact__container">
    <div className="contact__options">
    <article className="contact__option">
    <MdOutlineMail className='contact__option-icon'/>
    <h4> Email</h4>
    <h5>ranigudiya9852@gmail.com</h5>
  <a href="https://mail.google.com/mail/u/0/?tab" target="_blank" >Send a massege</a>
    </article>
    <article className="contact__option">
    <BsMessenger className='contact__option-icon'/>
    <h4> Messenger</h4>
    <h5>Gudiya</h5>
    <a href="https://m.me/rani.gudiya.737" target="_blank" >Send a massege</a>
    </article>
   <article className="contact__option">
    <BsWhatsapp className='contact__option-icon' />
    <h4> WhatsApp</h4>
    <h5>+916202806263</h5>
    <a href="https://api.whatsapp.com/send?phone=+916202806263" target="_blank">Send a massege</a>
  </article>
    </div>
     
     {/*===========END OF CONTACT OPTIONS============ */}

     <form ref={form} onSubmit={ sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required/>
      <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
     </form>
   </div>
      </section>
  )
}

export default Contact