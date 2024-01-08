import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import image1 from "../../assets/services1.png";
import image2 from "../../assets/services2.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Services = () => {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
      <div className="d-flex justify-content-center align-items-center w-100 px-md-4 px-0 mx-auto">
        <span className="pro-bono-title text-md-center text-left px-md-4 px-0 mx-md-4 mx-0">
          Hartamulya & team is a full-service law firm for individuals,
          businesses, and organizations, offering diverse legal expertise.
        </span>
      </div>
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-start gap-md-5 gap-2 mx-auto">
        {datas.map((e, i) => {
          if (i < 2) {
            return (
              <div className="d-flex flex-column gap-2 services-section-data">
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
                      navigate("/services-detail", {
                        state: { servicesId: e?.id },
                      })
                    }
                    style={{ strokeWidth: 1, color: "#F00", cursor: "pointer" }}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Services;
