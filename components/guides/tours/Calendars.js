// calendar component
import { useState } from 'react';
import Link from 'next/link';

import Calendar from 'react-calendar';

export default function Calendars({ appointments }) {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  return (
    <div
      className="modal fade"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <Link
        href="/"
        type="button"
        className="nav-link"
        data-bs-target="#exampleModalToggle2"
        data-bs-toggle="modal"
      >
        <Calendar
          className="calendar "
          width="500px"
          height="335px"
          onChange={setDate}
          value={value}
          selectRange={true}
        ></Calendar>
      </Link>

      <div>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Tour
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="card-icon fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              {/*times component*/}
              <div className="box list-group w-auto m-2">
                <div className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark">
                  <img
                    src={appointments.photo}
                    className="small-avatar rounded-circle m-auto mt-2 mx-3 my-3 border-0"
                    alt="..."
                  />

                  <div className="d-flex gap-2 w-100 justify-content-between mt-3 ">
                    <div>
                      <h6 className=" text-white mb-0">
                        {apointments.appointments}
                      </h6>
                    </div>

                    <small className="opacity-50 text-nowrap text-white"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-sm"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
