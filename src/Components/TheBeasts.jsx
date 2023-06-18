import React from "react";
import "../Style/TheBeasts.css";
import { act } from "@testing-library/react";
import { Link } from "react-router-dom";

function TheBeasts() {
  const [activItem, setActiveItem] = React.useState(0);
  const [rightChevronActiv, setRightChevronActive] = React.useState(true);
  const [leftChevronActiv, setLeftChevronActive] = React.useState(false);
  const [beasts, setBeasts] = React.useState([]);
  React.useEffect(() => {
    if (activItem === 80) {
      setRightChevronActive(false);
    } else {
      setRightChevronActive(true);
    }
    if (activItem === 0) {
      setLeftChevronActive(false);
    } else {
      setLeftChevronActive(true);
    }
  }, [activItem]);
  function moveToRight() {
    if (!(activItem === 80)) {
      setActiveItem((prev) => prev + 20);
    }
  }
  function moveToLeft() {
    if (!(activItem === 0)) {
      setActiveItem((prev) => prev - 20);
    }
  }

  React.useEffect(function () {
    fetch("http://localhost:5000/getMotos", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ whatToGet: "beasts" }),
    })
      .then((response) => response.json())
      .then((data) => setBeasts(data.data));
  }, []);
  console.log(beasts);
  const path = "http://localhost:5000/Imgs/";
  const beastsElements = beasts.map((beast) => {
    return (
      <Link
        className="thebeast"
        key={beast.id}
        to="/moto"
        state={{ from: beast.id }}
      >
        <div className="thebeast-img">
          <img src={path + beast.main_img} />
        </div>
        <div className="thebeast-info">
          <h1 className="thebeast-info-h1">{beast.name}</h1>
          <h2 className="thebeast-info-h2">
            {beast.b_name} | {beast.displacement} cc
          </h2>
          <p className="thebeast-info-p">
            {beast.description.substring(0, 350)}...
          </p>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="thebeaste-container">
        <h1 className="thebeaste-h1">Speed Demons</h1>
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
        <section
          className="thebeaste-sub-container"
          style={{ transform: `translateX(-${activItem}%)` }}
        >
          {beastsElements}
        </section>
      </div>
    </>
  );
}

export default TheBeasts;
