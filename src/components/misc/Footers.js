import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.css';

export default function Footers() {
  return (
    <>
      <div className="container">
        <hr className="hr " />
        <footer className="pt-lg-10 pt-5 footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/*icons */}
                <div className="mb-4">
                  <img
                    src="../images/icons/icon1.png"
                    alt=""
                    className="logo-inverse "
                  />
                  <div className="mb-4 pb-4">
                    <p className="text-white mb-4">
                      Here at prime fitness we have a wide variety of classes
                      and Memberships to fit the schedule of everyday life. Stop
                      in today and see why we were voted number one fitness.
                    </p>
                    {/*icons */}
                    <div className="fs-4 mt-4">
                      <Link
                        to="/"
                        className="mdi mdi-facebook fs-4 text-muted me-2"
                      ></Link>
                      <Link
                        to="/"
                        className="mdi mdi-twitter text-muted me-2"
                      ></Link>
                      <Link
                        to="/"
                        className="mdi mdi-instagram text-muted "
                      ></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-2 col-md-3 col-6">
                <div className="mb-4">
                  <h3 className="fw-bold mb-3">Company</h3>
                  <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                    <li>
                      <Link to="/" className="nav-link">
                        Tours
                      </Link>
                    </li>
                    <li>
                      <Link to="/Membership" className="nav-link">
                        Memberships
                      </Link>
                    </li>
                    <li>
                      <Link to="/Register" className="nav-link">
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6">
                <div className="mb-4">
                  <h3 className="fw-bold mb-3">Support</h3>
                  <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                    <li>
                      <Link to="/" className="nav-link">
                        Help and Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link">
                        Become Instructor
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link">
                        Get the app
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/" className="nav-link">
                        FAQ’s
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                {/*contact*/}
                <div className="mb-4">
                  <h3 className="fw-bold mb-3">Contact</h3>
                  <p className="text-white">
                    404 Qauntum ave Anywhere, USA 10010
                  </p>
                  <p className=" text-white mb-1">
                    Email:{' '}
                    <Link className="nav-item" to="/">
                      support@primefitness@gmail.com
                    </Link>
                  </p>
                  <p>
                    <h6>
                      Phone:{' '}
                      <span className="text-white fw-semi-bold">
                        (000) 123 456 789
                      </span>
                    </h6>
                  </p>
                  <div className="d-flex">
                    <Link to="/">
                      <img
                        src="../../assets/images/svg/appstore.svg"
                        alt=""
                        class="img-fluid"
                      />
                    </Link>
                    <Link to="/" className="ms-2">
                      <img
                        src="../../assets/images/svg/playstore.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <Link to="/" className=" nav-itme ms-2">
                      <i className="social-icons fab fa-facebook-f m-2"></i>
                    </Link>
                    <Link to="/" className=" nav-item ms-2">
                      <i className="social-icons fab fa-instagram m-2 "></i>
                    </Link>
                    <Link to="/" className=" nav-item ms-2">
                      <i className=" social-icons fa-brands fa-youtube m-2"></i>
                    </Link>
                    <Link to="/" className=" nav-item ms-2">
                      <i className=" social-icons fa-brands fa-tiktok m-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center g-0 border-top py-2 mt-6">
              <div className="col-lg-10 col-12">
                <div className="d-lg-flex align-items-center">
                  <div className="me-4">
                    <span>
                      <h6>© 2023 Prime Fitness. All Rights Reserved</h6>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
