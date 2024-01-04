import React, { useEffect, useMemo, useState } from "react";
import {
  Navbar,
  Hero,
  Footer,
  About,
  Services,
  Experts,
  Publications,
  ProBono,
  Careers,
} from "../components";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import ExpertsDetail from "../components/Experts/Detail";
import ContentExpertsDetail from "../components/Experts/Detail/contentDetails";
import ServicesDetail from "../components/Services/Detail";
import ContentServicesDetail from "../components/Services/Detail/contentDetails";
import PublicationsDetail from "../components/Publications/Detail";
import ContentPublicationsDetail from "../components/Publications/Detail/contentDetails";

const Homepage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  // const [activeContent, setActiveContent] = useState();
  const [currType, setCurrType] = useState(1);
  const listMenu = [
    {
      id: "services",
      label: "SERVICES",
      detail: "/services",
    },
    {
      id: "teams",
      label: "OUR TEAMS",
      detail: "/experts",
    },
    {
      id: "publications",
      label: "PUBLICATIONS",
      detail: "/publications",
    },
    {
      id: "pro-bono",
      label: "PRO BONO",
      detail: "/pro-bono",
    },
    {
      id: "careers",
      label: "CAREERS",
      detail: "/careers",
    },
  ];

  const scrollToDiv = (myDiv) => {
    var element = document.getElementById(myDiv); // Replace 'your-div-id' with the actual ID of your div
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Use 'auto' for instant scroll or 'smooth' for smooth scrolling
      });
    }
  };

  useEffect(() => {
    if (openMenu) {
      document.querySelector("body").classList.remove("scroll");
      document.querySelector("html").classList.remove("scroll");
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      document.querySelector("body").classList.add("scroll");
      document.querySelector("html").classList.add("scroll");
      window.onscroll = function () {};
    }
  }, [openMenu]);

  document.addEventListener("DOMContentLoaded", function () {
    // Number of circles you want to create
    const numberOfCircles = 4;

    for (let i = 0; i < numberOfCircles; i++) {
      createCircle();
    }

    function createCircle() {
      const circle = document.createElement("div");
      circle.className = "circle";

      // Set random position for the circle
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;

      circle.style.left = `${randomX}px`;
      circle.style.top = `${randomY}px`;

      document.body.appendChild(circle);
    }
  });

  const renderContent = useMemo(() => {
    if (location?.pathname === "/") {
      return (
        <>
          <Hero id="home" />
          <About />
          <Services />
          <Experts />
          <Publications />
        </>
      );
    } else if (location?.pathname === "/experts") {
      return <ExpertsDetail />;
    } else if (location?.pathname === "/experts-detail") {
      return <ContentExpertsDetail />;
    } else if (location?.pathname === "/services") {
      return <ServicesDetail />;
    } else if (location?.pathname === "/services-detail") {
      return <ContentServicesDetail />;
    } else if (location?.pathname === "/publications") {
      return <PublicationsDetail />;
    } else if (location?.pathname === "/publications-detail") {
      return <ContentPublicationsDetail />;
    } else if (location?.pathname === "/pro-bono") {
      return <ProBono />;
    } else if (location?.pathname === "/careers") {
      return <Careers />;
    }
  }, [location?.pathname]);

  return (
    <div
      className="container-fluid d-flex w-100 flex-column bg-white px-3 px-md-0"
      style={{ position: "relative", overflowX: "hidden" }}
    >
      <Navbar
        listMenu={listMenu}
        scrollToDiv={scrollToDiv}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      {renderContent}

      <Footer />
    </div>
  );
};

export default Homepage;
