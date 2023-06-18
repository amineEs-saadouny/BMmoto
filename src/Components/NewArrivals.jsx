import React from "react";
import Product from "./Product";
import "../Style/NewArrivals.css";

function NewArrivals() {
  const [newArrivals, setNewArrivals] = React.useState([]);
  const [rightChevronActiv, setRightChevronActive] = React.useState(true);
  const [leftChevronActiv, setLeftChevronActive] = React.useState(false);

  function moveToRight() {
    const scroll = document.querySelector(".newArrivals");
    if (window.innerWidth <= 600) {
      scroll.scrollLeft = scroll.scrollLeft + 280;
    } else {
      scroll.scrollLeft = scroll.scrollLeft + 320;
    }
    if (scroll.scrollLeft === scroll.scrollWidth - scroll.clientWidth) {
      setRightChevronActive(false);
    } else {
      setRightChevronActive(true);
    }
  }
  function moveToLeft() {
    const scroll = document.querySelector(".newArrivals");
    if (window.innerWidth <= 600) {
      scroll.scrollLeft = scroll.scrollLeft - 280;
    } else {
      scroll.scrollLeft = scroll.scrollLeft - 320;
    }

    if (scroll.scrollLeft === 0) {
      setLeftChevronActive(false);
    } else {
      setLeftChevronActive(true);
    }
  }

  React.useEffect(function () {
    fetch("http://localhost:5000/getMotos", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ whatToGet: "NewArrivals" }),
    })
      .then((response) => response.json())
      .then((data) => setNewArrivals(data.data));
  }, []);
  const newArrivalsElements = newArrivals.map((item) => {
    const element = (
      <Product
        key={item.id}
        id={item.id}
        main_img={item.main_img}
        name={item.name}
        brand={item.b_name}
        displacement={item.displacement}
        description={item.description}
      />
    );
    return element;
  });

  return (
    <>
      <h1 className="newArrivals-h1">New Arrivals</h1>
      <div className="newArrivals-container">
        <i
          className={`fa fa-chevron-right right chevron ${
            rightChevronActiv ? "hover" : ""
          }`}
          onClick={moveToRight}
        ></i>
        <i
          className={`fa fa-chevron-left left chevron  ${
            leftChevronActiv ? "hover" : ""
          }`}
          onClick={moveToLeft}
        ></i>
        <div className="newArrivals">{newArrivalsElements}</div>
      </div>
    </>
  );
}

export default NewArrivals;
