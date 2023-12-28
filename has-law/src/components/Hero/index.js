import React from "react";
import { Button } from "reactstrap";
import HeroIc from "../../assets/heroImage.png";
import { useNavigate } from "react-router-dom";
import { ArrowDownCircle } from "react-feather";

const Hero = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-column hero-background justify-content-end align-items-center"
      style={{
        height: 600,
        top: 0,
        position: "relative",
      }}
      id={id}
    >
      <div className="d-flex d-md-none w-100 px-4">
        <img src={HeroIc} className=" d-flex cover w-100 h-100" alt="hero-ic" />
      </div>
      <div className="d-flex justify-content-center align-items-center w-full">
        <ArrowDownCircle
          color="white"
          style={{ strokeWidth: 1, cursor: "pointer" }}
          width={63}
          height={63}
        />
      </div>
      <div className="d-flex flex-row bg-black justify-content-between">
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
          <span className="text-hero">PERSERVERANCE LAWYERS</span>
        </div>
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ width: "33%", padding: 32 }}
        >
          <span className="text-hero">SEE NEW POSSIBILITIES</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
