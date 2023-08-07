import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import "../styles/Navbar.css";
import Drawer from "@mui/material/Drawer";
import logo from "../images/result.png";

function Navbar() {
  const [activeNavItem, setAvticeNavItem] = useState("/");

  const navigate = useNavigate();

  function gotTOGetAdvice() {
    setAvticeNavItem("");
    navigate("/getAdvice");
  }

  function handleNavItemClick(navItem) {
    setAvticeNavItem(navItem);
    setOpenDrawer(false);
    navigate(navItem);
  }

  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("activeNavItem", activeNavItem);
  }, [activeNavItem]);

  useEffect(() => {
    // Listen for changes in the location (URL) and update the activeNavItem accordingly
    setAvticeNavItem(location.pathname);
  }, [location]);


  return (
    <div className={`container ${openDrawer ? "containerOpenDrawer" : ""}`}>
      <div className="buttonContainer">
        <button className="getButton" onClick={gotTOGetAdvice}>
          Get Advice
        </button>
      </div>
      {isTab ? (
        <>
          <div className="navbar">
            <div
              className="logo"
              onClick={() => {
                handleNavItemClick("/");
              }}
            >
              <img src={logo} alt="Logo" className="logoImg"/>
              namah siddhm | नमः सिद्धम्
            </div>
            <div className="nav">
              <MenuIcon onClick={() => setOpenDrawer(true)} className="menubtn"/>
              <Drawer open={openDrawer} anchor="top" className="drawer" style={{padding: "20px"}}>
                  <ul>
                    <li
                      onClick={() => {
                        handleNavItemClick("/");
                      }}
                      className={activeNavItem === "/" ? "active" : ""}
                    >
                      Home
                    </li>
                    <li
                      onClick={() => {
                        handleNavItemClick("/bhaktaamerStotra");
                      }}
                      className={
                        activeNavItem === "/bhaktaamerStotra" ? "active" : ""
                      }
                    >
                      Bhaktaamer Stotra
                    </li>
                    <li
                      onClick={() => {
                        handleNavItemClick("/vastuAdvice");
                      }}
                      className={
                        activeNavItem === "/vastuAdvice" ? "active" : ""
                      }
                    >
                      Vastu Advice
                    </li>
                    <li
                      onClick={() => {
                        handleNavItemClick("/astrologyAdvice");
                      }}
                      className={
                        activeNavItem === "/astrologyAdvice" ? "active" : ""
                      }
                    >
                      Astrology Advice
                    </li>
                    <li
                      onClick={() => {
                        handleNavItemClick("/freeAdvice");
                      }}
                      className={
                        activeNavItem === "/freeAdvice" ? "active" : ""
                      }
                    >
                      Free Advice
                    </li>
                  </ul>
              </Drawer>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar">
            <div
              className="logo"
              onClick={() => {
                handleNavItemClick("/");
              }}
            >
              <img src={logo} alt="Logo" className="logoImg"/>
              namah siddhm | नमः सिद्धम्
            </div>
            <div className="nav">
              <nav>
                <ul>
                  <li
                    onClick={() => {
                      handleNavItemClick("/");
                    }}
                    className={activeNavItem === "/" ? "active" : ""}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => {
                      handleNavItemClick("/bhaktaamerStotra");
                    }}
                    className={
                      activeNavItem === "/bhaktaamerStotra" ? "active" : ""
                    }
                  >
                    Bhaktaamer Stotra
                  </li>
                  <li
                    onClick={() => {
                      handleNavItemClick("/vastuAdvice");
                    }}
                    className={activeNavItem === "/vastuAdvice" ? "active" : ""}
                  >
                    Vastu Advice
                  </li>
                  <li
                    onClick={() => {
                      handleNavItemClick("/astrologyAdvice");
                    }}
                    className={
                      activeNavItem === "/astrologyAdvice" ? "active" : ""
                    }
                  >
                    Astrology Advice
                  </li>
                  <li
                    onClick={() => {
                      handleNavItemClick("/freeAdvice");
                    }}
                    className={activeNavItem === "/freeAdvice" ? "active" : ""}
                  >
                    Free Advice
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
