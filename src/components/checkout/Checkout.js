import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../styles/modal.css';
import '../../styles/forms.css';
import Order from './Order';
import CheckoutDetails from './CheckoutDetails';
//import members from '../../data/members';
import axios from 'axios';

export default function CheckoutForm() {
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

  return (
    <div>
      <button
        className="btn btn-sm btn-accent d-block"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Continue to Payment
      </button>

      <div
        className="offcanvas offcanvas-top bg-dark h-100"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title display-5" id="offcanvasTopLabel">
            Checkout
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            {' '}
            <i className="card-icon fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body bg-dark">
          <div className="container-fluid py-5">
            <div className="py-lg-3 py-2 px-lg-3">
              <div className="row gy-4">
                <div className="col-md-6">
                  <h1 className="text-white text-center">Billing Address</h1>
                  <Order />
                </div>

                <div className="col-md-6">
                  <h2 className=" text-center fw-bold">Your Subscription</h2>
                  <div className="container">
                    <CheckoutDetails
                      className="fixed-top"
                      members={member}
                      style={{ width: '18rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
