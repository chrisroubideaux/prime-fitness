import React from 'react';

export default function SubDetails({ members, setSelectedMembershipId }) {
  const handleSelectMembership = () => {
    setSelectedMembershipId(members._id);
  };

  return (
    <>
      <h2 className=" text-center fw-bold">Your Subscription</h2>
      <div className="container mt-3">
        <div>
          <div className="box">
            <div className="list-group w-auto">
              <div
                onClick={handleSelectMembership}
                className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                aria-current="true"
              >
                <i
                  className="card-icon fa-solid fa-dumbbell mt-n1 me-2"
                  width="32"
                  height="32"
                ></i>
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className=" mb-0">Membership Type: {members.title}</h6>
                  </div>
                  <small className="opacity-50 text-nowrap">now</small>
                </div>
              </div>

              <div>
                <div
                  onClick={handleSelectMembership} // Handle click to select
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                  aria-current="true"
                >
                  <i
                    className="card-icon fa-solid fa-award mt-n1 me-2"
                    width="32"
                    height="32"
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className=" mb-0">{members.verified}</h6>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </div>
              </div>

              <div>
                <div
                  onClick={handleSelectMembership} // Handle click to select
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                  aria-current="true"
                >
                  <i
                    className="card-icon fa-solid fa-magnifying-glass-chart mt-n1 me-2"
                    width="32"
                    height="32"
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className=" mb-0">
                        No Contract, {members.commitment}
                      </h6>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </div>
              </div>

              <div>
                <div
                  onClick={handleSelectMembership} // Handle click to select
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                  aria-current="true"
                >
                  <i
                    className="card-icon fa-solid fa-filter-circle-dollar mt-n1 me-2"
                    width="32"
                    height="32"
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className=" mb-0">{members.annualFee} annual fee</h6>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </div>
              </div>

              <div>
                <div
                  onClick={handleSelectMembership} // Handle click to select
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                  aria-current="true"
                >
                  <i
                    className="card-icon fa-solid fa-calendar mt-n1 me-2"
                    width="32"
                    height="32"
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className=" mb-0">
                        {members.price} monthly subscription
                      </h6>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </div>
              </div>

              <div>
                <div
                  onClick={handleSelectMembership} // Handle click to select
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                  aria-current="true"
                >
                  <i
                    className="card-icon fa-solid fa-dollar-sign mt-n1 me-2"
                    width="32"
                    height="32"
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className=" fw-bold mb-0">
                        Todays total: {members.total} tax:00
                      </h6>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /*
import Link from 'next/link';

export default function SubDetails({ members }) {
  return (
    <>
      <h2 className=" text-center fw-bold">Your Subscription</h2>
      <div className="container mt-3">
        <div>
          <div className="box">
            <div className="list-group w-auto ">
              <Link
                href="/"
                className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                aria-current="true"
              >
                <i
                  className="card-icon fa-solid fa-dumbbell mt-n1 me-2"
                  width="32"
                  height="32"
                ></i>
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className=" mb-0">Membership Type: {members.title}</h6>
                  </div>
                  <small className="opacity-50 text-nowrap">now</small>
                </div>
              </Link>

              <div className=" ">
                <Link
                  href="/"
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                  aria-current="true"
                >
                  <i
                    className="card-icon fa-solid fa-award mt-n1 me-2"
                    width="32"
                    height="32"
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className=" mb-0">{members.verified}</h6>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </Link>
              </div>
              <div className=" ">
                <Link
                  href="/"
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                  aria-current="true"
                >
                  <i
                    className="card-icon fa-solid fa-magnifying-glass-chart mt-n1 me-2"
                    width="32"
                    height="32"
                  ></i>

                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className=" mb-0">
                        No Contract, {members.commitment}
                      </h6>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </Link>
              </div>
              <div className=" ">
                <Link
                  href="/"
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                  aria-current="true"
                >
                  <i
                    className="card-icon fa-solid fa-filter-circle-dollar mt-n1 me-2"
                    width="32"
                    height="32"
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className=" mb-0">{members.annualFee} annual fee</h6>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link
                  href="/"
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                  aria-current="true"
                >
                  <i
                    className="card-icon fa-solid fa-calendar mt-n1 me-2"
                    width="32"
                    height="32"
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className=" mb-0">
                        {members.price} monthly subscription
                      </h6>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </Link>
              </div>

              <div className="">
                <Link
                  href="/"
                  className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-transparent"
                  aria-current="true"
                >
                  <i
                    className="card-icon fa-solid fa-dollar-sign mt-n1 me-2"
                    width="32"
                    height="32"
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className=" fw-bold mb-0">
                        Todays total: {members.total} tax:00
                      </h6>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
*/
}
