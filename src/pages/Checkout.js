import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
/* components for details page */
import Navbar from '../components/navbar/Navbar';
import Nav from '../components/memberships/Nav';

import Footers from '../components/misc/Footers';
//import members from '../data/members';
//import guides from '../data/guides';

const Checkout = () => {
  //  const { memberId } = useParams();
  //  const member = members.find((member) => member.id === memberId);
  //  const [description, title, price] = useState([]);
  //  const [date, setDate] = useState(new Date());
  //  const [value, onChange] = useState(new Date());

  return (
    <>
      <Helmet>
        <title>Membership Details</title>
        <meta name="description detail page" content="/" />
      </Helmet>
      <Navbar />
      <div className="layout py-5 mt-5">
        <Nav />
        {/*section */}
        <section className="bg-dark shadow-lg rounded-3 px-4 py-lg-4 py-3 mb-5">
          <div className="py-lg-3 py-2 px-lg-3">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="position-relative rounded-3 overflow-hidden mb-lg-4 mb-2">
                  <h1>Test</h1>
                </div>
                <div className="pt-2 text-lg-start text-center">
                  <button
                    className="btn btn-sm rounded-pill btn-icon me-sm-3 me-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add to Favorites"
                  >
                    <i className=" fa-solid fa-heart"></i>
                  </button>
                  <button
                    className="btn btn-sm rounded-pill btn-icon me-sm-3 me-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Share"
                  >
                    <i className=" fa-solid fa-thumbs-up"></i>
                  </button>
                  <button
                    className="btn btn-sm rounded-pill btn-icon me-sm-3 me-2 "
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Flag"
                  >
                    <i className=" fa-solid fa-ranking-star"></i>
                  </button>
                </div>
              </div>
              {/*section */}
              <div className="col-lg-6">
                <div className="ps-xl-5 ps-lg-3">
                  <div className="d-flex align-items-center flex-wrap text-nowrap mb-sm-4 mb-3 fs-sm">
                    <h6 className="mb-2 me-sm-3 me-2 fs-5 text-muted">
                      Membership Type:
                    </h6>
                    <h6 className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted fs-5">
                      <i className=" fa-solid fa-star me-1 fs-base mt-n1 align-middle"></i>
                      test
                    </h6>
                    <h6 className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted fs-5">
                      <i className=" fa-solid fa-award me-1 fs-base mt-n1 align-middle"></i>
                      test
                    </h6>
                  </div>
                  <div className="row row-cols-sm-2 row-cols-1 gy-3 gx-4 mb-4 pb-md-2">
                    <div className="col">
                      <div className=" position-relative h-100">
                        <h6 className="text-white fs-5">Amenities</h6>
                        test
                      </div>
                    </div>
                    <div className="col">
                      <div className=" position-relative h-100">
                        <h6 className="text-white fs-5">Discription</h6>
                        <p className="text-white">test</p>
                      </div>
                    </div>

                    {/*section */}
                  </div>

                  <h6>test</h6>
                  <div className="row row-cols-sm-2 row-cols-1 g-sm-4 g-3 mb-4">
                    <div className="col">test</div>
                    <div className="col">
                      <Link
                        className="btn btn-sm btn-accent d-block"
                        to="/Checkout"
                      >
                        <i className="button-icon fa-solid fa-calendar-days me-2 fs-5"></i>
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*section */}
            </div>
          </div>
        </section>
        <Footers />
      </div>
    </>
  );
};

export default Checkout;
