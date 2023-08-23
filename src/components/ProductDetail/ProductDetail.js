import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../App";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import DetCss from ".//ProductDetail.module.css";
import Footer from "../Footer/Footer";
import StarRating from "../StarRating";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProductDetail() {
  const { productId } = useParams();
  const { product ,addToCart, addToWishlist,} = useContext(MyContext);

  const removeTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [data, setData] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    setData(product.filter((prod) => prod.id === Number(productId)));
  }, []);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
  
    const handleSubmitReview = (e) => {
      e.preventDefault();
      const newReview = {
        id: reviews.length + 1,
        name: name,
        email: email,
        review: review,
        rating: rating,
      };
      setReviews([...reviews, newReview]);
      setName("");
      setEmail("");
      setReview("");
      setRating(0);
    };
    const handleImageClick = (imageUrl) => {
      setMainImage(imageUrl);
    };

  return (
    <>
    <Header />
    <div className={DetCss.all}>
    {data &&
          data.map((e) => {
            return (
              <div key={e.id} className={DetCss.product__detail}>
                <div className={DetCss.main}>
                  <div className={DetCss.left}>
                    <div className={DetCss.pictures}>
                      <ul>
                        {e.images.map((image, index) => (
                          <li key={index} onClick={() => handleImageClick(image.image_url)}>
                            <img src={"http://91.107.207.100:81" + image.image_url} alt={"image" + (index + 1)} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={DetCss.picture__main}>
                      <img
                        src={"http://91.107.207.100:81" + (mainImage || e.images[0].image_url)}
                        alt="picture"
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
                        <p>{removeTags(e.description)}</p>
                      </div>
                      <div className={DetCss.buttons}>
                        <button className={DetCss.add} onClick={() => addToCart(e)}>Add to cart</button>
                        <button className={DetCss.heart} onClick={() => addToWishlist(e)}>
                          <i className="fa-sharp fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      <section className={DetCss.review}>
        <div className={DetCss.text}>Review</div>
        <div className={DetCss.review__bottom}>
          <div className={DetCss.reviews}>
            {reviews.map((review) => (
              <div key={review.id} className={DetCss.review__item}>
                <div className={DetCss.review__name}>{review.name}</div>
                <div className={DetCss.review__rating}>
                  <StarRating rating={review.rating} onRatingChange={() => {}} />
                </div>
                <div className={DetCss.review__content}>{review.review}</div>
              </div>
            ))}
          </div>
          <div className={DetCss.review__form}>
            <form onSubmit={handleSubmitReview}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Review:</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Rating:</label>
                <StarRating rating={rating} onRatingChange={setRating} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <div className={DetCss.recommend__text}>Bunları da bəyənə bilərsiniz </div>
      <Carousel className={DetCss.items} responsive={responsive}>
          {product && product.slice(0,15).map((e) => {
          return(
            <div className={DetCss.box}>
            <div className={DetCss.item}>
              <img src={"http://91.107.207.100:81" + e.images[0].image_url} alt="item" className={DetCss.image} />
              <Link to="/product" className={DetCss.basket}>
                Select options
              </Link>
              <div className={DetCss.description}>
              {e.name}
              </div>
            </div>
          </div>
            )
          })}

        </Carousel>
    </div>
    </>

  );
}
