// instructors component
import Link from 'next/link';
import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
export default function Card({ sessions }) {
  return (
    <>
      <Link className="nav-link" href={`/sessions/${sessions._id}`}>
        <div className=" mx-5" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-sm-4">
              <img
                src={sessions.profile}
                className="avatar rounded-circle  mt-2 mx-3 my-1 border-0"
                alt="..."
              />
            </div>

            <div className=" m-4 ">
              <div className=" text-nowrap  ">
                <h6 className="mb-2 fs-xs fw-bold ">{sessions.name}</h6>
                <h6 className="mb-2 fs-xs text-uppercase">
                  {sessions.instructor}
                </h6>
                <span className="d-inline-block ">
                  <h6 className=" mb-1 fs-sm fw-bold">
                    <FaEnvelope className="card-icon mt-n1 me-2" />
                    {sessions.email}
                  </h6>
                  <h6 className=" mb-2 fs-sm fw-bold">
                    <FaFacebookF className="card-icon mt-1 me-4" />
                    <FaInstagram className="card-icon mt-1 me-4" />
                    <FaTiktok className="card-icon mt-1 me-4" />
                  </h6>
                </span>
                <span className="d-inline-block "></span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
