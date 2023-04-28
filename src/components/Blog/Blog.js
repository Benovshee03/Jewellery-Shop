import React, { useContext, useState} from 'react'
import Header from '../Header/Header'
import BlogCss from '../Blog/Blog.module.css'
import { MyContext } from '../../App';
// import pro1 from "../svg/1.png";
import axios from 'axios';

export default function Blog() {
  const {blog} = useContext(MyContext)
  return (
    <>
    <Header/>
    <section className={BlogCss.blog}>
      <div className={BlogCss.trend}>
        <div className={BlogCss.text}>TREND HEKAYƏLƏR</div>
        <div className={BlogCss.bottom}>
          {blog && blog.slice(0,4).map((e) => {
          return(
          <div className={BlogCss.box} key={e.id}>
            <img src={e.img1} alt="blogs" />
            <div className={BlogCss.name}>{e.name}</div>
          </div>
            )
          })}
        </div>
      </div>
      <div className={BlogCss.blogs}></div>
    </section>
    </>
  )
}
