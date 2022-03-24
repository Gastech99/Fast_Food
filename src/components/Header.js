import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
        <Navbar/>
      <div className="banner__content">
        <div className="container">
            <div className="banner__text">
                <h3>Pizza Food</h3>
                <h1>GASSFOOD PIZZA</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. And scrambled it to make a type specimen book.
                </p>
                <div className="banner-btn">
                    <a href="" className="btn btn-smart">DELIVERY NOW</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
