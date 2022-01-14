import React from "react";
import "./Content.css";
import { EnvironmentOutlined } from "@ant-design/icons";

function Content() {
  return (
    <>
      <div className="bg">
        <div className="text">
          <h1 className="mainText">BEST FOOD FOR </h1>
          <h1 className="mainText">YOUR TASTE </h1>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            dolorum unde voluptatum at atque, deserunt perspiciatis minima
          </p>
          <div className="btnDiv">
            <button className="startedBtn">GET STARTED</button>
            <button className="startedBtn2">
              <span className="textLoc">YOUR LOCATION </span>
              <button className="startedBtn3">
                <EnvironmentOutlined className="iconLocation" />
              </button>
            </button>
          </div>
        </div>
        <div className="bgImage">
          <div className="container ">
          <img 
          src="./f2.png" 
          alt="food" 
          className="backgroundImage" 
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
