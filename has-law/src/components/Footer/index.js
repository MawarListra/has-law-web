import React, { useState } from "react";
import { Button } from "reactstrap";
import logoFooter from "../../assets/logoFooter.png";
import { useNavigate } from "react-router-dom";
import { Instagram, Linkedin } from "react-feather";
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
                fontFamily: "Helvetica",
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
          <div className="d-flex flex-column footer-part align-items-md-start align-items-center">
            <span
              style={{
                color: "#303030",
                fontFamily: "Helvetica",
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
                fontFamily: "Helvetica",
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
