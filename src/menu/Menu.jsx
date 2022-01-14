import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menuContainer">


      <div className="head">
        <div className="headLeft">
          <h1 className="headText">EXTRAORDINARY TASTE </h1>
          <h1 className="headText">AND EXPERIENCE</h1>
          <p className="headPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="headRight">
          <button className="Btn">SEE MORE</button>
        </div>
      </div>


      <div className="content">
        <div className="card">
            <img src="./11.jpg" alt="foods" className="cardImg" />
            <div className="textContainer">
                <h4 className="cardTitle">Title</h4>
                <p className="cardDetails">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className="card">
            <img src="./22.jpg" alt="foods" className="cardImg" />
            <div className="textContainer">
                <h4 className="cardTitle">Title</h4>
                <p className="cardDetails">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className="card">
            <img src="./33.jpg" alt="foods" className="cardImg" />
            <div className="textContainer">
                <h4 className="cardTitle">Title</h4>
                <p className="cardDetails">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
