import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <div className="py-5 page-title-overlap bg-accent pt-4">
        <div className="container d-lg-flex justify-content-between py-5 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2 py-4">
            <nav aria-label="breadcrumb py-3">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link className="text-nowrap" to="/">
                    <i className="fa-solid fa-house m-1"></i>Home
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <Link to="/Trainer">Personal Trainers</Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Prime
                </li>
              </ol>
            </nav>

            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
              <h1 className="h3 text-light mb-0">Personal Trainers</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
