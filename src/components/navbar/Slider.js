// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

export default function Slider({ banners }) {
  return (
    <>
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
            src={banners.image1}
            className="cover img-fluid"
            loading="lazy"
            alt=""
          />
          <div className="container">
            <div className="carousel-caption mb-5">
              <h1>{banners.title}</h1>
              <p className="fw-bold">{banners.descrciption}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img
            src="https://images.pexels.com/photos/28061/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="cover img-fluid"
            loading="lazy"
            alt=""
          />
          <div className="container">
            <div className="carousel-caption mb-5">
              <h1>{banners.title1}</h1>
              <p className="fw-bold">{banners.descrciption1}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img
            src={banners.image3}
            className="cover img-fluid"
            loading="lazy"
            alt=""
          />
          <div className="container">
            <div className="carousel-caption mb-5">
              <h1>{banners.title2}</h1>
              <p className="fw-bold">{banners.descrciption2}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <img
            src={banners.image4}
            className="cover img-fluid"
            loading="lazy"
            alt=""
          />
          <div className="container">
            <div className="carousel-caption mb-5">
              <h1>{banners.title3}</h1>
              <p className="fw-bold">{banners.descrciption3}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
