import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="formContainer">
      <img src="./formbackground.jpg" alt="background" className="formImg" />
      <div className="ttl">
        <h1 className="formTitle">JOIN US AND GET</h1>
        <h1 className="formTitle">DISCOUNT UP TO 50%</h1>
        <div className="inputField">
          <input
            type="text"
            placeholder="Your email here"
            className="inpFeild"
          />
        </div>
        <div className="formLink">
          <a href="#" className="linkS">I'm new member</a>
        </div>
      </div>
    </div>
  );
};

export default Form;
