import React from "react";
import "../styles/GetAdvice.css";

function GetAdvice() {
  return (
    <div className="container">
      <div className="getAdviceBanner">Get Appointment</div>
      <div className="formContainer">
        <form>
          <div>
            <h1>Get Appointment</h1>
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
          <div className="formInnerContainer">
            <label>
              <p>Name (नाम)</p>
              <input type="text" required />
            </label>
            <label>
              <p>Mobile (सम्पर्क)</p>
              <input type="text" required />
            </label>
            <label>
              <p>City (शहर)</p>
              <input type="text" required />
            </label>
            <label>
              <p style={{margin: "5px 5px"}}>Want to get vastu advice for:</p>
              <div>
                <label>
                  <input type="checkbox" value="Home" required />
                  <span>Home</span>
                </label>
                <label>
                  <input type="checkbox" value="Office" required />
                  <span>Office</span>
                </label>
                <label>
                  <input type="checkbox" value="Factory" required />
                  <span>Factory</span>
                </label>
              </div>
            </label>
          </div>
          <button className="getAdviceSubmit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GetAdvice;
