import React from "react";
import Header from "../Components/Header";
import Product from "../Components/Product";
import Footer from "../Components/Footer";
import "../Style/Products.css";
import { useLocation } from "react-router-dom";

function Products() {
  window.scrollTo(0, 0);
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  if (from) {
    document.title = `${from} Products`;
  }
  const [products, setProducts] = React.useState([]);

  React.useEffect(function () {
    fetch("http://localhost:5000/getMotos", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        whatToGet: "productsOfThisBrand",
        brandName: from,
      }),
    })
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  console.log(products);
  const productsElements = products.map((item) => {
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
    <div>
      <Header from={from} />
      <div className="products-container">{productsElements}</div>
      <Footer />
    </div>
  );
}

export default Products;
