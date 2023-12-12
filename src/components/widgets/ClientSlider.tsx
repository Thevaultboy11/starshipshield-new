import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Picture } from "@astrojs/image/components";
const picture_list = [
  {
    src: "images/client_logo/boostroom.png",
    alt: `Boostroom Logo`,
    href: "https://boostroom.com/",
  },
  {
    src: "images/client_logo/ooxlimited.png",
    alt: `OOX Limited Logo`,
    href: "https://www.ooxcit.com/",
  },
  {
    src: "images/client_logo/appit.png",
    alt: `App IT Logo`,
    href: "https://appit.ba/",
  },
  {
    src: "images/client_logo/hive.png",
    alt: `Hive Invoicing Logo`,
    href: "https://www.hive.ba/",
  },
  {
    src: "images/client_logo/unija.png",
    alt: `Unija Smart Accounting Logo`,
    href: "https://unija.com/",
  },
  {
    src: "images/client_logo/origin.png",
    alt: `Origin Logo`,
    href: "https://origin.ba/",
  },
  {
    src: "images/client_logo/doc.png",
    alt: `Doc.ba Logo`,
    href: "https://doc.ba/",
  },
  {
    src: "images/client_logo/webouncer.png",
    alt: `Web Bouncer Logo`,
    href: "https://kralos.eu/webouncer/",
  },
  {
    src: "images/client_logo/kralos.png",
    alt: `Kralos Logo`,
    href: "https://kralos.eu/",
  },
  {
    src: "images/client_logo/patrola.png",
    alt: `Patrola Logo`,
    href: "https://patrola.ba/",
  },
  {
    src: "images/client_logo/sklopiposao.png",
    alt: `Sklopi Posao Logo`,
    href: "https://sklopiposao.ba/",
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
        className="mySwiper border-y-2 py-4 border-paper border-12 relative my-10 h-10"
        style={{ overflow: "hidden" }}
      >
        <div className="bg-gradient-to-r absolute h-full top-0 w-[20%] z-10 -right-px from-transparent to-80% to-white"></div>
        <div className="bg-gradient-to-r absolute h-full top-0 w-[20%] z-10 -left-px   from-20% from-white to-transparent"></div>
        {picture_list.map((item: any, idx: number) => (
          <SwiperSlide key={idx} className="w-full rounded-md">
            <a href={item.href}>
              <div className="">
                <img src={item.src} sizes="" alt={item.alt} className="" />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
