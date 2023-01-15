import React from 'react';

function Toolbar({ trainers }) {
  return (
    <ul className="nav list-unstyled d-flex py-2 overflow-hidden mt-3">
      <li className="nav-item ms-3">
        <h6 className="mb-2 fs-sm fw-bold">
          <i className="card-icon fa-solid fa-dumbbell mt-n1 me-2 "></i>
          {trainers.instructor}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-calendar-days me-2"></i>
          {trainers.days}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-hourglass-start me-2"></i>
          {trainers.time}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-users me-2"></i>
          {trainers.group}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-ranking-star me-2"></i>
          {trainers.level}
        </h6>
      </li>

      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-user-group me-2"></i>
          {trainers.memberships}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-laptop me-2"></i>
          {trainers.virtualSession}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-apple-whole me-2"></i>
          {trainers.nutrition}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-message me-2"></i>
          {trainers.chat}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-thumbs-up me-2"></i>
          {trainers.rating}
        </h6>
      </li>
    </ul>
  );
}

export default Toolbar;
