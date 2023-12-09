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
    paragraph: `Software development companies often trade off Time to Market speed for quality security. PtaaS is a way to improve speed of manking and  the quality of your application security.`,
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
        spaceBetween={200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded-md"
        style={{ overflow: "hidden", height: "400px" }}
      >
        {ProblemList.map((item: any, idx: number) => (
          <SwiperSlide key={idx} className="w-full h-96">
            <div className="h-full w-full grid grid-cols-12">
              <div className="paper col-span-12 md:col-span-8 rounded-l-md h-full p-8">
                <div className="h-full  items-left gap-y-2 text-left">
                  <h1 className="h3">{item.title}</h1>
                  <p className="p2 my-4">{item.paragraph}</p>
                  <div className="mt-8">
                    <a className="btn-primary btn-md" href={item.href}>
                      See inside
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-4   hidden md:block">
                <div className="h-full w-full  ">
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