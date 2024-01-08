import React from "react";
import { Button } from "reactstrap";
import logoFooter from "../../assets/logoFooter.png";
import { useNavigate } from "react-router-dom";
import { Instagram, Linkedin } from "react-feather";
import Ic1 from "../../assets/achievment1.png";
import Ic2 from "../../assets/achievment2.png";
import Ic3 from "../../assets/achievment3.png";
import Ic4 from "../../assets/achievment4.png";

const Footer = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center paddingComponentRight paddingComponentLeft py-4 mt-4">
      {/* <div
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
      </div> */}
      <div className="d-flex flex-md-row flex-column justify-content-center align-items-md-start align-items-center gap-5 w-100">
        <div className="d-flex flex-column align-items-center footer-part">
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
            Achievements
          </span>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-row gap-2">
              <div className="d-flex w-50">
                <img src={Ic1} />
              </div>
              <div className="d-flex w-50">
                <img src={Ic2} />
              </div>
            </div>
            <div className="d-flex flex-row gap-2">
              <div className="d-flex w-50">
                <img src={Ic3} />
              </div>
              <div className="d-flex w-50">
                <img src={Ic4} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column footer-part align-items-md-start align-items-center">
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
          <span className="text-desc-footer text-md-left text-center">
            Jln. Jendral Sudirman Kav 47 - 48 Jakarta Selatan 12930 Indonesia
          </span>
        </div>
        <div className="d-flex flex-column footer-part align-items-md-start align-items-center">
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
              className="d-flex justify-content-center align-items-center p-1"
              style={{
                borderRadius: "50%",
                height: 32,
                width: 32,
                border: "1px solid rgba(15, 76, 129, 1)",
              }}
            >
              <Instagram
                color="#0F4C81"
                style={{ strokeWidth: 1 }}
                stroke="#0F4C81"
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center  p-1"
              style={{
                borderRadius: "50%",
                height: 32,
                width: 32,
                border: "1px solid rgba(15, 76, 129, 1)",
              }}
            >
              <Linkedin
                color="#0F4C81"
                style={{ strokeWidth: 1 }}
                stroke="#0F4C81"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
