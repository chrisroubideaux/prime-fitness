import React from 'react';

function Toolbar({ sessions }) {
  return (
    <ul className="nav list-unstyled d-flex py-2 overflow-hidden mt-3">
      <li className="nav-item ms-3">
        <h6 className="mb-2 fs-sm fw-bold">
          <i className="card-icon fa-solid fa-dumbbell mt-n1 me-2 "></i>
          {sessions.instructor}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-calendar-days me-2"></i>
          {sessions.days}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-hourglass-start me-2"></i>
          {sessions.time}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-users me-2"></i>
          {sessions.group}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-ranking-star me-2"></i>
          {sessions.level}
        </h6>
      </li>

      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-user-group me-2"></i>
          {sessions.memberships}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-laptop me-2"></i>
          {sessions.virtualSession}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-message me-2"></i>
          {sessions.chat}
        </h6>
      </li>
    </ul>
  );
}

export default Toolbar;
