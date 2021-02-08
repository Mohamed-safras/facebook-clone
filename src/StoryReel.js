import React from "react";
import Story from "./Story";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={img1} title="aw safras" />
      <Story profile={img2} image={img2} title="imthiyas" />
      <Story profile={img3} image={img3} title="mohamed" />
      <Story profile={img3} image={img3} title="mohamed" />
    </div>
  );
}

export default StoryReel;
