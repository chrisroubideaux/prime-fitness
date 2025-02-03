// Hero component
import Link from 'next/link';
//import Search from '../nav/Search';
//import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Hero({}) {
  return (
    <>
      <div className="container-fluid py-5 mt-5">
        <section className="pt-lg-8 pt-6 py-xxl-10">
          <div className="container py-5">
            <div className="row d-flex align-items-center">
              <div className="col-xxl-5 col-lg-6 col-12">
                <div>
                  <h5 className="text-muted mb-4">Welcome to Prime Fitness</h5>
                  <h1 className="mb-3 fw-bold fs-3">
                    <span className="text-bottom-line">
                      Join Now & Start Free 7 day trial.
                    </span>
                    We help you achieve your fitness goals.
                  </h1>
                  <p className="par mb-4">
                    Here at prime fitness we have a wide variety of classes and
                    Memberships to fit the schedule of everyday life. Stop in
                    today and see why we were voted number one fitness center in
                    the city and get your 7 day free trial today.
                  </p>
                  <div className="d-grid d-lg-block">
                    <a href="#" className="btn btn-md">
                      Memberships
                    </a>
                    <a href="#" className="btn btn-md ms-lg-1 mt-2 mt-lg-0">
                      Book a tour
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 offset-xxl-1 col-lg-6 col-12">
                <div className="text-center d-none d-lg-block">
                  <img
                    src="../../images/banner/cover.png"
                    alt="yoga-coach"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
