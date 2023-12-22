import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const testimonial_text = [
  {
    title: "App IT - Web Application Assessment",
    text: `Starship Shield found many vulnerabilities in our software that could enable hackers to steal customer data. Thanks to them, such incidents never happened and our software is now bulletproof.`,
    person: "Faruk Bavčić",
    img_url: "/images/client-profile/profile1.png",
    url: "/story-type/client-stories/app-it",
  },

  {
    title: "Boostroom - Web Application Assessment",
    text: `Starship Shield helped us secure our gaming marketplace by finding many vulnerabilities & issues, then helping us patch them in time. Thanks to them, our customers are safe and their data is protected.`,
    person: "Alen Vlahovljak",
    img_url: "/images/client-profile/profile2.png",
    url: "/story-type/client-stories/boostroom",
  },
  {
    title: "SklopiPosao - Web Application Assessment",
    text: `We gave Starship Shield a chance at testing our application. They managed to find critical vulnerabilities leaving our customers at the mercy of hackers. Thanks to Starship Shield, we can now rest easy knowing our security is top-notch.`,
    person: "Ernad Bećirović",
    img_url: "/images/client-profile/profile3.png",
    url: "/story-type/client-stories/sklopi-posao",
  },
  {
    title: "Origin - Web Application Assessment",
    text: `Despite their youth, Starship Shield team was exceptionally professional and time efficient. Their dedication surprised us. At the end we've received high-quality security solutions and helped us implement them in our new application Patrola.ba.`,
    person: "Nermin Ćatović",
    img_url: "/images/client-profile/profile4.png",
    url: "/story-type/client-stories/origin",
  },
];

export default function CtaCarousel() {
  return (
    <>
      <Swiper
        className="rounded-md"
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
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
                  <h1 className="h3 mt-12">{title}</h1>
                  <div className="w-full lg:w-5/6 my-8 p2">{text}</div>
                  <div className="flex items-center gap-x-4 w-full lg:w-5/6">
                    <p className="text-primary font-bold mr-auto p2">
                      {person}
                    </p>
                    <a
                      className="btn-sm hover:text-primary p2 inline-flex items-center justify-center hover:underline"
                      href={url}
                      target="_self"
                      rel="noopener"
                    >
                      Read More
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
