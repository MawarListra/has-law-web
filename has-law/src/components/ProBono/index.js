import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import imgProBono from "../../assets/BannerProBono.png";
import icProBono from "../../assets/ImageProBono.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const ProBono = () => {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column container-fluid">
      <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
        <div className="d-md-none d-flex w-100 justify-content-evenly">
          <img className="d-flex" src={imgProBono} />
        </div>
        <div className="d-flex justify-content-center align-items-center w-md-75 w-100 px-md-4 px-0 mx-auto ">
          <span className="pro-bono-title text-center px-md-4 px-0 mx-md-4 mx-auto">
            HAS also engaged in meaningful pro bono work aimed not only at the
            public good yet also to set a legal breakthrough on national law
          </span>
        </div>
        <div className="d-flex d-md-none border-bottom w-100"></div>
        <div className="d-md-flex d-none w-100 border-bottom pb-4">
          <img className="d-flex w-100" src={imgProBono} />
        </div>
        <div className="d-flex flex-row justify-content-between align-items-start gap-4 mx-auto">
          <div className="d-md-flex d-none">
            <img className="d-flex w-auto" src={icProBono} />
          </div>
          <div className="d-flex flex-column gap-2">
            <span
              style={{
                color: "#F00",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "23px",
                letterSpacing: "0.5px",
                textAlign: "justify",
              }}
            >
              We understand that not everybody is financially wealthy, and thus,
              we provide services for those who needs legal services but can’t
              afford the fee. We are committed to provide the best services for
              our clients, in order to bring about justice for the general
              public.
            </span>
            <span
              style={{
                color: "#292D32",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "23px",
                letterSpacing: "0.5px",
                textAlign: "justify",
              }}
            >
              HAS also engaged in meaningful pro bono work aimed not only at the
              public good yet also to set a legal breakthrough on national law,
              under the following issue headings:
              <br />
              1. Representing Mr. Johanes, in case of a criminal lawsuit filed
              by his own son regarding the embezzlement of his very owned HAS
              has also carved out a new jurisprudence on civil law that the
              assets purchased by parents on behalf of their children will
              remain to become the property of their parents as they are still
              alive.
              <br />
              2. Representing Mr. Mahamark Erwin, regarding the allegation of
              malpractice committed by the hospital for eye surgery.
              <br />
              3. Representing Mr. Kensky Rottie, a 9 years old child experienced
              in malpractice committed by the hospital for tonsillectomy.
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProBono;
