// owners component
import Link from 'next/link';
import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Card({ owners }) {
  return (
    <>
      <Link className="nav-link" href={`/owners/${owners._id}`}>
        <div
          className="d-flex gap-2 justify-content-between m-5"
          style={{ maxWidth: '540px' }}
        >
          <div className="row g-0">
            <div className="col-sm-4">
              <img
                src={owners.photo}
                className="avatar rounded-circle m-auto mt-2 mx-3 my-3 border-0"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body mt-4 m-4">
                <h6 className="mb-2 fs-lg text-uppercase fw-bold text-white">
                  {owners.name}
                </h6>
                <h6 className="mb-2 fs-xs text-uppercase">{owners.title}</h6>
                <span className="d-inline-block">
                  <h6 className=" mb-1 fs-sm fw-bold text-white">
                    <FaEnvelope className="card-icon mt-n1 me-2" />
                    {owners.email}
                  </h6>
                </span>
                <div
                  className="card-footer d-flex text-nowrap m-auto"
                  style={{ maxWidth: '55rem' }}
                >
                  <span className="d-inline-block me-3">
                    <h6 className=" mb-2 fs-sm fw-bold text-white">
                      <FaFacebookF className="card-icon mt-1 me-3" />
                      <FaInstagram className="card-icon mt-1 me-3" />
                      <FaTiktok className="card-icon mt-1 me-3" />
                    </h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
