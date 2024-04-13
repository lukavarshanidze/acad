import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import { Link } from "react-router-dom";

const CoursesCard = () => {
  let path = "";
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items">
              <div className="content flex courseCard_content_element">
                <div className="text courseCard_text_element">
                  <h1>{val.coursesName}</h1>
                  <div className="details">
                    {val.courTeacher.map((details) => (
                      <>
                        <div className="box">
                          {/* <div className="dimg">
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div> */}
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price coursesCard_price_element">
                <h3>
                    {val.duration}
                    <br></br>
                    {val.price}
                </h3>
              </div>
              <Link to={`/course/${val.id}/${val.path}`}>
                <button className="outline-btn">დეტალურად</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
