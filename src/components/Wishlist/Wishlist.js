import React, { useContext } from "react";
import Header from "../Header/Header";
import { MyContext } from "../../App";
import WishCss from "../Wishlist/Wishlist.module.css";
import wish from "../svg/wishlist.png";
export default function Wishlist() {
  const { wishlist, deleteFromWishlist , opacity, addToCart } = useContext(MyContext);
  
  const handleAddToCartFromWishlist = (item) => {
    addToCart(item);
    console.log(item.id)
  };
  return (
    <div className={WishCss.wishlist}>
      <Header />
      <section className={WishCss.wish} style={{opacity}}>
        {wishlist.length === 0 ? (
          <div className={WishCss.empty}>
            <img src={wish} alt="empty wishlist" />
            <p> Məhsul əlavə edilməmişdir</p>
          </div>
        ) : (
          <table className={WishCss.tab}>
            <thead>
              <th></th>
              <th></th>
              <th>Məhsulun adı</th>
              <th>Qiyməti</th>
              {/* <th>Stok durumu</th> */}
              <th></th>
            </thead>
            <tbody className={WishCss.wish__table}>
              {wishlist.map((e) => (
                <tr key={e.id}>
                  <td>
                    <svg onClick={() => deleteFromWishlist(e.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gray"
                      viewBox="0 0 512 512"
                      width="20px"
                    >
                      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                    </svg>
                  </td>
                  <td>
                    <img
                      src="https://cdn.shopify.com/s/files/1/2278/7513/products/SBN171-A_1350x1800.jpg?v=1677272649"
                      alt="shopify"
                      width="100px"
                      height="120px"
                    />
                  </td>
                  <td>{e.name}</td>
                  <td>${e.price}</td>
                  <td >
                    <div className={WishCss.add} onClick={() => handleAddToCartFromWishlist(e)}>Add to cart</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* </table> */}
      </section>
    </div>
  );
}
