import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "../../App";
import HeadCss from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import Search from "../svg/search.svg";
import Meliora from "../svg/Meliora.svg";
import newMel from "../svg/new3.png"
import Bag from "../svg/bag.svg";
import Wishlist from "../svg/wishlist.svg";
import times from "../svg/xmark-solid.svg";
// import Menu from "../svg/menu.svg";
import store from "../svg/store-solid.svg";
export default function Header() {
  const { searchProducts ,handleFilter ,setOpacity} = useContext(MyContext);
  const { helperData ,searchText} = useContext(MyContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const setOpa = () => {
    setOpacity(0.6);
  };
  const delOpa = () => {
    setOpacity(1);
  };
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={HeadCss.main}>
      <section className={isScrolled ? "scrolled" : ""} id={HeadCss.head}>
        <div className={HeadCss.top}>
          <div className={HeadCss.text}>Welcome to Handmade Shop</div>
          <div className={HeadCss.login__part}>
            <Link to="/blog">Blog</Link>
            <div className={HeadCss.line}></div>
            <Link to="/about">haqqımızda</Link>
            <div className={HeadCss.line}></div>
            <Link to="/contact">Əlaqə</Link>
            <div className={HeadCss.line}></div>
            <Link  >Daxİl ol</Link>
          </div>
        </div>
        <div className={HeadCss.bottom}>
          <div className={HeadCss.left}>
            <Link to="/product">
              <img src={store} alt="shop" width="20px" />
              <span className={HeadCss.name}>Məhsullar</span>
            </Link>
            <Link onClick={() => setIsOpen(false)} >
              <img src={Search} alt="search" width="20px" onClick={setOpa}/>
              <span className={HeadCss.search} onClick={setOpa}>Axtar</span>
            </Link>
          </div>
          <Link to="/" className={HeadCss.mid}>
            <img src={newMel} alt="logo"  />
          </Link>
          <div className={HeadCss.right}>
            <Link to="/wishlist">
              <img src={Wishlist} alt="wishlist" width="20px" />
              <span className={HeadCss.names}>Favorİlər</span>
            </Link>
            <Link to="/cart">
              <img src={Bag} alt="bag" width="20px" />
              <span className={HeadCss.names}>
                Səbət <span>(0)</span>
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
              <Link>Home</Link>
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
      <section
        className={isOpen ? HeadCss.searchPart : HeadCss.search__part__close}
      >
        <div className={HeadCss.search__top}>
          <div className={HeadCss.close}>
            <div className={HeadCss.times} onClick={delOpa}>
              <img src={times} alt="times" onClick={() => setIsOpen(true)} />
            </div>
          </div>
          <div className={HeadCss.input}>
            <div>
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                className={HeadCss.search__head}
                type="text"
                placeholder="Məhsul, rəng və kategoriya axtar"
                onChange={handleFilter }
              />
            </div>
          </div>
        </div>
        <div className={HeadCss.search__bottom}>
          <div className={HeadCss.bottom__first}>
            <div className={HeadCss.top__collections}>Top Məhsullar</div>
            <div className={HeadCss.top__right}>
              <div className={HeadCss.best}>Əla təkliflər</div>
              <Link to="/product" className={HeadCss.all}>
                Hamısına bax
              </Link>
            </div>
          </div>
          <div className={HeadCss.bottom__second}>
                <div  className={HeadCss.collect}>
                {helperData && helperData.map((e) => {
              return (
                  <p className={HeadCss.filtered__text} key={e.id}>{e.name}</p>)
                })}
                </div>
                <div className={HeadCss.boxes}>
            {searchProducts &&
              searchProducts.slice(0,4).map((e) => {
                return (
                    <Link key={e.id}  to="/product" className={HeadCss.item}>
                      <img
                        src={e.images.length > 0 ? "http://91.107.207.100:81" + e.images[0].image_url : "" }
                        alt="backgroundImage"
                        className={HeadCss.hovered__image}
                      />
                      <div className={HeadCss.description}>{e.name}</div>
                      <div className={HeadCss.price}>$5{e.price}</div>
                    </Link>
                );
              })}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
