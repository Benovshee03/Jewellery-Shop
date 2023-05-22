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
import Register  from "./components/Register/Register";
import Search from "./components/Search/Search";
import Activation from "./components/Activation/Activation";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";

export const MyContext = createContext();

function App() {

  const [product, setProduct] = useState([]);

  const getData = async () => {
    try {
      let currentPage = 1;
      let allItems = [];
      while (true) {
        const response = await axios.get(`http://91.107.207.100:81/api/products/list/?page=${currentPage}`);
        const { results, next } = response.data;
        allItems = [...allItems, ...results]; 
        if (!next) {
          break;
        }
        currentPage++;
      }
      setProduct(allItems);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <MyContext.Provider value={{ getData , product }}>
        <ScrollToTop />
        <Routes className="all">
          <Route path="/" exact element={<Home />} />
          <Route path="/stores" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:roductId" element={<ProductDetail/>} />
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

// function App() {
//   const [page, setPage] = useState({ start: 0, finish: 4 })
//   const [quantity, setQuantity] = useState(1)
//   const [constant, setConstant] = useState([])
//   const [main, setMain] = useState(null)
//   const [products, setProducts] = useState(null)
//   const [productsId, setProductsId] = useState([])
//   const [favorite,setFavorite]=useState([])
//   const [Searchbar, setSearchbar] = useState(false)
//   const [SearchbarAnimation, setSearchbarAnimation] = useState("open")
//   const[blogs,setBlogs]=useState(null)
//   const [cardcount, setCartcount] = useState(constant.filter(item => item.count > 0).reduce((total) =>  total = total + 1 , 0 ))
//   const getinfo = async () => {
//     let res = await axios.get("http://localhost:1337/products")
//     let resp = await axios.get("http://localhost:1337/blogs")
//     setMain(res.data)
//     setProducts(res.data)
//     setConstant(res.data)
//     setBlogs(resp.data)
//   }
//   useEffect(() => {
//     getinfo()
//   }, [])
//   // const basket = (id) => {
//   //   products && products.map((num) => {
//   //     if (num.id === id) {
//   //       if (num.count) { num.count++
//   //         console.log(num.count);
//   //        }
//   //       else {
//   //         num.count = 1
//   //         setProductsId(productsId.concat(num))
//   //         // console.log(productsId);
//   //       }
//   //     }
//   //   })
//   //   setCart(constant.filter(item => item.count > 0))
//   //   setCartcount(constant.filter(item => item.count > 0).reduce((total) =>  total = total + 1 , 0 ))
//   // }
//   const basket = (id) => {
//     products && products.map((number) => {
//        if (number.id === id) {
//          if (number.count && number.count<99) { number.count++ }
//          else if (number.count==99){}
//          else {
//            number.count = 1
//          }
//        }
//        setProductsId(constant.filter(item => item.count > 0))
//        setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
//        console.log(productsId);
//      })
//    }
//    const basketminus = (id) => {
//     products && products.map((number) => {
//        if (number.id === id) {
//          if (number.count>1) { number.count--}
//        }
//        setProductsId(constant.filter(item => item.count > 0))
//        setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
//      })
//    }
//    const basketremove = (id) => {
//     products && products.map((number) => {
//       if (number.id === id) {
//         number.count = false
//       }
//       setProductsId(constant.filter(item => item.count > 0))
//       setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
//     })
//   }
//    const pageChange = (e) => {
//     var first = page.start
//     var second = page.finish
//     console.log(e.target.className)
//     if (e.target.className == "fa-solid fa-chevron-left") {
//       console.log(first)
//       if (first == 0) {
//       }
//       else if(second==products.length) { setPage({ start: first - 4, finish:first }) }
//       else { setPage({ start: first - 4, finish: second - 4 }) }
//     }
//     else if (e.target.className == "fa-solid fa-chevron-right") {
//       if (second + 4 < products.length) {
//         setPage({ start: first + 4, finish: second + 4 })
//       }
//       else if (first + 4 >= products.length) { }
//       else if (second + 4 >= products.length) {
//         setPage({ start: first + 4, finish: products.length })
//       }
//     }
//    console.log(page);
//   }
//   const favoritebutton = (id) => {
//     main && main.map((number) => {
//       if (number.id === id) {
//         if (number.fave) {
//           number.fave = false
//         }
//         else {
//           number.fave = true
//         }
//       }
//       setFavorite(constant.filter(item => item.fave == true))
//     })
//   }
//   function inputvalue(e) {
//     console.log(e.target.value)
//     var arr = []
//     main && main.map((number) => {
//       var tester = number.caption
//       if (tester.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
//         arr.push(number)
//       }
//       else {
//         setProducts([])
//       }
//     })
//     setProducts(arr)
//     if (e.target.value === "") { setProducts(main) }
//   }
//   const SearchbarOpen = () => {
//     setSearchbar(true)
//     setSearchbarAnimation("open")
//   }
//   const SearchbarClose = () => {
//     setSearchbarAnimation("close")
//     setTimeout(function () { setSearchbar(false) }
//       , 700
//     )
//   }
//   const quantitychange = (e) => {
//     if (e.target.value>99 ){}
//     else {setQuantity(e.target.value) }
//    }
//    const basketproductchange = (id) => {
//     main && main.map((number) => {
//        if (number.id === id) {
//          number.count=quantity
//        }
//        setProductsId(constant.filter(item => item.count > 0))
//        setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
//      })
//      setQuantity(1)
//    }
// value={{products,main,basket,productsId,favorite,favoritebutton,cardcount,SearchbarOpen,SearchbarClose,Searchbar,SearchbarAnimation,inputvalue,basketminus}}