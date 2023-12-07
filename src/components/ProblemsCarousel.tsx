import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Picture } from "@astrojs/image/components";
const ProblemList = [
  {
    title: `How to secure your high-conversion site from cyber criminals?`,
    paragraph: ` As an SMB, give yourself peace of mind and stop worrying about
security. Webbouncer clones your website and hides sensitive user data making data theft on your site  impossible.
`,
    href: "/dem-product",
  },
  {
    title: `Do you want to fix all your Security Problems Ignored for Too Long?`,
    paragraph: `Security Launchpad helps you see security from a high-level perspective. We ensure that essential factors are secured first, and then we assist you in achieving security compliance.`,
    href: "/dem-product",
  },
  {
    title: `How to ensure speed and security in developing your software products?`,
    paragraph: `Software development companies often trade off Time to Market speed for quality security. Ptaas is a way to improve speed of manking and  the quality of your application security.`,
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
            <div className="col-span-1 bg-black hidden md:block">
              <div className="h-full aspect-w-16 aspect-h-9">
                <img
                  className="object-cover object-center w-full h-full"
                  src="images/android_blog1.png"
                  alt="Your Image"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
