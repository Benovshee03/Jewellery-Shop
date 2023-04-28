import React from "react";
import { Link } from "react-router-dom";
import ConCss from "../Contact/Contact.module.css";
import Header from "../Header/Header";
import insta from "../svg/insta.jpg";
export default function Contact() {
  return (
    <>
      <Header />
      <section className={ConCss.contact}>
        <div className={ConCss.top}>Contact Us</div>
        <div className={ConCss.bottom}>
          <div className={ConCss.left}>
            <div className={ConCss.green} id={ConCss.second}>
              <a
                href="https://www.instagram.com/meliora_handmade/"
                target="_blank"
                className={ConCss.adviser}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="40px"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <img src={insta} alt="instalink" width="600px" height="550px" />
            </div>
          </div>
          <div className={ConCss.right}>
            <div className={ConCss.map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12154.532348320125!2d49.84224319999999!3d40.3948239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4c56833499%3A0x9a2d50717850bb4a!2sUniverium!5e0!3m2!1sen!2saz!4v1681220658162!5m2!1sen!2saz"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
