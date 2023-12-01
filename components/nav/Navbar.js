// navbar component
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm mx-auto fw-bold fixed-top">
        <div className="container-fluid">
          <Link className="nav-link fs-4 fw-normal pb-3" href="/">
            Prime
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <i className="social-icons fas fa-align-right"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" href="/"></Link>
                </li>
                <li className="nav-item mt-1 m-2">
                  <div className="input-group">
                    <Link
                      href="/"
                      className="nav-link dropwdown-toggle fs-4 fw-normal"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Menu
                      <span className=" m-2">
                        <i className="social-icons fa-solid fa-angle-down mr-1"></i>
                      </span>
                    </Link>
                    <ul className="dropdown-menu" style={{ width: '15rem' }}>
                      <li>
                        <Link
                          className="dropdown-item fs-4 fw-normal"
                          href="/sessions/Session/"
                        >
                          Classes
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-4 fw-normal"
                          href="/trainers/Trainers/"
                        >
                          Trainers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-4 fw-normal"
                          href="/guides/Guides/"
                        >
                          Tours
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-4 fw-normal"
                          href="/team/Team/"
                        >
                          Staff
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-4 fw-normal"
                          href="/event/Events/"
                        >
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-4 fw-normal"
                          href="/contact/Contact/"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mt-1">
                  <Link
                    className="nav-link fs-4 fw-normal"
                    href="/members/Members/"
                  >
                    Memberships
                  </Link>
                </li>
                <li className="nav-item mt-1 fs-4 fw-normal">
                  <Link className="nav-link" href="/login/Login/">
                    Login
                  </Link>
                </li>
                <div
                  className="input-group mb-3 m-3"
                  style={{ width: '20rem' }}
                >
                  <input
                    type="text"
                    className="form-control bg-dark "
                    aria-label="Text input with dropdown button"
                    placeholder="Search...menu, classes, trainers, events"
                  />
                  <button
                    className="btn btn-sm dropdown-toggle bg-dark border-0 text"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="">
                      <i className=" social-icons fa-solid fa-magnifying-glass"></i>
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end"></ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
