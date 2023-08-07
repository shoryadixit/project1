import React from "react";
import "../styles/Banner.css";
import RashiSign from "../images/Rashi Signs.png";
import VastuDirection from "../images/VastuDirection.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Banner() {
  const navigate = useNavigate();

  function handleVastu() {
    navigate("/vastuAdvice");
  }

  function handleRashi() {
    navigate("/astrologyAdvice");
  }

  return (
    <>
      <div className="banner">
        <div className="logosContainer">
          <div className="VastuImgContainer">
            <img src={VastuDirection} alt="Vastu Direction" />
            <h3 className="VastuHeader" onClick={handleVastu}>
              वास्तु शास्त्र
            </h3>
            <p>
              आपके लक्ष्यों को पूरा करने या समस्याओं को सुलझाने के लिए
              वास्तुशास्त्र में अलग-अलग दिशाओं में स्थित ४५-ऊर्जाओं का उपयोग
              किया जाता है।{" "}
            </p>
          </div>
          <div className="RashiImgContainer">
            <img src={RashiSign} alt="Rashi Signs" />
            <h3 className="RashiHeader" onClick={handleRashi}>
              ज्योतिष शास्त्र
            </h3>
            <p>
              समयरेखा की व्याख्या और सही समाधान खोजने का विज्ञान है.ज्योतिष।
              इसमें मुख्य रूप से तीन चीजें शामिल हैं - 9ग्रह, 12राशि और 12घर।
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Banner;
