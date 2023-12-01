/* eslint-disable @next/next/no-img-element */
// slider component
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

export default function Slider({ banners }) {
  return (
    <>
      <div className="">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper">
            <img
              src={banners.image1}
              className="slider img-fluid"
              loading="lazy"
              alt=""
            />
            <div className="container">
              {/* carousel-caption */}
              <div className="carousel-caption mb-5">
                <div className="row mt-auto justify-content-end z-index-9">
                  <div className="col-md-8 col-xl-6 col-xxl-4">
                    {/* card */}
                    <div className="cards p-3 p-md-5 m-2 m-lg-6 ">
                      <h3 className="">{banners.title}</h3>
                      <hr className="hr w-25 mx-auto" />
                      <div className="position-absolute mt-2">
                        <i className="social-icon fa-solid fa-quote-left fs-6"></i>
                      </div>
                      <div className="container p-3 p-sm-4">
                        <p className="p-2 text-white">{banners.description}</p>
                        {/* card-footer */}
                        <div className="card-footer mb-4 d-flex align-items-center justify-content-center text-nowrap">
                          <span className="d-inline-block me-1">
                            <h6 className="pt-3 text-white">Rating:</h6>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img
              src={banners.image2}
              className="slider img-fluid"
              loading="lazy"
              alt=""
            />
            <div className="container">
              {/* carousel-caption */}
              <div className="carousel-caption mb-5">
                <div className="row mt-auto justify-content-end z-index-9">
                  <div className="col-md-8 col-xl-6 col-xxl-4">
                    {/* card */}
                    <div className="cards p-3 p-md-5 m-2 m-lg-6 ">
                      <h3 className="">{banners.title1}</h3>
                      <hr className="hr w-25 mx-auto" />
                      <div className="position-absolute mt-2">
                        <i className="social-icon fa-solid fa-quote-left fs-6"></i>
                      </div>
                      <div className="container p-3 p-sm-4">
                        <p className="p-2">{banners.description1}</p>
                        {/* card-footer */}
                        <div className="card-footer mb-4 d-flex align-items-center justify-content-center text-nowrap">
                          <span className="d-inline-block me-1">
                            <h6 className="pt-3 text-white">Rating:</h6>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img
              src={banners.image3}
              className="slider img-fluid"
              loading="lazy"
              alt=""
            />
            <div className="container">
              {/* carousel-caption */}
              <div className="carousel-caption mb-5">
                <div className="row mt-auto justify-content-end z-index-9">
                  <div className="col-md-8 col-xl-6 col-xxl-4">
                    {/* card */}
                    <div className="cards p-3 p-md-5 m-2 m-lg-6 ">
                      <h3 className="">{banners.title3}</h3>
                      <hr className="hr w-25 mx-auto" />
                      <div className="position-absolute mt-2">
                        <i className="social-icon fa-solid fa-quote-left fs-6"></i>
                      </div>
                      <div className="container p-3 p-sm-4">
                        <p className="p-2">{banners.description3}</p>
                        {/* card-footer */}
                        <div className="card-footer mb-4 d-flex align-items-center justify-content-center text-nowrap">
                          <span className="d-inline-block me-1">
                            <h6 className="pt-3 text-white">Rating:</h6>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper">
            <img
              src={banners.image4}
              className="slider img-fluid"
              loading="lazy"
              alt=""
            />
            <div className="container">
              {/* carousel-caption */}
              <div className="carousel-caption mb-5">
                <div className="row mt-auto justify-content-end z-index-9">
                  <div className="col-md-8 col-xl-6 col-xxl-4">
                    {/* card */}
                    <div className="cards p-3 p-md-5 m-2 m-lg-6 ">
                      <h3 className="">{banners.title4}</h3>
                      <hr className="hr w-25 mx-auto" />
                      <div className="position-absolute mt-2">
                        <i className="social-icon fa-solid fa-quote-left fs-6"></i>
                      </div>
                      <div className="container p-3 p-sm-4">
                        <p className="p-2">{banners.description4}</p>
                        {/* card-footer */}
                        <div className="card-footer mb-4 d-flex align-items-center justify-content-center text-nowrap">
                          <span className="d-inline-block me-1">
                            <h6 className="pt-3 text-white">Rating:</h6>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                          <span className="d-inline-block me-1">
                            <i className="rating-icon fa-solid fa-star fs-6"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
