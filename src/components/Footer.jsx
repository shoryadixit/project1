import React from "react";
import "../styles/Footer.css";
import insta from "../images/icons8-instagram-96.png";
import youtube from "../images/icons8-youtube-96.png";
import facebook from "../images/icons8-facebook-96.png";
import whatsappImg from "../images/icons8-whatsapp-96.png";

const Footer = () => {
  const phoneNumber = "+919358123344";
  const instagramLink = "https://www.instagram.com/vastuadvisorsaurav/";
  const youtubeLink = "https://www.youtube.com/@vastuadvisorsaurav";
  const facebookLink = "https://www.facebook.com/vastuadvisorsaurav";

  return (
    <footer className="footer">
      <div className="socialMediaLinks">
        <img src={facebook} alt="Facebook" onClick={() => {window.open(facebookLink, "_blank")}}/>
        <img src={youtube} alt="Youtube" onClick={() => {window.open(youtubeLink, "_blank")}}/>
        <img src={insta} alt="Instagram" onClick={() => {window.open(instagramLink, "_blank")}}/>
        <img src={whatsappImg} alt="WhatsApp" onClick={() => {window.open("https://wa.me/" + phoneNumber, "_blank")}}/>
      </div>
    </footer>
  );
};

export default Footer;
