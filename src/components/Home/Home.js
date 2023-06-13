import React,{useState ,useContext}from "react";
import { Link } from "react-router-dom";
import HomeCss from "../Home/Home.module.css";
import { MyContext } from "../../App";
import times from "../svg/xmark-solid.svg";
import Search from "../svg/search.svg";
import Meliora from "../svg/Meliora.svg";
import Bag from "../svg/bag.svg";
import Wishlist from "../svg/wishlist.svg";
import shop from "../svg/store-solid.svg";
import Avatar from "../svg/avatar.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const { searchProducts ,handleFilter ,opacity ,product} = useContext(MyContext);
  const { searchText } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(true);
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
    <>
    <div className={isOpen ? HomeCss.home : HomeCss.home__opacity}>
      <section className={HomeCss.first} >
        <div className={HomeCss.header}>
          <div className={HomeCss.top}>
            <div className={HomeCss.text}>Welcome to Handmade Shop</div>
            <div className={HomeCss.login__part}>
              <Link to="/blog">Blog</Link>
              <div className={HomeCss.line}></div>
              <Link to="/about">Haqqımızda</Link>
              <div className={HomeCss.line}></div>
              <Link to="/contact">Əlaqə</Link>
              <div className={HomeCss.line}></div>
              <Link to="/login">Daxil ol</Link>
            </div>
          </div>
          <div className={HomeCss.bottom}>
            <div className={HomeCss.left}>
              <Link to="/product">
                <img src={shop} alt="menu_bar" width="20px" />
                <span className={HomeCss.names}>Məhsullar</span>
              </Link>
              <Link onClick={() => setIsOpen(false)}>
                <img src={Search} alt="search" width="20px" />
                <span className={HomeCss.names}>Axtar</span>
              </Link>
            </div>
            <div className={HomeCss.mid}>
              <img src={Meliora} alt="logo" width="350px" />
            </div>
            <div className={HomeCss.right}>
              <Link to="/wishlist">
                <img src={Wishlist} alt="wishlist" width="20px" />
                <span className={HomeCss.names}>Favorİlər</span>
              </Link>
              <Link to="/cart">
                <img src={Bag} alt="bag" width="20px" />
                <span className={HomeCss.names}>
                  Səbət <span>(0)</span>
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
            <div className={HomeCss.spring}>Yaz Yay 2023</div>
          </div>
        </div>
      </section>
      <section className={HomeCss.second} style={{opacity}}>
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
      <section className={HomeCss.shop__now} style={{opacity}}>
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
      <section className={HomeCss.about__us} style={{opacity}}>
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
      <section className={HomeCss.recommend} style={{opacity}}>
        <div className={HomeCss.recommend__text}>Tövsiyə Olunanlar</div>
        <Carousel className={HomeCss.items} responsive={responsive}>
          {product && product.slice(0,15).map((e) => {
          return(
            <div className={HomeCss.box}>
            <div className={HomeCss.item}>
              <img src={"http://91.107.207.100:81" + e.images[0].image_url} alt="item" className={HomeCss.image} />
              <Link to="/product" className={HomeCss.basket}>
                Select options
              </Link>
              <div className={HomeCss.description}>
              {e.name}
              </div>
            </div>
          </div>
            )
          })}

        </Carousel>
      </section>
      <section className={HomeCss.blog} style={{opacity}}>
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
      <section className={HomeCss.fourth} style={{opacity}}>
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
    <section className={isOpen ? HomeCss.searchPart : HomeCss.search__part__close} style={{opacity}}>
        <div className={HomeCss.search__top}>
          <div className={HomeCss.close}>
            <div onClick={() => setIsOpen(true)}>Close</div>
            <div className={HomeCss.times}>
              <img src={times} alt="times" onClick={() => setIsOpen(true)} />
            </div>
          </div>
          <div className={HomeCss.input}>
            <div>
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                className={HomeCss.search__head}
                type="text"
                placeholder="Məhsul, rəng və kategoriya axtar"
                onChange={handleFilter }
              />
            </div>
          </div>
        </div>
        <div className={HomeCss.search__bottom}>
          <div className={HomeCss.bottom__first}>
            <div className={HomeCss.top__collections}>Top Məhsullar</div>
            <div className={HomeCss.top__right}>
              <div className={HomeCss.best}>Əla təkliflər</div>
              <Link to="/product" className={HomeCss.all}>
                Hamısına bax
              </Link>
            </div>
          </div>
          <div className={HomeCss.bottom__second}>
                <div  className={HomeCss.collect}>
                {searchText && searchText.map((e) => {
              return (
                  <p className={HomeCss.filtered__text} key={e.id}>{e.name}</p>)
                })}
                </div>
                <div className={HomeCss.boxes}>
            {searchProducts &&
              searchProducts.slice(0,4).map((e) => {
                return (
                    <Link key={e.id}  to="/product" className={HomeCss.item__search}>
                      <img
                        src={e.images.length > 0 ? "http://91.107.207.100:81" + e.images[0].image_url : "" }
                        alt="backgroundImage"
                        className={HomeCss.hovered__image}
                      />
                      <div className={HomeCss.description}>{e.name}</div>
                      <div className={HomeCss.price}>$5{e.price}</div>
                    </Link>
                );
              })}
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
