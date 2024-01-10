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
    <div className="container-fluid d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
      <div className="d-flex flex-column justify-content-center align-items-center w-md-75 w-100 px-md-4 px-0 mx-auto">
        <span className="pro-bono-title text-center px-md-4 px-0 mx-md-4 mx-auto">
          #LifeatHASLAW
        </span>
        <span className="pro-bono-title">
          HAS Attorneys at Law{" "}
          <span style={{ color: "#515A5F", fontWeight: 400 }}>
            believes in the power of a team; therefore, we only select
            candidates with outstanding performance in school yet have good
            personalities and behavior Our team comprises of Senior Partner,
            Partner, Mid-Associate, Junior Associate, Associate, and Paralegal.
          </span>
        </span>
      </div>
      <div
        className="d-md-flex d-none flex-row justify-content-center align-items-center w-auto mx-auto gap-3"
        style={{ height: 343, flexShrink: 0 }}
      >
        <div className="d-flex w-50">
          <img className="d-flex img-fluid w-auto h-auto" src={imgHas} />
        </div>
        <div className="d-flex flex-column justify-content-between gap-3">
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
      <div
        className="d-flex d-md-none flex-column justify-content-center gap-2 w-100"
        style={{ height: 421 }}
      >
        <div className="d-flex w-100" style={{ height: 205 }}>
          <img className="d-flex img-fluid" src={imgHas} />
        </div>
        <div className="d-flex flex-column justify-content-between w-100 mx-auto gap-2">
          <div className="d-flex flex-row gap-2 " style={{ width: "49%" }}>
            <img className="d-flex img-fluid" src={imgHasLittle} />
            <img className="d-flex img-fluid" src={imgHasLittle} />
          </div>
          <div className="d-flex flex-row gap-2 " style={{ width: "49%" }}>
            <img className="d-flex img-fluid" src={imgHasLittle} />
            <img className="d-flex img-fluid" src={imgHasLittle} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center w-100">
        <div className="d-flex" style={{ maxWidth: 714 }}>
          <span className="pro-bono-subtitle text-center">
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
