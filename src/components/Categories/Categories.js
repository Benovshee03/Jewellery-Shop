import React,{useContext,useState} from "react";
import { MyContext } from "../../App";
import CatCss from "../Categories/Categories.module.css";
import { Link } from "react-router-dom";
export default function Categories() {
  const { handleCategory, selectedCategory, handleCategoryClick} = useContext(MyContext);

  return (
    <>
    <section className={CatCss.categories}>
    </section>
    <div className={CatCss.cat}>
        <Link onClick={() => handleCategory("earring")}
        
        className={`${CatCss.acces} ${
          selectedCategory === "earring" ? CatCss.selected : ""
        }`}><img src="	https://cdn.shopify.com/s/files/1/2278/7513/products/SBE205-1G_1350x1800.jpg?v=1677272157" alt="earring" />
          <span>sırğa</span>
        </Link>
        <Link onClick={() => handleCategory("bracelet")} className={`${CatCss.acces} ${
            selectedCategory === "bracelet" ? CatCss.selected : ""
          }`}><img src="https://cdn.shopify.com/s/files/1/2278/7513/products/SBA68-1G_1350x1800.jpg?v=1677272042" alt="bracelet" />
          <span>qolbaq</span>
        </Link>
        <Link onClick={() => handleCategory("ring")} className={`${CatCss.acces} ${
            selectedCategory === "ring" ? CatCss.selected : ""
          }`}><img src="https://cdn.shopify.com/s/files/1/2278/7513/products/SBR72_3636df07-2cff-4dd4-8ce9-de8df1b1b943_1350x1800.jpg?v=1631150336" alt="ring" />
          <span>üzük</span>
        </Link>
        <Link onClick={() => handleCategory("necklace")} className={`${CatCss.acces} ${
            selectedCategory === "necklace" ? CatCss.selected : ""
          }`}><img src="https://cdn.shopify.com/s/files/1/2278/7513/products/SBN242-1G_1350x1800.jpg?v=1677272666" alt="necklace" />
          <span>boyunbağı</span>
        </Link>
      </div>
    </>
  );
}
