import React from "react";
import "./portfolio.css";
import Shopee from "../../assets/Shopee-rmbg.png";
import Musicplayer from "../../assets/musicplayer.png";
import Musicplayer2 from "../../assets/musicplayer2.png";
import Weather from "../../assets/Weather-rmbg.png";
// import NoName from "../../assets/noname.png";
import PortfolioCV from "../../assets/me-removebg.png";
import TheGym from "../../assets/thegym.PNG";
import Lofi from "../../assets/lofi.PNG";
import Travel from "../../assets/travel.png";
import ClothingStore from "../../assets/clothing-store.png";

const data = [
  {
    id: 1,
    img: PortfolioCV,
    title: "Portfolio",
    subtitle: "ReactJS, react-tsparticles, framer-motion, react-router-dom",
    github: "https://github.com/hoanglg-workplace/portfolio",
    demo: "https://portfolio-hoangworkplace.vercel.app/",
  },
  {
    id: 2,
    img: TheGym,
    title: "The Gym",
    subtitle: "ReactJS, antd, framer-motion, emailjs",
    github: "https://github.com/hoanglg-workplace/the-gym",
    demo: "https://thegym-hoangworkplace.vercel.app/",
  },
  {
    id: 3,
    img: Lofi,
    title: "Lofi",
    subtitle: "ReactJS, @emotion/react, @emotion/styled, sass",
    github: "https://github.com/hoanglg-workplace/lofi",
    demo: "https://lofi-hoangworkplace.vercel.app/",
  },
  {
    id: 4,
    img: Travel,
    title: "Travel Affiliate",
    subtitle: "ReactJS, antd, sass, emailjs-com, react-router-hash-link",
    github: "https://github.com/hoanglg-workplace/travel-affiliate",
    demo: "https://travelaffiliate-hoangworkplace.vercel.app/",
  },
  {
    id: 5,
    img: ClothingStore,
    title: "Clothing Store",
    subtitle:
      "ReactJS, sass, react-fast-marquee, antd, bootstrap, @reduxjs/toolkit, emailjs-com, react-loading-skeleton",
    github: "https://github.com/hoanglg-workplace/clothing-store",
    demo: "https://clothingstore-hoangworkplace.vercel.app/",
  },
  {
    id: 6,
    img: Musicplayer2,
    title: "Music Player",
    subtitle: "ReactJS",
    github: "https://github.com/hoanglg-workplace/music-player",
    demo: "https://musicplayer-hoangworkplace.vercel.app/",
  },
  {
    id: 7,
    img: Weather,
    title: "Weather App",
    subtitle: "ReactJS",
    github: "https://github.com/hoanglg6699/WeatherApp",
    demo: "https://weatherapp-hoanglg.vercel.app/",
  },
  {
    id: 8,
    img: Shopee,
    title: "Shopee Clone",
    subtitle: "HTML, CSS",
    github:
      "https://github.com/hoanglg6699/lgh.github.io/tree/main/ShopeeClone",
    demo: "https://hoanglg6699.github.io/lgh.github.io/ShopeeClone/",
  },
  {
    id: 9,
    img: Musicplayer,
    title: "Music Player",
    subtitle: "HTML, CSS, JavaScript",
    github:
      "https://github.com/hoanglg6699/lgh.github.io/tree/main/MusicPlayer",
    demo: "https://hoanglg6699.github.io/lgh.github.io/MusicPlayer/",
  },
  // {
  //   id: 3,
  //   img: CV,
  //   title: "Ultimate CV",
  //   subtitle: "ReactJS, swiper, emailjs-com",
  //   github: "#portfolio",
  //   demo: "https://online-cv-hoanglg.vercel.app/",
  // },

  // {
  //   id: 6,
  //   img: NoName,
  //   title: "NoName Project",
  //   subtitle: "ReactJS, UmiJS, AntDesign/AntDesignPro",
  //   github: "https://github.com/hoanglg6699/NoNameProject",
  //   demo: "https://nonameproject.vercel.app/",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, img, title, subtitle, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio_item-img">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{subtitle}</h5>
              <div className="portfolio__item-cta">
                {/* <a href={github} className="btn" target={"_blank"}>
                  Github
                </a> */}
                <a href={demo} className="btn btn-primary" target={"_blank"}>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
