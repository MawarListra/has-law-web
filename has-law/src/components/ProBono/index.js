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
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "23px",
              letterSpacing: "0.5px",
            }}
          >
            We understand that not everybody are financially wealthy, and thus,
            we provide services for those who needs legal services but can’t
            afford the fee. We are commited to provide the best services for our
            clients, in order to bring about justice for the general public
          </span>
          <span
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
            Lorem ipsum dolor sit amet consectetur. Nec accumsan elit pharetra
            arcu erat cursus et nascetur cursus. Dignissim et et habitant amet.
            Dictum non nam nibh sit arcu vel massa et varius. Dui in platea
            integer sit enim. Non facilisi est luctus neque. Phasellus sit
            tempor ornare porta sagittis vulputate nulla. Commodo commodo netus
            porttitor non. Tristique dictum lorem sagittis netus dignissim proin
            mattis.
            <br /> Dui in platea integer sit enim. on facilisi est luctus neque.
            Phasellus sit tempor ornare porta sagittis vulputate nulla. Commodo
            commodo netus porttitor non. Tristique dictum lorem sagittis netus
            dignissim proin mattis.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProBono;
