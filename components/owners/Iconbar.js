// iconbar component

import { FaBriefcase, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

export default function Iconbar({ owners }) {
  return (
    <ul className="nav list-unstyled d-flex py-2 overflow-hidden pt-2">
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-normal">
          <i className="card-icon fa-solid fa-mobile-screen mt-n1 me-2"></i>
          <FaMobileAlt className="card-icon mt-n1 me-2" />
          {owners.phone}
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-normal ">
          <i className=" card-icon fa-solid fa-envelope mt-n1 me-2"></i>
          <FaEnvelope className="card-icon mt-n1 me-2" />
          {owners.email}
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-normal ">
          <i className=" card-icon fa-solid fa-briefcase mt-n1 me-2"></i>
          <FaBriefcase className="card-icon mt-n1 me-2" />
          {owners.experience}
        </h6>
      </li>
    </ul>
  );
}
