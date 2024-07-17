import React, { useState } from "react";
import "./index.scss";
import { motion } from 'framer-motion';

const Intro = () => {
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState("*");

  // Handler function for filter click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Animation for menu items
  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // Menu items data
  const menuItems = [
    { category: ".breakfast", title: "Cappuccino", price: "$49", description: "Usage of the Internet is becoming more common due to rapid advance." },
    { category: ".breakfast", title: "Mocha", price: "$49", description: "Usage of the Internet is becoming more common due to rapid advance." },
    { category: ".lunch", title: "Piccolo Latte", price: "$49", description: "Usage of the Internet is becoming more common due to rapid advance." },
    { category: ".dinner", title: "Americano", price: "$49", description: "Usage of the Internet is becoming more common due to rapid advance." },
    { category: ".budget-meal", title: "Macchiato", price: "$49", description: "Usage of the Internet is becoming more common due to rapid advance." },
    { category: ".buffet", title: "Ristretto", price: "$49", description: "Usage of the Internet is becoming more common due to rapid advance." },
  ];

  return (
    <section className="menu-area section-gap" id="menu">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">What kind of Foods we serve for you</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="filter-container">
          <ul className="filter-wrap filters col-lg-12 no-padding">
            {["*", ".breakfast", ".lunch", ".dinner", ".budget-meal", ".buffet"].map((filter, index) => (
              <li
                key={index}
                className={activeFilter === filter ? "active" : ""}
                data-filter={filter}
                onClick={() => handleFilterClick(filter)}
              >
                {filter === "*" ? "All Menu" :
                 filter === ".breakfast" ? "Breakfast" :
                 filter === ".lunch" ? "Lunch" :
                 filter === ".dinner" ? "Dinner" :
                 filter === ".budget-meal" ? "Budget Meal" :
                 filter === ".buffet" ? "Buffet" : ""}
              </li>
            ))}
          </ul>
          <div className="filters-content">
            <div className="row grid">
              {menuItems
                .filter(item => activeFilter === "*" || activeFilter === item.category)
                .map((item, index) => (
                  <motion.div
                    key={index}
                    className={`col-md-6 all ${item.category.slice(1)}`}
                    initial="hidden"
                    animate="visible"
                    variants={slideIn}
                  >
                    <div className="single-menu">
                      <div className="title-wrap d-flex justify-content-between">
                        <h4>{item.title}</h4>
                        <h1 className="price">{item.price}</h1>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
