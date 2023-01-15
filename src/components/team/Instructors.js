import { Link } from 'react-router-dom';
import '../../styles/card.css';

export default function Card({ sessions }) {
  return (
    <>
      <Link className="nav-link" to={`/sessions/${sessions.id}`}>
        <div className="card mx-5" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-sm-4">
              <img
                src={sessions.profile}
                className="avatar rounded-circle  mt-2 mx-3 my-1 border-0"
                alt="..."
              />
            </div>

            <div className="card-body ">
              <div className="card-footer text-nowrap  ">
                <h6 className="mb-2 fs-xs fw-bold text-white">
                  {sessions.name}
                </h6>
                <h6 className="mb-2 fs-xs text-uppercase">
                  {sessions.instructor}
                </h6>
                <span className="d-inline-block ">
                  <h6 className=" mb-1 fs-sm fw-bold">
                    <i className="card-icon fa-solid fa-envelope mt-n1 me-2"></i>
                    {sessions.email}
                  </h6>
                  <h6 className=" mb-2 fs-sm fw-bold">
                    <i className=" card-icon fa-brands fa-facebook mt-1 me-4"></i>
                    <i className=" card-icon fab fa-instagram mt-1 me-4"></i>
                    <i className=" card-icon fa-brands fa-tiktok mt-1 me-4"></i>
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
