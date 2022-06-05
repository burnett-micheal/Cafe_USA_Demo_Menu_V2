import { useState } from "react";
import "../../../Styles/phone.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import menuData from "../../../Data/menuData";

function Phone() {
  return (
    <div className="phone-display noTextSelect">
      <div className="banner" alt="..">
        <div className="centerX centerY" style={{ height: "inherit" }}>
          <div className="title">Cafe USA</div>
        </div>
      </div>
      <div className="header-description">
        We're proud to offer a 15% discount to Military and First Responders
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        style={{ paddingTop: "4vw", paddingBottom: "4vw" }}
        autoHeight
        loop
        touchRatio={1}
      >
        {menuData.categories.map((category, activeIndex) => (
          <SwiperSlide
            key={activeIndex}
          >
            <div style={{ textAlign: "center", fontSize: "11vw", paddingBottom: "3vw" }}>{category.name}</div>
            <div className="cat-description">
              {category.description}
            </div>
            <div>
              {
                category.items.map(
                  (itemData, index) => (
                    <div key={index} className={`item container`}>
                      <div className="item name">{itemData.name}</div>
                      <div className="item description">{itemData.description}</div>
                      <div className="item price">{itemData.price}</div>
                    </div>
                  )
                )
              }
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="footer-description">
        Swipe for more options
      </div>
    </div >
  );
}

export default Phone;