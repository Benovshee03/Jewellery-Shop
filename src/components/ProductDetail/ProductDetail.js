import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../App";
import Header from "../Header/Header";
import DetCss from ".//ProductDetail.module.css";

export default function ProductDetail() {
  const { productId } = useParams();
  const { product } = useContext(MyContext);
  // console.log(ProductDetail && ProductDetail);
  // console.log(myProduct);

  const [data, setData] = useState(null);
  useEffect(() => {
    console.log(product);
    console.log(productId);
    setData(product.filter((prod) => prod.id === Number(productId)));
  }, []);

  return (
    <>
      {data &&
        data.map((e) => {
          return (
            <>
              <Header />
              <div className={DetCss.product__detail}>
                <div className={DetCss.main}>
                  <div className={DetCss.left}>
                    <div className={DetCss.pictures}>
                      <ul>
                        <li>
                          <img src={"http://91.107.207.100:81" + e.images[0].image_url} alt="" />
                        </li>
                        <li>
                          <img src={"http://91.107.207.100:81" + e.images[1].image_url} alt="" />
                        </li>
                        <li>
                          <img src={"http://91.107.207.100:81" + e.images[2].image_url} alt="" />
                        </li>
                        <li>
                          <img src={"http://91.107.207.100:81" + e.images[0].image_url} alt="" />
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                      </ul>
                    </div>
                    <div className={DetCss.picture__main}>
                      <img
                        src={"http://91.107.207.100:81" + e.images[0].image_url}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={DetCss.right}>
                    <div className={DetCss.right__main}>
                      <div className={DetCss.name__main}>
                        <div className={DetCss.name}>{e.name}</div>
                        <div className={DetCss.price}>${e.price}</div>
                      </div>
                      <div>
                        <ul className={DetCss.about__speciality}>
                          <li className={DetCss.infos}>
                            <i className="fa-regular fa-ring"></i>Bərk qızıl
                            zərgərlik
                          </li>
                          <li className={DetCss.infos}>
                            <i class="fa-brands fa-sketch "></i>Etik Mənbə
                          </li>
                          <li className={DetCss.infos}>
                            <i className="fa-solid fa-globe "></i>Davamlı Run
                          </li>
                          <li className={DetCss.infos}>
                            <i className="fa-solid fa-money-bill "></i>Münasib
                            qiymətə
                          </li>
                          <li className={DetCss.infos}>
                            <i className="fa-solid fa-venus "></i>Qadınlar Üçün
                            Qadınlar tərəfindən
                          </li>
                          <li className={DetCss.infos}>
                            <i className="fa-solid fa-city "></i>Bakıda dizayn
                            olunub
                          </li>
                        </ul>
                      </div>
                      <div className={DetCss.description}>
                        <p
                          dangerouslySetInnerHTML={{ __html: e.description }}
                        ></p>
                      </div>
                      <div className={DetCss.buttons}>
                        <button>Add to cart</button>
                        <button>
                          <i class="fa-sharp fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
