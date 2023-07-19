import React, { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";
import { Dropdown } from "./Dropdown";
//import ProductsCards from "./ProductsCards"; mine


const FakeStoreApiApp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
    const [filterItems, setFilterItems] = useState("");

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

  /**
   *   let renderedList = products.map((product) => {
    return (
      <ProductCard
        title={product.title}
        image={product.image}
        price={product.price}
        description={product.description}
      />
    );
  });

  console.log(renderedList);
   */

  if (loading) {
    return <>Loading...!!!!!!</>;
  }

 const handelAsending = () => {
   console.log(products);
   const sortedProducts = [...products];
   sortedProducts.sort((a, b) => {
     if (a.price < b.price) {
       return -1;
     } else return 1;
   });
   setProducts(sortedProducts);
 };

 const handelDescending = () => {
   const sortetHightToLow = [...products];
   sortetHightToLow.sort((a, b) => {
     if (a.price < b.price) {
       return 1;
     } else return -1;
   });
   setProducts(sortetHightToLow);
 };
 const search = (productData) => {
   return productData.filter((item) =>
     item.title.toLowerCase().includes(filterItems)
   );
 };
  return (
    <>
      <h1> 20 Products from Fake Store API</h1>
      <button onClick={handelAsending}>Asending</button>
      <button onClick={handelDescending}>Descending</button>
      <Dropdown />
      <br />
      <br />
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => setFilterItems(e.target.value)}
        style={{
          width: "300px",
          height: "30px",
          borderRadius: "20px",
          padding: "20px",
        }}
      />
      <br />
      <br />
      <br />
      <ProductCard productData={search(products)} title={"Hello"} />
      {/* <div className="container">{renderedList}</div> */}
    </>
  );
};

export default FakeStoreApiApp;
