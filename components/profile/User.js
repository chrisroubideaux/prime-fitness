// users component
import Link from 'next/link';
import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Card({ users }) {
  return (
    <>
      <Link className="nav-link" href={`/users/${users._id}`}>
        <div className="card  ">
          <div className="card-body mx-4">
            <div className="card-footer mx-4 text-nowrap">
              <h6 className="mb-2 fs-xs fw-bold text-white mx-4">
                {users.fullName}
              </h6>

              <span className="d-inline-block ">
                <h6 className=" mb-1 fs-sm fw-bold mx-4 text-white">
                  <FaEnvelope className="card-icon mt-n1 me-2" />
                  {users.email}
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
        </div>
      </Link>
    </>
  );
}
