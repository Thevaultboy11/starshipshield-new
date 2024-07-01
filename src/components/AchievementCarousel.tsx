import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const AchievementList = [
  {
    title: "Unija Challenge 2023",
    paragraph: `This was the first introduction of cyber security categories at Unija Challenge. Omni Security faced the challenge of retesting Unija's applications after a security assessment was done by another company. <br/> <br/>Ultimately, we've found security issues and emerged as the competition winners.`,
    href: "https://www.linkedin.com/posts/secure-startups_unijachallenge-unijachallenge2023-activity-7137371743525986304-BO0J?utm_source=share&utm_medium=member_desktop", // replace with the actual URL
    src: "/images/about/competition2.png",
  },
  {
    title: "Nsoft Nsecure Code CTF",
    paragraph: `Post-FIT victory, our reputation echoed in Mostar. Invited by Nsoft, we tackled their unique CTF challenges. <br> Despite a 3-hour delay from a traffic accident, our expertise shined through. <br><br>Eman Ćatić got access all flags just in time, securing another win.`,
    href: "https://www.linkedin.com/posts/eman-catic_it-was-a-great-pleasure-competing-at-this-activity-7133475552698523648-6WSX/?utm_source=share&utm_medium=member_desktop",
    src: "/images/about/competitionnn3.png",
  },
  {
    title: "FIT Coding Challenge 2022",
    paragraph: `FIT never had under-18 contestants; Omni Security team almost faced disqualification. With a 6-year age gap, our pro experience prevailed. <br>We aced the challenge in under 2 hours. <br><br>In summary, Eman Ćatić and Džemal Džananović are FIT Coding Challenge's youngest-ever winners.`,
    href: "https://www.linkedin.com/posts/secure-startups_fitcodingchallenge-goodcompany-goodjob-activity-7070492879281864705-zH0r?utm_source=share&utm_medium=member_desktop", // replace with the actual URL
    src: "/images/about/competition1.png",
  },
];

export default function AchievemenCarousel() {
  return (
    <>
      {" "}
      <Swiper
        spaceBetween={100}
        direction={"horizontal"}
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
                  <a
                    href={item.href}
                    className="text-primary hover:underline  cursor-pointer p2"
                  >
                    See More
                  </a>
                </section>
              </section>
              <section className="col-span-1 bg-black hidden md:block">
                <section className="h-96 aspect-w-16 aspect-h-9">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={item.src}
                    alt="Picture of competition where Omni Security competed"
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
