import React, { useEffect, useState } from "react";
import Certi2024A from "../../assets/achievements/2024/iflr1000_2024.png";
import Certi2024B from "../../assets/achievements/2024/benchmark_litigation_2024.png";
import Certi2024C from "../../assets/achievements/2024/hukumonline_2024.png";
import Certi2024D from "../../assets/achievements/2024/practice_leader_2024.png";
import Certi2024E from "../../assets/achievements/2024/alb_2024.png";
import Certi2024F from "../../assets/achievements/2024/nexgen_2024.png";

import Certi2024Big_A from "../../assets/achievements/2024/Benchmark 40 under_BIG.png";
import Certi2024Big_B from "../../assets/achievements/2024/logo-top-100-2024_BIG.webp";
import Certi2024Big_C from "../../assets/achievements/2024/SE+Asia+Law+Awards+2024+-+Finalist_BIG.png";

import Certi2023A from "../../assets/achievements/2023/hukumonline_2023.png";
import Certi2023B from "../../assets/achievements/2023/practice_leader_2023.png";
import Certi2023C from "../../assets/achievements/2023/alb_2023.png";

import Certi2023Big_A from "../../assets/achievements/2023/Hartamulya Andryanus Siahaan - Attorneys at Law - Practice Leader 2023 (1).jpg";
import Certi2023Big_B from "../../assets/achievements/2023/Screenshot 2024-10-21 at 22.14.58.png";
import Certi2023Big_C from "../../assets/achievements/2023/66329a2bba9252dc828f417a_ALB 2023.png";

import Certi2022A from "../../assets/achievements/2022/Benchmark 40 under 1 (2).png";
import Certi2022B from "../../assets/achievements/2022/logo-top-100-2024 1 (2).png";
import Certi2022C from "../../assets/achievements/2022/SE Asia Law Awards 2024 Finalist 1 (2).png";

import Certi2022Big_A from "../../assets/achievements/2022/Screenshot 2024-10-21 at 22.15.46.png";
import Certi2022Big_B from "../../assets/achievements/2022/WhatsApp Image 2023-12-05 at 8.44.52 AM.jpeg";
import Certi2022Big_C from "../../assets/achievements/2022/Screenshot 2024-10-21 at 22.20.59.png";

