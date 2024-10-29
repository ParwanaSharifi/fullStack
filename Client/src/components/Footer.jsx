import React from "react";
import "./Home.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Recipe Website. All rights reserved.
        </p>
        <div>
          <a href="https://facebook.com" className="text-light mx-2">
            Facebook
          </a>
          <a href="https://twitter.com" className="text-light mx-2">
            Twitter
          </a>
          <a href="https://instagram.com" className="text-light mx-2">
            Instagram
          </a>
        </div>
        <p>
          Contact us:{" "}
          <a href="mailto:info@recipewebsite.com" className="text-light">
            info@recipewebsite.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
