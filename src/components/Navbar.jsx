import React from "react";
import "../styles/Navbar.css"; // Make sure to use the correct path to the CSS file

function Navbar() {

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (
    <div className="container">
      <div className="buttonContainer">
        <button className="getButton">Get Advice</button>
      </div>
      <div className="navbar">
        <div className="logo" onClick={scrollToTop}>namah siddhm | नमः सिद्धम्</div>
        <div className="nav">
          <nav>
            <ul>
              <li onClick={scrollToTop}>Home</li>
              <li>Bhaktaamer Stotra</li>
              <li>Vastu Advice</li>
              <li>Astrology Advice</li>
              <li>Free Advice</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
