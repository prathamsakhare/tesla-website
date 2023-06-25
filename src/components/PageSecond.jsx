import React from "react";
import "../styles/page2.css";
const PageSecond = () => {
  return (
    <div className="page2">
      <div className="center-content- primary-text-color">
        <h1>Model 3</h1>
        <p>Starting at $32,740</p>
        <p>After Federal Tax Credit</p>
      </div>
      <div className="btn-section">
        <button className="white-btn">Explore Inventory</button>
        <button className="black-btn">Custom Order</button>
      </div>
      <div className="footer-second-page">
        <p>
          3 months free Supercharging when you take delivery of a new Inventory
          vehicle by June 30
        </p>
      </div>
    </div>
  );
};

export default PageSecond;
