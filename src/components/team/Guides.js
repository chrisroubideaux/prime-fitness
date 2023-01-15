import { Link } from 'react-router-dom';
import '../../styles/card.css';

export default function Card({ guides }) {
  return (
    <>
      <Link className="nav-link" to={`/guides/${guides.id}`}>
        <div className="card mx-5 ">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={guides.photo}
                className="avatar rounded-circle mt-1 mx-5  border-0"
                alt="..."
              />
            </div>
            <div className="card-body  mx-5">
              <h6 className="mb-1 fs-xs fw-bold text-white">{guides.guide}</h6>
              <h6 className="mb-1 fs-xs text-uppercase ">{guides.title}</h6>
              <span className="d-inline-block ">
                <h6 className=" mb-1 fs-sm fw-bold  ">
                  <i className="card-icon fa-solid fa-envelope mt-n1 me-2"></i>
                  {guides.email}
                </h6>
              </span>
              <span className="d-inline-block ">
                <h6 className=" fs-sm fw-bold">
                  <i className=" card-icon fa-brands fa-facebook mt-1 me-4"></i>
                  <i className=" card-icon fab fa-instagram mt-1 me-4"></i>
                  <i className=" card-icon fa-brands fa-tiktok mt-1 me-4"></i>
                </h6>
              </span>
            </div>
            <div className="card-footer text-nowrap mx-5"></div>
          </div>
        </div>
      </Link>
    </>
  );
}
