import React, {useEffect, useState, useContext} from 'react'
import { MyContext } from "../../App";
import Header from '../Header/Header'
import BlogCss from '../Blog/Blog.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Blog() {
  // const [blog,setBlog] = useState([])
  const {opacity,blog} = useContext(MyContext)
  // const getData = async () => {
  //   await axios.get(`http://91.107.207.100:81/api/blogs/list/`)
  //   .then((res) => {
  //     console.log(res.data);
  //     setBlog(res.data) 
  //   })
        
  //     // setBlog(blog)
  //    .catch ((res) => {
  //     console.error("Error fetching items:", res);
  //   });
  // };
  // useEffect(() => {
  //   getData()
  // })

  return (
    <>
    <Header/>
    <section className={BlogCss.blog} style={{opacity}}>
      <div className={BlogCss.trend}>
        <div className={BlogCss.text}>TREND HEKAYƏLƏR</div>
        <div className={BlogCss.bottom} >
          {blog && blog.map((e) => {
          // console.log(blog);
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
