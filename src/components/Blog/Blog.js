import React, {useEffect, useState, useContext} from 'react'
import { MyContext } from "../../App";
import Header from '../Header/Header'
import BlogCss from '../Blog/Blog.module.css'
import axios from 'axios';

export default function Blog() {
  const [blog,setBlog] = useState([])
  const {opacity} = useContext(MyContext)
  const getData = async () => {
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
  useEffect(() => {
    getData()
  })

  return (
    <>
    <Header/>
    <section className={BlogCss.blog} style={{opacity}}>
      <div className={BlogCss.trend}>
        <div className={BlogCss.text}>TREND HEKAYƏLƏR</div>
        <div className={BlogCss.bottom} >
          {blog && blog.map((e) => {
          console.log(blog);
          return(
            <div className={BlogCss.box}  key={e.id}>
              <img src={e.image} alt="" />
              <div className={BlogCss.name}>{e.content}</div>
              <div>{e.created_at}</div>
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
