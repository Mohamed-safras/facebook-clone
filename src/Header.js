import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import fblogo from "./fblogo.svg";
import HomeIcon from "@material-ui/icons/Home";
import FlagSharpIcon from "@material-ui/icons/FlagSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import StorefrontSharpIcon from "@material-ui/icons/StorefrontSharp";
import SupervisedUserCircleSharpIcon from "@material-ui/icons/SupervisedUserCircleSharp";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumSharpIcon from "@material-ui/icons/ForumSharp";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setInput(input);
  };
  return (
    <div className="header">
      <div className="header-left">
        <img src={fblogo} className="fb-logo" alt="facebook-img" />

        <div className="header-input">
          <SearchIcon style={{ marginTop: "8px" }} />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search facebook"
              type="text"
            />
            <button onClick={submit}>submit</button>
          </form>
        </div>
      </div>
      <div className="header-center">
        <div className="header-option header-option--active">
          <HomeIcon fontSize="medium" />
        </div>
        <div className="header-option">
          <FlagSharpIcon fontSize="medium" />
        </div>
        <div className="header-option">
          <SubscriptionsSharpIcon fontSize="medium" />
        </div>
        <div className="header-option">
          <StorefrontSharpIcon fontSize="medium" />
        </div>
        <div className="header-option">
          <SupervisedUserCircleSharpIcon fontSize="medium" />
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          <Avatar />
          <h4>aw safras</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumSharpIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveSharpIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreSharpIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
