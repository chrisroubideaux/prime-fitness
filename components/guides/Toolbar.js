// toolbar component

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

function Toolbar({ guides }) {
  return (
    <ul className="nav list-inline hstack gap-4 flex-wrap justify-content-center mt-4 mt-3">
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold text-white">
          <FaEnvelope className="card-icon mt-n1 me-2 " />
          {guides.phone}
        </h6>
      </li>
      <li className="nav-item ms-1">
        <h6 className=" mb-2 fs-sm fw-bold text-white">
          <FaEnvelope className="card-icon mt-n1 me-2 " />
          {guides.email}
        </h6>
      </li>
      <li className="nav-item ms-1">
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaFacebookF className="card-icon mt-1 " />
        </h6>
      </li>
      <li className="nav-item ms-1">
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaLinkedin className="card-icon mt-1" />
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaInstagram className="card-icon mt-1" />
        </h6>
      </li>
    </ul>
  );
}

export default Toolbar;
