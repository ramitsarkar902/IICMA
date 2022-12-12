import React, { useEffect, useState } from "react";
import { getProducts } from "../apiCalls";
import Product from "../components/Products/Product";
const Products = () => {
  const [pop, setPop] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  console.log(products);
  return (
    <>
      <div className="section__header">
        <span>Presenting our wide range of</span>
        <span id="two"> Delicious Ice-Creams</span>
      </div>
      <div className="products">
        {products.map((p, index) => (
          <Product data={p} key={index}/>
        ))}
      </div>
    </>
  );
};

export default Products;
