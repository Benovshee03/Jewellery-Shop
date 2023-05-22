import React, { useState,  useContext } from "react";
// import { useParams } from "react-router-dom";
import ProCss from "../Product/Product.module.css";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
// import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Product() {
  const { product } = useContext(MyContext);
  // const { id } = useParams()
  // const [isHovering, setIsHovering] = useState(
  //   product.map(() => false)
  // );
  

  // const handleMouseEnter = (indexone) => {
  //   setIsHovering((prevIsHovering) =>
  //     prevIsHovering.map((isHovering, i) =>
  //       i === indexone ? true : isHovering
  //     )
  //   );
  // };
  // const handleMouseLeave = (indexone) => {
  //   setIsHovering((prevIsHovering) =>
  //     prevIsHovering.map((isHovering, i) =>
  //       i === indexone ? false : isHovering
  //     )
  //   );
  // };

  return (
    <section className={ProCss.product}>
      <Header className={ProCss.head}/>
      <div className={ProCss.white}></div>
      <Categories />
      <div className={ProCss.items}>
        <div className={ProCss.box} >
        {product && product.map((e, indexone) => {
              return (
                <div
                  key={indexone}
                  className={ProCss.item}
                  // onMouseEnter={() => handleMouseEnter(indexone)}
                  // onMouseLeave={() => handleMouseLeave(indexone)} 
                >
                  <img
                  // isHovering[indexone] ? e.img2 : 
                  src={e.img} alt={e.name}
                   className={ProCss.hovered__image} />
                  <div className={ProCss.icons}>
                    <Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#34513f"
                        viewBox="0 0 512 512"
                        width="30px"
                      >
                        <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                      </svg>
                    </Link>
                    <Link to={`/products/${product.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#34513f"
                        viewBox="0 0 512 512"
                        width="30px"
                      >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                      </svg>
                    </Link>
                  </div>
                  <div className={ProCss.basket} onClick={() => {product.onAddToCart(product.id)}} >Add to basket</div>
                  <div className={ProCss.description}>{e.name}</div>
                  <div className={ProCss.price}>{e.price}</div>
                </div>
              );
            })}
        </div>
      </div>
      {/* <div className={ProCss.filterPart}>
            <div className={ProCss.price}>
              <div>Price<i class="fa-solid fa-angle-down"></i></div>
              <ul>
                <li><Checkbox {...label} /> Price <li/>
                </li>
              </ul>
            </div>
            <div className={ProCss.types}>Product types</div>
            <div className={ProCss.color}>Color</div>
            <div className={ProCss.shipping}>Shipping Time</div>
            <div className={ProCss.promo}>Promotion</div>
            <div className={ProCss.size}>Size</div>
      </div> */}
    </section>
  );
}