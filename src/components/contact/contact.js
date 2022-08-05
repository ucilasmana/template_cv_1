import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const setToast=document.getElementById("toast");

    emailjs.sendForm('service_nhoc55e', 'template_yukpjua', form.current, 'uDdIt5xCHcgSJVtVp').then((result) => {

      setToast.className="show";
      setToast.innerHTML="Your message has been sent";
      setTimeout(function(){ setToast.className = setToast.className.replace("show", ""); }, 3000);    

           },
     (error) => {
      setToast.className="show";
      setToast.innerHTML="Your message cannot been sent";
      setTimeout(function(){ setToast.className = setToast.className.replace("show", ""); }, 3000);    

  });
    e.target.reset();
   };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div id="toast"></div>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>johndoe@gmail.com</h5>
            <a className='btn btn-primary' href='mailto:john.doe@gmail.com'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>johndoe</h5>
            <a className='btn btn-primary' href='https://www.instagram.com/' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+12345678</h5>
            <a className='btn btn-primary' href='https://api.whatsapp.com/send?phone++12345678' target='_blank'>Send a Message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>

  )
}

export default Contact