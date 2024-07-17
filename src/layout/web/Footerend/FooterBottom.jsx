import React from 'react';
import { FaFacebookF, FaTwitter, FaBehance, FaDribbble } from 'react-icons/fa';
import './index.scss';

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <p className='end'>
        Copyright ©2024 All rights reserved | This template is made with <span>❤️</span> by <span className="colorlib">Colorlib</span>        </p>
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Dribbble">
            <FaDribbble />
          </a>
          <a href="#" aria-label="Behance">
            <FaBehance />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
