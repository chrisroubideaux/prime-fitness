//modal component
import Link from 'next/link';
import members from '@/data/members';

export default function Modal({ params }) {
  const member = members.find((member) => member.id === params.id);
  return (
    <div>
      <Link
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        href={`/members/details/${members.id}`}
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
            <h6 className=" text-white mb-0">More</h6>
          </div>
          <small className="opacity-50 text-nowrap">now</small>
        </div>
      </Link>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
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
            <div className="modal-body">
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
                        <h6 className=" text-white mb-0">{member.accsess}</h6>
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
                        <h6 className="text-white mb-0">{member.security}</h6>
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
                        <h6 className="text-white mb-0">{member.discounts}</h6>
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
                        <h6 className="text-white mb-0">{member.wellness}</h6>
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
                        <h6 className="text-white mb-0">{member.wifi}</h6>
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
                        <h6 className="text-white mb-0">{member.guests}</h6>
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
                        <h6 className="text-white mb-0">{member.session}</h6>
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
                        <h6 className="text-white mb-0">{member.training}</h6>
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
                        <h6 className="text-white mb-0">{member.tan}</h6>
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
                        <h6 className="text-white mb-0">{member.massage}</h6>
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
                        <h6 className="text-white mb-0">{member.spa}</h6>
                      </div>
                      <small className="opacity-50 text-nowrap">1w</small>
                    </div>
                  </Link>
                </div>
              </div>

              {/*---*/}
            </div>
            <div className="modal-footer">
              <div className=" d-lg-flex ">
                <span>
                  <h6 className="mt-2">
                    © 2023 Prime Fitness All Rights Reserved
                  </h6>
                </span>
              </div>

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
  );
}
