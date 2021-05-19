import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Friends from "./Routes/Friends";
import Watch from "./Routes/Watch";
import Groups from "./Routes/Groups";
import Gaming from "./Routes/Gaming";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Switch>
              <Route path="/gaming">
                <Header />
                <div classNam="app-body">
                  <Sidebar />
                  <Gaming />
                  <Widget />
                </div>
              </Route>
              <Route path="/groups">
                <Header />
                <div classNam="app-body">
                  <Sidebar />
                  <Groups />
                  <Widget />
                </div>
              </Route>
              <Route path="/watch">
                <Header />
                <div classNam="app-body">
                  <Sidebar />
                  <Watch />
                  <Widget />
                </div>
              </Route>
              <Route path="/friends">
                <Header />

                <div classNam="app-body">
                  <Sidebar />
                  <Friends />
                  <Widget />
                </div>
              </Route>
              <Route path="/">
                <Header />
                <div classNam="app-body">
                  <Sidebar />
                  <Feed />
                  <Widget />
                </div>
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
