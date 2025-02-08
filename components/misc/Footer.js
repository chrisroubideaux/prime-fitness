// footer component

import Link from 'next/link';
import Image from 'next/image';
import icon1 from '@/public/images/icons/icon1.png';

export default function Footer() {
  return (
    <div>
      <div className="container ">
        <hr className="hr mt-5 " />
      </div>
      <div className="footer ">
        <footer className="container-fluid pt-4 py-5">
          <div className="row py-5">
            <div className="col-12 col-md">
              <small className="d-block mb-3">&copy; 2025 Prime Fitness</small>
            </div>
            <div className="col-6 col-md">
              <h2 className=" fw-normal">Contact</h2>
              <ul className="list-unstyled fw-normal">
                <li className="">
                  <Link className="nav-links fs-5" href="/trainers/Trainer">
                    Trainers
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-links  fs-5" href="/">
                    Tours
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-links fs-5" href="/">
                    Events
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-links fs-5" href="/register/Register">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md">
              <h2 className="fw-normal">Media</h2>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <i className="social-icons fab fa-facebook-f m-2"></i>
                </li>
                <li className="mb-1">
                  <i className="social-icons fab fa-instagram m-2 "></i>
                </li>
                <li className="mb-1">
                  <i className=" social-icons fa-brands fa-youtube m-2"></i>
                </li>
                <li className="mb-1">
                  <i className=" social-icons fa-brands fa-tiktok m-2"></i>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md">
              <h2 className="fw-normal">About</h2>
              <ul className="list-unstyled fw-normal ">
                <li className="">
                  <Link className="nav-links  fs-5" href="/">
                    Team
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-links fs-5" href="/">
                    Locations
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-links fs-5" href="/">
                    Privacy
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-links fs-5" href="/">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
