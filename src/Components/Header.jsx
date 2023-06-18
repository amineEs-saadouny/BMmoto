import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import bmMotoLogo from "../IMG/BMmoto Home Logo.png";
import mobileBmMotoLogo from "../IMG/mobileBmMotoLogo1.png";
import { Link, json } from "react-router-dom";
import "../Style/Header.css";

function Header(props) {
  const [activeH1, setActiveH1] = React.useState();
  React.useEffect(() => {
    setActiveH1(props.from);
  }, [props.from]);
  const [checkbox, setCheckbox] = React.useState(props.from ? true : false);
  const [isSearchActive, setIsSearchActive] = React.useState(false);
  const [headerChckbox, setHeaderCheckbox] = React.useState(false);
  const [topOfPage, setTopOfPage] = React.useState(true);
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchInput, setSearcInput] = React.useState("");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 100) {
      setTopOfPage(false);
    } else if (window.pageYOffset < 100) {
      setTopOfPage(true);
    }
  });

  function handleClickOutsideHeaderSearch(event) {
    if (!event.target.closest(".header-search")) {
      setHeaderCheckbox(false);
      setSearcInput("");
    } else if (!event.target.closest(".mobile-header-search")) {
      setSearcInput("");
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideHeaderSearch);
    return () => {
      document.removeEventListener("click", handleClickOutsideHeaderSearch);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/search", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ searchFor: searchInput }),
    })
      .then((response) => response.json())
      .then((data) => setSearchResults(data.data));
  }, [searchInput]);

  const path = "http://localhost:5000/Imgs/";

  function removeResult() {
    const element = document.querySelector(".result-container");
    element.classList.add("result-unmounts");
  }

  const searchElements = searchResults.map((item) => {
    if (item.p_id) {
      return (
        <Link
          onClick={() => {
            setHeaderCheckbox(false);
          }}
          to="/moto"
          state={{ from: item.p_id }}
        >
          <div key={item.p_id} className="result-container">
            <img className="result-img" src={path + item.main_img} />
            <div>
              <h4>{item.name}</h4>
              <h5>
                {item.b_name} | {item.displacement}
              </h5>
            </div>
          </div>
        </Link>
      );
    }
  });

  setTimeout(function () {
    document.getElementById("height11").style.background =
      "linear-gradient(var(--red) 30%, rgb(56, 0, 0))";
    document.getElementById("height12").style.background =
      "linear-gradient(var(--red) 30%, rgb(56, 0, 0))";
  }, 1290);
  setTimeout(function () {
    /* document.getElementById("circleBorder").style.background =
      "conic-gradient(rgb(29, 25, 65), white 210deg)"; */
    document.getElementById("circleBorder").style.animation =
      "circleBorderAnim 1s infinite";
  }, 1490);

  return (
    <div>
      {/* <div className="meta-lauding-container">
        <div className="lauding-container">
          <div className="circle"></div>
          <div className="circleBorder" id="circleBorder"></div>
          <div className="width height1" id="height1"></div>
          <div className="width height2" id="height2"></div>
          <div className="width height3" id="height3"></div>
          <div className="width height4" id="height4"></div>
          <div className="width height5" id="height5"></div>
          <div className="width height6" id="height6"></div>
          <div className="width height7" id="height7"></div>
          <div className="width height8" id="height8"></div>
          <div className="width height9" id="height9"></div>
          <div className="width height10" id="height10"></div>
          <div className="width height11" id="height11"></div>
          <div className="width height12" id="height12"></div>
          <div className="width height13" id="height13"></div>
          <div className="width height14" id="height14"></div>
          <div className="width height15" id="height15"></div>
          <div className="width height16" id="height16"></div>
          <div className="width height17" id="height17"></div>
        </div>
      </div> */}
      <header>
        <div className={`header ${!topOfPage ? "header-onscroll" : ""}`}>
          <h1
            className={`
            ${
              activeH1 === "Vehicles"
                ? "activ-h1-1"
                : "header-h1 activ-h1-1-onscroll"
            }
              ${!topOfPage ? "activ-h1-onscroll" : ""}`}
          >
            <Link to="/brands" state={{ from: "Vehicles" }}>
              Vehicles
            </Link>
          </h1>
          <Link to="/">
            <img
              className={`header-logo ${
                !topOfPage ? "header-logo-onscroll" : ""
              }`}
              src={bmMotoLogo}
            />
          </Link>

          <h1
            className={`${
              activeH1 === "Spare parts"
                ? "activ-h1-2"
                : "header-h1 activ-h1-2-onscroll"
            }
              ${!topOfPage ? "activ-h1-onscroll" : ""}`}
          >
            <Link to="/brands" state={{ from: "Spare parts" }}>
              Spare parts
            </Link>
          </h1>
        </div>
      </header>
      <div
        className="header-search"
        style={{
          transform: `${!topOfPage ? "translateY(-10px)" : "translateY(15px)"}`,
        }}
      >
        <label>
          <h1
            className="fa fa-search"
            onClick={() => {
              setHeaderCheckbox(!headerChckbox);
              setSearcInput("");
            }}
          ></h1>
          <input
            checked={headerChckbox}
            type="checkbox"
            className="header-search-checkbox"
          />
          <input
            onChange={(event) => {
              setSearcInput(event.target.value);
            }}
            value={searchInput}
            type="text"
            className="header-search-text"
          />
        </label>
        <div className="search-container">{searchElements}</div>
      </div>

      <header className="mobile-header">
        <label>
          <Link to={checkbox ? "/brands" : "/"} state={{ from: "Vehicles" }}>
            <input
              type="checkbox"
              className="menu-checkbox"
              checked={checkbox}
            />

            <div className="mobile-header-logo">
              <img className="mobile-header-logo-img" src={mobileBmMotoLogo} />
            </div>
          </Link>
          <input type="checkbox" className="menu-checkbox" checked={checkbox} />
          <div className="mobile-header-menu">
            <h1
              className={
                activeH1 === "Vehicles" ? "activ-h1-1" : "mobile-header-h1"
              }
            >
              <Link to="/brands" state={{ from: "Vehicles" }}>
                Vehicles
              </Link>
            </h1>
            <h1
              className={
                activeH1 === "Spare parts" ? "activ-h1-2" : "mobile-header-h1"
              }
            >
              <Link to="/brands" state={{ from: "Spare parts" }}>
                Spare parts
              </Link>
            </h1>
            <label>
              <h1 className="fa fa-search"></h1>
              <input
                onClick={() => {
                  setIsSearchActive(!isSearchActive);
                  setSearcInput("");
                }}
                checked={isSearchActive}
                type="checkbox"
                className="mobile-header-search-checkbox"
              />
            </label>
          </div>
        </label>
        <label>
          <input
            className="menu-checkbox"
            type="checkbox"
            checked={checkbox}
            onClick={() => {
              setCheckbox(!checkbox);
              setIsSearchActive(false);
              setActiveH1(checkbox ? "" : props.from);
              setSearcInput("");
            }}
          ></input>
          <div className="menu"></div>
        </label>
      </header>
      <label>
        <input
          checked={isSearchActive}
          type="checkbox"
          className="mobile-header-search-checkbox"
        />
        <div className="mobile-header-search">
          <i
            className="fa fa-search"
            onClick={() => {
              setHeaderCheckbox(!headerChckbox);
              setSearcInput("");
            }}
          ></i>
          <input
            onChange={(event) => {
              setSearcInput(event.target.value);
            }}
            value={searchInput}
            type="text"
            className="mobile-header-search-text"
          />
          <div className="search-container">{searchElements}</div>
        </div>
      </label>
    </div>
  );
}

export default Header;
