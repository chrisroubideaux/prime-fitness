import React from 'react';

export default function testimonials() {
  return (
    <div className="container py-5 my-5 py-5">
      <div className="container">
        <h1 className=" py-4 text-white">
          See what people are saying about us
        </h1>
        <hr className="hr " />
      </div>

      <div className="container col-xxl-8 px-4 py-5 ">
        <div className="row flex-lg-row-reverse align-items-center g-5 my-5">
          <div className="col-10 col-sm-8 col-lg-6 mb-5">
            <img
              src="../images/testimonials/testimonial5.jpg"
              className=" img-fluid image"
              alt="img"
              width="500px"
              height="335px"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6 mb-5 ">
            <h2 className="fw-bold lh-5 ">Maria Lexington</h2>
            <h6 className=" text-white fw-bold ">Member since 2021</h6>
            <span className="mt-4 ">
              <i className="social-icons fa-solid fa-quote-left"></i>
            </span>

            <p className=" display-6  text-white fw-bold pb-5 mb-5 mt-2 lh-1 ">
              I joined prime fitness in 2019 and have never looked back. The
              staff is friendly supportive and they have perks and memprships
              for everyone reguardless of your budget.
              <i className="social-icons fa-solid fa-quote-right m-2"></i>
            </p>
          </div>
        </div>
      </div>
      <hr className="hr " />
      <div className="container col-xxl-8 px-4 py-5 ">
        <div className="row flex-lg-row-reverse align-items-center g-5 my-5">
          <div className="col-10 col-sm-8 col-lg-6 mb-5">
            <img
              src="../images/testimonials/testimonial6.jpg"
              className=" img-fluid image"
              alt="img"
              width="500px"
              height="335px"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6 mb-5 ">
            <h2 className=" fw-bold ">Matt Skykes</h2>
            <h6 className=" text-white fw-bold ">Member since 2020</h6>
            <span className="mt-4">
              <i className="social-icons fa-solid fa-quote-left"></i>
            </span>

            <p className=" display-6  text-white fw-bold pb-5 mb-5 mt-2 lh-1 ">
              I joined prime fitness in 2019 and have never looked back. The
              staff is friendly supportive and they have perks and memprships
              for everyone reguardless of your budget.
              <i className="social-icons fa-solid fa-quote-right m-2"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
