import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { Button } from "reactstrap";
import image1 from "../../assets/experts1.png";
import image2 from "../../assets/experts2.png";
import image3 from "../../assets/experts3.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Experts = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [mouseHover, setMouseHover] = useState(false);
  const getDatas = async () => {
    try {
      const resp = await axios.get(
        `${baseUrl}v1/partner/getall?categories=partners`
      );
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
    getDatas();
  }, []);

  return (
    <div className="w-100 experts-section">
      <div className="container-fluid d-flex flex-column justify-content-between align-items-start gap-4 py-4">
        <div
          className={`d-flex justify-content-center align-items-center w-100 ${
            mouseHover ? "pb-4" : "pb-0"
          }`}
        >
          <span className="pro-bono-title">Meet Our Experts</span>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-end experts-section-img text-center gap-4 w-100 paddingComponentRight paddingComponentLeft">
          {datas.map((e, i) => {
            if (i < 3) {
              return (
                <div
                  className="d-flex flex-column gap-2 experts-section-img-each"
                  style={{
                    position: "relative",
                    cursor: "pointer",
                    transition: "height 0.3s ease,width 0.3s",
                  }}
                  onClick={() =>
                    navigate(`/experts-detail/${e?.id}`, {
                      state: { expertsId: e?.id, currTypdetail: "partner" },
                    })
                  }
                  onMouseOver={(e) => (
                    (e.currentTarget.style.height = "450px"),
                    (e.currentTarget.style.width = "321px"),
                    setMouseHover(true)
                  )} // Change height on hover
                  onMouseOut={(e) => (
                    (e.currentTarget.style.height = "423px"),
                    (e.currentTarget.style.width = "278px"),
                    setMouseHover(false)
                  )} // Revert height on mouse out
                >
                  <div
                    className="d-flex w-100"
                    style={{
                      height: "100%",
                      position: "absolute",
                    }}
                  >
                    <img
                      className="d-flex img-fluid"
                      src={baseUrl + e?.image}
                      style={{ width: "100%" }}
                      alt="Image"
                    />
                  </div>
                  <div
                    className="d-flex flex-column justify-content-end align-items-center w-100 position-sticky bottom-0 py-2 experts-section-name-each"
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
                        fontFamily: "Helvetica",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "0.5px",
                      }}
                    >
                      PARTNER
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
          >
            <span
              style={{
                color: "#F00",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "18px",
                fontFamily: "Playfair Display",
              }}
              onClick={() => navigate("/experts")}
            >
              See More
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
