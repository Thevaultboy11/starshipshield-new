import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Picture } from "@astrojs/image/components";
const ProblemList = [
  {
    title: "How to secure your high-conversion site from cyber criminals?",
    paragraph: ` As an SMB, give yourself peace of mind and stop worrying about
security. Webouncer clones your website and only exposes the
secure clone to hackers.`,
    href: "/dem-product",
  },
  {
    title: "How to secure your high-conversion site from cyber criminals?",
    paragraph: ` As an SMB, give yourself peace of mind and stop worrying about
security. Webouncer clones your website and only exposes the
secure clone to hackers.`,
    href: "/dem-product",
  },
];
export default function ProblemCarousel() {
  return (
    <>
      {" "}
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{ overflow: "hidden", height: "400px" }}
      >
        {ProblemList.map((item: any, idx: number) => (
          <SwiperSlide
            key={idx}
            className="w-full h-96 grid grid-cols-2 rouunded-md"
          >
            <div className="bg-paper rounded-l-md h-full px-8 py-24 flex flex-col justify-center items-center">
              <div className="flex flex-col items-left gap-y-2 text-left">
                <h1 className="h3">{item.title}</h1>
                <p className="my-8 p1">{item.paragraph}</p>
                <div className="">
                  <a className="btn-primary btn-md" href={item.href}>
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img className="w-full " src="images/android_blog1.png" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
