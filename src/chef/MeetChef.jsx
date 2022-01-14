import React from "react";
import "./MeetChef.css";

const MeetChef = () => {
  return (
    <div className="container">
      <div className="headContainer">
        <h1 className="headText">MEET OUR CHEFS</h1>
        <p className="headPara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="cardsContainer">
        <div className="cardChef">
          <img src="./c1.jpg" alt="foods" className="cardImgChef" />
          <div className="textContainer">
            <h4 className="cardTitleChef">Ken Shin</h4>
          </div>
        </div>

        <div className="cardChef">
          <img src="./c2.jpg" alt="foods" className="cardImgChef" />
          <div className="textContainer">
            <h4 className="cardTitleChef">Souma</h4>
          </div>
        </div>

        <div className="cardChef">
          <img src="./c3.jpg" alt="foods" className="cardImgChef" />
          <div className="textContainer">
            <h4 className="cardTitleChef">Galibis</h4>
          </div>
        </div>

        <div className="cardChef">
          <img src="./c4.jpg" alt="foods" className="cardImgChef" />
          <div className="textContainer">
            <h4 className="cardTitleChef">Rebecca</h4>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <div className="headRight">
          <button className="BtnChef">SEE MORE</button>
        </div>
      </div>
    </div>
  );
};

export default MeetChef;
