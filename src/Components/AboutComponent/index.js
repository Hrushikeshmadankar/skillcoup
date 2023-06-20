/** @format */

import React from "react";
import Footer from "../Footer/Footer";
import HeaderComponent from "../Header";
import Buttons from "../Home/Buttons";

import "./index.css";

const AboutComponent = () => {
  const inviteBg = {
    backgroundImage:
      "url('https://res.cloudinary.com/skillcoup/image/upload/v1661935586/about_us/invite_bg_dm9b8f.png')",
  };
  return (
    <>
      <HeaderComponent />
      <div className="about-us-intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 left">
              <img
                className="img"
                src="https://res.cloudinary.com/skillcoup/image/upload/v1661930393/about_us/about-intro_bjozog_noijxo.png"
                alt="about-us-intro"
              />
            </div>
            <div className="col-lg-6 right">
              <h1>
                We believe in the importance of hustle and making students &
                young professionals self-reliant
              </h1>
              <h4>India ka apna freelancing platform</h4>
              <div className="d-flex content btn-lg float-end">
                <Buttons buttonText={"Get it Now"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-content">
        <div className="container">
          <div className="row text-center">
            <h3>About Us</h3>
          </div>
        </div>
        <div className="container content">
          <div className="row centered">
            <p>
              Our vision for Skillcoup is to provide a dynamic and easy to use
              platform for professionals to monetize their skills and work with
              renowned clients on their terms.
            </p>
            <p>
              We aim to generate work opportunities for the youth and provide
              skilled labour to clients so that all the stakeholders involved
              can grow together in a mutually beneficial arrangement.
            </p>
            <p>
              At Skillcoup, we pride ourselves in creating a safe and engaging
              atmosphere to nurture young professionals as well as provide ample
              opportunities for our clients to get their work done at an
              affordable price to make their balance sheet brighter, so{" "}
            </p>
            <p className="bold">Everyone Wins!</p>
            <p>And we would be more happier to make this dream come true</p>
          </div>
        </div>
      </div>
      <div className="about-us-invite" style={inviteBg}>
        <div className="text-content white-font">
          <div className="container">
            <div className="row centered">
              <h2>
                We invite you to join us in a Freelance Revolution for the
                Indian youth, providing them opportunities to work with clients
                across the globe.
              </h2>
              <div className="d-flex content btn-lg">
                <Buttons buttonText={"Get it Now"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-25">
        <Footer />
      </div>
    </>
  );
};

export default AboutComponent;
