import { Link } from 'react-router-dom';
import '../../styles/card.css';

export default function Card({ owners }) {
  return (
    <>
      <Link className="nav-link" to={`/owners/${owners.id}`}>
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
                  <h6 className=" mb-1 fs-sm fw-bold">
                    <i className="card-icon fa-solid fa-envelope mt-n1 me-2 "></i>
                    {owners.email}
                  </h6>
                </span>
                <div
                  className="card-footer d-flex text-nowrap m-auto"
                  style={{ maxWidth: '55rem' }}
                >
                  <span className="d-inline-block me-3">
                    <h6 className=" mb-2 fs-sm fw-bold">
                      <i className=" card-icon fa-brands fa-facebook mt-1 me-3"></i>
                      <i className=" card-icon fab fa-instagram mt-1 me-3"></i>
                      <i className=" card-icon fa-brands fa-tiktok mt-1 me-3"></i>
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
