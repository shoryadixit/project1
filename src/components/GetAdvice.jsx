import React from "react";
import emailjs from "emailjs-com";
import "../styles/GetAdvice.css";
import Footer from "./Footer";

function GetAdvice() {
  function sendEmail(e) {
    e.preventDefault();

    // Replace these values with your actual email service configuration
    const serviceId = "service_nkchyg8";
    const templateId = "template_xza5olm";
    const userId = "JN3gSPVerLEVgLUuC";

    const formData = new FormData(e.target);
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log("Email sent successfully!", result.text);
        alert("Thank you! Your form has been submitted.");
        e.target.reset();
      },
      (error) => {
        console.error("Error sending email:", error);
        alert("Sorry, there was an issue submitting the form. Please try again later.");
      }
    );
  }

  return (
    <div className="GetAdvicecontainer">
      <div className="getAdviceBanner">Get Appointment</div>
      <div className="GetAdviceformContainer">
        <form onSubmit={sendEmail}>
          <div>
            <h1 className="getHeader">Get Appointment</h1>
            <p>@just ₹.11/- per sq. feet</p>
            <p>
              <ul>
                <li>To the scale building plan (map).</li>
                <li>Note your concern in brief.</li>
                <li>Get Advice.</li>
              </ul>
            </p>
          </div>
          <div>
            <h1>Who we are? What we are doing?</h1>
            <iframe
              width="auto"
              height="auto"
              src="https://www.youtube-nocookie.com/embed/TX5a89UfljM?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="GetAdviceformInnerContainer">
            <label>
              <p>Name (नाम)</p>
              <input type="text" name="from_name" required />
            </label>
            <label>
              <p>Mobile (सम्पर्क)</p>
              <input type="text" name="mobile" required />
            </label>
            <label>
              <p>City (शहर)</p>
              <input type="text" name="city" required />
            </label>
            <label>
              <p style={{ margin: "5px 5px" }}>Want to get vastu advice for:</p>
              <div className="checkboxInput">
                <label>
                  <input type="checkbox" name="adviceFor" value="Home" />
                  <span>Home</span>
                </label>
                <label>
                  <input type="checkbox" name="adviceFor" value="Office" />
                  <span>Office</span>
                </label>
                <label>
                  <input type="checkbox" name="adviceFor" value="Factory" />
                  <span>Factory</span>
                </label>
              </div>
            </label>
          </div>
          <button type="submit" className="getAdviceSubmit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default GetAdvice;
