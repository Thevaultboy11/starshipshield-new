import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const testimonials = [
  {
    title: "Great Service!",
    paragraph:
      "I was extremely satisfied with the quality of their service. They exceeded my expectations in every way.",
    href: "https://www.example.com/testimonial1",
  },
  {
    title: "Excellent Work",
    paragraph:
      "The team did an outstanding job. I would highly recommend their services to anyone looking for top-notch results.",
    href: "https://www.example.com/testimonial2",
  },
  {
    title: "Highly Recommend",
    paragraph:
      "I couldn't be happier with the results. Their professionalism and attention to detail made a huge difference for my project.",
    href: "https://www.example.com/testimonial3",
  },
];
export default function CompaniesCarousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className=" max-w-5xl bg-paper mt-8 rounded-xl p-8 ">
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          centeredSlides={true}
          autoplay={{
            delay: 250,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide className="py-20">Content 1</SwiperSlide>
          <SwiperSlide className="py-20">Content 2</SwiperSlide>
          <SwiperSlide className="py-20">Content 3</SwiperSlide>
          <SwiperSlide className="py-20">Content 2</SwiperSlide>
          <SwiperSlide className="py-20">Content 3</SwiperSlide>
          <SwiperSlide className="py-20">Content 2</SwiperSlide>
          <SwiperSlide className="py-20">Content 3</SwiperSlide>

          <div className="autoplay-progress " slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}
