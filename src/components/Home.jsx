import Typed from "typed.js"
import React, { useEffect, useRef } from "react";
import pdf from "../pdf/shyamcv.pdf";
import hero from "./Data/hero.json";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "WELCOME TO MY PROFILE",
        "MY NAME IS SHYAM ",
        "I'M FRONDEND DEVELOPER",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left"
         data-aos="fade-up-left"
         data-aos-duration="1000"
        >
          <h1 ref={typedRef}> </h1>

          <a
            href={pdf}
            download="resume.pdf"
            className="btn btn-outline-warning my-4" 
          >
            Download Resume
          </a>
        </div>
        <div className="right"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        >
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
