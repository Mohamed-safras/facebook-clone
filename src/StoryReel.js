import React from "react";
import Story from "./Story";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

import "./StoryReel.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function StoryReel() {
  const user = useSelector(selectUser);
  return (
    <div className="storyReel">
      <Story image={img1} title={user.displayName} profile={user.photoURL} />
      <Story image={img2} title="imthiyas" />
      <Story image={img3} title="mohamed" />
      <Story image={img3} title="mohamed" />
    </div>
  );
}

export default StoryReel;
