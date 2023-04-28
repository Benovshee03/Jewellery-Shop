import React , {useState} from "react";
import { createContext } from "react";
import { Link } from "react-router-dom";
import FooterCss from "../Footer/Footer.module.css";
import Twitter from "../svg/twitter.svg";
import Instagram from "../svg/instagram.svg";
import Fb from "../svg/facebook.svg";
import meliora from '../svg/Meli.svg'
import visa from '../svg/cc-visa.svg'
import master from '../svg/cc-mastercard.svg'
export default function Footer() {
  const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setInputValue('');
    };
    const handleInputChange = (e) => {
      setInputValue(e.target.value);}


  return (
    <section className={FooterCss.footer}>
      <div className={FooterCss.top}>
        <Link to="/" className={FooterCss.mel}>#MELIORA</Link>
        <div className={FooterCss.social}>
          <div className={FooterCss.Twitter}>
            <a
              href="https://www.instagram.com/meliora_handmade/"
              target="_blank"
            >
              <img className={FooterCss.icons} src={Twitter} alt="twitter" />
            </a>
          </div>
          <div className={FooterCss.insta}>
            <a
              href="https://www.instagram.com/meliora_handmade/"
              target="_blank"
            >
              <img className={FooterCss.icons} src={Instagram} alt="instagram" />
            </a>
          </div>
          <div className={FooterCss.fb}>
            <a href="https://www.instagram.com/meliora_handmade/">
              <img className={FooterCss.icons} src={Fb} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className={FooterCss.mid}>
        <div className={FooterCss.left}>
          <div className={FooterCss.left__top}> get discount 20% off</div>
          <div className={FooterCss.left__bottom}>
            subscribe our newsletter and get discount 20% off
          </div>
        </div>
        <form onSubmit={handleSubmit} className={FooterCss.right} >
          <input type="email" placeholder="your e-mail address" value={inputValue} onChange={handleInputChange}/>
          <button type="submit"  >subscribe</button>
        </form>
      </div>
      <div className={FooterCss.bottom}>
        <div className={FooterCss.part}>
          <div className={FooterCss.num}>+994(55)-673-34-78</div>
          <div className={FooterCss.links}>
            <div className={FooterCss.adress}>Baku,Bakikhanov 37</div>
            <div>meliora0accessories@gmail.com</div>
          </div>
        </div>
        <div className={FooterCss.part}>
          <div className={FooterCss.name}>company</div>
          <div className={FooterCss.links}>
            <div><Link to='/about'>about us</Link></div>
            <div>Business Account</div>
          </div>
        </div>
        <div className={FooterCss.part}>
          <div className={FooterCss.name}>help</div>
          <div className={FooterCss.links}>
            <div>email us</div>
            <div>help & faq</div>
            <div>gifts cards</div>
          </div>
        </div>
        <div className={FooterCss.part}>
          <div className={FooterCss.name}>quick links</div>
          <div className={FooterCss.links}>
            <div>terms & conditions</div>
            <div>return policy</div>
            <div>we are hiring</div>
          </div>
        </div>
        <div className={FooterCss.part}>
          <div className={FooterCss.name}>brands</div>
          <div className={FooterCss.links}>
            <div>shein</div>
            <div>handmade</div>
            <div> minashi</div>
          </div>
        </div>
      </div>
      <div className={FooterCss.fot__line}></div>
      <div className={FooterCss.expire}>
        <div className={FooterCss.date}>2023 © COPYRIGHT MELIORA</div>
        <div className={FooterCss.cards}>
          <div className={FooterCss.card}><img src={visa} alt="visa" /></div>
          <div className={FooterCss.card}><img src={master} alt="masterCard"/></div>
        </div>
      </div>
    </section>
  );
}
