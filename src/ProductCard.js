import React from "react";

function ProductCard(props) {
  const products = props.productData;

  // also can co with{ productData } directly, const ProductsCards = ({ productData })

  return (
    <>
      <div className="container">
        {products.map((product) => {
          return (
            <>
              <div className="cards">
                <div className="card-content" key={product.id}>
                  <img src={product.image} />
                  <h3>{product.title}</h3>
                  <h4>$ {product.price}</h4>
                  <hr />
                  <p>{product.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProductCard;
