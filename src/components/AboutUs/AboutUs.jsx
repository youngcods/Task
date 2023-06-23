import React from "react";
import { useNavigate } from "react-router-dom";
import "./aboutus.css";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="aboutus-container">
        <div className="title-box">
          <h1>Just save it, let us do the rest.</h1>
        </div>

        <div className="about-logo" onClick={() => navigate("/")}>
          <img src={process.env.PUBLIC_URL + "/logo-notbg.png"} alt="Logo" />
          <p>May 20, 2023</p>
        </div>

        <div className="about-image-main">
          <img
            src="https://inspire.savee.it/content/images/size/w1000/2023/04/Just-save-it-4.png"
            alt=""
          />
        </div>

        <div className="about-text">
          A big part of our experience on SAKTA is focused on how fast the site
          can load and how good it looks, and I think this is why so many users
          love it. When you hit sakta.it, it loads fast! That's by design.
          Providing our users with a simple and beautiful place in a crowded
          World has always been top of mind for us. Every new feature we
          implement is focused on performance and how our users can find any
          inspiration they're looking for, distraction-free. This is it. Good
          inspiration will make you better at what you do. I know for a fact I
          am a better designer when I am inspired. We designed a platform
          without ads and tracking, because we believe our users should be able
          to explore creativity and culture without being sold something they
          are not interested in or having their data collected without their
          consent. Our feed is curated by humans, always with an eye on the
          World and culture, with relevant and up-to-date inspiration and we are
          constantly improving and listening to feedback from our main
          ambassadors, our users. And I thought this photo of Steve I saved
          recently from the book LoveFrom (Jony Ive design studio) just
          published this week it's a great reminder to keep pushing.
        </div>

        <div className="about-image">
          <img
            src="https://inspire.savee.it/content/images/size/w2400/2023/04/image-3.png"
            alt=""
          />
          <p>
            Steve Jobs smiling while on the phone back in 1977. Apple has always
            been a source of inspiration for us.
          </p>
        </div>

        <div className="about-text">
          Apple has always been an inspiration of constant innovation, with
          simple, beautiful, and easy-to-use products that leave you us awe at
          every interaction. As we look to scale our platform for our more than
          600,000 users, our mindset and passion has always been on building the
          best platform to save and share inspiration. We hope you enjoyed this
          This article is part of a new series that where share our journey as
          immigrants and independent founders! If you're looking for a platform
          that truly cares about providing the best possible experience, then
          SAVEE is the right place for you. Join the movement by creating your
          account. Let's continue to sakta, share and inspire each other
          together. Mr Akzhol, Mr Vlad and Mr Islam The founders SAKTA
        </div>

        <footer>
          <div className="about-logo" onClick={() => navigate("/")}>
            <img src={process.env.PUBLIC_URL + "/logo-notbg.png"} alt="Logo" />
            <p>May 20, 2023</p>
            <p>Inspire ©</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
