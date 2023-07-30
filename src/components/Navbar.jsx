import React from "react";
import "../styles/Navbar.css"; // Make sure to use the correct path to the CSS file
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  
  function gotTOGetAdvice() {
    navigate("/getAdvice");
  }

  return (
    <div className="container">
      <div className="buttonContainer">
        <button
          className="getButton"
          onClick={gotTOGetAdvice}
        >
          Get Advice
        </button>
      </div>
      <div className="navbar">
        <div className="logo" onClick={() => {navigate("/")}}>
          namah siddhm | नमः सिद्धम्
        </div>
        <div className="nav">
          <nav>
            <ul>
              <li onClick={() => {navigate("/")}}>Home</li>
              <li onClick={() => {navigate("/bhaktaamerStotra")}}>Bhaktaamer Stotra</li>
              <li onClick={() => {navigate("/vastuAdvice")}}>Vastu Advice</li>
              <li onClick={() => {navigate("/astrologyAdvice")}}>Astrology Advice</li>
              <li onClick={() => {navigate("/freeAdvice")}}>Free Advice</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
