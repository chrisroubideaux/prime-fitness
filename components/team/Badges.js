// badges component
import Link from 'next/link';

export default function Badges({ guides }) {
  return (
    <div className="box">
      <div className="list-group w-auto ">
        <Link
          href="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
          aria-current="true"
        >
          <i
            className="card-icon fa-solid fa-dumbbell mt-n1 me-2"
            width="32"
            height="32"
          ></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className=" text-white mb-0">{guides.npc}</h6>
            </div>
            <small className="opacity-50 text-nowrap">now</small>
          </div>
        </Link>
        <Link
          href="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
          aria-current="true"
        >
          <i
            className="card-icon fa-solid fa-briefcase mt-n1 me-2"
            width="32"
            height="32"
          ></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="text-white mb-0">
                Experiance: {guides.experiance}
              </h6>
            </div>
            <small className="opacity-50 text-nowrap">3d</small>
          </div>
        </Link>
        <Link
          href="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
          aria-current="true"
        >
          <i
            className="card-icon fa-solid fa-award mt-n1 me-2 "
            width="32"
            height="32"
          ></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="text-white mb-0">{guides.verified}</h6>
            </div>
            <small className="opacity-50 text-nowrap">1w</small>
          </div>
        </Link>
        <Link
          href="/"
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
              <h6 className="text-white mb-0">{guides.wellness}</h6>
            </div>
            <small className="opacity-50 text-nowrap">1w</small>
          </div>
        </Link>
        <Link
          href="/"
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
              <h6 className="text-white mb-0">{guides.times}</h6>
            </div>
            <small className="opacity-50 text-nowrap">1w</small>
          </div>
        </Link>
        <Link
          href="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
          aria-current="true"
        >
          <i
            className="card-icon fa-solid fa-calendar mt-n1 me-2"
            width="32"
            height="32"
          ></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="text-white mb-0">{guides.days}</h6>
            </div>
            <small className="opacity-50 text-nowrap">1w</small>
          </div>
        </Link>
      </div>
    </div>
  );
}
