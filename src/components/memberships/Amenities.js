import { Link } from 'react-router-dom';
import '../../styles/card.css';
import Modal from './Modal';

export default function Amenities({ members }) {
  return (
    <div className="box">
      <div className="list-group w-auto ">
        <Link
          to="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
          aria-current="true"
        >
          <i
            className="card-icon fa-solid fa-clock mt-n1 me-2"
            width="32"
            height="32"
          ></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className=" text-white mb-0">{members.accsess}</h6>
            </div>
            <small className="opacity-50 text-nowrap">now</small>
          </div>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
          aria-current="true"
        >
          <i
            className="card-icon fa-solid fa-key mt-n1 me-2"
            width="32"
            height="32"
          ></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="text-white mb-0">{members.security}</h6>
            </div>
            <small className="opacity-50 text-nowrap">3d</small>
          </div>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
          aria-current="true"
        >
          <i
            className="card-icon fa-solid fa-percent mt-n1 me-2 "
            width="32"
            height="32"
          ></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="text-white mb-0">{members.discounts}</h6>
            </div>
            <small className="opacity-50 text-nowrap">1w</small>
          </div>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
          aria-current="true"
        >
          <i
            className="card-icon fa-solid fa-chart-simple mt-n1 me-2"
            width="32"
            height="32"
          ></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="text-white mb-0">{members.wellness}</h6>
            </div>
            <small className="opacity-50 text-nowrap">1w</small>
          </div>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
          aria-current="true"
        >
          <i
            className="card-icon fa-solid fa-wifi mt-n1 me-2"
            width="32"
            height="32"
          ></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="text-white mb-0">{members.wifi}</h6>
            </div>
            <small className="opacity-50 text-nowrap">1w</small>
          </div>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
          aria-current="true"
        >
          <i
            className="card-icon fa-solid fa-user-group mt-n1 me-2"
            width="32"
            height="32"
          ></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="text-white mb-0">{members.guests}</h6>
            </div>
            <small className="opacity-50 text-nowrap">1w</small>
          </div>
        </Link>
        <Link>
          <Modal />
        </Link>
      </div>
    </div>
  );
}
