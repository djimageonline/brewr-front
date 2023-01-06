import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ImageSlider.css";
import { Autoplay, Pagination, Navigation } from "swiper";

export function ImageSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/beercans.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/beerbottles.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/beerflight.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/brewtanks.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/craft.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/barrels.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/beerglass.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/hops.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/flighttwo.jpg"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
