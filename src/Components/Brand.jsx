import React from "react";
import "../Style/Brand.css";
import { Link } from "react-router-dom";

function Brand(props) {
  const path = "http://localhost:5000/Imgs/";
  return (
    <>
      <Link to="/products" state={{ from: props.name }}>
        <div className="brand-container">
          <img className="brand-img" src={path + props.logo} alt={props.name} />
        </div>
      </Link>
    </>
  );
}

export default Brand;