import ModalImage from "../ModalImage";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Achievements = () => {
  const dataAchievements = [
    {
      year: 2024,
      datas: [
        {
          image: Certi2024A,
          title: "IFLR 1000 2024",
          certif: Certi2024A,
          description:
            "<strong>Notable</strong><span>Project Development</span>",
        },
        {
          image: Certi2024B,
          title: "Benchmark Litigation",
          certif: Certi2024B,
          description:
            "<strong>Tier 3</strong><span>Commercial and Transactions Dispute</span>",
        },
        {
          image: Certi2024C,
          title: "Hukumonline",
          certif: Certi2024C,
          description:
            "<strong>Top 100 Indonesian Law Firms</strong><span>Midsize Full Service Law Firms 2024</span>",
        },
        {
          image: Certi2024D,
          title: "Hukumonline",
          certif: Certi2024D,
          description:
            "<strong>Practice Leaders 2024</strong><strong>Elite I</strong><span>Criminal Law</span><span>Insurance</span><strong>Elite II</strong><span>Arbitration, Litigation & Dispute Resolution</span><strong>Elite III</strong><span>Project, Mining, Energy & Renewable Energy</span>",
        },
        {
          image: Certi2024E,
          title: "Thomson Reuters ALB Indonesia Law Awards 2024",
          certif: Certi2024E,
          description:
            "<strong>Finalist</strong><span>Litigation Law Firm of the Year</span><span>Insurance Law Firm of the Year</span><span>Rising Law Firm of the Year</span><span>Dispute Resolution Lawyer of the Year</span>",
        },
        {
          image: Certi2024F,
          title: "NexGen Lawyers 2024",
          certif: Certi2024F,
        },
      ],
    },
    {
      year: 2023,
      datas: [
        {
          image: Certi2023A,
          title: "Hukumonline",
          certif: Certi2023Big_A,
          description: "<strong>Top 100 Indonesia Law Firms</strong>",
        },
        {
          image: Certi2023B,
          title: "Practice Leaders 2023",
          certif: Certi2023Big_B,
          description:
            "<strong>Elite I</strong><span>Arbitration, Litigation and Dispute Resolution Insurance</span><strong>Elite II</strong><span>Criminal Law</span>",
        },
        {
          image: Certi2023C,
          title: "Thomson Reuters Asia Legal Business 2023",
          certif: Certi2023Big_C,
          description:
            "<strong>Finalist</strong><span>Insurance Law Firm</span><span>Rising Law Firm</span><span>Litigation Law Firm</span>",
        },
      ],
    },
    // {
    //   year: 2022,
    //   datas: [
    //     {
    //       image: Certi2022A,
    //       title: "Top 10 Largest Litigation Practice 2022",
    //       certif: Certi2022Big_A,
    //     },
    //     {
    //       image: Certi2022B,
    //       title: "Top Tier Firm Benchmark Litigation Asia Pacific",
    //       certif: Certi2022Big_B,
    //     },
    //     {
    //       image: Certi2022C,
    //       title: "Top 100 Indonesian Law Firms 2022",
    //       certif: Certi2022Big_C,
    //     },
    //   ],
    // },
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
                  className="d-flex flex-row flex-wrap justify-content-left align-items-start"
                  style={{ width: "90%" }}
                >
                  {e?.datas?.map((v, id) => {
                    return (
                      <div
                        key={id}
                        className="d-flex flex-column justify-content-center align-items-center"
                        style={{
                          width: "30%", // Roughly one-third width for each item to fit 3 per row
                          margin: "1%", // Add margin to ensure spacing between items
                        }}
                        onClick={() => {
                          setCurrImg({
                            image: v?.certif,
                            text: v?.title,
                          });
                        }}
                      >
                        <div
                          className="d-flex justify-content-center align-items-center mb-2"
                          style={{ width: 64, height: 64 }}
                        >
                          {/* <div
                            className="d-flex "
                            style={{ width: 64, height: 64 }}
                          > */}
                          <img
                            className="d-flex"
                            style={{
                              objectFit: "contain",
                              width: "100%",
                              height: "100%",
                            }}
                            src={v?.image}
                          />
                          {/* </div> */}
                        </div>
                        <div className="d-flex" style={{ height: "15%" }}>
                          <span
                            style={{
                              fontFamily: "Montserrat",
                              fontSize: "16px",
                              fontWeight: 700,
                              lineHeight: "19.5px",
                              letterSpacing: "0.5px",
                              textAlign: "center",
                              color: "#292D32",
                            }}
                          >
                            {v?.title}
                          </span>
                        </div>
                        <div
                          className="d-flex"
                          style={{
                            height: "15%",
                            fontFamily: "Montserrat",
                            fontSize: "12px",
                            textAlign: "center",
                            color: "#292D32",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          dangerouslySetInnerHTML={{ __html: v?.description }}
                        ></div>
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
                        <div
                          className="d-flex justify-content-center align-items-center my-2"
                          style={{ height: 100 }}
                        >
                          <img
                            className="d-flex"
                            style={{
                              objectFit: "contain",
                              width: "100%",
                              height: "100%",
                            }}
                            src={v?.image}
                          />
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-100 mt-2">
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
                        <div className="d-flex justify-content-center align-items-center w-100 my-1">
                          <span
                            style={{
                              fontFamily: "Montserrat",
                              fontSize: "10px",
                              fontWeight: 400,
                              textAlign: "center",
                              color: "#292D32",
                              display: "flex",
                              flexDirection: "column",
                            }}
                            dangerouslySetInnerHTML={{ __html: v?.description }}
                          ></span>
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
