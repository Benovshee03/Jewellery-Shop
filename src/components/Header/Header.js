import React,{useEffect,useState} from "react";
import HeadCss from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import Search from "../svg/search.svg";
import Meliora from "../svg/Meliora.svg";
import Bag from "../svg/bag.svg";
import Wishlist from "../svg/wishlist.svg";
// import Menu from "../svg/menu.svg";
import store from "../svg/store-solid.svg"
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section className={isScrolled ? 'scrolled' : ''} id={HeadCss.head}> 
        <div className={HeadCss.top}>
          <div className={HeadCss.text}>Welcome to Handmade Shop</div>
          <div className={HeadCss.login__part}>
            <Link to="/blog">Blog</Link>
            <div className={HeadCss.line}></div>
            <Link to="/about">About</Link>
            <div className={HeadCss.line}></div>
            <Link to="/contact">Contact</Link>
            <div className={HeadCss.line}></div>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className={HeadCss.bottom}>
          <div className={HeadCss.left}>
            <Link to="/product">
              <img src={store} alt="shop" width="20px" />
              <span className={HeadCss.name}>Shop</span>
            </Link>
            <Link to="/search">
              <img src={Search} alt="search" width="20px" />
              <span className={HeadCss.name}>Search</span>
            </Link>
          </div>
          <Link to="/" className={HeadCss.mid}>
            <img src={Meliora} alt="logo" width="350px" height="40px" />
          </Link>
          <div className={HeadCss.right}>
            <Link to="/wishlist">
              <img src={Wishlist} alt="wishlist" width="20px" />
              <span className={HeadCss.names}>Wishlist</span>
            </Link>
            <Link to="/cart">
              <img src={Bag} alt="bag" width="20px" />
              <span className={HeadCss.names}>
                Cart <span>(0)</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className={HeadCss.second}>
        <nav>
          <ul>
            <button>x</button>
            <li to="/">
              <Link>
                Home
              </Link>
            </li>
            <div className={HeadCss.menu__line}></div>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <div className={HeadCss.menu__line}></div>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <div className={HeadCss.menu__line}></div>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
