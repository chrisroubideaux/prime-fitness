// nav component

import Link from 'next/link';
import { FaDumbbell, FaHouseUser, FaIdBadge } from 'react-icons/fa';

export default function Nav() {
  return (
    <div>
      <div className="py-5 page-title-overlap bg-accent pt-4">
        <div className="container d-lg-flex justify-content-between py-5 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2 py-4">
            <nav aria-label="breadcrumb py-3">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link className="nav-link" href="/">
                    <FaHouseUser className=" card-icon m-1" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap me-2">
                  <Link className="nav-link" href="/team/Team/">
                    <FaIdBadge className="card-icon me-1" />
                    Staff
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap me-1">
                  <Link className="nav-link" href="/sessions/Session/">
                    <FaDumbbell className="card-icon me-1" />
                    Prime
                  </Link>
                </li>
              </ol>
            </nav>
            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
              <h1 className="mb-2 pb-1 fs-lg ">Owner Details</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
