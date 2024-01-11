import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Button } from "reactstrap";
import { Menu, XCircle } from "react-feather";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ listMenu, scrollToDiv, openMenu, setOpenMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currPath, setCurrPath] = useState("/");
  const [currIdx, setCurrIdx] = useState(5);

  useEffect(() => {
    let str = location.pathname.split("-");
    console.log("cek str navbar", str, currPath, currIdx);
    if (currIdx === 5) {
      var menuItems = document.querySelectorAll(
        "#container-button-menu div button span"
      );
      menuItems.forEach(function (item) {
        item.classList.remove("active-menu-item");
        item.classList.add("text-secondary");
      });
    } else if (str.includes(currPath)) {
      var menuItems = document.querySelectorAll(
        "#container-button-menu div button span"
      );
      menuItems.forEach(function (item) {
        item.classList.remove("active-menu-item");
        item.classList.add("text-secondary");
      });
      const element = document.getElementById("button-menu-" + currIdx);
      element.classList.remove("text-secondary");
      element.classList.add("active-menu-item");
    }
  }, [currPath, location?.pathname, currIdx]);

  return (
    <nav className={`${location?.pathname === "/" ? "fixed-top" : ""}`}>
      <div
        className={`d-flex flex-row justify-content-md-center justify-content-between align-items-center py-2 paddingComponentRight paddingComponentLeft bg-white ${
          location?.pathname === "/" ? "px-md-0 px-3" : ""
        }`}
        style={{ maxHeight: "80px" }}
      >
        <div
          className="d-flex justify-content-start align-items-center "
          style={{ width: "25%" }}
        >
          <div className="d-flex navbar-logo">
            <img
              src={Logo}
              alt="logo"
              onClick={() => {
                navigate("/");
                setCurrIdx(5);
              }}
              style={{ cursor: "pointer" }}
              className="d-flex img-fluid"
            />
          </div>
        </div>
        <div
          className="d-none d-md-flex flex-row justify-content-between align-items-center gap-4"
          // style={{ width: "75%" }}
        >
          <div
            className="d-flex flex-row justify-content-between align-items-center gap-5"
            id="container-button-menu"
          >
            {listMenu.map((e, i) => (
              <div key={e?.id}>
                <Button
                  color="transparent"
                  onClick={() => {
                    scrollToDiv(e?.id);
                    setCurrPath(e?.detail);
                    setCurrIdx(i);
                    var menuItems = document.querySelectorAll(
                      "#container-button-menu div button span"
                    );
                    menuItems.forEach(function (item) {
                      item.classList.remove("active-menu-item");
                      item.classList.add("text-secondary");
                    });
                    const element = document.getElementById("button-menu-" + i);
                    element.classList.remove("text-secondary");
                    element.classList.add("active-menu-item");
                    navigate(e?.detail);
                  }}
                >
                  <span
                    className="text-secondary text-menu"
                    id={`button-menu-` + i}
                  >
                    {e?.label}
                  </span>
                </Button>
              </div>
            ))}
          </div>
        </div>
        {!openMenu && (
          <div
            className="d-flex d-md-none"
            style={{ zIndex: 999, position: "sticky" }}
          >
            <Menu
              style={{ color: "#515A5F", cursor: "pointer" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </div>
        )}
        {openMenu && (
          <div className="d-flex d-md-none flex-column overlay px-2 py-4 gap-5">
            <div className="d-flex justify-content-end">
              <XCircle
                style={{ color: "#515A5F", cursor: "pointer" }}
                onClick={() => setOpenMenu(!openMenu)}
              />
            </div>
            <div className="d-flex flex-column gap-5">
              <div
                className="d-flex flex-column justify-content-between align-items-center gap-5"
                id="container-button-menu"
              >
                {listMenu.map((e, i) => (
                  <div key={e?.id}>
                    <Button
                      color="transparent"
                      onClick={() => {
                        scrollToDiv(e?.id);
                        setCurrPath(e?.detail);
                        setCurrIdx(i);
                        var menuItems = document.querySelectorAll(
                          "#container-button-menu div button span"
                        );
                        menuItems.forEach(function (item) {
                          item.classList.remove("active-menu-item");
                          item.classList.add("text-secondary");
                        });
                        const element = document.getElementById(
                          "button-menu-" + i
                        );
                        element.classList.remove("text-secondary");
                        element.classList.add("active-menu-item");
                        navigate(e?.detail);
                        setOpenMenu(false);
                      }}
                    >
                      <span
                        className="text-secondary text-menu"
                        id={`button-menu-` + i}
                      >
                        {e?.label}
                      </span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
