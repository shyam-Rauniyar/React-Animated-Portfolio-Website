import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6"
import { MdOutgoingMail } from "react-icons/md";




const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
     <h1>CONTACT ME</h1>
     <div id="contact">
       
       <span className="contactDesc">fill out the form below to dicuss any work opportunity.</span>
       <form  className="contactForm">
        <input type="text" className="name" placeholder="Your Name"/>
        <input type="email" className="email" placeholder="Your Email"/>
        <textarea className="msg" name="message" row="5" placeholder="Your Message"></textarea>
        <button type="submit" value="send" className="submitBtn">Submit</button>
       </form>
     </div>
     
    
     <div className="contact-icon"
     data-aos="zoom-in up"
     data-aos-duration="1000"
     >
     <a href="https://www.youtube.com/watch?v=GnIHHGHvbB4" target="_blank" className="items">
      <IoLogoLinkedin className="icons"/>
     </a>
     <a href="https://www.youtube.com/watch?v=GnIHHGHvbB4" target="_blank" className="items">
      <FaSquareInstagram className="icons"/>
     </a>
     <a href="https://www.youtube.com/watch?v=GnIHHGHvbB4" target="_blank" className="items">
      <FaSquareFacebook  className="icons"/>
     </a>
     <a href="https://www.youtube.com/watch?v=GnIHHGHvbB4" target="_blank" className="items">
      <FaSquareGithub className="icons"/>
     </a>
     <a href="mailto:srauniyar890@gmail.com" target="_blank" className="items">
      <MdOutgoingMail />
     </a>
     </div>
     </div>
    </>
  )
}

export default Contact
