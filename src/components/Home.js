import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <Link to="/men" className="menlink">
        <div className="menshoe">
          <img src="/men.jpg" alt="menshoe" height="300" width="250" />
          <h2>Men</h2>
        </div>
      </Link>
      <Link to="/women" className="womenlink">
        <div className="womenshoe">
          <img src="/women.jpg" alt="womenshoe" height="300" width="250" />
          <h2>Women</h2>
        </div>
      </Link>
      <Link to="/kids" className="kidslink">
        <div className="kidsshoe">
          <img src="/kids.jpg" alt="kidsshoe" height="300" width="250" />
          <h2>Kids</h2>
        </div>
      </Link>
    </div>
  );
};
