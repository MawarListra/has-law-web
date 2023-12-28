import React from "react";
import { ArrowRight } from "react-feather";
import image1 from "../../assets/services1.png";
import image2 from "../../assets/services2.png";

const Services = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
      <div className="d-flex justify-content-center align-items-center w-100">
        <span className="text-title-section">
          Focused Initiatives to Better Understand Our Clients
        </span>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-start gap-5 mx-auto">
        <div className="d-flex flex-column gap-2" style={{ width: "50%" }}>
          <div
            className="d-flex w-full border-bottom pb-2"
            style={{ height: 290 }}
          >
            <img className="img-fluid" src={image1} />
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center w-100 mx-auto">
            <span className="text-title-services">
              Dispute Resolution Practices
            </span>
            <ArrowRight
              style={{ strokeWidth: 1, color: "#F00", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="d-flex flex-column gap-2" style={{ width: "50%" }}>
          <div
            className="d-flex w-full border-bottom pb-2"
            style={{ height: 290 }}
          >
            <img className="img-fluid" src={image2} />
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center w-100 mx-auto">
            <span className="text-title-services">
              Corporate and Commercial Services
            </span>
            <ArrowRight
              style={{ strokeWidth: 1, color: "#F00", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
