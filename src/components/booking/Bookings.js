import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import Times from './Times';

import '../../styles/modal.css';
//import guides from '../../data/guides';
import axios from 'axios';

export default function Bookings() {
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

  const [value, onClickTile] = useState(new Date());
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div
        className="modal fade m-2"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-white"
                id="exampleModalToggleLabel"
              >
                Calendar
              </h1>
              <Link
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="card-icon fa-solid fa-xmark"></i>
              </Link>
            </div>
            <div className="calendar" width="500px" height="335px">
              <button
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                className="calendar"
                width="500px"
                height="335px"
                onClickTile={guides.map((guides) => (
                  <div key={guides.id} className=" ">
                    <Times className="" guides={guides} />
                  </div>
                ))}
              >
                <Calendar
                  className="calendar "
                  onChange={onClickTile}
                  value={value}
                  selectRange={true}
                ></Calendar>
              </button>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-sm btn-accent d-block"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Book your Tour
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Book your Tour
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
                Back to Calendar
              </button>
            </div>
          </div>
        </div>
      </div>

      <a
        className="btn btn-sm btn-accent d-block"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Book Tour
      </a>
    </div>
  );
}
