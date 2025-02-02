// trainers component
import Link from 'next/link';
import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Card({ trainers }) {
  return (
    <>
      <Link className="nav-link" href={`/trainers/${trainers._id}`}>
        <div className=" mx-5 ">
          <img
            src={trainers.profile}
            className="avatar rounded-circle  mt-2 mx-3 my-3 border-0"
            alt="..."
          />
        </div>
        <div className="m-4">
          <div className=" mx-4 text-nowrap">
            <h6 className="mb-2 fs-xs fw-bold mx-4">{trainers.name}</h6>
            <h6 className="mb-2 fs-xs text-uppercase mx-4">
              {trainers.instructor}
            </h6>
            <span className="d-inline-block ">
              <h6 className=" mb-1 fs-sm fw-bold mx-4">
                <FaEnvelope className="card-icon mt-n1 me-2" />
                {trainers.email}
              </h6>
              <h6 className=" mb-2 fs-sm fw-bold mx-4 text-white">
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
