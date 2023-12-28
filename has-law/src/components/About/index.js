import React from "react";
import image1 from "../../assets/About1.png";
import image2 from "../../assets/About2.png";
import image3 from "../../assets/About3.png";

const About = () => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-start paddingComponentRight paddingComponentLeft mx-auto gap-5 py-4">
      <div className="d-flex flex-column" style={{ width: "50%" }}>
        <span className="text-title-section">
          {`HARTAMULYA, ANDRYANUS SIAHAAN (HAS Attorneys at Law)`}
        </span>
        <span
          className="text-menu"
          style={{
            wordBreak: "break-word",
          }}
        >
          {`HAS Attorneys at Law was founded by Agus Askin Harta Mulya, Yohannes Andryanus, and Rio Andre Winter Siahaan in 2016 as part of the
          regeneration of SHR Law Agency, which consisted of a number of senior
          advocates: Soedjono C. Atmonegoro, Henricus Herikes, Basrief Arief,
          Togar Hutabarat, and Marthinus Manoi. This synergy gave HAS Attorneys
          at Law the knowledge and experience in handling and winning various
          business and criminal matters`}{" "}
          <span style={{ color: "#F00", fontWeight: "bold" }}>Read more</span>
        </span>
      </div>
      <div className="d-flex flex-row gap-2" style={{ width: "50%" }}>
        <div className="d-flex flex-column gap-2">
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image2} />
          </div>
        </div>
        <div>
          <img src={image3} />
        </div>
      </div>
    </div>
  );
};
export default About;
