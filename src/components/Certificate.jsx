import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Certificate() {
  return (
    <div id="certificate" className="bg-base-100 py-10 relative">
      <h1 className="text-center text-4xl font-semibold">Certificate</h1>
      <p className="text-center text-lg mt-5">
        Saya senang berkomunitas dan ikut mengikuti beberapa event yang saya
        ikuti, Berikut beberapa certificate yang saya dapat dari beberapa event
        yang saya ikuti:
      </p>
      <Swiper
        className="my-10 p-5"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className="border-4 border-accent"
            src="./sertifikat/html_css.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="border-4 border-accent"
            src="./sertifikat/javascript.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/php.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/cli.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/git.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="border-4 border-accent"
            src="./sertifikat/sertifikat workshop flexbox.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/sql.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="border-4 border-accent"
            src="./sertifikat/Webinar Flutter.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="border-4 border-accent" src="./sertifikat/8.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
