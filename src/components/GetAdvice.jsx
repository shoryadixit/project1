import React from "react";

function GetAdvice() {
  return (
    <div className="container">
      <div className="getAdviceBanner">Get Appointment</div>
      <form>
        <h1>Get Appointment</h1>
        <p>@just ₹.11/- per sq. feet</p>
        <p>
          <ul>
            <li>To the scale building plan (map).</li>
            <li>Note your concern in brief.</li>
            <li>Get Advice.</li>
          </ul>
        </p>
        <div>
          <h1>Who we are? What we are doing?</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/TX5a89UfljM?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
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
            <p>Want to get vastu advice for:</p>
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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default GetAdvice;