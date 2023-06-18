import React from "react";
import "../Style/Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  const path = "http://localhost:5000/Imgs/";
  return (
    <>
      <div className="product-container" id={`product-${props.scrollId}`}>
        <section className="product-img-container">
          <img className="product-img" src={path + props.main_img} />
        </section>
        <section className="product-info">
          <h2 className="product-h2">{props.name}</h2>
          <h4 className="product-h4">
            {props.brand}{" "}
            <span className="product-span">| {props.displacement} cc</span>
          </h4>
          <p className="product-p">{props.description.substring(0, 100)}...</p>
          <Link to="/moto" state={{ from: props.id }}>
            <button className="product-button">
              EXPLORE <i className={`fa fa-chevron-right `}></i>
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default Product;
