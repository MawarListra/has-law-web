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
import IcWA from "../assets/ic_whatsapp.png";

const Homepage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  // const [activeContent, setActiveContent] = useState();
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

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 4144; // Adjust this threshold as needed
      const shouldShowNavbar = window.scrollY < scrollThreshold;
      setShowNavbar(shouldShowNavbar);

      // Check if scrolled to the top or below the Hero component
      console.log("cek pathname", location?.pathname);
      if (location?.pathname !== "/") {
        setShowNavbar(shouldShowNavbar);
      } else if (window.scrollY === 0) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location?.pathname]);

  const renderContent = useMemo(() => {
    const str = location?.pathname.split("/");
    console.log("cek str", str);
    if (location?.pathname === "/") {
      return (
        <>
          <Hero id="home" scrollToDiv={() => scrollToDiv("about")} />
          <About id={"about"} />
          <Services id={"services"} />
          <Experts />
          <Publications />
        </>
      );
    } else if (str.includes("experts")) {
      return <ExpertsDetail />;
    } else if (str.includes("experts-detail")) {
      return <ContentExpertsDetail />;
    } else if (str.includes("services")) {
      return <ServicesDetail />;
    } else if (str.includes("services-detail")) {
      return <ContentServicesDetail />;
    } else if (str.includes("publications")) {
      return <PublicationsDetail />;
    } else if (str.includes("publications-detail")) {
      return <ContentPublicationsDetail />;
    } else if (str.includes("pro-bono")) {
      return <ProBono />;
    } else if (str.includes("careers")) {
      return <Careers />;
    }
  }, [location?.pathname]);

  return (
    <div
      className={`d-flex w-100 flex-column bg-white ${
        location?.pathname !== "/" ? "container-fluid" : ""
      }`}
      style={{ position: "relative", overflowX: "hidden" }}
    >
      {showNavbar && (
        <Navbar
          listMenu={listMenu}
          scrollToDiv={scrollToDiv}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      )}
      {renderContent}
      {/* {location?.pathname !== "/" && ( */}
      <div className="d-flex p-2 ic-whatsapp">
        <img className="d-flex w-auto" src={IcWA} />
      </div>
      {/* )} */}
      <Footer />
    </div>
  );
};

export default Homepage;
