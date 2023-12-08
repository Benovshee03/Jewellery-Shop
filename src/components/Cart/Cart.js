import React from "react";
import { Link } from "react-router-dom";
import CartCss from "../Cart/Cart.module.css";
import Header from "../Header/Header";
import { MyContext } from "../../App";
import { useContext ,useState ,useEffect} from "react";

export default function Cart() {
  const {product ,  cartItems, deleteFromCart , opacity} = useContext(MyContext);
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));
const [totalPrices, setTotalPrices] = useState(cartItems.map((item) => item.price));
const [cartTotal, setCartTotal] = useState(0);

  const handleRemoveFromCart = (productId) => {
    deleteFromCart(productId);
  };

const handleDecreaseQuantity = (index) => {
  if (quantities[index] > 1) {
    const newQuantities = [...quantities];
    newQuantities[index] -= 1;
    setQuantities(newQuantities);

    const newTotalPrices = [...totalPrices];
    newTotalPrices[index] = newQuantities[index] * cartItems[index].price;
    setTotalPrices(newTotalPrices);
  }
};

const handleIncreaseQuantity = (index) => {
  const newQuantities = [...quantities];
  newQuantities[index] += 1;
  setQuantities(newQuantities);

  const newTotalPrices = [...totalPrices];
  newTotalPrices[index] = newQuantities[index] * cartItems[index].price;
  setTotalPrices(newTotalPrices);
};
useEffect(() => {
  const calculateTotal = () => {
    const total = cartItems.reduce((accumulator, item, index) => {
      return accumulator + item.price * quantities[index];
    }, 0);
    setCartTotal(total);
  };

  calculateTotal();
}, [cartItems, quantities]);

  return (
    <div>
      <Header />
      <div className={CartCss.cart} style={{opacity}}>
        {product.length === 0 ? (
        <p>Karta heç bir məhsul əlavə edilməmişdir</p>
        ) : (
          <table>
          <thead>
            <th>Məhsul</th>
            <th></th>
            <th>Qiymət</th>
            <th>Sayı</th>
            <th>Ümumi Qiymət</th>
            <th></th>
          </thead>
          <tbody>
          {cartItems.map((e,i) => {
          return (
            <tr key={i}>
            <td className={CartCss.image}>
              <img src={"http://91.107.207.100:81" + e.images[0].image_url} alt="cartimage" width="60px" height="60px" style={{backgroundColor:"#e8e8e8"}} />
            </td>
            <td className={CartCss.caption}>{e.name}</td>
            <td className={CartCss.price}> ${e.price}</td>
            <td className={CartCss.quantity}>
              <button className={CartCss.quant}>
                <button className={CartCss.minus} onClick={() => handleDecreaseQuantity(i)}>-</button>
                <span className={CartCss.total}>{quantities[i]}</span>
                <button className={CartCss.plus} onClick={() => handleIncreaseQuantity(i)}>+</button>
              </button>
            </td>
            <td>${totalPrices[i]}</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                viewBox="0 0 512 512"
                width="20px"
                onClick={() => handleRemoveFromCart(e.id)}
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
              </svg>
            </td>
          </tr>)
                     
          })}
          </tbody>
          </table>
        )}
        <div className={CartCss.shipping}>
          <div className={CartCss.totals}>
            <div className={CartCss.total}>Səbəti Təstiqlə</div>
          </div>
          <div className={CartCss.bottom}>
            <div className={CartCss.part}>
              <div className={CartCss.ship}>Çatdırılma</div>
              <div className={CartCss.pri}>$10</div>
            </div>
            <div className={CartCss.part}>
              <div className={CartCss.ship}>Ümumi məbləğ</div>
              <div className={CartCss.pri}>${cartTotal}</div>
            </div>
            <Link></Link>
            <button className={CartCss.checkout}>Səbəti Təstiqlə</button>
            <Link />
          </div>
        </div>
      </div>
    </div>
  );
}

