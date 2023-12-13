import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const AchievementList = [
  {
    title: "FIT Coding Challenge 2022",
    paragraph: `FIT never had under-18 contestants; Starship Shield team almost faced disqualification. With a 6-year age gap, our pro experience prevailed. <br>We aced the challenge in under 2 hours. <br><br>In summary, Eman Ćatić and Džemal Džananović are FIT Coding Challenge's youngest-ever winners.`,
    href: "/dem-product",
  },
  {
    title: "Unija Challenge 2023",
    paragraph: `This was the first introduction of cyber security categories at Unija Challenge. Starship Shield faced the challenge of retesting Unija's applications after a security assessment was done by another company. <br/> <br/>Ultimately, we've found security issues and emerged as the competition winners.`,
    href: "/dem-product",
  },
  {
    title: "Nsoft Nsecure Code CTF",
    paragraph: `Post-FIT victory, our reputation echoed in Mostar. Invited by Nsoft, we tackled their unique CTF challenges. <br> Despite a 3-hour delay from a traffic accident, our expertise shined through. <br><br>Eman Ćatić got access all flags just in time, securing another win.`,
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
            <section className="w-full h-auto  grid grid-cols-1 md:grid-cols-2 rounded-md">
              <section className="bg-paper rounded-l-md h-full p-12 ">
                <section className="flex flex-col items-left gap-y-2 text-left">
                  <h1 className="h3">{item.title}</h1>
                  <p
                    className="my-4 p2"
                    dangerouslySetInnerHTML={{ __html: item.paragraph }}
                  ></p>
                  <a href={item.href} className="text-primary p1">
                    See More
                  </a>
                </section>
              </section>
              <section className="col-span-1 bg-black hidden md:block">
                <section className="h-full aspect-w-16 aspect-h-9">
                  <img
                    className="object-cover object-center w-full h-full"
                    src="images/android_blog1.png"
                    alt="Picture of competition where Starship Shield competed"
                  />
                </section>
              </section>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
