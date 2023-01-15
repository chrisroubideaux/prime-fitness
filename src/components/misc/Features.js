import React from 'react';
import { Parallax } from 'react-scroll-parallax';

export default function Features() {
  return (
    <Parallax>
      <div className="container py-5 my-3">
        <div className="container col-xxl-8 px-4 py-5 my-5">
          <div className="container-fluid text-center">
            <img className="icon " src="../images/icons/icon1.png" alt="" />
          </div>
          <div className="row flex-lg-row-reverse align-items-center g-5 my-5">
            <div className="col-10 col-sm-8 col-lg-6 mb-5">
              <img
                src="../images/banner/banner6.jpg"
                className="d-block mx-lg-auto img-fluid image"
                alt="img"
                width="600"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 ">
              <h2 className="display-6 fw-bold lh-5">
                Where we help you achieve your fitness goals
              </h2>
              <p className=" lead text-white fw-bold py-3 lh-3">
                Here at prime fitness we have a wide variety of classes and
                Memberships to fit the schedule of everyday life. Stop in today
                and see why we were voted number one fitness center in the city
                and get your 7 day free trial today.
              </p>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            </div>
          </div>
          <hr className="hr mt-5 " />
          <div className="container-fluid text-center">
            <img className="icon " src="../images/icons/icon2.png" alt="" />
          </div>
          <div className="row flex-lg-row-reverse align-items-center g-5 my-3">
            <div className="col-10 col-sm-8 col-lg-6">
              <h2 className="display-6 fw-bold lh-5 mb-4">
                Where we help you achieve your fitness goals
              </h2>
              <span className="pb-5">
                <p className="lead  text-white fw-bold">
                  Here at prime fitness we have a wide variety of classes and
                  Memberships to fit the schedule of everyday life. Stop in
                  today and see why we were voted number one fitness center in
                  the city and get your 7 day free trial.
                </p>
              </span>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            </div>
            <div className="col-lg-6 ">
              <img
                src="../images/banner.jpg"
                className="d-block mx-lg-auto img-fluid image"
                alt="img"
                width="600"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
