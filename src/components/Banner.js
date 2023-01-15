import React from 'react';

export default function Banner() {
  return (
    <div className="swiper">
      <img
        src="../images/banner/banner13.jpg"
        className="session img-fluid"
        loading="lazy"
        alt=""
      />
      <div className="container-fluid">
        <div className="carousel-caption">
          <h1 className="text-shadow-3">Voted the best fitness club in town</h1>
          <p className="fw-bold text-shadow-3">
            Why wait till new year to meet the new you!
          </p>
        </div>
      </div>
    </div>
  );
}
