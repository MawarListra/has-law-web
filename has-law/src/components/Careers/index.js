import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import imgHas from "../../assets/Gambar Has.png";
import imgHasLittle from "../../assets/Gambar Has (1).png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Careers = () => {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
      <div className="d-flex flex-column justify-content-center align-items-center w-75 px-4 mx-auto">
        <span className="text-title-section text-center px-4 mx-4">
          #LifeatHASLAW
        </span>
        <span
          className="text-center"
          style={{
            color: "#515A5F",
            fontFamily: "Montserrat",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "0.5px",
          }}
        >
          <span style={{ color: "#F00", fontWeight: 700 }}>
            HAS Attorneys at Law
          </span>{" "}
          believes in the power of a team; therefore, we only select candidates
          with outstanding performance in school yet have good personalities and
          behavior Our team comprises of Senior Partner, Partner, Mid-Associate,
          Junior Associate, Associate, and Paralegal.
        </span>
      </div>
      <div
        className="d-flex flex-row justify-content-center align-items-cenetr gap-3"
        style={{ height: 343 }}
      >
        <div className="d-flex w-50">
          <img className="d-flex" src={imgHas} />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex flex-row gap-3">
            <img className="d-flex w-auto" src={imgHasLittle} />
            <img className="d-flex w-auto" src={imgHasLittle} />
          </div>
          <div className="d-flex flex-row gap-3">
            <img className="d-flex w-auto" src={imgHasLittle} />
            <img className="d-flex w-auto" src={imgHasLittle} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center w-100">
        <div className="d-flex w-50">
          <span
            className="text-center"
            style={{
              color: "#292D32",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "23px",
              letterSpacing: "0.5px",
            }}
          >
            <span
              style={{
                color: "#F00",
              }}
            >
              If you asked us “Who’s the boss?”
            </span>{" "}
            At HAS Attorneys at Law, our answer would always be “Our client”.
            Every personnel at HAS Attorneys at Law works toward achieving the
            goal for the client’s best interest.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Careers;
