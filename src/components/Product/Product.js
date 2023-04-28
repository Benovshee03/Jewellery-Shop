import React, { useState,  useContext } from "react";
// import { useParams } from "react-router-dom";
import ProCss from "../Product/Product.module.css";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";

export default function Product() {
  const { product } = useContext(MyContext);
  // const { id } = useParams()
  // const [isHovering, setIsHovering] = useState(
  //   product.map(() => false)
  // );
  

  // const handleMouseEnter = (indexone) => {
  //   setIsHovering((prevIsHovering) =>
  //     prevIsHovering.map((isHovering, i) =>
  //       i === indexone ? true : isHovering
  //     )
  //   );
  // };
  // const handleMouseLeave = (indexone) => {
  //   setIsHovering((prevIsHovering) =>
  //     prevIsHovering.map((isHovering, i) =>
  //       i === indexone ? false : isHovering
  //     )
  //   );
  // };

  return (
    <section className={ProCss.product}>
      <Header className={ProCss.head}/>
      <div className={ProCss.white}></div>
      <Categories />
      <div className={ProCss.items}>
        <div className={ProCss.box} >
        {product && product.map((e, indexone) => {
              return (
                <div
                  key={indexone}
                  className={ProCss.item}
                  // onMouseEnter={() => handleMouseEnter(indexone)}
                  // onMouseLeave={() => handleMouseLeave(indexone)} 
                >
                  <img
                  // isHovering[indexone] ? e.img2 : 
                  src={e.img1} alt={e.name}
                   className={ProCss.hovered__image} />
                  <div className={ProCss.icons}>
                    <Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#34513f"
                        viewBox="0 0 512 512"
                        width="30px"
                      >
                        <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                      </svg>
                    </Link>
                    <Link>
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
                  <div className={ProCss.basket} onClick={() => {product.onAddToCart(product.id)}} >Add to basket</div>
                  <div className={ProCss.description}>{e.category}</div>
                  <div className={ProCss.price}>{e.price}</div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
// import React from 'react'
// import styles from './Product.module.css'
// import { Globalcontext } from '../../App'
// import { useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import Ystar from '../Image/star-yellow.png'
// import Gstar from '../Image/gray_star.png'
// export default function Product() {
    // const mydata = React.useContext(Globalcontext)
    // const { id } = useParams()
//     const [imagesource, setImagesource] = useState("none")
//     const [displayFirstText, setDisplayFirstText] = useState("block");
//     const [displaySecondText, setDisplaySecondText] = useState("none");
//     const [metin1, setMetin1] = useState('');
//     const [metin2, setMetin2] = useState('');
//     const [goster, setGoster] = useState(false);
//     const [tarih, setTarih] = useState('');
//     function changesource(e) {
//         setImagesource(e)
//     }
//     const handleFirstButtonClick = () => {
//         setDisplayFirstText("block");
//         setDisplaySecondText("none");
//     };
//     const handleSecondButtonClick = () => {
//         setDisplayFirstText("none");
//         setDisplaySecondText("block");
//     };
//     const handleGoster = () => {
//         const suan = new Date();
//         const gun = suan.getDate();
//         const ay = suan.getMonth() + 1;
//         const yil = suan.getFullYear();
//         setTarih(`${gun}/${ay}/${yil}`);
//         setGoster(true);
//       }
//     return (
//         <section className={styles.big_container}>
//             <section className={styles.container} >
//                 {mydata.main && mydata.main.filter(number => number.id === id).map((number, indexone) => {
//                     return (
//                         <div className={styles.img_container} key={indexone} >
//                             <div className={styles.large_img} >
//                                 <i
//                                     onClick={() => {
//                                         if (imagesource == "none" || imagesource == number.img1) { changesource(number.img4) }
//                                         else if (imagesource == number.img2) { changesource(number.img1) }
//                                         else if (imagesource == number.img3) { changesource(number.img2) }
//                                         else if (imagesource == number.img4) { changesource(number.img3) }
//                                     }}
//                                     style={{ left: "0" }} className="fa-solid fa-chevron-left"></i>
//                                 <img className={styles.image} src={imagesource.slice(1, number.imagesource)} alt="" style={{ display: imagesource.length > 4 ? "" : "none" }} />
//                                 <img className={styles.image} src={number.img1.slice(1, number.img1.length)} alt="" style={{ display: imagesource.length > 4 ? "none" : "" }} />
//                                 <i
//                                     onClick={() => {
//                                         if (imagesource == "none" || imagesource == number.img1) { changesource(number.img2) }
//                                         else if (imagesource == number.img2) { changesource(number.img3) }
//                                         else if (imagesource == number.img3) { changesource(number.img4) }
//                                         else if (imagesource == number.img4) { changesource(number.img1) }
//                                     }}
//                                     style={{ right: "0" }} className="fa-solid fa-chevron-right"></i>
//                             </div>
//                             <div className={styles.lil_imgs}  >
//                                 <div>
//                                     <img className={styles.image} src={number.img1.slice(1, number.img1.length)} onClick={() => { changesource(number.img1) }} alt="" /></div>
//                                 <div> <img className={styles.image} src={number.img2.slice(1, number.img2.length)} onClick={() => { changesource(number.img2) }} alt="" /></div>
//                                 <div> <img className={styles.image} src={number.img3.slice(1, number.img3.length)} onClick={() => { changesource(number.img3) }} alt="" /></div>
//                                 <div> <img className={styles.image} src={number.img4.slice(1, number.img4.length)} onClick={() => { changesource(number.img4) }} alt="" /></div>
//                             </div>
//                         </div >
//                     )
//                 })}
//                 {mydata.main && mydata.main.filter(number => number.id === id).map((number, indexone) => {
//                     return (
//                         <div className={styles.text_container} key={indexone} >
//                             <div className={styles.product_info} >
//                                 <p>{number.caption}</p>
//                                 <p className={styles.star} >
//                                     <img src={Ystar} alt="" />
//                                     <img src={Ystar} alt="" />
//                                     <img src={Ystar} alt="" />
//                                     <img src={Ystar} alt="" />
//                                     <img src={Gstar} alt="" />
//                                 </p>
//                                 <p><i>{number.description}</i></p>
//                                 <p>
//                                     {number.text}
//                                 </p>
//                                 <p>Məhsul Kodu:  <span>{number.cod}</span> </p>
//                                 <p className={styles.price}><b>{number.price} AZN</b></p>
//                                 <p>
//                                 </p>
//                                 <hr />
//                             </div>
//                             <div className={styles.mix} >
//                                 <span>Say</span>
//                                 <input type="number" min="0" value={mydata.quantity} onInput={mydata.quantitychange} />
//                                 <button onClick={() => {
//                                     mydata.basketproductchange(number.id);
//                                 }}>
//                                     <i className="fa-solid fa-bag-shopping"></i>
//                                     <span> SEBETE ELAVE ET</span>
//                                 </button>
//                                 <div>
//                                     <i className="fa-regular fa-heart" onClick={() => { mydata.favoritebutton(number.id); }} style={{ color: number.fave ? "red" : "#B5B5B5" }}   ></i>
//                                     <span>Favorilere elave et</span>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })
//                 }
//             </section>
//             <div className={styles.button_product} >
//                 <button onClick={handleFirstButtonClick} >Rəylər</button>
//                 <button onClick={handleSecondButtonClick}  >Tərkibi</button>
//             </div>
//             <section style={{ display: displayFirstText }} className={styles.reviews_container} >
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Aygul Abbaszade</th>
//                             <th>15/03/2023</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque magnam, repellendus illum reiciendis perspiciatis maxime totam facilis libero corrupti at aspernatur quod fuga alias, nostrum hic aliquid repellat, harum facere quia! Illo eaque quia sapiente sequi, dolor, nobis, doloribus corrupti illum molestiae assumenda debitis in consequatur culpa nulla ullam!</td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Umid Abbaszade</th>
//                             <th>15/03/2023</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque magnam, repellendus illum reiciendis perspiciatis maxime totam facilis libero corrupti at aspernatur quod fuga alias, nostrum hic aliquid repellat, harum facere quia! Illo eaque quia sapiente sequi, dolor, nobis, doloribus corrupti illum molestiae assumenda debitis in consequatur culpa nulla ullam!</td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 {goster && (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>{metin1}</th>
//                             <th>{tarih}</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>{metin2}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//                  )}
//                 <div className={styles.write_text} >
//                     <span>Reyinizi qeyd edin</span>
//                     <p  htmlFor="metin1" >*Ad</p>
//                     <input type="text" name="" value={metin1} id="metin1" onChange={(e) => setMetin1(e.target.value)} />
//                     <p htmlFor="metin2" >*Rey</p>
//                     <textarea name="" id="metin2" value={metin2} onChange={(e) => setMetin2(e.target.value)} ></textarea>
//                     <div>
//                         <button onClick={handleGoster} >Gonder</button>
//                     </div>
//                 </div>
//             </section>
//             {mydata.main && mydata.main.filter(number => number.id === id).map((number, indexone) => {
//                 return (
//                     <section style={{ display: displaySecondText }} className={styles.composition} key={indexone}  >
//                         <div>
//                             {number.composition}
//                         </div>
//                     </section>
//                 )
//             })
//             }
//         </section>
//     )
// }