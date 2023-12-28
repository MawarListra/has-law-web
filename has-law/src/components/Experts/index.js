import React from "react";
import { ArrowRight } from "react-feather";
import { Button } from "reactstrap";
import image1 from "../../assets/experts1.png";
import image2 from "../../assets/experts2.png";
import image3 from "../../assets/experts3.png";

const Experts = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
      <div className="d-flex justify-content-center align-items-center w-100">
        <span className="text-title-section">Meet Our Experts</span>
      </div>
      <div
        className="d-flex flex-row justify-content-between align-items-end paddingComponentRight paddingComponentLeft mx-auto text-center gap-4"
        style={{ height: 300 }}
      >
        <div
          className="d-flex flex-column gap-2"
          style={{ width: "33%", position: "relative" }}
        >
          <div
            className="d-flex w-100"
            style={{ height: 290, position: "absolute" }}
          >
            <img
              className="img-fluid"
              src={image1}
              style={{ width: "100%" }}
              alt="Image"
            />
          </div>
          <div
            className="d-flex flex-column justify-content-end align-items-center w-100 position-sticky bottom-0 py-2 "
            style={{ zIndex: 999, height: 290 }}
          >
            <span
              style={{
                color: "#FFF",
                fontFamily: "Playfair Display",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "0.5px",
                wordBreak: "break-word",
              }}
            >
              YOHANNES ANDRYANUS, S.H.
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: "0.5px",
              }}
            >
              PARTNER
            </span>
          </div>
        </div>
        <div
          className="d-flex flex-column gap-2"
          style={{ width: "33%", position: "relative" }}
        >
          <div
            className="d-flex w-100"
            style={{ height: 320, position: "absolute" }}
          >
            <img className="img-fluid" style={{ width: "100%" }} src={image2} />
          </div>
          <div
            className="d-flex flex-column justify-content-end align-items-center w-100 position-sticky bottom-0 py-2 "
            style={{ zIndex: 999, height: 320 }}
          >
            <span
              style={{
                color: "#FFF",
                fontFamily: "Playfair Display",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "0.5px",
                wordBreak: "break-word",
              }}
            >
              AGUS ASKIN HARTA MULYA, S.H., M.H
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: "0.5px",
              }}
            >
              PARTNER
            </span>
          </div>
        </div>
        <div
          className="d-flex flex-column gap-2"
          style={{ width: "33%", position: "relative" }}
        >
          <div
            className="d-flex w-100"
            style={{ height: 290, position: "absolute" }}
          >
            <img className="img-fluid" style={{ width: "100%" }} src={image3} />
          </div>
          <div
            className="d-flex flex-column justify-content-end align-items-center w-100 mx-auto position-sticky bottom-0 py-2 "
            style={{ zIndex: 999, height: 290 }}
          >
            <span
              style={{
                color: "#FFF",
                fontFamily: "Playfair Display",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "0.5px",
                wordBreak: "break-word",
              }}
            >
              RIO ANDRE WINTER SIAHAAN, S.H., M.H.
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: "0.5px",
              }}
            >
              PARTNER
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-center align-items-center">
        <Button style={{ color: "#F00", borderColor: "#F00" }} outline>
          <span
            style={{
              color: "#F00",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "18px",
              fontFamily: "Playfair Display",
            }}
          >
            See More
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Experts;
