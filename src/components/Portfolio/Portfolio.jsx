import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Chatbox from "../../img/chatbox.png";
import Responsive from "../../img/responsivewebsite.png";
import Covid from "../../img/covidworld.png";
import Spotifyclone from "../../img/spotifyclone.png";
import Onlinekhanaa from "../../img/onlinekhanaa.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Chatbox} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Responsive} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Spotifyclone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Covid} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Onlinekhanaa} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
