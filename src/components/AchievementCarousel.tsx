import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Picture } from "@astrojs/image/components";
const AchievementList = [
  {
    title: "Fit Coding Challenge 2022",
    paragraph: `Because Fit never had young contestants, the Starship Shield team was almost banned from the tournament.  Despite the 6-year age difference our professional experience gave us the advantage. <br/> <br/> We completed the entire challenge in less than 1 hour. In the end, Eman Catic and Dzemal Dzanaonovic became the youngest Bosnian CTF winners.`,
    href: "/dem-product",
  },
  {
    title: "1# Regional Unija Challenge 2023",
    paragraph: `This marked Unija's debut with a cybersecurity team at their tournament. The Starship Shield faced the challenge of retesting the landing page after another security company patched it.   <br/> <br/>In the end, we bypassed their security and emerged as the competition winners.`,
    href: "/dem-product",
  },
  {
    title: "1# Nsoft CTF",
    paragraph: `After the victory in Mostar we gained reputation in the town. The Nsoft security team invited us to try their hard-CTF flags. Unfortunately because of a traffic-incident we came late 3 hours to the tournament. <br/> <br/> Again our  professional experience gave us the advantage and in the nick of time Eman Catic captured all of the flags.`,
    href: "/dem-product",
  },
];
export default function AchievemenCarousel() {
  return (
    <>
      {" "}
      <Swiper
        spaceBetween={30}
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
          <SwiperSlide key={idx} className="w-full h-auto rounded-md">
            <div className="w-full h-auto  grid grid-cols-1 md:grid-cols-2 rounded-md">
              <div className="bg-paper rounded-l-md h-full p-12 ">
                <div className="flex flex-col items-left gap-y-2 text-left">
                  <h1 className="h3">{item.title}</h1>
                  <p
                    className="my-4 p1"
                    dangerouslySetInnerHTML={{ __html: item.paragraph }}
                  ></p>
                  <a href={item.href} className="text-primary">
                    See more
                  </a>
                </div>
              </div>
              <div className="col-span-1 bg-black hidden md:block">
                <div className="h-full aspect-w-16 aspect-h-9">
                  <img
                    className="object-cover object-center w-full h-full"
                    src="images/android_blog1.png"
                    alt="Your Image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
