import { Link } from 'react-router-dom';
import '../../styles/card.css';

export default function Card({ trainers }) {
  return (
    <>
      <Link className="nav-link" to={`/trainers/${trainers.id}`}>
        <div className="card mx-5 ">
          <img
            src={trainers.profile}
            className="avatar rounded-circle  mt-2 mx-3 my-3 border-0"
            alt="..."
          />
        </div>

        <div className="card-body mx-4">
          <div className="card-footer mx-4 text-nowrap">
            <h6 className="mb-2 fs-xs fw-bold text-white mx-4">
              {trainers.name}
            </h6>

            <h6 className="mb-2 fs-xs text-uppercase mx-4">
              {trainers.instructor}
            </h6>

            <span className="d-inline-block ">
              <h6 className=" mb-1 fs-sm fw-bold mx-4">
                <i className="card-icon fa-solid fa-envelope mt-n1 me-2"></i>
                {trainers.email}
              </h6>

              <h6 className=" mb-2 fs-sm fw-bold mx-4">
                <i className=" card-icon fa-brands fa-facebook mt-1 me-4"></i>
                <i className=" card-icon fab fa-instagram mt-1 me-4"></i>
                <i className=" card-icon fa-brands fa-tiktok mt-1 me-4"></i>
              </h6>
            </span>
            <span className="d-inline-block "></span>
          </div>
        </div>
      </Link>
    </>
  );
}
