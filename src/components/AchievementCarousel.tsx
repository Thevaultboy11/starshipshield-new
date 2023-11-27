import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Picture } from "@astrojs/image/components";
const AchievementList = [
  {
    title: "How to secure your high-conversion site from cyber criminals?",
    paragraph: ` As an SMB, give yourself peace of mind and stop worrying about
security. Webouncer clones your website and only exposes the
secure clone to hackers.`,
    href: "/dem-product",
  },
  {
    title: "Securing the #10 paper at Unija",
    paragraph: ` As an SMB, give yourself peace of mind and stop worrying about
security. Webouncer clones your website and only exposes the
secure clone to hackers.`,
    href: "/dem-product",
  },
];
export default function AchievemenCarousel() {
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
        {AchievementList.map((item: any, idx: number) => (
          <SwiperSlide key={idx} className="w-full h-auto ">
            <div className="w-full h-auto  grid grid-cols-2 rounded-md">
              <img className="col-span-1" src="images/android_blog1.png" />

              <div className="bg-paper rounded-l-md h-full p-12 ">
                <div className="flex flex-col items-left gap-y-2 text-left">
                  <h1 className="h3">{item.title}</h1>
                  <p className="my-8 p1">{item.paragraph}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
