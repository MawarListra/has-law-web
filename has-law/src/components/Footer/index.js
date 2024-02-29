import React, { useState } from "react";
import { Button } from "reactstrap";
import logoFooter from "../../assets/logoFooter.png";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import Ic1 from "../../assets/achievment1.jpeg";
import Ic2 from "../../assets/achievment2.jpg";
import Ic3 from "../../assets/achievment3.jpeg";
import Ic4 from "../../assets/achievment4.png";
import { ModalImage } from "..";

const Footer = ({}) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [currImg, setCurrImg] = useState("");
  return (
    <div className="w-100">
      <div className="container-fluid d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center paddingComponentRight paddingComponentLeft py-4 mt-4">
        <div className="d-flex flex-md-row flex-column justify-content-center align-items-md-start align-items-center gap-5 w-100">
          <div className="d-flex flex-column align-items-center footer-part">
            <span
              style={{
                color: "#303030",
                fontFamily: "Montserrat",
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
            <div className="d-flex flex-column gap-2 container-achievment-img">
              <div className="d-flex flex-row gap-2">
                <div
                  className="d-flex w-50"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setOpenModal(!openModal);
                    setCurrImg(Ic1);
                  }}
                >
                  <img className="d-flex img-fluid" src={Ic1} />
                </div>
                <div
                  className="d-flex w-50"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setOpenModal(!openModal);
                    setCurrImg(Ic2);
                  }}
                >
                  <img className="d-flex img-fluid" src={Ic2} />
                </div>
              </div>
              <div className="d-flex flex-row gap-2">
                <div
                  className="d-flex w-50"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setOpenModal(!openModal);
                    setCurrImg(Ic3);
                  }}
                >
                  <img className="d-flex img-fluid" src={Ic3} />
                </div>
                <div
                  className="d-flex w-50"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setOpenModal(!openModal);
                    setCurrImg(Ic4);
                  }}
                >
                  <img className="d-flex img-fluid" src={Ic4} />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-column footer-part align-items-md-start align-items-center mb-4">
              <span
                style={{
                  color: "#303030",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: "0.5px",
                  marginBottom: 8,
                }}
              >
                Contact Us
              </span>
              <span className="d-md-flex d-none text-desc-footer text-left">
                HAS Attorneys at Law is happy to handle yourlegal case and
                participate in the legal aspect of your projects. Should youhave
                any inquiries regarding legal matters, please contact us via one
                of thefollowing channels
              </span>
              <span className="d-md-none d-flex text-desc-footer text-center">
                HAS Attorneys at Law is happy to handle yourlegal case and
                participate in the legal aspect of your projects. Should youhave
                any inquiries regarding legal matters, please contact us via one
                of thefollowing channels
              </span>
            </div>
            <div className="d-flex flex-md-row flex-column gap-2">
              <div className="d-flex flex-column footer-part align-items-md-start align-items-center mb-4 w-md-50 w-100">
                <span
                  style={{
                    color: "#303030",
                    fontFamily: "Montserrat",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    letterSpacing: "0.5px",
                    marginBottom: 8,
                  }}
                >
                  Address
                </span>
                <span className="text-desc-footer">
                  Plaza Sentral 15th Floor
                </span>
                <span className="text-desc-footer text-md-left text-center">
                  Jln. Jendral Sudirman Kav 47 - 48
                </span>
                <span className="text-desc-footer text-md-left text-center">
                  Jakarta Selatan 12930 Indonesia
                </span>
                <span className="text-desc-footer text-md-left text-center">
                  Indonesia
                </span>
              </div>
              <div className="d-flex flex-column w-md-50 w-100">
                <div className="d-flex flex-column footer-part align-items-md-start align-items-center mb-md-2 mb-4 ">
                  <span
                    style={{
                      color: "#303030",
                      fontFamily: "Montserrat",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "normal",
                      letterSpacing: "0.5px",
                      marginBottom: 8,
                    }}
                  >
                    Email
                  </span>
                  <span
                    className="text-desc-footer"
                    onClick={() =>
                      window.open("mailto:info@has-law.com", "_blank")
                    }
                  >
                    info@has-law.com
                  </span>
                </div>
                <div className="d-flex flex-column footer-part align-items-md-start align-items-center">
                  <span
                    style={{
                      color: "#303030",
                      fontFamily: "Montserrat",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "normal",
                      letterSpacing: "0.5px",
                      marginBottom: 8,
                    }}
                  >
                    Phone Number
                  </span>
                  <span className="text-desc-footer">+6221 5790 5183</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column footer-part align-items-md-start align-items-center">
            <span
              style={{
                color: "#303030",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "0.5px",
                marginBottom: 8,
              }}
            >
              Connect With Us
            </span>
            <div className="text-desc-footer">
              <span>
                Follow us at these channels for news and updates from HAS
                Attorneys at Law (#everyone
              </span>
              <span style={{ color: "#f00", verticalAlign: "middle" }}>
                HAS
              </span>
              <span>toknow)</span>
            </div>
            <div className="d-flex flex-row gap-2 mt-2">
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
                  style={{ strokeWidth: 1, cursor: "pointer" }}
                  stroke="#0F4C81"
                  onClick={() =>
                    window.open("https://www.instagram.com/has.law/", "_blank")
                  }
                />
              </div>
              {/* <div
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
              </div> */}
              <div
                className="d-flex justify-content-center align-items-center  p-1"
                style={{
                  borderRadius: "50%",
                  height: 32,
                  width: 32,
                  border: "1px solid rgba(15, 76, 129, 1)",
                }}
              >
                <Facebook
                  color="#0F4C81"
                  style={{ strokeWidth: 1, cursor: "pointer" }}
                  stroke="#0F4C81"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=100075953375590&mibextid=ZbWKwL",
                      "_blank"
                    )
                  }
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
                <Twitter
                  color="#0F4C81"
                  style={{ strokeWidth: 1, cursor: "pointer" }}
                  stroke="#0F4C81"
                  onClick={() =>
                    window.open("https://x.com/HASattorneys", "_blank")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalImage
        open={openModal}
        toggle={() => setOpenModal(!openModal)}
        data={currImg}
        size="md"
      />
    </div>
  );
};

export default Footer;
