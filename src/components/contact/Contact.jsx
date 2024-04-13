import React, { useEffect } from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  // const map =
    // 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="contacts padding">
        <div className="container shadow flexSB">
          {/* <div className="left row">
            <iframe src={map}></iframe>
          </div> */}
          <div className="right row">
            <h1>კონტაქტი</h1>
            <p>მოგვწერეთ, ჩვენი გუნდი მზადაა უპასუხოს თქვენს ყველა შეკითხვას</p>

            <div className="items grid2">
              <div className="box">
                <h4>იმეილი:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className="box">
                <h4>მობილურის ნომერი:</h4>
                <p> +995 555 39 22 21</p>
              </div>
            </div>

            {/* <form action="">
              <div className="flexSB">
                <input type="text" placeholder="სახელი" />
                <input type="email" placeholder="იმეილი" />
              </div>
              <textarea cols="30" rows="10" placeholder="მესიჯი..."></textarea>
              <button className="primary-btn">გაგზავნა</button>
            </form> */}

            <h3>გამოგვყევით სოც ქსელებში:</h3>
            <div className="contact_soc_networks">
              <a  href="https://www.facebook.com/groups/396684586632107" target="_blank">Facebook</a>
              {/* <a href="#">Instagram</a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
