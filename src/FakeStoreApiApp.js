import React, { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";

const FakeStoreApiApp = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setproducts(json);
        });
    }, 2000);
  }, []);

  if (products.length == 0) {
    return <>Loading...!!!!!!</>;
  }

  const handelSort = () => {
    //console.log(products);
    setproducts(
      products.sort((a, b) => {
        if (a.price < b.price) return -1;
        return 1;
      })
    );
  };
  return (
    <>
      <h1> 20 Products from Fake Store API</h1>
      <button onClick={handelSort}>Sort ascending</button>
      <ProductCard productData={products} title={"Hello"} />
    </>
  );
};

export default FakeStoreApiApp;
