import React, { useState, useEffect } from "react";
import "./index.scss";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFilterClick = (filter) => {
    if (filter === "*") {
      setIsTransitioning(true);
    } else {
      setActiveFilter(filter);
    }
  };

  // Reset transitioning state after animation ends
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveFilter("*");
      }, 500); // 500ms matches the duration of the animation
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const images = [
    { id: 1, src: "/public/images/gride-1.webp", category: "breakfast" },
    { id: 2, src: "/public/images/gride-2.webp", category: "dinner" },
    { id: 3, src: "/public/images/gride-3.webp", category: "budget-meal" },
    { id: 4, src: "/public/images/gride-4.webp", category: "breakfast" },
    { id: 5, src: "/public/images/gride-5.webp", category: "lunch" },
    { id: 6, src: "/public/images/gride-6.webp", category: "buffet" },
  ];

  const filteredImages = activeFilter === "*"
    ? images
    : images.filter(image => image.category === activeFilter.substring(1));

  return (
    <section className="gallery-area section-gap" id="gallery">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Food and Customer Gallery</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <ul className="filter-wrap filters col-lg-12 no-padding">
          <li
            className={activeFilter === "*" ? "active" : ""}
            data-filter="*"
            onClick={() => handleFilterClick("*")}
          >
            All Menu
          </li>
          <li
            className={activeFilter === ".breakfast" ? "active" : ""}
            data-filter=".breakfast"
            onClick={() => handleFilterClick(".breakfast")}
          >
            Breakfast
          </li>
          <li
            className={activeFilter === ".lunch" ? "active" : ""}
            data-filter=".lunch"
            onClick={() => handleFilterClick(".lunch")}
          >
            Lunch
          </li>
          <li
            className={activeFilter === ".dinner" ? "active" : ""}
            data-filter=".dinner"
            onClick={() => handleFilterClick(".dinner")}
          >
            Dinner
          </li>
          <li
            className={activeFilter === ".budget-meal" ? "active" : ""}
            data-filter=".budget-meal"
            onClick={() => handleFilterClick(".budget-meal")}
          >
            Budget Meal
          </li>
          <li
            className={activeFilter === ".buffet" ? "active" : ""}
            data-filter=".buffet"
            onClick={() => handleFilterClick(".buffet")}
          >
            Buffet
          </li>
        </ul>
        <div className={`filters-content ${isTransitioning ? "transitioning" : ""} ${activeFilter === "*"
          ? "allmenu-view"
          : activeFilter === ".breakfast"
            ? "breakfast-view"
            : ""}`}>
          <div className={`row grid`}>
            {filteredImages.map(image => (
              <div
                key={image.id}
                className={`col-lg-4 col-md-6 col-sm-6 all ${image.category} ${
                  activeFilter === ".breakfast" && image.category === "breakfast"
                    ? image.id === 1 ? 'breakfast-img-1' :
                      image.id === 4 ? 'breakfast-img-4' :
                      ''
                    : ''
                }`}
                style={activeFilter === "*" ? {
                  position: 'absolute',
                  left: image.id === 1 ? '0.246%' :
                        image.id === 4 ? '0px' :
                        image.id === 2 ? '33.2456%' :
                        image.id === 3 ? '66.579%' :
                        image.id === 5 ? '66.579%' :
                        image.id === 6 ? '33.2456%'  :
                        'unset',
                  top: image.id === 4 ? '273px' :
                       image.id === 6 ? '399px' :
                       image.id === 5? '267px' :

                       '0px'
                } : {}}
              >
                <div className="single-gallery">
                  <img className="img-fluid" src={image.src} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
