import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      
      <Link to="/">
        <p className="movies-nav-text">
          Current Favorites
        </p>
      </Link>

  
        <p className="app-title">
          HotWatch
        </p>
     

      <a
        className="tmdb-nav-text"
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer">
        Checkout the Database
      </a>
    </nav>
  );
};

export default Nav