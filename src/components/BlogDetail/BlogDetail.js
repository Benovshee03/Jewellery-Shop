import React, { useEffect, useContext, useState } from 'react';
import styles from '../BlogDetail/BlogDetail.module.css';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../App';
import Header from '../Header/Header';


const removeTags = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

export default function BlogDetail() {
  const { blogId } = useParams();
  const { blog } = useContext(MyContext);
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   setData(blog.filter((prod) => prod.id === Number(blogId)));
  // }, [blogId]);

  return (
    <>
      <Header />
      {data &&
        data.map((e) => (
          <div key={e.id} className={styles.main}>
           <h2  className={styles.title}>{e.title}</h2>
           <div  className={styles.date}>{e.created_at}</div>
           <div className={styles.pict}><img src={"http://91.107.207.100:81" + e.images[0].image_url} alt="blogimage" /></div>
           <div className={styles.content}> {removeTags(e.content)}</div>
          </div>
        ))}
    </>
  );
}
