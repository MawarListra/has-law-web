import React, { useEffect, useState } from "react";
import image1 from "../../assets/About1.png";
import image2 from "../../assets/About2.png";
import image3 from "../../assets/About3.png";

const About = ({ id }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const text = `Welcome to HAS Attorneys at Law, where we understand that law is not a separate entity, but rather the heart that drives the business world. We, HARTAMULYA, ANDRYANUS & SIAHAAN (HAS Attorneys at Law), bring forth the idea that every transaction, every case, is a crucial element in the journey of our clients' businesses. We view each of our clients' businesses as an integral part of our vision. Therefore, we offer legal solutions that are not only robust but also aligned with our clients' strategies and business interests. Sustainability and business efficiency are our primary commitments because we believe that the success of our clients' businesses reflects the quality of the legal services we provide. \n\nHAS Attorneys at Law was founded by experienced leaders: Agus Askin Harta Mulya, Yohannes Andryanus, and Rio Andre Winter Siahaan. They bring with them the legacy of the renowned SHR law firm, which consists of several leading senior lawyers, namely Soedjono C. Atmonegoro, Henricus Herikes, Basrief Arief, Togar Hutabarat, and Marthinus Manoi. This synergy gives us an advantage in navigating the complexities of business and criminal law in Indonesia. \n\nOur commitment extends not only to handling cases but also to helping our clients achieve competitive excellence. Through creative and innovative approaches, we provide legal consultation services that empower our clients to make informed decisions and manage risks with confidence. \n\nHAS Attorneys at Law is not just a legal partner but also a pioneer of positive change in the legal landscape of Indonesia. We reaffirm our commitment to implementing best practices and sustainable mindsets in every step we take, with reasonable and affordable costs. Thus, we not only assist our clients but also strengthen the foundation of a better legal future. \n\nEmbrace the future of your business with confidence. Join HAS Attorneys at Law, where we blend experience, innovation, and dedication to create legal solutions that have a positive impact on you and your business. \n\nHAS Attorneys at Law, \n\nYour Advocate for Excellence, Your Partner for Success.`;

  return (
    <div className="w-100 h-auto" id={id}>
      <div className="container-fluid d-flex flex-md-row flex-column justify-content-center align-items-start paddingComponentRight paddingComponentLeft mx-auto gap-md-5 gap-2 py-4">
        <div className="d-flex flex-column about-text">
          <span
            className="text-title-section mb-4"
            style={{ textAlign: "center" }}
          >
            {`HARTAMULYA, ANDRYANUS SIAHAAN (HAS Attorneys at Law)`}
          </span>
          <span
            className="text-menu"
            style={{
              wordBreak: "break-word",
              whiteSpace: "pre-line",
              display: "block",
              textAlign: "justify",
            }}
          >
            {isReadMore ? text.slice(0, 500) + "... " : text}
            <span
              onClick={() => setIsReadMore(!isReadMore)}
              style={{ color: "#F00", fontWeight: "bold", cursor: "pointer" }}
            >
              {isReadMore ? `Read more` : ` See less`}
            </span>
          </span>
        </div>
        {/* <div className="d-flex flex-row gap-2 w-auto">
          <div className="d-flex flex-column gap-2">
            <div>
              <img className="d-flex img-fluid" src={image1} />
            </div>
            <div>
              <img className="d-flex img-fluid" src={image2} />
            </div>
          </div>
          <div>
            <img className="d-flex img-fluid" src={image3} />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default About;
