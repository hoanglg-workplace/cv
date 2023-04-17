import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      avatar: AVT1,
      name: "Tran Thanh",
      review:
        "Fantastic, Wonderful, Significant, Magnificent, Outstanding, Class of titans. This is World project. How many people does Vietnam have?",
    },
    {
      id: 2,
      avatar: AVT2,
      name: "Tran Thanh",
      review:
        "Fantastic, Wonderful, Significant, Magnificent, Outstanding, Class of titans. This is World project. How many people does Vietnam have?",
    },
    {
      id: 3,
      avatar: AVT3,
      name: "Tran Thanh",
      review:
        "Fantastic, Wonderful, Significant, Magnificent, Outstanding, Class of titans. This is World project. How many people does Vietnam have?",
    },
    {
      id: 4,
      avatar: AVT4,
      name: "Tran Thanh",
      review:
        "Fantastic, Wonderful, Significant, Magnificent, Outstanding, Class of titans. This is World project. How many people does Vietnam have?",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
