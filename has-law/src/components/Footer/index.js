import React from "react";
import { Button } from "reactstrap";
import logoFooter from "../../assets/logoFooter.png";
import { useNavigate } from "react-router-dom";
import { Instagram, Linkedin } from "react-feather";
import Ic1 from "../../assets/Group 3341.png";
import Ic2 from "../../assets/Group 3343.png";

const Footer = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-row justify-content-between align-items-center paddingComponentRight paddingComponentLeft py-4 mt-4">
      <div
        className="d-flex flex-column justify-content-start"
        style={{ width: "30%" }}
      >
        <div>
          <img src={logoFooter} alt="logoFooter" />
        </div>
        <div className="d-flex flex-column text-left">
          <span
            style={{
              color: "#F00",
              fontFamily: "Open Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "0.5px",
            }}
          >
            Has Law
          </span>
          <span className="text-desc-footer">
            Expert legal counsel for your needs
          </span>
        </div>
      </div>
      <div
        className="d-flex flex-row justify-content-between align-items-start"
        style={{ width: "70%" }}
      >
        <div className="d-flex flex-column" style={{ width: "33%" }}>
          <span
            style={{
              color: "#303030",
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "0.5px",
              marginBottom: 16,
            }}
          >
            Quick Links
          </span>
          <span className="text-desc-footer">Partners</span>
          <span className="text-desc-footer">Specialize</span>
          <span className="text-desc-footer">Careers</span>
          <span className="text-desc-footer">News</span>
          <span className="text-desc-footer">Pro Bono</span>
        </div>
        <div className="d-flex flex-column" style={{ width: "33%" }}>
          <span
            style={{
              color: "#303030",
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "0.5px",
              marginBottom: 16,
            }}
          >
            Location
          </span>
          <span className="text-desc-footer">Plaza Sentral 15th Floor</span>
          <span className="text-desc-footer">
            Jln. Jendral Sudirman Kav 47 - 48 Jakarta Selatan 12930 Indonesia
          </span>
        </div>
        <div className="d-flex flex-column" style={{ width: "33%" }}>
          <span
            style={{
              color: "#303030",
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "0.5px",
              marginBottom: 16,
            }}
          >
            Contacts
          </span>
          <span className="text-desc-footer">Email: info@has-law.com</span>
          <span className="text-desc-footer">Whatsapp: +6231 2891 2891</span>
          <span className="text-desc-footer">
            Phone Number: +6221 5790 5183
          </span>
          <div className="d-flex flex-row gap-2">
            <div
              className="d-flex justify-content-center align-items-center border p-1"
              style={{ borderRadius: "50%", height: 32, width: 32 }}
            >
              <Instagram color="#0F4C81" stroke="#0F4C81" />
            </div>
            <div
              className="d-flex justify-content-center align-items-center border  p-1"
              style={{ borderRadius: "50%", height: 32, width: 32 }}
            >
              <Linkedin color="#0F4C81" stroke="#0F4C81" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
