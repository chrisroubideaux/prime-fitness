import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/modal.css';

export default function CheckoutDetails({ members }) {
  return (
    <div>
      <div className="box">
        <div className="list-group w-auto ">
          <Link
            to="/"
            className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
            aria-current="true"
          >
            <i
              className="card-icon fa-solid fa-dumbbell mt-n1 me-2"
              width="32"
              height="32"
            ></i>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className=" text-white mb-0">
                  Membership Type: {members.title}
                </h6>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </Link>
        </div>
        <div className="list-group w-auto ">
          <Link
            to="/"
            className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
            aria-current="true"
          >
            <i
              className="card-icon fa-solid fa-award mt-n1 me-2"
              width="32"
              height="32"
            ></i>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className=" text-white mb-0">{members.verified}</h6>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </Link>
        </div>
        <div className="list-group w-auto ">
          <Link
            to="/"
            className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
            aria-current="true"
          >
            <i
              className="card-icon fa-solid fa-magnifying-glass-chart mt-n1 me-2"
              width="32"
              height="32"
            ></i>

            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className=" text-white mb-0">
                  No Contract, {members.commitment}
                </h6>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </Link>
        </div>
        <div className="list-group w-auto ">
          <Link
            to="/"
            className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
            aria-current="true"
          >
            <i
              className="card-icon fa-solid fa-filter-circle-dollar mt-n1 me-2"
              width="32"
              height="32"
            ></i>

            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className=" text-white mb-0">
                  {members.annualFee} annual fee
                </h6>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </Link>
        </div>
        <div className="list-group w-auto">
          <Link
            to="/"
            className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
            aria-current="true"
          >
            <i
              className="card-icon fa-solid fa-calendar mt-n1 me-2"
              width="32"
              height="32"
            ></i>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className=" text-white mb-0">
                  {members.price} monthly subscription
                </h6>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </Link>
        </div>
        <div className="list-group w-auto">
          <Link
            to="/"
            className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark"
            aria-current="true"
          >
            <i
              className="card-icon fa-solid fa-dollar-sign mt-n1 me-2"
              width="32"
              height="32"
            ></i>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className=" text-white mb-0">
                  Todays total: {members.total} tax:00
                </h6>
              </div>
              <small className="opacity-50 text-nowrap">now</small>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
