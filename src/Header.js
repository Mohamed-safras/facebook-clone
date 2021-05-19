import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import fblogo from "./fblogo.svg";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumSharpIcon from "@material-ui/icons/ForumSharp";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "./features/userSlice";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  const history = useHistory();
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    setInput(input);
  };
  const Logout = () => {
    dispatch(logout(auth.signOut()));
  };

  const [active, setActive] = useState("home");
  const toggle = (index) => {
    setActive(index);
  };

  useEffect(() => {
    let currentRoute = window.location.href;
    if (currentRoute.endsWith("/")) {
      setActive("home");
    } else if (currentRoute.endsWith("/friends")) {
      setActive("friends");
    } else if (currentRoute.endsWith("/watch")) {
      setActive("watch");
    } else if (currentRoute.endsWith("/group")) {
      setActive("group");
    } else if (currentRoute.endsWith("/gaming")) {
      setActive("gaming");
    }
  }, [active]);

  return (
    <div className="header">
      <div className="header-left">
        <img
          src={fblogo}
          onClick={() => history.push("/")}
          className="fb-logo"
          alt="facebook-img"
        />

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
        <Link
          to="/"
          onClick={() => toggle("home")}
          className={` ${
            active === "home"
              ? "header-option header-option--active"
              : "header-option"
          }`}
        >
          <HomeIcon fontSize="medium" />
        </Link>

        <Link
          to="friends"
          onClick={() => toggle("friends")}
          className={` ${
            active === "friends"
              ? "header-option header-option--active"
              : "header-option"
          }`}
        >
          <PeopleAltOutlinedIcon fontSize="medium" />
        </Link>
        <Link
          to="watch"
          onClick={() => history.push("/Watch")}
          onClick={() => toggle("watch")}
          className={` ${
            active === "watch"
              ? "header-option header-option--active"
              : "header-option"
          }`}
        >
          <OndemandVideoIcon fontSize="medium" />
        </Link>
        <Link
          to="groups"
          onClick={() => toggle("group")}
          className={` ${
            active === "group"
              ? "header-option header-option--active"
              : "header-option"
          }`}
        >
          <SupervisedUserCircleIcon fontSize="medium" />
        </Link>
        <Link
          to="gaming"
          onClick={() => toggle("gaming")}
          className={` ${
            active === "gaming"
              ? "header-option header-option--active"
              : "header-option"
          }`}
        >
          <SportsEsportsIcon fontSize="medium" />
        </Link>
      </div>
      <div className="header-right">
        <div onClick={Logout} className="header-info">
          <Avatar src={user.photo} />
          <h4>{user.displayName}</h4>
        </div>
        <div className="header__info__logo">
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
        <div className="header__info__logo">
          <IconButton>
            <ForumSharpIcon />
          </IconButton>
        </div>
        <div className="header__info__logo">
          <IconButton>
            <ForumSharpIcon />
          </IconButton>
        </div>
        <div className="header__info__logo">
          <IconButton>
            <ExpandMoreSharpIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
