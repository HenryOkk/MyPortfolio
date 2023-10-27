import React from "react";
import "./Navbar.scss";
// 15.5
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Henry (Donghwan) Ok</span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
