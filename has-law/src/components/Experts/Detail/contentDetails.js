import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { Button } from "reactstrap";
import image1 from "../../../assets/experts1.png";
import image2 from "../../../assets/experts2.png";
import image3 from "../../../assets/experts3.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createMarkup } from "../../../utils/createMarkup";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const ContentExpertsDetail = () => {
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { expertsId, currTypdetail } = location.state;
  const { id } = useParams();

  const getDetail = async () => {
    try {
      const resp = await axios.get(`${baseUrl}v1/partner/getdetail/${id}`);
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
    getDetail();
  }, [id]);

  return (
    <div className="d-flex flex-column justify-content-between align-items-center paddingComponentRight paddingComponentLeft gap-3 py-4">
      <div className="d-flex justify-content-center align-items-center w-100">
        <span className="pro-bono-title">Meet Our Experts</span>
      </div>
      <div className="d-flex flex-md-row flex-column justify-content-center align-items-md-start align-items-center gap-md-2 gap-2 w-md-50 w-100">
        <div className="d-flex flex-column justify-content-md-start justify-content-center ">
          <div
            className="d-flex experts-section-detail-img-each justify-content-md-start justify-content-center"
            style={{ height: "100%" }}
          >
            <img
              className="d-flex img-fluid"
              src={baseUrl + detail?.image}
              style={{ width: "100%" }}
              alt="Image"
            />
          </div>
          <div className="d-flex flex-column justify-content-md-start justify-content-center px-md-0 px-4">
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
              {detail?.categories?.toUpperCase()}
            </span>
          </div>
        </div>
        <div
          className="d-flex experts-section-detail-desc-div justify-content-md-start text-md-justify text-left mt-md-0 mt-4"
          style={{ wordBreak: "break-word" }}
        >
          <div
            className="d-flex flex-column"
            style={{
              color: "#515A5F",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "23px",
              letterSpacing: "0.5px",
            }}
            dangerouslySetInnerHTML={createMarkup(detail?.description)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContentExpertsDetail;
