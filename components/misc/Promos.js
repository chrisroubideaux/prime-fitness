// Promo cpmponent
import Link from 'next/link';

export default function Promos() {
  return (
    <section className=" shadow-lg rounded-3 py-5">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3 col-lg-8 offset-lg-2 col-md-12 col-12">
            <div className="text-center mb-lg-9 mb-5">
              <h2 className="fw-bold mb-3">
                Join Now &<span className="text-bottom-line">Start Free</span>7
                days
              </h2>
              <p className=" par fs-5 mb-0">
                We are so glad you chose prime fitness. There’s a plan for every
                type of a need - choose the one that fits your needs best. Both
                plans auto-renew so be sure to make any changes 7 days before
                the end of your subscription cycle.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-10 offset-xl-1 col-md-12 col-12">
            <div className="row">
              <div className="col-xl-6 col-md-12 col-lg-6 col-12">
                <div className="card mb-5 mb-lg-0" style={{ maxWidth: '100%' }}>
                  <div className="card-body p-5">
                    <span className="text-uppercase text-dark">Monthly</span>
                    <div className="d-flex align-items-center mt-5">
                      <h2>$12.99/mo</h2>
                      <span className="ms-1">(USD)</span>
                    </div>
                    <p className="par fw-bold mb-0">
                      Charges you every month and you can cancel anytime you
                      want.
                    </p>

                    <ul className="list-unstyled mt-4">
                      <li className="mb-2">
                        <span>
                          <i
                            className="fa-solid fa-circle-check"
                            width="16"
                            height="16"
                          ></i>
                        </span>
                        <span className="ms-1 text-dark">
                          New videos every week
                        </span>
                      </li>
                      <li className="mb-2">
                        <span>
                          <i
                            className="fa-solid fa-circle-check"
                            width="16"
                            height="16"
                          ></i>
                        </span>
                        <span className="ms-1 text-dark">Premium Courses</span>
                      </li>
                      <li className="mb-2">
                        <span>
                          <i
                            className="fa-solid fa-circle-check"
                            width="16"
                            height="16"
                          ></i>
                        </span>
                        <span className="ms-1 text-dark ">
                          Online YouTube Courses
                        </span>
                      </li>
                      <li className="mb-2">
                        <span>
                          <i
                            className="fa-solid fa-circle-check"
                            width="16"
                            height="16"
                          ></i>
                        </span>
                        <span className="ms-1 text-dark">
                          Exclusive Classes and Guest Instructors
                        </span>
                      </li>
                    </ul>

                    <div className="mt-5 d-grid">
                      <Link href="guides/Guides" class="btn btn-md">
                        Free 7 Days Trial
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 col-lg-6 col-12">
                <div className="card" style={{ maxWidth: '100%' }}>
                  <div className="card-body p-5">
                    <span class="text-uppercase text-dark">Annual</span>
                    <div className="d-flex align-items-center mt-5">
                      <h2>$129.99/year</h2>
                      <span className="ms-1">(USD)</span>
                    </div>
                    <p className="par mb-0 fw-bold">
                      Charges you once a year and saves you money.
                    </p>

                    <ul className="list-unstyled mt-4">
                      <li className="mb-2">
                        <span>
                          <i
                            className="fa-solid fa-circle-check"
                            width="16"
                            height="16"
                          ></i>
                        </span>
                        <span className="ms-1 text-dark">
                          All the same content as the monthly plan
                        </span>
                      </li>
                      <li className="mb-2">
                        <span>
                          <i
                            className="fa-solid fa-circle-check"
                            width="16"
                            height="16"
                          ></i>
                        </span>
                        <span className="ms-1 text-dark">
                          Save $25 a year compared monthly plan
                        </span>
                      </li>
                      <li className="mb-2">
                        <span>
                          <i
                            className="fa-solid fa-circle-check"
                            width="16"
                            height="16"
                          ></i>
                        </span>
                        <span className="ms-1 text-dark">
                          Online video Courses
                        </span>
                      </li>
                      <li className="mb-2">
                        <span>
                          <i
                            className="fa-solid fa-circle-check"
                            width="16"
                            height="16"
                          ></i>
                        </span>
                        <span className="ms-1 text-dark">
                          Personal Training
                        </span>
                      </li>
                      <li className="mb-2">
                        <span>
                          <i
                            className=" icons fa-solid fa-circle-check"
                            width="16"
                            height="16"
                          ></i>
                        </span>
                        <span className="ms-1 text-dark">Premium Courses</span>
                      </li>
                    </ul>

                    <div className="mt-5 d-grid">
                      <Link href="members/Members" class="btn btn-md">
                        Start Trial 7 Days
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
