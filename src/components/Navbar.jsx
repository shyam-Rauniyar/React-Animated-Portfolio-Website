import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className="container nav-bar"
     data-aos="fade-down"
     data-aos-duration="1000"
     >
        <div className="right nav-items">Developer <span>Shyam</span></div>
        <div className="left">
        <a href="#home" className="nav-items">Home</a>
        <a href="#experience" className="nav-items">Experience</a>
        <a href="#skills" className="nav-items">Skills</a>
        <a href="#projects" className="nav-items">Projects</a>
        <a href="#contact" className="nav-items">Contact</a>
        </div>
        
        
        </div> 
    </>
  )
}

export default Navbar
