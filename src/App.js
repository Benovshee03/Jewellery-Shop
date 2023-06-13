import "./App.css";

import Contact from "./components/Contact/Contact";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";

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
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";

export const MyContext = createContext();

function App() {
  const [product, setProduct] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [wishlist,setWishlist] = useState([])
  const [opacity, setOpacity] = useState(1);
// butun pagelerin opacity si ucun
  // const setOpacit = () => {
  //   setOpacity(0.5); 
  // };
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
      setSearchText(allItems);
      setProductDetail(allItems);
      setCartItems(allItems)
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // Sebete elave etmek 
  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };
  const deleteFromCart = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  
  //wishliste elave etmek
  const addToWishlist = (item) =>{
    setWishlist((prevWishlist) => [...prevWishlist , item])
  }
  const deleteFromWishlist = (itemId) =>{
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id != itemId))
  }
  // Search hissesindekileri filterlemek............................................
  const filterText = (searchText, filter) => {
    return (
      searchText &&
      searchText.filter((value) =>
        value.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const handleFilter = (e) => {
    const filter = e.target.value.trim();
    const filteredText = filterText(searchText, filter);
    if(filter === ""){
      setSearchText([])
    }else{
      setSearchText(filteredText)
    }
    console.log( searchText);
  };


  useEffect(() => {
    getData();
  }, [product]);



  return (
    <div className="App">
      <MyContext.Provider
        value={{ getData, 
          product, 
          searchProducts, 
          searchText, 
          handleFilter ,
          productDetail , 
          wishlist, 
          deleteFromWishlist , 
          addToWishlist , 
          cartItems, 
          addToCart , 
          deleteFromCart , 
          setOpacity , 
          opacity}}
      >
        <ScrollToTop />
        <Routes className="all">
          <Route path="/" exact element={<Home />} />
          <Route path="/stores" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/product/:category" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
