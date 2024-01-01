import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { Button } from "reactstrap";
import image1 from "../../../assets/experts1.png";
import image2 from "../../../assets/experts2.png";
import image3 from "../../../assets/experts3.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const ContentExpertsDetail = () => {
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { expertsId, currTypdetail } = location.state;

  const getDetail = async () => {
    try {
      const resp = await axios.get(
        `${baseUrl}v1/partner/getdetail/${expertsId}`
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setDetail(resp?.data?.data);
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  useEffect(() => {
    console.log("cek here");
    getDetail();
  }, [expertsId]);
  console.log("cek expertsId", expertsId);

  return (
    <div className="d-flex flex-column justify-content-between align-items-center paddingComponentRight paddingComponentLeft gap-4 py-4">
      <div className="d-flex justify-content-center align-items-center w-100">
        <span className="text-title-section">Meet Our Experts</span>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-start gap-5 w-50">
        <div
          className="d-flex flex-column justify-content-start w-auto"
          // style={{ width: "50%" }}
        >
          <div className="d-flex w-auto" style={{ height: 290 }}>
            <img
              className="img-fluid"
              src={baseUrl + detail?.image}
              // style={{ width: "100%" }}
              alt="Image"
            />
          </div>
          <div className="d-flex  flex-column ">
            <span
              className="text-left"
              style={{
                color: "#FF0000",
                fontFamily: "Playfair Display",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "23px",
                letterSpacing: "0.5px",
                wordBreak: "break-word",
              }}
            >
              {detail?.name}
            </span>
            <span
              className="text-left"
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
              {currTypdetail?.toUpperCase()}
            </span>
          </div>
        </div>
        <div
          className="d-flex w-50 justify-content-evenly"
          style={{ wordBreak: "break-word", textAlign: "justify" }}
        >
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
            {detail?.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentExpertsDetail;
