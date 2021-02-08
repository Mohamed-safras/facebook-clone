import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineSharpIcon from "@material-ui/icons/ChatBubbleOutlineSharp";
import NearMeSharpIcon from "@material-ui/icons/NearMeSharp";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
function Post({ profilepic, username, image, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilepic} />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>timestamp</p>
        </div>
      </div>
      <div className="postBottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineSharpIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeSharpIcon />
          <p>Shere</p>
        </div>
        <div className="post__option">
          <Avatar />
          <ExpandMoreSharpIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
