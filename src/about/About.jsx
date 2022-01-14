import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const about = () => {
  

  return (
    <div className="bg2">
      <div className="rowOne" data-aos="fade-up">
        <h1 className="mainText2"> EXTRAORDINARY TASTE </h1>
        <h1 className="mainText2">AND EXPERIENCE</h1>
        <p className="para2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="rowTwo">

        <div className="left" data-aos="fade-right">
          <h1 className="mainText3"> WE MAKE SURE YOUR FOOD ARRIVE ON-TIME </h1>
          <p className="para3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            architecto laboriosam pariatur eum voluptate velit. Magni
            consequatur facilis ab qui ipsum expedita sit, doloribus quod fuga
            aperiam obcaecati placeat necessitatibus?
          </p>
          <button className="startedBtn4">READ MORE</button>
        </div>

        <div className="right" data-aos="fade-left">
          <img 
          src="./delivery.jpg" 
          alt="food" 
          className="secTwoImg1"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
