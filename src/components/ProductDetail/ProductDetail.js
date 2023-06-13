import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../App";
import DetCss from ".//ProductDetail.module.css"

export default function ProductDetail() {
  const { productId } = useParams();
  const { ProductDetail } = useContext(MyContext);
  // console.log(ProductDetail && ProductDetail);
  const thisProduct = ProductDetail && ProductDetail.find((prod) => prod.id === productId);
  // console.log(myProduct);
  console.log( thisProduct);
  return (
    <div className={DetCss.main}>
      <div className={DetCss.detail}>
        <h1>{thisProduct && thisProduct.name}</h1>
        {/* {console.log(thisProduct)} */}
        <p>Price: ${thisProduct && thisProduct.price}</p>
        <p>{ thisProduct && thisProduct.description}</p>
      </div>
    </div>
  );
}
