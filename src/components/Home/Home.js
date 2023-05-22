import React,{useState}from "react";
import { Link } from "react-router-dom";
import HomeCss from "../Home/Home.module.css";


import Search from "../svg/search.svg";
import Meliora from "../svg/Meliora.svg";
import Bag from "../svg/bag.svg";
import Wishlist from "../svg/wishlist.svg";
import shop from "../svg/store-solid.svg";
// import Banner1 from "../svg/baner1.jpeg";
// import Banner2 from "../svg/Banner3.jpeg";
// import Banner3 from "../svg/Banner4.jpeg";
// import Banner4 from "../svg/Baner4.jpeg";
// import Mel from "../svg/Meli.svg";
import Avatar from "../svg/avatar.png";
import pro1 from "../svg/1.png";
import pro2 from "../svg/2.png";
import pro3 from "../svg/3.png";
import pro4 from "../svg/4.png";
import pro5 from "../svg/5.png"
import pro6 from "../svg/6.png";
import pro7 from "../svg/7.png";
import pro8 from "../svg/8.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={HomeCss.home}>
      <section className={HomeCss.first}>
        <div className={HomeCss.header}>
          <div className={HomeCss.top}>
            <div className={HomeCss.text}>Welcome to Handmade Shop</div>
            <div className={HomeCss.login__part}>
              <Link to="/blog">Blog</Link>
              <div className={HomeCss.line}></div>
              <Link to="/about">About</Link>
              <div className={HomeCss.line}></div>
              <Link to="/contact">Contact</Link>
              <div className={HomeCss.line}></div>
              <Link to="/login">Login</Link>
            </div>
          </div>
          <div className={HomeCss.bottom}>
            <div className={HomeCss.left}>
              <Link to="/product">
                <img src={shop} alt="menu_bar" width="20px" />
                <span className={HomeCss.names}>Shop</span>
              </Link>
              <Link to="/search">
                <img src={Search} alt="search" width="20px" />
                <span className={HomeCss.names}>Search</span>
              </Link>
            </div>
            <div className={HomeCss.mid}>
              <img src={Meliora} alt="logo" width="350px" />
            </div>
            <div className={HomeCss.right}>
              <Link to="/wishlist">
                <img src={Wishlist} alt="wishlist" width="20px" />
                <span className={HomeCss.names}>Wishlist</span>
              </Link>
              <Link to="/cart">
                <img src={Bag} alt="bag" width="20px" />
                <span className={HomeCss.names}>
                  Cart <span>(0)</span>
                </span>
              </Link>
            </div>
          </div>
          <div className={HomeCss.season}>
            <div>
              <img
                src="https://wpbingosite.com/wordpress/moonte/wp-content/uploads/2021/10/text-2.png"
                alt="text"
              />
            </div>
            <div className={HomeCss.spring}>Spring Summer 2023</div>
          </div>
        </div>
      </section>
      <section className={HomeCss.second}>
        <nav>
          <ul>
            <button>x</button>
            <li to="/">
              <Link to="/">Home</Link>
            </li>
            <div className={HomeCss.menu__line}></div>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <div className={HomeCss.menu__line}></div>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <div className={HomeCss.menu__line}></div>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </section>
      {/* <section className={HomeCss.third}>
        <div className={HomeCss.promo}>
          <div className={HomeCss.promo__top}>
            <div className={HomeCss.promo__top__left}>
              <div className={HomeCss.style}>
                Mood board Handmade <br /> Style Destination
              </div>
              <div className={HomeCss.style__image}>
                <p>new arrival</p> <img src={Banner1} alt="ring" />
              </div>
              <div className={HomeCss.style__last}>
                <div className={HomeCss.last__text}>
                  Rubies have a quality known as pleochroism, which is the
                  appear in here.
                </div>
                <Link to="/product" className={HomeCss.shop__now}>
                  <button>shop now</button>
                </Link>
              </div>
            </div>
            <div className={HomeCss.promo__top__right}>
              <div className={HomeCss.brand__image}>
                <p>50% off</p>
                <img src={Banner2} alt="ring" />
              </div>
              <div className={HomeCss.style__last}>
                <div className={HomeCss.last__text}>
                  Rubies have a quality known as pleochroism, which is the
                  appear in here.
                </div>
                <Link to="/product" className={HomeCss.shop__now}>
                  <button>shop now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={HomeCss.promo__bottom}>
            <div className={HomeCss.bottom__left}>
              <div className={HomeCss.brand__image}>
                <img src={Banner3} alt="ring" height="750px" />
              </div>
              <div className={HomeCss.style__last}>
                <div className={HomeCss.last__text}>
                  Rubies have a quality known as pleochroism, which is the
                  appear in here.
                </div>
                <Link to="/product" className={HomeCss.shop__now}>
                  <button>shop now</button>
                </Link>
              </div>
            </div>
            <div className={HomeCss.bottom__right}>
              <div className={HomeCss.style}>
                <img src={Mel} alt="meliora" />
              </div>
              <div className={HomeCss.style__image}>
                new arrival
                <img src={Banner4} alt="ring" />{" "}
              </div>
              <div className={HomeCss.style__last}>
                <div className={HomeCss.last__text}>
                  Rubies have a quality known as pleochroism, which is the
                  appear in here.
                </div>
                <Link to="/product" className={HomeCss.shop__now}>
                  <button>shop now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className={HomeCss.shop__now} >
        <Link to="/product" className={HomeCss.shop__f}>
          <div className={HomeCss.shop__first}>Meliora x missoma</div>
          <Link to="/product" className={HomeCss.shop__second}>shop now</Link>  
        </Link>
        <Link  to="/product" className={HomeCss.shop__s}>
          <div className={HomeCss.shop__first}>Meliora x Lucy Williams</div>
          <Link to="/product" className={HomeCss.shop__second}>shop now</Link> 
        </Link>
        <Link  to="/product" className={HomeCss.shop__t}>
          <div className={HomeCss.shop__first}>Best of Collabs</div>
          <Link  to="/product" className={HomeCss.shop__second}>shop now</Link> 
        </Link>
      </section>
      <section className={HomeCss.about__us}>
        <div className={HomeCss.about__top}>
          {" "}
          <h3>Heyrətamiz, gözəl</h3>
          <h3>zərif xırda şeylər</h3>
        </div>
        <div className={HomeCss.about__bottom}>
          <div className={HomeCss.about__know}>
            <div>Deyirlər ki, ilk görüşdə həmişə kimdənsə dəyərlərini soruşmalısan, ona görə də bizimkilər. Parçalarımızı digər premium brendlərin etdiyi eyni yerlərdə hazırlayırıq, beləliklə siz yüksək səviyyəli keyfiyyət əldə edirsiniz – lakin yüksək qiymət olmadan. Buyurun.</div>
            <Link to="/about">get to know us</Link>
          </div>
          <ul className={HomeCss.about__speciality}>
            <li className={HomeCss.infos}>
              <i  className = "fa-regular fa-ring"></i>Bərk qızıl zərgərlik
            </li>
            <li className={HomeCss.infos}>
              <i class="fa-brands fa-sketch "></i>Etik Mənbə
            </li>
            <li className={HomeCss.infos}>
              <i className="fa-solid fa-globe "></i>Davamlı Run
            </li>
            <li className={HomeCss.infos}>
              <i className="fa-solid fa-money-bill "></i>Münasib qiymətə
            </li>
            <li className={HomeCss.infos}>
              <i className="fa-solid fa-venus "></i>Qadınlar Üçün Qadınlar tərəfindən
            </li>
            <li className={HomeCss.infos}>
              <i className="fa-solid fa-city "></i>Bakıda dizayn olunub
            </li>
          </ul>
        </div>
      </section>
      <section className={HomeCss.recommend}>
        <div className={HomeCss.recommend__text}>Tövsiyə Olunanlar</div>
        <Carousel className={HomeCss.items} responsive={responsive}>
            <div className={HomeCss.box}>
              <div className={HomeCss.item}>
                <img src={pro1} alt="item" className={HomeCss.image} />
                <Link to="/product" className={HomeCss.basket}>
                  Select options
                </Link>
                <div className={HomeCss.description}>
                Rainbow Bright Tennis Qolbağı
                </div>
              </div>
            </div>
            <div className={HomeCss.box}>
              <div className={HomeCss.item}>
                <img src={pro2} alt="item" className={HomeCss.image} />
                <Link to="/product" className={HomeCss.basket}>
                  Select options
                </Link>
                <div className={HomeCss.description}>
                İncə sallanan brilyant muncuq zəncirli boyunbağı
                </div>
              </div>
            </div>
            <div className={HomeCss.box}>
              <div className={HomeCss.item}>
                <img src={pro3} alt="item" className={HomeCss.image} />

                <Link to="/product" className={HomeCss.basket}>
                  Select options
                </Link>
                <div className={HomeCss.description}>
                  Cotton Candy Damla Sırğalar
                </div>
              </div>
            </div>
            <div className={HomeCss.box}>
              <div className={HomeCss.item}>
                <img src={pro4} alt="item" className={HomeCss.image} />

                <Link to="/product" className={HomeCss.basket}>
                  Select options
                </Link>
                <div className={HomeCss.description}>
                Pink Power Açıq Dairə Üzük
                </div>
              </div>
            </div>
            <div className={HomeCss.box}>
              <div className={HomeCss.item}>
                <img src={pro5} alt="item" className={HomeCss.image} />
                <Link to="/product" className={HomeCss.basket}>
                  Select options
                </Link>
                <div className={HomeCss.description}>
                  Teeny Dangling Brilyant Muncuq Zəncirli Boyunbağı
                </div>
              </div>
            </div>
            <div className={HomeCss.box}>
              <div className={HomeCss.item}>
                <img src={pro6} alt="item" className={HomeCss.image} />
                <Link to="/product" className={HomeCss.basket}>
                  Select options
                </Link>
                <div className={HomeCss.description}>
                  Teeny Dangling Brilyant Muncuq Zəncirli Boyunbağı
                </div>
              </div>
            </div>
            <div className={HomeCss.box}>
              <div className={HomeCss.item}>
                <img src={pro7} alt="item" className={HomeCss.image} />
                <Link to="/product" className={HomeCss.basket}>
                  Select options
                </Link>
                <div className={HomeCss.description}>
                  Teeny Dangling Diamond Bead Chain Necklace
                </div>
              </div>
            </div>
            <div className={HomeCss.box}>
              <div className={HomeCss.item}>
                <img src={pro8} alt="item" className={HomeCss.image} />
                <Link to="/product" className={HomeCss.basket}>
                  Select options
                </Link>
                <div className={HomeCss.description}>
                  Teeny Dangling Brilyant Muncuq Zəncirli Boyunbağı
                </div>
              </div>
            </div>
        </Carousel>
      </section>
      <section className={HomeCss.blog}>
        <div className={HomeCss.about__tops}>
          <h3>Lucy Williams ilə</h3>
          <h3> gümüşü necə geyinmək olar </h3>
        </div>
        <div className={HomeCss.about__bottoms}>
          <ul className={HomeCss.about__specialities}>
            <li className={HomeCss.infos}>
              <i className="fa-solid fa-arrow-right"></i>Sonrakı nə olursa olsun, görünüşünüzün qalan hissəsi üçün lövbər rolunu oynayacaq parça.
            </li>
            <li className={HomeCss.infos}>
              <i className="fa-solid fa-arrow-right"></i>Gözləri çəkmək və diqqəti cəlb etmək üçün kulon  əlavə edərək görünüşü tamamlayın.
            </li>
            <li className={HomeCss.infos}>
              <i className="fa-solid fa-arrow-right"></i>İstər qoşa zəncirli, istərsə də choker ilə təfərrüat əlavə edərək hər şeyi bir pillə qaldırın.
            </li>
          </ul>
          <div className={HomeCss.about__knows}>
            <p>
            Lucy In Silver yerə endi və aramızda hətta ən sadiq qızıl fədailəri də başlarını çevirdi. Gümüş həvəskarları üçün nəhayət, ən çox satılan dizaynlar yeni metalda mövcud olan sevimli çalarlarında Lucy Williams x Meliora-da ilişib qalmağın vaxtıdır.
Orijinal Meliora ilhamının özü olan Lucy ilə kolleksiyanın arxasında duran "niyə", onu necə tərtib etdiyi və simvolik tərəfdaşlığımızı davam etdirməyin necə hiss etdiyi barədə danışdıq.
            </p>
            <Link to="/blog">Ardını oxu</Link>
          </div>
        </div>
      </section>
      <section className={HomeCss.fourth}>
        <div className={HomeCss.service}>
          <div className={HomeCss.avatar}>
            <img src={Avatar} alt="avatar" />
          </div>
          <div className={HomeCss.quality}>
            Xidmət keyfiyyəti əladır! Yəqin ki, növbəti dəfə daha çox alacağam.
          </div>
          <div className={HomeCss.name__part}>
            <div className={HomeCss.name__line}></div>
            <div className={HomeCss.name}>lauricater</div>
          </div>
        </div>
      </section>

    </div>
  );
}
