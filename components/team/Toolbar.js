// Component: Toolbar component
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

function Iconbar({ guides }) {
  return (
    <ul className="nav list-inline hstack gap-4 flex-wrap justify-content-center mt-4 mt-3">
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-solid fa-envelope mt-n1 me-2"></i>
          <FaEnvelope className="card-icon mt-n1 me-2" />
          {guides.email}
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-brands fa-facebook mt-1 me-2"></i>
          <FaFacebookF className="card-icon mt-1 me-2" />
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fa-brands fa-linkedin mt-1 me-2"></i>
          <FaLinkedin className="card-icon mt-1 me-2" />
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <i className=" card-icon fab fa-instagram mt-1 me-2"></i>
          <FaInstagram className="card-icon mt-1 me-2" />
        </h6>
      </li>
    </ul>
  );
}

export default Iconbar;
