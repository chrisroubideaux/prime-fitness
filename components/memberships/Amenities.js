// amenities component
import Link from 'next/link';

export default function Amenities({ members }) {
  return (
    <div className="box">
      {/* box comonent */}
      <div className="list-group w-auto ">
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
              {' '}
              <h6 className=" text-white mb-0">{members.accsess}</h6>
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
          href="/"
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
              <h6 className="text-white mb-0">{members.wellness}</h6>
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
          href="/"
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
        {/*modal */}
        <div>
          <Link
            href="/"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
            aria-current="true"
          >
            <i
              className="card-icon fa-solid fa-chevron-down mt-n1 me-2"
              width="32"
              height="32"
            ></i>

            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="text-white mb-0">More</h6>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </Link>
          {/*modal amentities */}
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-dark">
                  <h1 className=" text-white fs-5" id="exampleModalLabel">
                    Amenities
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    {' '}
                    <i className="card-icon fa-solid fa-xmark"></i>
                  </button>
                </div>
                {/* modal-body amenties props */}
                <div className="modal-body bg-dark">
                  <div className="box">
                    <div className="list-group w-auto ">
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
                            <h6 className=" text-white mb-0">
                              {members.accsess}
                            </h6>
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
                          className="card-icon fa-solid fa-key mt-n1 me-2"
                          width="32"
                          height="32"
                        ></i>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="text-white mb-0">
                              {members.security}
                            </h6>
                          </div>
                          <small class="opacity-50 text-nowrap">3d</small>
                        </div>
                      </Link>
                      <Link
                        href="/"
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
                            <h6 className="text-white mb-0">
                              {members.discounts}
                            </h6>
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
                            <h6 className="text-white mb-0">
                              {members.wellness}
                            </h6>
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
                        href="/"
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
                            <h6 className="text-white mb-0">
                              {members.guests}
                            </h6>
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
                          className="card-icon fa-solid fa-person-chalkboard mt-n1 me-2"
                          width="32"
                          height="32"
                        ></i>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="text-white mb-0">
                              {members.session}
                            </h6>
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
                          className="card-icon fa-solid fa-check-double mt-n1 me-2"
                          width="32"
                          height="32"
                        ></i>

                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="text-white mb-0">
                              {members.training}
                            </h6>
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
                          className="card-icon fa-solid fa-sun mt-n1 me-2"
                          width="32"
                          height="32"
                        ></i>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="text-white mb-0">{members.tan}</h6>
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
                          className="card-icon fa-solid fa-hand-holding-hand mt-n1 me-2"
                          width="32"
                          height="32"
                        ></i>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="text-white mb-0">
                              {members.massage}
                            </h6>
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
                          className="card-icon fa-solid fa-spa mt-n1 me-2"
                          width="32"
                          height="32"
                        ></i>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h6 className="text-white mb-0">{members.spa}</h6>
                          </div>
                          <small className="opacity-50 text-nowrap">1w</small>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/*modal-footer*/}
                </div>
                <div className="modal-footer bg-dark">
                  <div className=" d-lg-flex ">
                    <span>
                      <h6 className="mt-2">
                        © 2023 Prime Fitness All Rights Reserved
                      </h6>
                    </span>
                  </div>
                  {/*modal-fade */}
                  <div>
                    <div
                      className="modal fade"
                      id="modalId"
                      tabindex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">...</div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close mb-1"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    {' '}
                    <i className="card-icon fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*modal */}
      </div>
    </div>
  );
}
