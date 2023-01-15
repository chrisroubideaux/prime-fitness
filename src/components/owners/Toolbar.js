import React from 'react';

function Iconbar({ owners }) {
  return (
    <ul className="nav list-inline hstack gap-4 flex-wrap justify-content-center mt-4 mt-3">
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-envelope mt-n1 me-2"></i>
          {owners.email}
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-brands fa-facebook mt-1 me-2"></i>
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-brands fa-linkedin mt-1 me-2"></i>
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fab fa-instagram mt-1 me-2"></i>
        </h6>
      </li>
    </ul>
  );
}

export default Iconbar;
