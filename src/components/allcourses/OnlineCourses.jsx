import React from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";
import { Link } from "react-router-dom";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <p>კურსები</p>
          <h2>აღმოაჩინე შენი კარიერის განვითარების საუკეთესო გზა</h2>
          <div className="content grid3">
            {online.map((val) => (
              <Link to={`/course/${val.id}/${val.path}`}>
                <div className="box">
                  <div className="img img_container">
                    <img src={val.cover} />
                    <img src={val.hoverCover} alt="" className="show" />
                  </div>
                  <h1>{val.courseName}</h1>
                  <div className="box_details">
                    <span>{val.duration}</span>
                    <span>{val.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
