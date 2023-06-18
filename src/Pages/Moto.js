import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Product from "../Components/Product";
import "../Style/Moto.css";
import NewArrivals from "../Components/NewArrivals";
import { useLocation } from "react-router-dom";

function Moto() {
  const location = useLocation();
  const [from, setFrom] = React.useState(location.state?.from);
  useEffect(() => {
    setFrom(location.state?.from);
  }, [location.state?.from]);
  window.scrollTo(0, 0);

  const [product, setProduct] = React.useState({});
  if (product.name) {
    document.title = `${product.name} | ${product.b_name}`;
  }

  React.useEffect(() => {
    fetch("http://localhost:5000/getProduct", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ id: from }),
    })
      .then((response) => response.json())
      .then((data) => setProduct(data.data[0]));
  }, [from]);

  const path = "http://localhost:5000/Imgs/";

  const [descriptionCheckbox, setDescriptionCheckbox] = React.useState(true);
  const [dWCheckbox, setDWCheckbox] = React.useState(false);
  const [engineCheckbox, setEngineCheckbox] = React.useState(false);
  const [fromTheSameBrand, setFromTheSameBrand] = React.useState([]);

  React.useEffect(
    function () {
      fetch("http://localhost:5000/getMotos", {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          whatToGet: "fromTheSameBrand",
          brandName: product.b_name,
          excludedId: from,
        }),
      })
        .then((response) => response.json())
        .then((data) => setFromTheSameBrand(data.data));
    },
    [product.name]
  );

  const fromTheSameBrandElements = fromTheSameBrand.map((item) => {
    return (
      <Product
        id={item.id}
        main_img={item.main_img}
        name={item.name}
        brand={item.b_name}
        displacement={item.displacement}
        description={item.description}
      />
    );
  });

  return (
    <div>
      <Header />
      <div className="moto-container">
        <div className="moto-top-section">
          <img className="moto-top-section-img" src={path + product.main_img} />

          <div className="moto-top-section-info">
            <h1 className="moto-top-section-info-h1">
              {product.name}{" "}
              <span className="moto-top-section-info-h1-span">
                | {product.b_name}
              </span>
            </h1>
            <div className="moto-top-section-info-buttons">
              <input
                className="description-checkbox"
                type="checkbox"
                checked={descriptionCheckbox}
              />
              <button
                onClick={() => {
                  setDescriptionCheckbox(true);
                  setDWCheckbox(false);
                  setEngineCheckbox(false);
                }}
                className={`moto-top-section-info-button ${
                  descriptionCheckbox ? "btn-active" : ""
                }`}
              >
                description
              </button>
              <label>
                <input
                  className="dw-checkbox"
                  type="checkbox"
                  checked={dWCheckbox}
                />
                <button
                  onClick={() => {
                    setDescriptionCheckbox(false);
                    setDWCheckbox(true);
                    setEngineCheckbox(false);
                  }}
                  className={`moto-top-section-info-button ${
                    dWCheckbox ? "btn-active" : ""
                  }`}
                >
                  Dimensions/Weight
                </button>
              </label>
              <label>
                <input
                  className="engine-checkbox"
                  type="checkbox"
                  checked={engineCheckbox}
                />
                <button
                  onClick={() => {
                    setDescriptionCheckbox(false);
                    setDWCheckbox(false);
                    setEngineCheckbox(true);
                  }}
                  className={`moto-top-section-info-button ${
                    engineCheckbox ? "btn-active" : ""
                  }`}
                >
                  engine
                </button>
              </label>
            </div>
            <label>
              <input
                className="description-checkbox"
                type="checkbox"
                checked={descriptionCheckbox}
              />
              <p
                className={`moto-top-section-info-description ${
                  descriptionCheckbox ? `active-p` : ``
                }`}
              >
                {product.description}
              </p>
            </label>
            <label>
              <input
                className="dw-checkbox"
                type="checkbox"
                checked={dWCheckbox}
              />
              <div
                className={`moto-top-section-info-DW ${
                  dWCheckbox ? "active-p" : ""
                }`}
                dangerouslySetInnerHTML={{
                  __html: product.dimensions_and_weight,
                }}
              ></div>
            </label>
            <label>
              <input
                className="engine-checkbox"
                type="checkbox"
                checked={engineCheckbox}
              />
              <div
                className={`moto-top-section-info-engine ${
                  engineCheckbox ? "active-p" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: product.engine }}
              ></div>
            </label>
          </div>
        </div>
        <div className="moto-buttom-section">
          <h1 className="moto-buttom-section-h1">gallery</h1>
          <div className="moto-buttom-section-gallery">
            <div className="moto-buttom-section-gallery-top">
              <a className="img" href={path + product.img_1} target="_blank">
                <img src={path + product.img_1} />
              </a>

              <a className="img" href={path + product.img_2} target="_blank">
                <img src={path + product.img_2} />
              </a>
            </div>
            <div className="moto-buttom-section-gallery-bottom">
              <a className="img" href={path + product.img_3} target="_blank">
                <img src={path + product.img_3} />
              </a>
              <a className="img" href={path + product.img_4} target="_blank">
                <img src={path + product.img_4} />
              </a>
              <a className="img" href={path + product.img_5} target="_blank">
                <img src={path + product.img_5} />
              </a>
            </div>
          </div>
          <h1 className="moto-buttom-section-video">video</h1>
          <div className="moto-buttom-section-video-iframe-container">
            <iframe
              className="moto-buttom-section-video-iframe"
              width="560"
              height="315"
              src={product.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <h1 className="moto-buttom-section-video">
            more from {product.b_name}
          </h1>
          <div className="from-the-same-brand-container">
            {fromTheSameBrandElements}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Moto;
