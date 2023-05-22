import React, {useEffect, useState} from 'react'
import Header from '../Header/Header'
import BlogCss from '../Blog/Blog.module.css'
// import { MyContext } from '../../App';
import pro1 from "../svg/1.png";
import axios from 'axios';

export default function Blog() {
  const [blog,setBlog] = useState([])
  const getBlog = () => {
    axios 
    .get("http://91.107.207.100:81/api/blogs/list/")
    .then((res)=>{
      console.log(res.data)
      setBlog(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    console.log(blog)
    getBlog()
  } , [])
  return (
    <>
    <Header/>
    <section className={BlogCss.blog}>
      <div className={BlogCss.trend}>
        <div className={BlogCss.text}>TREND HEKAYƏLƏR</div>
        <div className={BlogCss.bottom} >
          {blog && blog.map((e) => {
          return(
            <div className={BlogCss.box}  key={e.id}>
              <img src={pro1} alt="blogs" />
              <div className={BlogCss.name}>{e.content}</div>
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
