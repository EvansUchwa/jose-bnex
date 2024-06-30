import { PhCaretCircleDownBold } from "@/uikits/icons";
import React from "react";

function VBanner() {
  return (
    <div className="pageContainer banner" id="vBanner">
      <div className="banner-video">
        <video src="/banners/home.mp4" autoPlay muted loop></video>
      </div>
      <div className="banner-text">
        <section>
          <h1>BNEX Group</h1>
          <p>Growing profitable businesses for a positive impact</p>
        </section>
      </div>
      <div className="banner-icon">
        <PhCaretCircleDownBold />
      </div>
    </div>
  );
}

export default VBanner;
