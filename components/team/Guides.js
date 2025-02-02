// guides component
import Link from 'next/link';
import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Card({ guides }) {
  return (
    <>
      <Link className="nav-link" href={`/guides/${guides.id}`}>
        <div className=" mx-5 ">
          <img
            src={guides.profile}
            className="avatar rounded-circle  mt-2 mx-3 my-3 border-0"
            alt="..."
          />
        </div>
        <div className=" mx-4">
          <div className=" mx-4 text-nowrap">
            <h6 className="mb-2 fs-xs fw-bold mx-4">{guides.name}</h6>
            <h6 className="mb-2 fs-xs text-uppercase mx-4">{guides.guide}</h6>
            <span className="d-inline-block ">
              <h6 className=" mb-1 fs-sm fw-bold mx-4 ">
                <FaEnvelope className="card-icon mt-n1 me-2" />
                {guides.email}
              </h6>
              <h6 className=" mb-2 fs-sm fw-bold mx-4 ">
                <FaFacebookF className="card-icon mt-1 me-4" />
                <FaInstagram className="card-icon mt-1 me-4" />
                <FaTiktok className="card-icon mt-1 me-4" />
              </h6>
            </span>
            <span className="d-inline-block "></span>
          </div>
        </div>
      </Link>
    </>
  );
}
