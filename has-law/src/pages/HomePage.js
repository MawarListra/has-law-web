import React, { useEffect, useState } from "react";
import {
  Navbar,
  Hero,
  Footer,
  About,
  Services,
  Experts,
  Publications,
} from "../components";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [currType, setCurrType] = useState(1);
  const listMenu = [
    {
      id: "services",
      label: "SERVICES",
    },
    {
      id: "teams",
      label: "OUR TEAMS",
    },
    {
      id: "publications",
      label: "PUBLICATIONS",
    },
    {
      id: "pro-bono",
      label: "PRO BONO",
    },
    {
      id: "careers",
      label: "CAREERS",
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
      <Hero id="home" />
      <About />
      <Services />
      <Experts />
      <Publications />
      <Footer />
    </div>
  );
};

export default Homepage;
