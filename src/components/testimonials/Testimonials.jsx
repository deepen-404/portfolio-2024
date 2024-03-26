import "./Testimonials.css";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import Avatar3 from "../../assets/avatar3.jpg";
import Avatar4 from "../../assets/avatar4.jpg";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
const Testimonials = () => {
  const data = [
    {
      avatar: Avatar1,
      name: "Tina Shaw",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?",
    },
    {
      avatar: Avatar2,
      name: "Shatta Wale",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?",
    },
    {
      avatar: Avatar3,
      name: "Kwame Despite",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?",
    },
    {
      avatar: Avatar4,
      name: "Nana Ama McBrown",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?",
    },
  ];

  return (
    <section id={"testimonials"}>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className={"container testimonials__container"}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={true}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className={"testimonial"}>
              <div className={"client__avatar"}>
                <img src={avatar} alt={"Client Image"} />
              </div>
              <h5 className={"client__name"}>{name}</h5>
              <small className={"client__review"}>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
