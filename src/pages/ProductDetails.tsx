import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductType } from "./Products";
import Star from "../components/Star";

function ProductDetails() {
  const [product, setProduct] = useState<ProductType>();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(product);

  return (
    <div className="details">
      <h1>
        {product?.title} - {id}
      </h1>
      <hr />
      <div className="container">
        <p>{product?.description}</p>
        <img src={product?.image} alt="image" />
      </div>
      <span>${product?.price}</span>
      <span>
        <Star />
        {product?.rating.rate} / {product?.rating.count}
      </span>
    </div>
  );
}

export default ProductDetails;
