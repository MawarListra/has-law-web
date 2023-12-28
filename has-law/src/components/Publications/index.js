import moment from "moment";
import React from "react";
import { ArrowRight } from "react-feather";
import { Button } from "reactstrap";
import image1 from "../../assets/services1.png";
import image2 from "../../assets/services2.png";

const Publications = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
      <div className="d-flex justify-content-center align-items-center w-100">
        <span className="text-title-section">Publications</span>
      </div>
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-row justify-content-between align-items-start gap-5 mx-auto">
          <div className="d-flex flex-column gap-2" style={{ width: "50%" }}>
            <div className="d-flex w-full " style={{ height: 290 }}>
              <img className="img-fluid" src={image1} />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start w-100 mx-auto">
              <span
                style={{
                  color: "#515A5F",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "23px",
                  letterSpacing: "0.5px",
                }}
              >
                {moment().format("DD MMMM YYYY")}
              </span>
              <span className="text-title-services">
                Dispute Resolution Practices
              </span>
            </div>
          </div>
          <div className="d-flex flex-column gap-2" style={{ width: "50%" }}>
            <div className="d-flex w-full " style={{ height: 290 }}>
              <img className="img-fluid" src={image1} />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start w-100 mx-auto">
              <span
                style={{
                  color: "#515A5F",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "23px",
                  letterSpacing: "0.5px",
                }}
              >
                {moment().format("DD MMMM YYYY")}
              </span>
              <span className="text-title-services">
                Dispute Resolution Practices
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-start gap-5 mx-auto">
          <div className="d-flex flex-column gap-2" style={{ width: "50%" }}>
            <div className="d-flex w-full " style={{ height: 290 }}>
              <img className="img-fluid" src={image1} />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start w-100 mx-auto">
              <span
                style={{
                  color: "#515A5F",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "23px",
                  letterSpacing: "0.5px",
                }}
              >
                {moment().format("DD MMMM YYYY")}
              </span>
              <span className="text-title-services">
                Dispute Resolution Practices
              </span>
            </div>
          </div>
          <div className="d-flex flex-column gap-2" style={{ width: "50%" }}>
            <div className="d-flex w-full " style={{ height: 290 }}>
              <img className="img-fluid" src={image1} />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start w-100 mx-auto">
              <span
                style={{
                  color: "#515A5F",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "23px",
                  letterSpacing: "0.5px",
                }}
              >
                {moment().format("DD MMMM YYYY")}
              </span>
              <span className="text-title-services">
                Dispute Resolution Practices
              </span>
            </div>
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

export default Publications;
