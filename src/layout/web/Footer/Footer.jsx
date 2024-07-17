import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="ro section-gap">
          <div className="footer-section ">
            <h3>Opening Hours</h3>
            <ul>
              <li>
                Monday - Friday <span>08.00 am - 10.00 pm</span>
              </li>
              <li>
                Saturday <span>08.00 am - 10.00 pm</span>
              </li>
              <li>
                Sunday <span>08.00 am - 10.00 pm</span>
              </li>
            </ul>
          </div>
          <div className="footer-section fasele">
            <h3>Contact Us</h3>
            <address>
              56/8, los angeles, rochy beach, Santa monica,
              <br />
              United states of america - 1205
            </address>
            <p>
              <strong className="number">012-6532-568-9746</strong>
              <br />
              <strong className="number" >012-6532-569-9748</strong>
            </p>
          </div>
          <div className="footer-section akhar">
            <h3>Newsletter</h3>
            <p>
              You can trust us. we only send promo offers, not a single spam.
            </p>
            <form>
              <input type="email" placeholder="Your Email address" />
              <button type="submit">→</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
