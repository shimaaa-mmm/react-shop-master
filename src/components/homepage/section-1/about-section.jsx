import React from "react";
import "./index.scss";

const Aboutsection = () => {
  return (
    <>
        <section className="about-section">
          <div className="text-content">
            <h1>About Our Story</h1>
            <p>
              Who are in extremely love with eco friendly system. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button >View Full Menu</button>
          </div>
          <div className="image-content">
            <img src="/public/images/hamber.webp" alt="Delicious Burger" />
          </div>
        </section>
    </>
  );
};

export default Aboutsection;
