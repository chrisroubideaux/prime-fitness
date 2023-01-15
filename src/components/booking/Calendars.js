import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Times from './Times';
import { Link, useParams } from 'react-router-dom';
//import guides from '../../data/guides';

import axios from 'axios';
export default function Calendars() {
  //  const { guideId } = useParams();
  //  const guide = guides.find((guide) => guide.id === guideId);

  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      const { data } = await axios.get('http://localhost:8000/api/guides/');
      setGuides(data);
    };

    fetchGuides();
  }, []);

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
        to="/"
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
              {guides.map((guides) => (
                <div key={guides.id} className=" ">
                  <Times className="" guides={guides} />
                </div>
              ))}
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

/*   <Calendar
          onChange={setDate}
          value={value}
          selectRange={true}
        ></Calendar>*/
