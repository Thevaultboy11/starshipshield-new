import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Icon from "astro-icon";
import { Picture } from "@astrojs/image/components";
const testimonial_text = [
  {
    title: "Lorem ipsum dolor sit amet.",
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Doloribus, animi quibusdam dolor repudiandae aperiam modi nisi.
Quos labore eaque, in impedit officia, consequuntur iusto illo
odit, facere expedita doloremque sed.`,
    person: "Faruk Bavcic",
    img_url: "/images/android_blog.png",
    url: "/cta",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Doloribus, animi quibusdam dolor repudiandae aperiam modi nisi.
Quos labore eaque, in impedit officia, consequuntur iusto illo
odit, facere expedita doloremque sed.`,
    person: "Faruk Bavcic",
    img_url: "/images/android_blog.png",
    url: "/cta",
  },
];
export default function CtaCarousel() {
  return (
    <>
      <Swiper
        className="rounded-md"
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          nextEl: ".cta-swiper-button-next",
          prevEl: ".cta-swiper-button-prev",
        }}
      >
        {testimonial_text.map(({ title, text, person, url, img_url }: any) => (
          <>
            <SwiperSlide>
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-5 gap-x-8 paper rounded-md p-8">
                <img
                  src={img_url}
                  className="block w-full h-full object-cover rounded-3xl col-span-1 md:col-span-2 aspect-w-4 aspect-h-5"
                  alt="Android Blog"
                />
                <div className="col-span-1 md:col-span-3 text-left flex flex-col  p-4">
                  <blockquote></blockquote>
                  <h1 className="h3 mt-20">{title}</h1>
                  <div className="w-full lg:w-5/6 my-8 p2">{text}</div>
                  <div className="flex items-center gap-x-4 w-full lg:w-5/6">
                    <p className="text-primary font-bold mr-auto p2">
                      {person}
                    </p>
                    <a
                      className="btn-sm hover:text-primary p2 inline-flex items-center justify-center "
                      href={url}
                      target="_blank"
                      rel="noopener"
                    >
                      Learn more
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
        <div className="absolute inset-y-0 left-0 z-10 flex items-center">
          <button className="cta-swiper-button-prev arrow text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 12H5"></path>
              <path d="M12 19l-7-7 7-7"></path>
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-10 flex items-center">
          <button className="cta-swiper-button-next arrow text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </Swiper>
    </>
  );
}
