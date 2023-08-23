import "./App.css";

import Contact from "./components/Contact/Contact";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import About from "./components/About/About";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import Activation from "./components/Activation/Activation";
import Dashboard from './components/Dashboard/Dashboard';
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import { TokenProvider } from "./components/TokenContext";
export const MyContext = createContext();

function App() {
  const [product, setProduct] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [helperData, setHelperData] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [opacity, setOpacity] = useState(1);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const config = { headers: { "Content-Type": "application/json" } };
  // const [filteredProducts, setFilteredProducts] = useState(product);
  const [selectedFilters, setSelectedFilters] = useState({
    product: [],
    metal: [],
    material: [],
    color: [],
    size: [],
    promo: [],
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
const navigate = useNavigate()
  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
  };
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // butun pagelerin opacity si ucun
  const setOpacit = () => {
    setOpacity(0.5);
  };
  const [blog,setBlog] = useState([])
  const getBlog = async () => {
    await axios.get(`http://91.107.207.100:81/api/blogs/list/`)
    .then((res) => {
      console.log(res.data);
      setBlog(res.data) 
    })
        
      // setBlog(blog)
     .catch ((res) => {
      console.error("Error fetching items:", res);
    });
  };
  // const [filteredData,setFilteredData] = useState([])
  const getData = async () => {
    try {
      let currentPage = 1;
      let allItems = [];
      while (true) {
        const response = await axios.get(
          `http://91.107.207.100:81/api/products/list/?page=${currentPage}`
        );
        // console.log(response.data.results.images);
        const { results, next } = response.data;
        allItems = [...allItems, ...results];
        if (!next) {
          break;
        }
        currentPage++;
      }
      setProduct(allItems);
      setSearchProducts(allItems);
      // setSearchText(allItems);
      setHelperData(allItems);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // Sebete elave etmek;
  // const addToCart = (item) => {
  //   setCartItems((prevCartItems) => [...prevCartItems, item]);
  //   console.log(item);
  // };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setIsAlertOpen(true);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, item])
      setCartItemCount((prevItemCount) => prevItemCount + 1);
      setPopUpVisible(true);
    }
  };
  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };
//sebetden mehsullari silmek;
  const deleteFromCart = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  //wishliste elave etmek;
  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };
  const deleteFromWishlist = (itemId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== itemId)
    );
  };
  // Search hissesindekileri filterlemek............................................
  const filterText = (searchText, filter) => {
    return (
      helperData &&
      helperData.filter((value) =>
        value.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };
  

  const handleFilter = (e) => {
    const filter = e.target.value.trim();
    const filteredText = filterText(searchText, filter);
    if (filter === "") {
      setSearchText([]);
    } else {
      setHelperData(filteredText);
    }
    console.log(helperData);
  };

  useEffect(() => {
    getData();
    getBlog()
  }, []);


  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevState) => {
      const updatedFilters = prevState[filterType].includes(value)
        ? prevState[filterType].filter((filter) => filter !== value)
        : [...prevState[filterType], value];
  
      return {
        ...prevState,
        [filterType]: updatedFilters,
      };
    });
    applyFilters(); 
  };
  
  // console.log(selectedFilters);
  // console.log(product);
  const applyFilters = () => {
    let filteredData = product.slice();
  
    if (selectedFilters.product.length > 0) {
      filteredData = filteredData.filter((item) => {
        const productType = item.type;
        return selectedFilters.product.includes(productType);
      });
      console.log(filteredData);

    }
  
    if (selectedFilters.metal.length > 0) {
      filteredData = filteredData.filter((item) => {
        const metal = item.metal_type;
        return selectedFilters.metal.includes(metal);
      });
    }
  
    if (selectedFilters.material.length > 0) {
      filteredData = filteredData.filter((item) => {
        const material = item.material_type;
        return selectedFilters.material.includes(material);
      });
    }
  
    if (selectedFilters.color.length > 0) {
      filteredData = filteredData.filter((item) => {
        const color = item.color;
        return selectedFilters.color.includes(color);
      });
    }
  
    setProduct(filteredData);
  };

  const handleCategory = (category) => {
    if (category) {
      const filteredProduct = product.filter((item) => item.type === category);
      setProduct(filteredProduct);
    } else {
      setProduct(product);
    }
  };

  const handleClosePopUp = () => {
    setPopUpVisible(false);
  };

  useEffect(() => {
    if (isPopUpVisible) {
      const timeout = setTimeout(() => {
        setPopUpVisible(false); 
      }, 1000); 

      return () => clearTimeout(timeout);
    }
  }, [isPopUpVisible]);
  // const handleRegisterSubmit = (userData) => {
  //   axios
  //     .post("http://91.107.207.100:81/api/accounts/register/", userData, config)
  //     .then((response) => {
  //       console.log(response);
  //       // Əgər qeydiyyat uğurlu olduysa, istifadəçiyə bir təbrik mesajı göstərək və onu login səhifəsinə yönləndirək
  //       alert("Qeydiyyat uğurla başa çatdı!");
  //       navigate(`/activation/${response.data.slug}`);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // Əgər qeydiyyatda səhv baş veribsə, istifadəçiyə uyğun bir xəta mesajı göstərək
  //       alert("Qeydiyyatda səhv baş verdi. Zəhmət olmasa, yenidən cəhd edin.");
  //     });
  // };
  return (
    <div className="App">
      <TokenProvider>
      <MyContext.Provider
        value={{
          getData,
          product,
          blog,
          searchProducts,
          searchText,
          handleFilter,
          wishlist,
          deleteFromWishlist,
          addToWishlist,
          cartItems,
          deleteFromCart,
          setOpacity,
          helperData,
          opacity,
          handleAddToCart,
          handleCloseAlert,
          isAlertOpen,
          cartItemCount,
          handleFilterChange,
          applyFilters,
          handleCategory,
          selectedCategory,
          handleCategoryClick,
          handleClosePopUp,
          isPopUpVisible,
          user,
          setUser,
          // handleRegisterSubmit
        }}
      >
        <ScrollToTop />
        <Routes className="all">
          <Route path="/" exact element={<Home />} />
          <Route path="/stores" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/product/:category" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activation" element={<Activation />} />
          <Route path="/activate/:slug/" element={<Activation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
      </TokenProvider>
    </div>
  );
}

export default App;
