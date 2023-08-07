import React from "react";
import House from "../images/House.png";
import NewHouse from "../images/NewHouse.png";
import Flat from "../images/Flat.png";
import Education from "../images/Education.png";
import HealthCare from "../images/HealthCare.png";
import Industry from "../images/Industry.png";
import "../styles/VastuAdvice.css";
import Footer from "./Footer";

function VastuAdvice() {
  const Advice = [
    {
      id: 0,
      discription: "Existing Flat / House Vastu",
      pic: House,
    },
    {
      id: 1,
      discription: "New House Design & Construction",
      pic: NewHouse,
    },
    {
      id: 2,
      discription: "New Flat Selection",
      pic: Flat,
    },
    {
      id: 3,
      discription: "Educational Institute",
      pic: Education,
    },
    {
      id: 4,
      discription: "Healthcare Centre",
      pic: HealthCare,
    },
    {
      id: 5,
      discription: "Manufacturing Industry",
      pic: Industry,
    },
  ];

  return (
    <div className="VastuAdvicecontainer">
      <div className="VastuAdvicebannerContainer">
        <h1>We Offer The Following</h1>
        <h1>Vastu Consultation Services</h1>
      </div>
        <div className="VastuAdvicegridContainer">
          {Advice.map((ad) => (
            <div key={ad.id} className="VastuAdviceadviceContainer">
              <div className="VastuAdvicepics">
                <img src={ad.pic} alt={ad.discription} />
                <h1>{ad.discription}</h1>
              </div>
            </div>
          ))}
        </div>

        <Footer />
    </div>
  );
}

export default VastuAdvice;
