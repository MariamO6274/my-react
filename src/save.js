import React, { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";

//Fake sort api's saved code
// With dif Loading

const FakeStoreApiApp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading...!!!!!!</>;
  }

  const sortProducts = (products, sortFIeld) => {
    return products.sort((a, b) => (a[sortFIeld] > b[sortFIeld] ? -1 : 1));
  };

  const handelSort = () => {
    const prods = [...products];
    setProducts(sortProducts(prods, "title"));
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
