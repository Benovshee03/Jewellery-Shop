import React from "react";
import { Link } from "react-router-dom";
import CartCss from "../Cart/Cart.module.css";
import Header from "../Header/Header";
import { MyContext } from "../../App";
import { useContext } from "react";

import image from "../svg/5.png"

export default function Cart() {
  const product = React.useContext(MyContext);
  // const cartTotal = product.reduce((total, product) => {
  //     return total + product.price * product.quantity;
  //   }, 0);
  return (
    <div>
      <Header />
      <div className={CartCss.cart}>
        <table>
          <thead>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td className={CartCss.image}>
                <img src={image} alt="cartimage" width="60px" height="60px" />
              </td>
              <td className={CartCss.caption}>Boyunbagi</td>
              <td className={CartCss.price}>$600</td>
              <td className={CartCss.quantity}>
                <button className={CartCss.quant}>
                  <button className={CartCss.minus}>-</button>
                  <span className={CartCss.total}>$600</span>
                  <button className={CartCss.plus}>+</button>
                </button>
              </td>
              <td>$600</td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 512 512"
                  width="20px"
                >
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className={CartCss.image}>
                <img src={image} alt="cartimage" width="60px" height="60px" />
              </td>
              <td className={CartCss.caption}>Boyunbagi</td>
              <td className={CartCss.price}>$600</td>
              <td className={CartCss.quantity}>
                <button className={CartCss.quant}>
                  <button className={CartCss.minus}>-</button>
                  <span className={CartCss.total}>$600</span>
                  <button className={CartCss.plus}>+</button>
                </button>
              </td>
              <td>$600</td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 512 512"
                  width="20px"
                >
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className={CartCss.image}>
                <img src={image} alt="cartimage" width="60px" height="60px" />
              </td>
              <td className={CartCss.caption}>Boyunbagi</td>
              <td className={CartCss.price}>$600</td>
              <td className={CartCss.quantity}>
                <button className={CartCss.quant}>
                  <button className={CartCss.minus}>-</button>
                  <span className={CartCss.total}>$600</span>
                  <button className={CartCss.plus}>+</button>
                </button>
              </td>
              <td>$600</td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 512 512"
                  width="20px"
                >
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={CartCss.shipping}>
          <div className={CartCss.totals}>
            <div className={CartCss.total}>$60</div>
          </div>
          <div className={CartCss.bottom}>
            <div className={CartCss.part}>
              <div className={CartCss.ship}>Shipping</div>
              <div className={CartCss.pri}>$600</div>
            </div>
            <div className={CartCss.part}>
              <div className={CartCss.ship}>Total</div>
              <div className={CartCss.pri}>600$</div>
            </div>
            <Link></Link>
            <button className={CartCss.checkout}>Proceed to checkout</button>
            <Link />
          </div>
        </div>
      </div>
    </div>
  );
}
// const mydata = React.useContext(Globalcontext)
//     const total = (mydata.productsId.reduce((total, current) => total = total + current.price * current.count, 0
//     ));
// return (
//         <div className={styles.cart_total}>
//             <table className={styles.cart_table}   >
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <th>Mehsulun adi</th>
//                         <th>Qiymeti</th>
//                         <th>Say</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {mydata.productsId && mydata.productsId.slice(0, 4).map((number, indexone) => {
//                         return (
//                             <tr key={indexone}>
//                                 <td>
//                                     <div className={styles.image_box}>
//                                         <div className={styles.image_hover}>
//                                             <img className={styles.image} src={number.img1} alt="" />
//                                             <img className={styles.image} src={number.img2} alt="" />
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     {number.caption}
//                                 </td>
//                                 <td>
//                                     {number.price} AZN
//                                 </td>
//                                 <td>
//                                     <button onClick={() => { mydata.basketminus(number.id) }} style={{ cursor: "pointer" }}>-</button>
//                                     <span>
//                                         {number.count}
//                                     </span>
//                                     <button onClick={() => { mydata.basket(number.id) }} style={{ cursor: "pointer" }} >+</button>
//                                 </td>
//                             </tr>
//                         )
// })}
//                 </tbody>
//             </table>
//             <div className={styles.total}>
//                 <b>Umumi mebleg</b>
//                 <div className={styles.sum}>
//                     <div>
//                         <span>Qiymetler cemi:</span>
//                         <span>{total} AZN</span>
//                     </div>
//                     <div>
//                         <span>Chatdirilma:</span>
//                         <span>Pulsuz</span>
//                     </div>
//                     <div>
//                         <span>
//                             Umumi cem:
//                         </span>
//                         <span>10 AZN</span>
//                     </div>
//                 </div>
//                 <Link to="/checkout">
//                     <button>
//                         Checkout
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     )
