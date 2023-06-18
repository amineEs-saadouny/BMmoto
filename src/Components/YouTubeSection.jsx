import React from "react";
import "../Style/YouTubeSection.css";

function YouTubeSection() {
  return (
    <>
      <h1 className="youTubeSection-h1">Featured on YouTube</h1>
      <div className="youTubeSection-container">
        <iframe
          className="youTubeSection-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AppmQslqtkc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className="youTubeSection-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AXCn-OIjKQs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default YouTubeSection;
