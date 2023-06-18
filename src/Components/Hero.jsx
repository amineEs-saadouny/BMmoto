import React from "react";
import "../Style/Hero.css";
import hero1 from "../IMG/heroIMGs/hero1.jpg";
import hero2 from "../IMG/heroIMGs/hero2.jpg";
import hero3 from "../IMG/heroIMGs/hero3.jpg";
import hero4 from "../IMG/heroIMGs/hero4.jpg";
import hero5 from "../IMG/heroIMGs/hero5.jpg";
import hero6 from "../IMG/heroIMGs/hero6.jpg";
import hero7 from "../IMG/heroIMGs/hero7.jpg";
import hero8 from "../IMG/heroIMGs/hero8.jpg";
import hero9 from "../IMG/heroIMGs/hero9.jpg";
import { Link } from "react-router-dom";
import Product from "./Product";

function Hero() {
  const images = [
    {
      active: true,
      id: 1,
      productId: 16,
      image: hero1,
    },
    {
      active: false,
      id: 2,
      productId: 29,
      image: hero2,
    },
    {
      active: false,
      id: 3,
      productId: 17,
      image: hero3,
    },
    {
      active: false,
      id: 4,
      productId: 25,
      image: hero4,
    },
    {
      active: false,
      id: 5,
      productId: 14,
      image: hero5,
    },
    {
      active: false,
      id: 6,
      productId: 22,
      image: hero6,
    },
    {
      active: false,
      id: 7,
      productId: 30,
      image: hero7,
    },
    {
      active: false,
      id: 8,
      productId: 18,
      image: hero8,
    },
    {
      active: false,
      id: 9,
      productId: 28,
      image: hero9,
    },
    {
      active: false,
      id: 10,
      productId: 16,
      image: hero1,
    },
  ];

  const [activeImage, setActiveImage] = React.useState(0);
  const [PrevActiveImage, setPrevActiveImage] = React.useState(0);
  const hero = images.map((image) => {
    return (
      <div
        key={image.id}
        style={{
          backgroundImage: `url(${image.image})`,
          width: `${100 / images.length}%`,
        }}
        className="hero-img"
      >
        <Link to="/moto" state={{ from: image.productId }}>
          <button className="explore-btn">
            Explore<i className={`fa fa-chevron-right `}></i>
          </button>
        </Link>
      </div>
    );
  });
  const [radioState, setRadioState] = React.useState(images);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((activeImage) => {
        setPrevActiveImage(activeImage);
        return activeImage === images.length - 1 ? 0 : activeImage + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  React.useEffect(() => {
    setRadioState((prevState) => {
      return prevState.map((item) => {
        if (item.id === activeImage + 1) {
          return { ...item, active: true };
        } else if (item.id === 1 && activeImage + 1 === images.length) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      });
    });
  }, [activeImage]);

  function toggleRdaoi(id) {
    setActiveImage(id - 1);
  }
  const bulletPoints = radioState.map((point) => {
    if (point.id === images.length) {
      return "";
    }
    return (
      <label>
        <input
          key={point.id}
          id={point.id}
          type="radio"
          name="bulletPoints"
          className="bullet-points-radio"
          checked={point.active}
          onClick={() => toggleRdaoi(point.id)}
        />
        <div className="bullet-points"></div>
      </label>
    );
  });
  return (
    <div className="hero">
      <div
        className="hero-container"
        style={{
          transform: `translateX(${(-100 / images.length) * activeImage}%)`,
          width: `${images.length}00%`,
          transition:
            activeImage === 0 && PrevActiveImage === 9 ? "none" : "0.3s",
        }}
      >
        {hero}
      </div>
      <div className="bullet-points-container">{bulletPoints}</div>
    </div>
  );
}

export default Hero;
