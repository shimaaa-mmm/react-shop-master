import React from "react";
import "./index.scss";

const MapComponent = () => {
  return (
    <div className="map-contact-container">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.94694750912!2d51.50542822552356!3d35.80123572337473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e04da39e6ff5f%3A0x16693898ffaff197!2z2K_Yp9mG2LTar9in2Ycg2b7bjNin2YUg2YbZiNix!5e0!3m2!1sfa!2sus!4v1721218141174!5m2!1sfa!2sus"
          className="map-iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <section className="contact-section">
        <div className="contact-details">
          <div className="contact-item">
            <span className="icon">&#8962;</span>
            <div>
              <h4>Binghamton, New York</h4>
              <p>4343 Hinkle Deegan Lake Road</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">&#9742;</span>
            <div>
              <h4>00 (958) 9865 562</h4>
              <p>Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">&#9993;</span>
            <div>
              <h4>support@colorlib.com</h4>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-left">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter email address" />
              <input type="text" placeholder="Enter subject" />
            </div>
            <div className="form-right">
              <textarea className="form-message" placeholder="Enter Message"></textarea>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MapComponent;
