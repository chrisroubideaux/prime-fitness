import React from 'react';
import { Link } from 'react-router-dom';

function Iconbar() {
  return (
    <ul className="nav list-inline hstack gap-4 flex-wrap justify-content-center mt-4 mt-3">
      <li className="nav-item ms-2">
        <h6 className="mb-2 fs-sm fw-bold fs-5">
          <i className="card-icon fa-solid fa-thumbs-up me-2 fs-5"></i>
          Hightest rated gym
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" fw-bold mb-2 fs-5">
          <i className="card-icon fa-solid fa-hourglass-start me-2 fs-5"></i>
          Flexiablity
        </h6>
      </li>

      <li className="nav-item ms-2">
        <h6 className=" fw-bold mb-2 fs-5">
          <i className="card-icon fa-solid fa-users me-2 fs-5"></i>
          Best Community
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" fw-bold mb-2 fs-5">
          <i className="card-icon fa-solid fa-ranking-star me-2 fs-5"></i>
          Beginner to Pro
        </h6>
      </li>
      <li className="nav-item ms-2 mb-2">
        <Link className="" to="/">
          <i className="card-icon fa-solid fa-calendar-days me-2 fs-5"></i>
          Book a Tour
        </Link>
      </li>
    </ul>
  );
}

export default Iconbar;
