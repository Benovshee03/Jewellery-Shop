import React from "react";
import CatCss from "../Categories/Categories.module.css";
import { Link } from "react-router-dom";
export default function Categories() {
  return (
    <>
    <section className={CatCss.categories}>
    </section>
    <div className={CatCss.cat}>
        <Link className={CatCss.acces}><img src="	https://cdn.shopify.com/s/files/1/2278/7513/products/SBE205-1G_1350x1800.jpg?v=1677272157" alt="earring" />
          <span>shop earrings</span>
        </Link>
        <Link className={CatCss.acces}><img src="https://cdn.shopify.com/s/files/1/2278/7513/products/SBA68-1G_1350x1800.jpg?v=1677272042" alt="bracelet" />
          <span>shop bracelet</span>
        </Link>
        <Link className={CatCss.acces}><img src="https://cdn.shopify.com/s/files/1/2278/7513/products/SBR72_3636df07-2cff-4dd4-8ce9-de8df1b1b943_1350x1800.jpg?v=1631150336" alt="ring" />
          <span>shop rings</span>
        </Link>
        <Link className={CatCss.acces}><img src="https://cdn.shopify.com/s/files/1/2278/7513/products/SBN242-1G_1350x1800.jpg?v=1677272666" alt="necklace" />
          <span>shop necklace</span>
        </Link>
      </div>
    </>
  );
}
