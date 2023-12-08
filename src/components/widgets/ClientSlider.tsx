import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Picture } from "@astrojs/image/components";
const picture_list = [
  {
    src: "/",
    alt: ``,
  },
  {
    src: "/",
    alt: ``,
  },
  {
    src: "/",
    alt: ``,
  },
  {
    src: "/",
    alt: ``,
  },
  {
    src: "/",
    alt: ``,
  },
];

export default function AchievemenCarousel() {
  return (
    <>
      {" "}
      <Swiper
        spaceBetween={50}
        direction={"horizontal"}
        speed={5000}
        loop={true}
        slidesPerView={3}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        modules={[Autoplay]}
        className="mySwiper border-y-2 py-4 border-paper border-12   relative"
        style={{ overflow: "hidden" }}
      >
        <div className="bg-gradient-to-r absolute h-full top-0 w-[20%] z-10 -right-px from-transparent to-80% to-white"></div>
        <div className="bg-gradient-to-r absolute h-full top-0 w-[20%] z-10 -left-px   from-20% from-white to-transparent"></div>
        {picture_list.map((item: any, idx: number) => (
          <SwiperSlide key={idx} className="w-full h-auto rounded-md">
            <div className="bg-paper w-40 py-4">novo nesto</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
