import React from "react";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <img src="../logo.png" className="logo" alt=" Delicious" />
        <img src="../logoSmall.png" className="logo-small" alt=" Delicious" />
      </div>

      <div className="topCenter">
        <ul className="topList">
          <a href=""><li className="topListItem">Location</li></a>
          <a href=""><li className="topListItem">Menu</li></a>
          <a href=""><li className="topListItem">About</li></a>
          <a href=""><li className="topListItem">Contact</li></a>
        </ul>
      </div>

      <div className="topRight">
        <ul className="login">
          <li className="loginText">login</li>
        </ul>
        <button className="sign-up-btn">Sign up</button>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
