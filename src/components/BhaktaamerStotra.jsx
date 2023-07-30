import React from "react";
import "../styles/BhaktaamerStotra.css";

function BhaktaamerStotra() {
  const stotras = [
    {
      id: 0,
      url: "https://www.youtube-nocookie.com/embed/3RZshPHSjd8?controls=0",
    },
    {
      id: 1,
      url: "https://www.youtube-nocookie.com/embed/YdVkpUYI1po?controls=0",
    },
    {
      id: 2,
      url: "https://www.youtube-nocookie.com/embed/ASWfQDOMuk0?controls=0",
    },
    {
      id: 3,
      url: "https://www.youtube-nocookie.com/embed/M01R_NWGD3g?controls=0",
    },
    {
      id: 4,
      url: "https://www.youtube-nocookie.com/embed/8lILa2S68jY?controls=0",
    },
    {
      id: 5,
      url: "https://www.youtube-nocookie.com/embed/EGJYTK8tG6k?controls=0",
    },
  ];


  return (
    <div className="container">
      <div className="bannerContainer">
        <h1>Shri Bhaktamara Stotra</h1>
        <h1 style={{ fontWeight: 400 }}>(श्री भक्तामर स्तोत्र)</h1>
      </div>
      <div className="videos">
        {stotras.map((video) => (
          <div key={video.id} className="video-container">
            <iframe
              width="560"
              height="315"
              src={video.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BhaktaamerStotra;
