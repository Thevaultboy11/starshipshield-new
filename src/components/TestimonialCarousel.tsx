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
export default function App() {
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
          spaceBetween={60}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="gap-x-8 p-8 gap-y-8 grid grid-cols-12 grid-row-2 bg-paper">
                <div className="col-span-5 row-span-2 bg-purple-400 p-4"></div>
                <div className="row-span-1 col-span-7 px-4">
                  <blockquote></blockquote>
                  <h1 className="text-2xl text-left">{testimonial.title}</h1>
                </div>
                <div className="relative row-span-1 col-span-7 p-4">
                  <p className="text-xl text-left mb-8">
                    {testimonial.paragraph}
                  </p>
                  <a
                    href={testimonial.href}
                    className="absolute bottom-4 left-4 text-primary text-left font-bold"
                  >
                    View more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
