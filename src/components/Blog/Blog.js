import React, {useContext} from 'react'
import { MyContext } from "../../App";
import Header from '../Header/Header'
import BlogCss from '../Blog/Blog.module.css'
import { Link } from 'react-router-dom';

export default function Blog() {
  const {opacity,blog} = useContext(MyContext)

  return (
    <>
    <Header/>
    <section className={BlogCss.blog} style={{opacity}}>
      <div className={BlogCss.trend}>
        <div className={BlogCss.text}>TREND HEKAYƏLƏR</div>
        <div className={BlogCss.bottom} >
          {blog && blog.map((e) => {
          return(
            <Link to={`/blog/${e.id}`} className={BlogCss.box}  key={e.id}>
              <img src={"http://91.107.207.100:81" + e.images[0].image_url} alt="blogimage" />
              <div className={BlogCss.name}>{e.title}</div>
              <div className={BlogCss.date}>{e.created_at}</div>
            </Link>
            )
          })}
         </div>
      </div>
      <div className={BlogCss.blogs}></div>
    </section>
    </>
  )
}
