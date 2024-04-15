import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <h1>მიიღე სწორი გადაწყვეტილება წარმატების მისაღწევად</h1>
            <p>წარმატებასთან რამოდენიმე ნაბიჯი გაშორებს</p>
            <div className="button">
              <Link to="/courses">
                <button className="primary-btn">
                  კურსების ნახვა <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
