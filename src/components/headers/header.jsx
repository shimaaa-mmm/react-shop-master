import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header" className={scrolled ? "scrolled" : ""}>
        {!scrolled && (
          <div className="header-top">
            <div className="container">
              <div className="row justify-content-center">
                <div id="logo">
                  <a href="index.html">
                    <img src="/public/images/logo.webp" alt="Logo" title="Logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container main-menu">
          <div className="row align-items-center justify-content-center d-flex">
            <nav id="nav-menu-container">
              <ul className="nav-menu sf-js-enabled sf-arrows">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/Photo">Gallery</Link>
                </li>
                <li className="menu-has-children">
                  <a href="#">
                    Blog <FaAngleDown />
                  </a>
                  <ul>
                    <li>
                      <a href="blog-home.html">Blog Home</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-has-children">
                  <a href="#">
                    Pages <FaAngleDown />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="elements.html">Elements</a>
                    </li>
                    <li className="menu-has-children">
                      <a href="#">
                        Level 2 <FaAngleDown />
                      </a>
                      <ul>
                        <li>
                          <a href="#">Item One</a>
                        </li>
                        <li>
                          <a href="#">Item Two</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/map" >Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
