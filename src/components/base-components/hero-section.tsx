"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
//
import { Autoplay, EffectFade } from "swiper/modules";

export const HeroSection = () => {
  return (
    <Swiper
      centeredSlides={true}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      modules={[Autoplay, EffectFade]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop
      slidesPerView={1}
      className="w-full h-[390px] lg:h-[485px]"
    >
      <SwiperSlide>
        <Image
          src="/img6.jpg"
          alt="hero image"
          width={1000}
          height={600}
          className="w-full h-[390px] lg:h-[485px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img7.jpg"
          alt="hero image"
          width={1000}
          height={600}
          className="w-full h-[390px] lg:h-[485px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img1.jpg"
          alt="hero image"
          width={1000}
          height={600}
          className="w-full h-[390px] lg:h-[485px] object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};
