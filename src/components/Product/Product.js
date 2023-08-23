import React, { useState, useContext, useEffect } from "react";
import ProCss from "../Product/Product.module.css";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import Header from "../Header/Header";
// import Carousel from "..Carousel/Carousel.js";
import Categories from "../Categories/Categories";
import customize from "../svg/customize.svg";
// import { prototype } from "google-map-react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
export default function Product() {
  const { product } = useContext(MyContext);
  const { wishlist, deleteFromWishlist , addToWishlist ,opacity ,handleCloseAlert, isAlertOpen, handleAddToCart , handleClosePopUp,isPopUpVisible ,setPopUpVisible} = useContext(MyContext);
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState({
    showFilters: true,
    priceFilter: true,
    productFilter: true,
    metalFilter: true,
    materialFilter: true,
    colorFilter: true,
    sizeFilter: true,
    promoFilter: true,
  });
  const [images, setImages] = useState([]);
  const fetchedImages = product;
  const [filteredProducts, setFilteredProducts] = useState(product); 
  const [selectedFilters, setSelectedFilters] = useState({
    price: [],
    product: [],
    metal: [],
    material: [],
    color: [],
    size: [],
    promo: [],
  });
  useEffect(() => {
    setSelectedFilters({
      price: [],
      product:  [],
      metal: [],
      material:  [],
      color: [],
      size: [],
      promo: [],
    });
  }, []);

  useEffect(() => {
    if (fetchedImages && fetchedImages.length > 0) {
      const allImages = fetchedImages.map((product) => product.images);
      setImages(allImages);
    }
  }, [fetchedImages]);

  const toggleNavbar = (filter) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };
  useEffect(() => {
    applyFilters();
  }, [selectedFilters, product]); 

  const applyFilters = () => {
    let filteredData = product.slice(); 

    if (selectedFilters.price.length > 0) {
      filteredData = filteredData.filter((item) => {
        const price = item.price;
        return selectedFilters.price.includes(price);
      });
    }

    if (selectedFilters.product.length > 0) {
      filteredData = filteredData.filter((item) => {
        const productType = item.type;
        return selectedFilters.product.includes(productType);
      });
    }

    if (selectedFilters.metal.length > 0) {
      filteredData = filteredData.filter((item) => {
        const metal = item.metal;
        return selectedFilters.metal.includes(metal);
      });
    }

    if (selectedFilters.material.length > 0) {
      filteredData = filteredData.filter((item) => {
        const material = item.material;
        return selectedFilters.material.includes(material);
      });
    }

    if (selectedFilters.color.length > 0) {
      filteredData = filteredData.filter((item) => {
        const color = item.color;
        return selectedFilters.color.includes(color);
      });
    }

    setFilteredProducts(filteredData);
  };


  const handleFilterChange = (filterType, value) => {
    if (filterType === "product") {
      setSelectedFilters((prevState) => ({
        ...prevState,
        product: value,
      }));
    } else if (filterType === "metal_type") {
      setSelectedFilters((prevState) => ({
        ...prevState,
        metal: prevState.metal.includes(value)
          ? prevState.metal.filter((filter) => filter !== value)
          : [...prevState.metal, value],
      }));
    } else if (filterType === "material_type") {
      setSelectedFilters((prevState) => ({
        ...prevState,
        material: prevState.material.includes(value)
          ? prevState.material.filter((filter) => filter !== value)
          : [...prevState.material, value],
      }));
    } else {
      setSelectedFilters((prevState) => ({
        ...prevState,
        [filterType]: prevState[filterType].includes(value)
          ? prevState[filterType].filter((filter) => filter !== value)
          : [...prevState[filterType], value],
      }));
    }
  };

  const [sortOption, setSortOption] = useState("featured"); // Default sort option

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Define a function to sort the products based on the selected sort option
  const sortProducts = () => {
    switch (sortOption) {
      case "newest":
        setFilteredProducts([...filteredProducts].sort((a, b) => b.id - a.id));
        break;
      case "low-high":
        setFilteredProducts([...filteredProducts].sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilteredProducts([...filteredProducts].sort((a, b) => b.price - a.price));
        break;
      default:
        // "featured" option or any unknown option
        setFilteredProducts(product.slice());
        break;
    }
  };

  // Call the sortProducts function whenever the sort option changes or the filtered products change
  useEffect(() => {
    sortProducts();
  }, [sortOption]);
  
  
  // console.log(filteredProducts);
  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className={ProCss.product} >
          <Dialog open={isAlertOpen} onClose={handleCloseAlert}>
      <DialogTitle>Diqqət</DialogTitle>
      <DialogContent>
        <p>Bu məhsul səbətinizdə artıq mövcuddur.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseAlert}>Davam et</Button>
      </DialogActions>
    </Dialog>
      <Header className={ProCss.head} />
      <Categories  />
      <section className={ProCss.main} style={{opacity}}>
        <div className={ProCss.first}>
          <div
            onClick={() => toggleNavbar("showFilters")}
            className={ProCss.show__hide}
          >
            <div className={ProCss.show__hidi}>
              <img src={customize} alt="customize" />
            </div>
            <p className={isOpen.showFilters ? ProCss.show : ProCss.hide}>
              Filterlə
            </p>
            <p className={isOpen.showFilters ? ProCss.sho : ProCss.hid}>
              Filterləri gizlə
            </p>
          </div>
          <div className={ProCss.sort}>
            Sırala:{""}
            <select
            id="sort" 
            width="40px" 
            height="20px"          
            name="filter"
          value={sortOption}
          onChange={handleSortChange}>
              <option value="featured">Featured</option>
              <option value="newest">Yenilər</option>
              <option value="low-high">Qiymət:Ucuzdan-Bahaya</option>
              <option value="high-low">Qiymət:Bahadan-Ucuza</option>
            </select>
          </div>
        </div>
        <div
          className={isOpen.showFilters ? ProCss.second__close : ProCss.second}
        >
          <div
            className={isOpen.showFilters ? ProCss.filter : ProCss.filter__open}
          >
            <div className={ProCss.price__filter}>
              <div
                className={
                  isOpen.priceFilter ? ProCss.arrow__close : ProCss.arrow
                }
                onClick={() => toggleNavbar("priceFilter")}
              >
                <p>Qiymət</p>{" "}
                <i
                  className={
                    isOpen.priceFilter
                      ? "fa-solid fa-angle-down"
                      : "fa-solid fa-chevron-up"
                  }
                ></i>
              </div>
              <ul
                className={
                  isOpen.priceFilter ? ProCss.price_close : ProCss.price__open
                }
              >
                <li >
                  <input type="checkbox"  /> $100-dan aşağı
                </li>
                <li>
                  <input type="checkbox" /> $100-dan $200-a qədər
                </li>
                <li>
                  <input type="checkbox" /> $200-dan $500-a qədər
                </li>
                <li>
                  <input type="checkbox" /> $500-dan yuxarı
                </li>
              </ul>
            </div>
            <div className={ProCss.product__filter}>
              <div
                onClick={() => toggleNavbar("productFilter")}
                className={
                  isOpen.productFilter ? ProCss.arrow__close : ProCss.arrow
                }
              >
                <p>Kategoriya</p>
                <i
                  className={
                    isOpen.productFilter
                      ? "fa-solid fa-angle-down"
                      : "fa-solid fa-chevron-up"
                  }
                ></i>
              </div>
              <ul
                className={
                  isOpen.productFilter
                    ? ProCss.product__close
                    : ProCss.product__open
                }
              >
                <li>
                  <input type="checkbox" value="earring"
              checked={selectedFilters.product.includes("earring")}
              onChange={(e) => handleFilterChange("product", e.target.value)} /> Sırğa
                </li>
                <li>
                  <input type="checkbox" value="uzuk"
            checked={selectedFilters.product.includes("uzuk")}
            onChange={(e) => handleFilterChange("product", e.target.value)}/> Üzük
                </li>
                <li>
                  <input type="checkbox" value="necklace"
            checked={selectedFilters.product.includes("necklace")}
            onChange={(e) => handleFilterChange("product", e.target.value)} /> Boyunbağı
                </li>
                <li>
                  <input type="checkbox"  value="bracelet"
            checked={selectedFilters.product.includes("bracelet")}
            onChange={(e) => handleFilterChange("product", e.target.value)}/> Qolbaq
                </li>
              </ul>
            </div>
            <div className={ProCss.metal__filter}>
              <div
                onClick={() => toggleNavbar("metalFilter")}
                className={isOpen.metalFilter ? ProCss.arrow__close : ProCss.arrow}
              >
                <p>Metal növü</p>
                <i
                  className={isOpen.metalFilter ? "fa-solid fa-angle-down" : "fa-solid fa-chevron-up"}
                ></i>
              </div>
              <ul
                className={
                  isOpen.metalFilter
                    ? ProCss.metal__filter__close
                    : ProCss.metal__filter__open
                }
              >
                <li>
                  <input type="checkbox" 
        value="saf"
        checked={selectedFilters.metal.includes("saf")}
        onChange={(e) => handleFilterChange("metal", e.target.value)}/> 9/10K Saf Qızıl{" "}
                </li>
                <li>
                  <input         value="qızıl"
        checked={selectedFilters.metal.includes("qızıl")}
        onChange={(e) => handleFilterChange("metal", e.target.value)} type="checkbox" /> 14K Saf Qızıl{" "}
                </li>
                <li>
                  <input type="checkbox"         value="kaplama"
        checked={selectedFilters.metal.includes("kaplama")}
        onChange={(e) => handleFilterChange("metal", e.target.value)}/> Qızıl Doldurma / Kaplama{" "}
                </li>
                <li>
                  <input type="checkbox"         value="gumus"
        checked={selectedFilters.metal.includes("gumus")}
        onChange={(e) => handleFilterChange("metal", e.target.value)}/> Saf gümüş{" "}
                </li>
                <li>
                  <input type="checkbox"         value="platin"
        checked={selectedFilters.metal.includes("platin")}
        onChange={(e) => handleFilterChange("metal", e.target.value)}/> Platin{" "}
                </li>
              </ul>
            </div>
            <div className={ProCss.material__filter}>
              <div
                onClick={() => toggleNavbar("materialFilter")}
                className={
                  isOpen.materialFilter ? ProCss.arrow__close : ProCss.arrow
                }
              >
                <p>Material</p>
                <i
                  className={
                    isOpen.materialFilter
                      ? "fa-solid fa-angle-down"
                      : "fa-solid fa-chevron-up"
                  }
                ></i>
              </div>
              <ul
                className={
                  isOpen.materialFilter
                    ? ProCss.material__filter__close
                    : ProCss.material__filter__open
                }
              >
                <li>
                  <input type="checkbox"  value="duzqizil"
              checked={selectedFilters.material.includes("duzqizil")}
              onChange={(e) => handleFilterChange("material", e.target.value)}/> Düz Qızıl
                </li>
                <li>
                  <input type="checkbox" value="almaz"
              checked={selectedFilters.material.includes("almaz")}
              onChange={(e) => handleFilterChange("material", e.target.value)}/> Almaz
                </li>
                <li>
                  <input type="checkbox" value="das"
              checked={selectedFilters.material.includes("das")}
              onChange={(e) => handleFilterChange("material", e.target.value)}/> Qiymətli daş
                </li>
                <li>
                  <input type="checkbox" value="inci"
              checked={selectedFilters.material.includes("inci")}
              onChange={(e) => handleFilterChange("material", e.target.value)}/> İnci
                </li>
              </ul>
            </div>
            <div className={ProCss.color__filter}>
              <div
                onClick={() => toggleNavbar("colorFilter")}
                className={
                  isOpen.colorFilter ? ProCss.arrow__close : ProCss.arrow
                }
              >
                <p>Rəng</p>
                <i
                  className={
                    isOpen.colorFilter
                      ? "fa-solid fa-angle-down"
                      : "fa-solid fa-chevron-up"
                  }
                ></i>
              </div>
              <ul
                className={
                  isOpen.colorFilter
                    ? ProCss.color__filter__close
                    : ProCss.color__filter__open
                }
              >
                <li className={ProCss.red}></li>
                <li className={ProCss.green}></li>
                <li className={ProCss.blue}></li>
                <li className={ProCss.white}></li>
                <li className={ProCss.white__gold}></li>
                <li className={ProCss.pink}></li>
                <li className={ProCss.purple}></li>
                <li className={ProCss.orange}></li>
                <li className={ProCss.brown}></li>
                <li className={ProCss.yellow}></li>
                <li className={ProCss.yellow__gold}></li>
                <li className={ProCss.gray}></li>
                <li className={ProCss.black}></li>
                <li className={ProCss.mix}></li>
              </ul>
            </div>
            <div className={ProCss.size__filter}>
              <div
                onClick={() => toggleNavbar("sizeFilter")}
                className={
                  isOpen.sizeFilter ? ProCss.arrow__close : ProCss.arrow
                }
              >
                <p>Ölçü</p>{" "}
                <i
                  className={
                    isOpen.sizeFilter
                      ? "fa-solid fa-angle-down"
                      : "fa-solid fa-chevron-up"
                  }
                ></i>
              </div>
              <ul
                className={
                  isOpen.sizeFilter
                    ? ProCss.size__filter__close
                    : ProCss.size__filter__open
                }
              >
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className={ProCss.promo__filter}>
              <div
                onClick={() => toggleNavbar("promoFilter")}
                className={
                  isOpen.promoFilter ? ProCss.arrow__close : ProCss.arrow
                }
              >
                <p>Endirim</p>
                <i
                  className={
                    isOpen.promoFilter
                      ? "fa-solid fa-angle-down"
                      : "fa-solid fa-chevron-up"
                  }
                ></i>
              </div>
              <ul
                className={
                  isOpen.promoFilter
                    ? ProCss.promo__filter__close
                    : ProCss.promo__filter__open
                }
              >
                <li>
                  <input type="checkbox" /> Endirimdə
                </li>
              </ul>
            </div>
          </div>
          <div
            className={isOpen.showFilters ? ProCss.items__close : ProCss.items}
          >
            <div
              className={isOpen.showFilters ? ProCss.box__close : ProCss.box}
            >
              {filteredProducts &&
                filteredProducts.map((e, indexone) => {
                  return (
                    <Link key={indexone }   className={ProCss.item} >
                         <div className={ProCss.hovered__image} onMouseEnter={handleHover}  onMouseLeave={handleMouseLeave}>
                          <img  src={hovered ?  "http://91.107.207.100:81" + e.images[1].image_url : "http://91.107.207.100:81" + e.images[0].image_url } alt="Shape" /> 
                        </div>
                      <div className={ProCss.icons}>
                        <Link  >
                        {wishlist.some((wishlistItem) => wishlistItem.id === e.id) ? (
                          <svg onClick={() => deleteFromWishlist(e.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="red"
                            viewBox="0 0 512 512"
                            width="30px"
                          >
                            <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                          </svg>) : (
                          <svg onClick={() => addToWishlist(e)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#34513f"
                            viewBox="0 0 512 512"
                            width="30px"
                          >
                            <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                          </svg>)}
                        </Link>
                        <Link to={`/product/${e.id}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#34513f"
                            viewBox="0 0 512 512"
                            width="30px"
                          >
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                          </svg>
                        </Link>
                      </div>
                      <div
                        className={ProCss.basket} onClick={() => handleAddToCart(e)}
                      >
                        Add to basket
                      </div>

                      <div className={ProCss.description}>{e.name}</div>
                      <div className={ProCss.price}>${e.total_price}</div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      {isPopUpVisible && (
      <div className={ProCss.popup_container}>
        <div className={ProCss.popup}>
          <p>Səbətinizə əlavə olundu!</p>
        </div>
        </div>
      )}
    </div>
  );
}
