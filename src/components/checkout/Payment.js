import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CheckoutDetails from './CheckoutDetails';
import '../../styles/modal.css';
//import members from '../../data/members';
import Checkout from './Checkout';

import axios from 'axios';
export default function Payment() {
  //  const { memberId } = useParams();
  //  const member = members.find((member) => member.id === memberId);
  const { memberId } = useParams();

  const [member, setMember] = useState([]);

  useEffect(() => {
    const fetchMember = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/members/${memberId}`
      );
      setMember(data);
    };

    fetchMember();
  }, []);

  const [value, onClick] = useState(new Date());
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <button
        type="button"
        className="btn btn-sm btn-accent d-block w-100"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Checkout
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-white"
                id="staticBackdropLabel"
              >
                Checkout Details
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
              <CheckoutDetails className="" members={member} />
            </div>

            <div className="modal-footer">
              <Checkout />
            </div>
          </div>
        </div>
      </div>
      {/*modal2*/}
    </div>
  );
}
