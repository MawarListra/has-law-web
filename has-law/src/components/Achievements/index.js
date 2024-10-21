import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import imgHas from "../../assets/Gambar Has.png";
import imgHasLittle from "../../assets/Gambar Has (1).png";
import imgHasLittle2 from "../../assets/Gambar Has (2).png";
import imgHasLittle3 from "../../assets/Gambar Has (3).png";
import imgHasLittle4 from "../../assets/Gambar Has (4).png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Certi2024A from "../../assets/achievements/2024/Benchmark 40 under 1.png";
import Certi2024B from "../../assets/achievements/2024/logo-top-100-2024 1.png";
import Certi2024C from "../../assets/achievements/2024/SE+Asia+Law+Awards+2024+-+Finalist 1.png";

import Certi2023A from "../../assets/achievements/2023/Benchmark 40 under 1 (1).png";
import Certi2023B from "../../assets/achievements/2023/logo-top-100-2024 1 (1).png";
import Certi2023C from "../../assets/achievements/2023/SE+Asia+Law+Awards+2024+-+Finalist 1 (1).png";

import Certi2022A from "../../assets/achievements/2022/Benchmark 40 under 1 (2).png";
import Certi2022B from "../../assets/achievements/2022/logo-top-100-2024 1 (2).png";
import Certi2022C from "../../assets/achievements/2022/SE+Asia+Law+Awards+2024+-+Finalist 1 (2).png";
import ModalImage from "../ModalImage";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Achievements = () => {
  const dataAchievements = [
    {
      year: 2024,
      datas: [
        {
          image: Certi2024A,
          title: "40 & Under Benchmark Litigation",
        },
        {
          image: Certi2024B,
          title: "Top 100 Indonesian Law Firms 2024",
        },
        {
          image: Certi2024C,
          title: "ALB Se Asia Law Awards Finalist 2024",
        },
      ],
    },
    {
      year: 2023,
      datas: [
        {
          image: Certi2023A,
          title: "Practice Leaders 2023",
        },
        {
          image: Certi2023B,
          title: "Top 100 Indonesian Law Firms 2023",
        },
        {
          image: Certi2023C,
          title: "ALB Se Asia Law Awards Finalist 2023",
        },
      ],
    },
    {
      year: 2022,
      datas: [
        {
          image: Certi2022A,
          title: "Top 10 Largest Litigation Practice 2022",
        },
        {
          image: Certi2022B,
          title: "Top Tier Firm Benchmark Litigation Asia Pacific",
        },
        {
          image: Certi2022C,
          title: "Top 100 Indonesian Law FIrms 2022",
        },
      ],
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [currImg, setCurrImg] = useState("");

  useEffect(() => {
    if (currImg !== "") {
      setOpenModal(!openModal);
    }
  }, [currImg]);

  return (
    <div className="d-flex flex-column container-fluid">
      <div className="d-flex flex-column justify-content-between align-items-start paddingComponentRight paddingComponentLeft gap-4 py-4">
        <div className="d-flex flex-column justify-content-center align-items-center w-md-75 w-100 px-md-4 px-0 mx-auto pb-4">
          <span className="pro-bono-title text-center px-md-4 px-0 mx-md-4 mx-auto">
            Our Achievements
          </span>
        </div>
        <div className="d-md-flex d-none flex-column w-100 justify-content-center align-items-center">
          {dataAchievements.map((e, i) => {
            return (
              <div
                key={i}
                className="d-flex w-100 flex-row justify-content-left align-items-center"
                style={{
                  borderTop: "0.5px solid #BEBEBE",
                  paddingLeft: 48,
                  paddingRight: 48,
                  paddingTop: 32,
                  paddingBottom: 32,
                }}
              >
                <div className="d-flex" style={{ width: "10%" }}>
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: "29.26px",
                      letterSpacing: "0.5px",
                      textAlign: "left",
                      color: "#FF0000",
                    }}
                  >
                    {e?.year}
                  </span>
                </div>
                <div
                  className="d-flex flex-row justify-content-left align-items-center"
                  style={{ width: "90%" }}
                >
                  {e?.datas?.map((v, id) => {
                    return (
                      <div
                        key={id}
                        className="d-flex flex-column w-100 justify-content-between align-items-start"
                        onClick={() => {
                          setCurrImg({
                            image: v?.image,
                            text: v?.title,
                          });
                        }}
                      >
                        <div className="d-flex mb-2" style={{ height: "85%" }}>
                          <div className="d-flex h-auto w-auto">
                            <img
                              className="d-flex"
                              style={{ objectFit: "contain" }}
                              src={v?.image}
                            />
                          </div>
                        </div>
                        <div className="d-flex " style={{ height: "15%" }}>
                          <span
                            style={{
                              fontFamily: "Montserrat",
                              fontSize: "16px",
                              fontWeight: 700,
                              lineHeight: "19.5px",
                              letterSpacing: "0.5px",
                              textAlign: "left",
                              color: "#292D32",
                            }}
                          >
                            {v?.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex d-md-none flex-column w-100 justify-content-center align-items-center">
          {dataAchievements.map((e, i) => {
            return (
              <div
                key={i}
                className="d-flex w-100 flex-column justify-content-center align-items-center"
                style={{
                  borderTop: "0.5px solid #BEBEBE",
                  paddingLeft: 32,
                  paddingRight: 32,
                  paddingTop: 16,
                  paddingBottom: 16,
                }}
              >
                <div className="d-flex w-100 justify-content-center align-items-center mb-4">
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "29.26px",
                      letterSpacing: "0.5px",
                      textAlign: "left",
                      color: "#FF0000",
                    }}
                  >
                    {e?.year}
                  </span>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center w-100">
                  {e?.datas?.map((v, id) => {
                    return (
                      <div
                        key={id}
                        className="d-flex flex-column w-100 justify-content-center align-items-center my-2"
                      >
                        <div className="d-flex " style={{ height: 50 }}>
                          <img
                            className="d-flex"
                            style={{ objectFit: "contain" }}
                            src={v?.image}
                          />
                        </div>
                        <div>
                          <span
                            style={{
                              fontFamily: "Montserrat",
                              fontSize: "12px",
                              fontWeight: 700,
                              lineHeight: "19.5px",
                              letterSpacing: "0.5px",
                              textAlign: "left",
                              color: "#292D32",
                            }}
                          >
                            {v?.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ModalImage
        open={openModal}
        toggle={() => {
          setOpenModal(!openModal);
          setCurrImg("");
        }}
        data={currImg}
        size="md"
      />
    </div>
  );
};

export default Achievements;
