import moment from "moment";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { Button } from "reactstrap";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const PublicationsDetail = () => {
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

  useEffect(() => {
    console.log("cek temdisplayedDatap", displayedData);
  }, [displayedData]);

  return (
    <div className=" d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
      <div className="d-flex justify-content-center align-items-center w-100">
        <span className="pro-bono-title">Publications</span>
      </div>
      <div className="d-flex flex-column gap-3 w-100">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-start gap-3 mx-auto">
          {displayedData?.map((e, i) => {
            console.log("cek e", e);
            return (
              <div className="d-flex flex-column gap-2 publication-part">
                <div
                  className="d-flex w-full publication-img"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/publications-detail/${e?.id}`, {
                      state: { publicationId: e?.id },
                    })
                  }
                >
                  <img className="img-fluid" src={baseUrl + e?.image} />
                </div>
                <div className="d-flex flex-column justify-content-start align-items-start w-100 mx-auto">
                  <span className="publication-date">
                    {moment(e?.createdAt).format("DD MMMM YYYY")}
                  </span>
                  <span className="publication-title">{e?.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="d-flex w-100 justify-content-center align-items-center">
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
              fontFamily: "Playfair Display",
            }}
          >
            See More
          </span>
        </Button>
      </div> */}
    </div>
  );
};

export default PublicationsDetail;
