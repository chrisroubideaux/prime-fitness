// promos component

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

export default function Promos({ promos }) {
  return (
    <>
      <div className="container col-lg-10 m-auto">
        <h1 className="text-center text-white mt-3 display-4">
          New Year deals
        </h1>
        <p className="text-white text-center lead">
          Here at prime we beleive in flexiablity for every one see below which
          membership fits your need. Sign up for one of our daily tours and see
          why we were voted the number one fitness club in the area.
        </p>
      </div>

      <div className="container">
        <Swiper
          spaceBetween={16}
          centeredSlides={true}
          pagination={{
            type: 'fraction',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // import required modules  navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className=" mySwiper swiper-nav-onhover"
        >
          <SwiperSlide className="swiper">
            <img
              src={promos.image1}
              className="slider img-fluid"
              loading="lazy"
              alt=""
            />
            <div className="container">
              <div className="carousel-caption mb-5"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img
              src={promos.image2}
              className="slider img-fluid"
              loading="lazy"
              alt=""
            />
            <div className="container">
              <div className="carousel-caption mb-5"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img
              src={promos.image3}
              className="slider img-fluid"
              loading="lazy"
              alt=""
            />
            <div className="container">
              <div className="carousel-caption mb-5"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img
              src={promos.image4}
              className="slider img-fluid"
              loading="lazy"
              alt=""
            />
            <div className="container">
              <div className="carousel-caption mb-5"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
