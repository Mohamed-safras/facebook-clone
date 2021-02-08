import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

function Story({ title, image, profile }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar style={{ border: "3px solid #2e81f4" }} src={profile} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
