import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile5.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, pariatur sunt nostrum, repudiandae fugit vero facere laudantium reprehenderit ad, sint asperiores omnis! Libero accusamus beatae vero saepe ducimus laudantium laborum accusantium quaerat? Mollitia, ducimus!",
    },
    {
      img: profilePic2,
      review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, pariatur sunt nostrum, repudiandae fugit vero facere laudantium reprehenderit ad, sint asperiores omnis! Libero accusamus beatae vero saepe ducimus laudantium laborum accusantium quaerat? Mollitia, ducimus!",
    },
    {
      img: profilePic3,
      review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, pariatur sunt nostrum, repudiandae fugit vero facere laudantium reprehenderit ad, sint asperiores omnis! Libero accusamus beatae vero saepe ducimus laudantium laborum accusantium quaerat? Mollitia, ducimus!",
    },
    {
      img: profilePic4,
      review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, pariatur sunt nostrum, repudiandae fugit vero facere laudantium reprehenderit ad, sint asperiores omnis! Libero accusamus beatae vero saepe ducimus laudantium laborum accusantium quaerat? Mollitia, ducimus!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper

        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
