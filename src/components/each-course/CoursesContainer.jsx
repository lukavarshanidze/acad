import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { online } from "../../dummydata";
import styles from "./courses.module.scss";
import yesImage from "../../assets/yes.png";

const CoursesContainer = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  console.log(id);
  const func = () => {
    const currentItem = online.find(
      (item) => item.id.toString() === id.toString()
    );
    setData(currentItem);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    func();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <div className={styles.heading}>
          <h2 className={styles.course_name}>{data && data.courseName}</h2>
          <div>
            <div className={styles.you_will_learn}>
              <h2>რას ისწავლი კურსზე</h2>
              <ul>
                {data &&
                  data.content.what_youll_learn.map((each, index) => (
                    <div key={index} className={styles.youdo_each_element}>
                      <img src={yesImage} />
                      <li key={each.id}>{each}</li>
                    </div>
                  ))}
              </ul>
            </div>
            <div className={styles.requirements}>
              <h2>მოთხოვნილებები</h2>
              <ul>
                {data &&
                  data.content.requirement.map((each, index) => (
                    <li key={index}>{each}</li>
                  ))}
              </ul>
            </div>

            <div className={styles.shortDesc}>
              <h3>მოკლე აღწერა</h3>
              <p> {data && data.content.shortDesc}</p>
              <p style={{ marginTop: "5px" }}> {data && data.content.desc}</p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CoursesContainer;
