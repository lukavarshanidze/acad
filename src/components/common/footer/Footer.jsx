import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="newletter"></section>
      <footer>
        <div className="footer_container">
          <div className="container padding footer_container">
            <div className="box logo">
              <h1>Reactor</h1>
              <span>ონლაინ სწავლა და განათლება</span>
              <p>
                რეაქტორის ყველა კურსი საფუძვლიანია, წარმატებით გავლის
                შემთხვევაში გექნება ის ცოდნა რასაც სამსახურებში ითხოვენ
              </p>

              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
            </div>
            <div className="box link">
              <h3>გვერდები</h3>
              <ul>
                <li>
                  <Link to="/about">ჩვენ შესახებ</Link>
                </li>
                <li>
                  <Link to="/courses">კურსები</Link>
                </li>
                <li>
                  <Link to="/team">გუნდი</Link>
                </li>
              </ul>
            </div>

            <div className="box last">
              <h3>გაქვთ შეკითხვა?</h3>
              <ul>
                <li>
                  <i className="fa fa-map"></i>
                  <Link to="/contact">კონტაქტი</Link>
                </li>
                <li>
                  <i className="fa fa-phone-alt"></i>
                  +995 555 39 22 21
                </li>
                <li>
                  <i className="fa fa-paper-plane"></i>
                  info@yourdomain.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2024 ყველა უფლება დაცულია
          
        </p>
      </div>
    </>
  );
};

export default Footer;
