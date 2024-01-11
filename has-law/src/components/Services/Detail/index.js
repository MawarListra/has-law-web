import React, { useCallback, useEffect, useState } from "react";
import { ArrowLeftCircle, ArrowRight, ArrowRightCircle } from "react-feather";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const ServicesDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const [services, setServices] = useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get(`${baseUrl}v1/main_services/getall`);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setDatas(resp?.data?.data);
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  const getServiceData = useCallback(async () => {
    if (datas?.[0]?.id) {
      try {
        const resp = await axios.get(
          `${baseUrl}v1/services/getall/${datas?.[0]?.id}`
        );
        if (resp?.status === 200 && resp?.data?.status === "success") {
          setServices(resp?.data?.data);
        } else {
          toast.error("Gagal mendapatkan data. Silahkan reload page");
        }
      } catch (e) {
        console.log("cek err", e);
      }
    }
  }, [datas]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getServiceData();
  }, [getServiceData]);

  return (
    <>
      {" "}
      <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
        <div className="d-flex justify-content-center align-items-center w-100 paddingComponentRight paddingComponentLeft mx-auto">
          <span className="pro-bono-title paddingComponentRight paddingComponentLeft mx-4">
            Hartamulya & team is a full-service law firm for individuals,
            businesses, and organizations, offering diverse legal expertise.
          </span>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-between align-items-start gap-md-5 gap-2 mx-auto">
          {datas.map((e, i) => {
            return (
              <div className="d-flex flex-column gap-2">
                <div
                  className="d-flex w-full border-bottom pb-2"
                  style={{ height: 290 }}
                >
                  <img
                    className="img-fluid"
                    src={baseUrl + e?.image?.[0]?.image}
                  />
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center w-100 mx-auto">
                  <span className="text-title-services">{e?.name}</span>
                  <ArrowRight
                    onClick={() =>
                      navigate(`/services-detail/${e?.id}`, {
                        state: {
                          servicesId: e?.id,
                        },
                      })
                    }
                    style={{ strokeWidth: 1, color: "#F00", cursor: "pointer" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-end w-100 mt-4 services-section-detail-bottom">
        <div className="d-flex justify-content-start ">
          <span className="pro-bono-title text-left">
            Over the years, Attorneys at Law forged enduring client bonds,
            showcasing excellence and a proven track record, gaining trust
            across diverse sectors.
          </span>
        </div>
        <div className="d-md-flex d-none flex-row justify-content-between align-items-end gap-4">
          <ArrowLeftCircle
            style={{ strokeWidth: 1, cursor: "pointer" }}
            color="red"
            size={32}
          />
          <ArrowRightCircle
            style={{ strokeWidth: 1, cursor: "pointer" }}
            color="red"
            size={32}
          />
        </div>
      </div>
      <div
        className="d-flex flex-row justify-content-between align-items-start gap-2 mt-4 py-2"
        style={{
          overflowX: "auto",
          maxWidth: "100%",
        }}
      >
        {services.map((e, i) => {
          return (
            <div className="d-flex flex-column gap-2">
              <div
                className="d-flex w-full pb-2"
                style={{ width: "auto", maxWidth: "100%" }}
              >
                <img className="d-flex " src={baseUrl + e?.image} />
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center w-100 mx-auto">
                <span className="text-title-services">{e?.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServicesDetail;
