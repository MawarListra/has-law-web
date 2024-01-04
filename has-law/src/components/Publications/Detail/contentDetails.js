import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import { Button } from "reactstrap";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const ContentPublicationsDetail = () => {
  const [detail, setDetail] = useState({});
  const [others, setOthers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { publicationId } = location.state;

  const getDetail = async () => {
    try {
      const resp = await axios.get(
        `${baseUrl}v1/publications/getdetail/${publicationId}`
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        console.log("cek resp", resp);
        setDetail(resp?.data?.data);
        setOthers(resp?.data?.others);
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
      <div className="d-flex flex-column justify-content-start align-items-start w-75 ">
        <span className="text-title-section text-black text-left">
          {detail?.title}
        </span>
        <span
          className="text-left"
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
          {moment(detail?.createdAt).format("DD MMMM YYYY")}
        </span>
      </div>
      <div className="d-flex flex-row gap-3 border-bottom pb-4">
        <div className="d-flex flex-column w-75 gap-2">
          <div className="d-flex w-100">
            <img className="d-flex" src={baseUrl + detail?.image} />
          </div>
          <div>
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
              {detail?.description}
            </span>
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          <span
            style={{
              color: "#F00",
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "23px",
              letterSpacing: "0.5px",
            }}
          >
            MORE ARTICLE
          </span>
          {others?.map((e, i) => {
            return (
              <div
                className="d-flex flex-column gap-1 border-bottom pb-2"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate("/publications-detail", {
                    state: { publicationId: e?.id },
                  })
                }
              >
                <span
                  style={{
                    color: "#515A5F",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "0.5px",
                  }}
                >
                  {moment(e?.createdAt).format("DD MMMM YYYY")}
                </span>
                <span
                  style={{
                    color: "#292D32",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    letterSpacing: "0.5px",
                  }}
                >
                  {e?.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-column py-4 w-100 gap-4">
        <div className="d-flex justify-content-center align-items-center ">
          <span
            style={{
              color: "#292D32",
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "0.5px",
            }}
          >
            More Publications
          </span>
        </div>
        <div className="d-flex flex-row flex-wrap w-100 gap-2">
          {others?.map((e, i) => {
            if (i < 3) {
              return (
                <div
                  className="d-flex flex-column gap-2"
                  style={{ maxWidth: "376px" }}
                >
                  <div
                    className="d-flex w-full "
                    style={{
                      cursor: "pointer",
                      width: "376px",
                      height: "204px",
                      flexShrink: 0,
                    }}
                    onClick={() =>
                      navigate("/publications-detail", {
                        state: { publicationId: e?.id },
                      })
                    }
                  >
                    <img className="img-fluid" src={baseUrl + e?.image} />
                  </div>
                  <div className="d-flex flex-column justify-content-start align-items-start w-100 mx-auto">
                    <span
                      style={{
                        color: "#515A5F",
                        fontFamily: "Montserrat",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {moment(e?.createdAt).format("DD MMMM YYYY")}
                    </span>
                    <span
                      style={{
                        color: "#515A5F",
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {e?.title}
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="d-flex w-100 justify-content-center align-items-center">
          <Button
            style={{
              color: "#F00",
              borderColor: "#F00",
              backgroundColor: "transparent",
            }}
            outline
            onClick={() => navigate("/publications")}
          >
            <span
              style={{
                color: "#F00",
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "23px",
                letterSpacing: "0.5px",
              }}
            >
              See More
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentPublicationsDetail;
