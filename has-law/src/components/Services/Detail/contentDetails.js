import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { createMarkup } from "../../../utils/createMarkup";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const ContentServicesDetail = () => {
  const [detail, setDetail] = useState([]);
  const [otherDetail, setOtherDetail] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { servicesId } = location.state;

  const getDetail = async () => {
    try {
      const resp = await axios.get(
        `${baseUrl}v1/main_services/getdetail/${id}`
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        console.log("cek resp", resp);
        setDetail({ data: resp?.data?.data, services: resp?.data?.services });
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  const getOtherDetail = async () => {
    try {
      const resp = await axios.get(
        `${baseUrl}v1/main_services/getdetail/${parseInt(id) === 1 ? 2 : 1}`
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        console.log("cek resp", resp);
        setOtherDetail({
          data: resp?.data?.data,
          services: resp?.data?.services,
        });
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  useEffect(() => {
    getDetail();
    getOtherDetail();
  }, [id]);

  return (
    <div className="d-flex flex-column container-fluid">
      <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
        <div className="d-flex justify-content-center align-items-center w-100 px-md-4 px-0 mx-auto">
          <span className="pro-bono-title text-center px-md-4 px-0 mx-md-4 mx-0">
            {detail?.data?.name}
          </span>
        </div>
        <div className="d-flex flex-md-row flex-column justify-content-between align-items-start gap-md-5 gap-2 w-100">
          <div className="flex flex-column w-md-50 w-100">
            {detail?.services?.map((e, i) => {
              return (
                <div className="d-flex flex-column gap-2 justify-content-start mb-4">
                  <span className="services-sectiont-detail-paragraph-title">
                    {e?.name}
                  </span>

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
                    dangerouslySetInnerHTML={createMarkup(e?.description)}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-column border-bottom pb-2 gap-2">
              <div className="d-flex w-100">
                <img
                  className="d-flex"
                  style={{ width: "auto", maxWidth: "100%" }}
                  src={baseUrl + otherDetail?.data?.image?.[0]?.image}
                />
              </div>
              <div className="d-flex flex-row gap-2">
                <div
                  className={`d-flex ${
                    otherDetail?.data?.image?.[2]?.image ? "w-50" : "w-full"
                  }`}
                >
                  <img
                    className="d-flex"
                    style={{ width: "auto", maxWidth: "100%" }}
                    src={baseUrl + otherDetail?.data?.image?.[1]?.image}
                  />
                </div>
                {otherDetail?.data?.image?.[2]?.image && (
                  <div className="d-flex w-50">
                    <img
                      className="d-flex"
                      style={{ width: "auto", maxWidth: "100%" }}
                      src={baseUrl + otherDetail?.data?.image?.[2]?.image}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center w-100 mx-auto">
              <span className="text-title-services">
                {otherDetail?.data?.name}
              </span>
              <ArrowRight
                onClick={() =>
                  navigate(`/services-detail/${parseInt(id) === 1 ? 2 : 1}`, {
                    state: {
                      servicesId: detail?.data?.id,
                    },
                  })
                }
                style={{ strokeWidth: 1, color: "#F00", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentServicesDetail;
