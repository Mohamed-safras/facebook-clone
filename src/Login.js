import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
const Login = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photo: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
  const register = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please Enter Your Name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photo,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: photo,
              })
            );
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login">
      <div className="login__left">
        <h1 className="facebook">facebook</h1>
        <h2>
          Facebook helps you connect and share with the people in your life.
        </h2>
      </div>
      <div className="login__right">
        <div className="login__details">
          <form>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
            <input
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              type="text"
              placeholder="PhotoUrl(optional)"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address or phone number"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <Button onClick={signIn} type="submit" className="login_btn">
              log in
            </Button>
          </form>
        </div>
        <p>forgotten password?</p>
        <hr />
        <Button onClick={register} type="submit" className="register_btn">
          Create New Account
        </Button>
      </div>
    </div>
  );
};

export default Login;
