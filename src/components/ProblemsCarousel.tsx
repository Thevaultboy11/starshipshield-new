import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const ProblemList = [
  {
    title: `Can't secure you e-commerce business from cyber attacks and hackers?`,
    paragraph: `As a small or medium-sized business, secure your peace of mind by eliminating security concerns. Webouncer replicates your website and conceals sensitive user data, rendering data theft from your site an impossibility.`,
    href: "/products/web-bouncer",
    src: "/images/products/webouncer/hero.svg",
  },
  {
    title: `Your security has been neglected for too long and don't know where to start?`,
    paragraph: `Security Launchpad helps you kick-start your software security no matter how long it has been neglected. We ensure that essential factors are secured and then we help you achieve security compliance.`,
    href: "/products/security-launchpad",
    src: "/images/products/security-launchpad/hero.svg",
  },
  {
    title: `Don't know how to ensure security & speed in software development?`,
    paragraph: `Software development companies often trade off 'Time to Market' speed for better security. PtaaS is a way to improve the quality of your application security whilst saving time and money.`,
    href: "/products/ptaas",
    src: "/images/products/ptaas/hero.svg",
  },
];

export default function ProblemCarousel() {
  return (
    <>
      {" "}
      <Swiper
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        loop={true}
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
          <SwiperSlide key={idx} className="w-full h-auto rounded-md">
            <div className="h-full w-full paper grid grid-cols-12">
              <div className=" flex flex-col justify-center items-center col-span-12 md:col-span-6 rounded-l-md h-full p-8">
                <div className="h-full  items-left gap-y-2 text-left">
                  <h1 className="h3">{item.title}</h1>
                  <p className="p2  my-4">{item.paragraph}</p>
                  <div className="mt-8">
                    <a className="btn-primary btn-md" href={item.href}>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-6 aspect-w-3 aspect-h-3  hidden md:block">
                <div className="h-80 w-full">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={item.src}
                    alt="Image describing security problems"
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
