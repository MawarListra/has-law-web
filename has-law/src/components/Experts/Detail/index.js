import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { Button } from "reactstrap";
import image1 from "../../../assets/experts1.png";
import image2 from "../../../assets/experts2.png";
import image3 from "../../../assets/experts3.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const ExpertsDetail = () => {
  const [categories, setCategories] = useState([]);
  const [currType, setCurrType] = useState("partners");
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

  const getCategories = async () => {
    try {
      const resp = await axios.get(`${baseUrl}v1/partner_categories/getall`);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setCategories(resp?.data?.data);
      } else {
        console.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  const getDatas = useCallback(async () => {
    try {
      const resp = await axios.get(
        `${baseUrl}v1/partner/getall?categories=${currType}`
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setDatas(resp?.data?.data);
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  }, [currType]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getDatas();
  }, [getDatas]);

  return (
    <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
      <div className="d-flex justify-content-center align-items-center w-100">
        <span className="pro-bono-title">Meet Our Experts</span>
      </div>
      <div
        className="d-flex flex-row justify-content-center w-100"
        style={{ gap: 10 }}
      >
        {categories.map((e) => {
          return (
            <Button
              style={
                e?.name === currType
                  ? {
                      backgroundColor: "#FF0000",
                      display: "flex",
                      width: "89px",
                      height: "48px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flexShrink: 0,
                      borderRadius: "5px",
                      borderColor: "#FF0000",
                    }
                  : {
                      display: "flex",
                      width: "89px",
                      height: "48px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flexShrink: 0,
                      borderRadius: "5px",
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }
              }
              key={e?.id}
              onClick={() => {
                setCurrType(e?.name);
              }}
            >
              <span
                style={
                  e?.name === currType
                    ? {
                        color: "#FFF",
                        fontFeatureSettings: "clig off liga off",
                        fontFamily: "Nunito Sans",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        letterSpacing: 0.5,
                      }
                    : {
                        color: "#FF0000",
                        fontFeatureSettings: "clig off liga off",
                        fontFamily: "Nunito Sans",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        letterSpacing: 0.5,
                      }
                }
              >
                {e?.name}
              </span>
            </Button>
          );
        })}
      </div>{" "}
      <div
        className="d-flex flex-md-row flex-column justify-content-md-center justify-content-between align-items-md-end align-items-center text-center gap-4 w-100 experts-section-detail-img"
        style={{ overflow: "scroll" }}
      >
        {datas.map((e, i) => {
          return (
            <div
              className="d-flex flex-column gap-2 experts-section-detail-img-each"
              style={{
                // width: "auto",
                position: "relative",
                cursor: "pointer",
                transition: "height 0.3s ease",
              }}
              onClick={() =>
                navigate("/experts-detail", {
                  state: { expertsId: e?.id, currTypdetail: currType },
                })
              }
              onMouseOver={(e) => (e.currentTarget.style.height = "320px")} // Change height on hover
              onMouseOut={(e) => (e.currentTarget.style.height = "290px")} // Revert height on mouse out
            >
              <div
                className="d-flex w-100"
                style={{ height: "100%", position: "absolute" }}
              >
                <img
                  className="d-flex img-fluid"
                  src={baseUrl + e?.image}
                  style={{ width: "100%" }}
                  alt="Image"
                />
              </div>
              <div
                className="d-flex flex-column justify-content-end align-items-center w-100 position-sticky bottom-0 py-2 experts-section-detail-name-each"
                style={{ zIndex: 999 }}
              >
                <span
                  style={{
                    color: "#FFF",
                    fontFamily: "Playfair Display",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    letterSpacing: "0.5px",
                    wordBreak: "break-word",
                  }}
                >
                  {e?.name}
                </span>
                <span
                  style={{
                    color: "#FFF",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "0.5px",
                  }}
                >
                  {currType?.toUpperCase()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpertsDetail;
