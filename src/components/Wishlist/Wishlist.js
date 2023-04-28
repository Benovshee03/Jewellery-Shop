import React from "react";
import Header from "../Header/Header";
import WishCss from "../Wishlist/Wishlist.module.css";
export default function Wishlist() {
  return (
    <div className={WishCss.wishlist}>
        <Header/>
      {/* <div className={WishCss.title}></div>
      <div className={WishCss.text}>Wislist</div> */}
      <section className={WishCss.wish}>
        <table className={WishCss.tab}>
            <thead>
                <th></th>
                <th></th>
                <th>Product name</th>
                <th>Unit price</th>
                <th>Stock Status</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td><svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 512 512" width='20px'><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></td>
                    <td><img src="https://cdn.shopify.com/s/files/1/2278/7513/products/SBN171-A_1350x1800.jpg?v=1677272649" alt="product" width='40px' /></td>
                    <td>Green Beautiful bag</td>
                    <td>$148</td>
                    <td>In Stock</td>
                    <td>
                        <div>Add to cart</div>
                        <button>Remove</button>
                    </td>
                </tr>
                <tr>
                    <td><svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 512 512" width='20px'><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></td>
                    <td><img src="https://cdn.shopify.com/s/files/1/2278/7513/products/SBN171-A_1350x1800.jpg?v=1677272649" alt="image" width='40px' /></td>
                    <td>Green Beautiful bag</td>
                    <td>$148</td>
                    <td>In Stock</td>
                    <td>
                        <div>Add to cart</div>
                        <button>Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
      </section>
    </div>
  );
}
