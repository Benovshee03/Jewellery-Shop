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
          <div className={FooterCss.left__top}>  20% endirim əldə et </div>
          <div className={FooterCss.left__bottom}>
            bülletenimizə abunə ol və 20% endirim əldə et
          </div>
        </div>
        <form onSubmit={handleSubmit} className={FooterCss.right} >
          <input type="email" placeholder="sənin mail adresin" value={inputValue} onChange={handleInputChange}/>
          <button type="submit"  >abunə ol</button>
        </form>
      </div>
      <div className={FooterCss.bottom}>
        <div className={FooterCss.part}>
          <div className={FooterCss.num}>+994(55)-673-34-78</div>
          <div className={FooterCss.links}>
            <div className={FooterCss.adress}>Baku,Bakikhanov 37</div>
            <div>meliora0accessories@gmail.com</div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={FooterCss.part}>
          <div className={FooterCss.name}>şİrkət</div>
          <div className={FooterCss.links}>
            <div><Link to='/about'>haqqımızda</Link></div>
            <div>Biznes hesabı</div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={FooterCss.part}>
          <div className={FooterCss.name}>kömək</div>
          <div className={FooterCss.links}>
            <div>email göndər</div>
            <div>help & faq</div>
            <div>hədiyyə kartları</div>
          </div>
        </div>
        <div className={FooterCss.part}>
          <div className={FooterCss.name}>linklər</div>
          <div className={FooterCss.links}>
            <div>qaydalar & şərtlər</div>
            <div>qaytarma qaydaları</div>
            <div>karyera</div>
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
