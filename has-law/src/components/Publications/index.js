import moment from "moment";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { Button } from "reactstrap";
import image1 from "../../assets/services1.png";
import image2 from "../../assets/services2.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createMarkup } from "../../utils/createMarkup";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Publications = () => {
  const navigate = useNavigate();
  const [displayedData, setDisplayedData] = useState([]);

  const getDisplayedData = async () => {
    try {
      const resp = await axios.get(`${baseUrl}v1/publications/getall`);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        let temp = resp?.data?.data?.filter((e, i) => i < 4);
        setDisplayedData(temp);
      } else {
        toast.error("Gagal mendappatkan data. Silahkan reload page");
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  useEffect(() => {
    getDisplayedData();
  }, []);

  return displayedData?.length ? (
    <div className="w-100">
      <div className="container-fluid d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
        <div className="d-flex justify-content-center align-items-center w-100">
          <span className="pro-bono-title">Publications</span>
        </div>
        <div className="d-flex flex-column gap-3 w-100">
          <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-3 mx-auto w-100">
            {displayedData?.map((e, i) => {
              return (
                <div
                  className="d-flex flex-column gap-2 publication-part"
                  style={{
                    border: "0.5px solid #515A5F",
                    borderRadius: 5,
                  }}
                  onClick={() =>
                    navigate(`/publications-detail/${e?.id}`, {
                      state: { publicationId: e?.id },
                    })
                  }
                >
                  <div
                    className="d-flex w-full publication-img"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="d-flex img-fluid w-100"
                      src={baseUrl + e?.image}
                      style={{
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                      }}
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-start align-items-start w-100 mx-auto px-2">
                    <span className="publication-date">
                      {moment(e?.createdAt).format("DD MMMM YYYY")}
                    </span>
                    <span className="publication-title">{e?.title}</span>
                  </div>
                  <div>
                    <div
                      className="flex flex-column px-2"
                      style={{
                        color: "#292D32",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "23px",
                        letterSpacing: "0.5px",
                        textAlign: "justify",
                      }}
                      dangerouslySetInnerHTML={createMarkup(
                        e?.description.slice(0, 200) + "..."
                      )}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
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
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "18px",
                fontFamily: "Montserrat",
              }}
            >
              See More
            </span>
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Publications;
