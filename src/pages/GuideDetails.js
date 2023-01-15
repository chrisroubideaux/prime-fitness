import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Nav from '../components/team/Nav';
import Bookings from '../components/booking/Bookings';
import GuideBio from '../components/team/GuideBio';
import Badges from '../components/team/Badges';
import Toolbar from '../components/team/Toolbar';
import Details from '../components/misc/Details';
import Footers from '../components/misc/Footers';

//import guides from '../data/guides';

import axios from 'axios';

export default function GuideDetails() {
  //  const { guideId } = useParams();
  //  const guide = guides.find((guide) => guide.id === guideId);
  //  const [title, Guidebio] = useState([]);

  const { guideId } = useParams();

  const [guide, setGuide] = useState([]);

  useEffect(() => {
    const fetchGuide = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/guides/${guideId}`
      );
      setGuide(data);
    };

    fetchGuide();
  }, []);

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
                  <GuideBio guides={guide} />
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
                      Tour Guide: {guide.guide}
                    </h6>
                    <h6 className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted fs-5">
                      <i className=" fa-solid fa-star me-1 fs-base mt-n1 align-middle"></i>
                      {guide.rating}
                    </h6>
                    <h6 className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted fs-5">
                      <i className=" fa-solid fa-award me-1 fs-base mt-n1 align-middle"></i>
                      {guide.verified}
                    </h6>
                  </div>
                  <div className="row row-cols-sm-2 row-cols-1 gy-3 gx-4 mb-4 pb-md-2">
                    <div className="col">
                      <div className=" position-relative h-100">
                        <h6 className="text-white fs-5">Tour Details</h6>
                        <Badges guides={guide} />
                      </div>
                    </div>
                    <div className="col">
                      <div className=" position-relative h-100">
                        <h6 className="text-white fs-5">Bio</h6>
                        <p className="text-white">{guide.bio}</p>
                      </div>
                    </div>

                    {/*section */}
                  </div>

                  <h6>{guide.price}</h6>
                  <div className="row row-cols-sm-2 row-cols-1 g-sm-4 g-3 mb-4">
                    <div className="col">
                      <Bookings guides={guide} />
                    </div>
                    <div className="col">Back</div>
                  </div>
                </div>
              </div>
              {/*section */}
            </div>
          </div>
        </section>
        <Details />
        <Footers />
      </div>
    </>
  );
}
