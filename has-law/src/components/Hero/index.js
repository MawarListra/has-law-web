import React, { useEffect } from "react";
import { Button } from "reactstrap";
import HeroIc from "../../assets/heroImage.png";
import { useNavigate } from "react-router-dom";
import { ArrowDownCircle } from "react-feather";
import VideoHero from "../../assets/hero_video.mp4";

const Hero = ({ id, scrollToDiv }) => {
  const navigate = useNavigate();

  return (
    <div className="hero-background" style={{}} id={id}>
      <video
        className="d-md-flex d-none"
        id="heroVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={VideoHero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="d-flex flex-column justify-content-md-end justify-content-start align-items-center hero-div w-100">
        <div className="d-flex d-md-none w-100 h-100">
          <video id="heroVideo" autoPlay muted loop playsInline>
            <source src={VideoHero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="d-md-flex d-none justify-content-center align-items-center w-full">
          <ArrowDownCircle
            color="white"
            style={{ strokeWidth: 1, cursor: "pointer" }}
            width={63}
            height={63}
            onClick={scrollToDiv}
          />
        </div>
        <div className="d-md-flex d-none flex-row bg-black justify-content-between w-100">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "33%", padding: 32 }}
          >
            <span className="text-hero">UNDERSTANDING YOUR VALUE</span>
          </div>
          <div
            className="d-flex justify-content-center align-items-center "
            style={{
              width: "33%",
              borderLeft: "1px solid #515A5F",
              borderRight: "1px solid  #515A5F",
              padding: 32,
            }}
          >
            <span className="text-hero">PERSEVERANCE LAWYERS</span>
          </div>
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ width: "33%", padding: 32 }}
          >
            <span className="text-hero">SEE NEW POSSIBILITIES</span>
          </div>
        </div>

        <div className="d-flex d-md-none flex-column bg-black justify-content-center align-items-center w-100">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100%", padding: 24 }}
          >
            <span className="text-hero">UNDERSTANDING YOUR VALUE</span>
          </div>
          <div className="d-md-none d-flex w-25 justify-content-center align-items-center border-bottom"></div>
          <div
            className="d-flex justify-content-center align-items-center "
            style={{
              width: "100%",
              padding: 24,
            }}
          >
            <span className="text-hero">PERSEVERANCE LAWYERS</span>
          </div>
          <div className="d-md-none d-flex w-25 justify-content-center align-items-center border-bottom"></div>

          <div
            className="d-flex justify-content-center align-items-center "
            style={{ width: "100%", padding: 24 }}
          >
            <span className="text-hero">SEE NEW POSSIBILITIES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
