import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Brand from "../Components/Brand";
import Product from "../Components/Product";

import "../Style/style.css";
import { useLocation } from "react-router-dom";

function Brands() {
  let brandElements;

  document.title = `Brands`;
  window.scrollTo(0, 0);
  const location = useLocation();
  const { from } = location.state;
  console.log(from);

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:5000/getBrands")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error(error));
  }, []);
  if (from === "Vehicles") {
    brandElements = data.map((item) => {
      return (
        <Brand key={item.id} id={item.id} logo={item.logo} name={item.name} />
      );
    });
  } else {
    brandElements = <h1>COMING SOON</h1>;
  }

  return (
    <div>
      <Header from={from} />
      <section className="brands-page">
        <section className="brands-page-container">{brandElements}</section>
      </section>

      <Footer />
    </div>
  );
}

export default Brands;
