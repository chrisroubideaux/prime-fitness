import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Members from '../components/memberships/Members';
import Details from '../components/misc/Details';
import Services from '../components/misc/Services';
import Iconbar from '../components/misc/Iconbar';
import Testimonials from '../components/memberships/Testimonials';
import Footers from '../components/misc/Footers';
//import memebers from '../data/members';

import axios from 'axios';

export default function Memberships() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data } = await axios.get('http://localhost:8000/api/members/');
      setMembers(data);
    };

    fetchMembers();
  }, []);
  return (
    <>
      <Helmet>
        <title>Prime Fitness | Memberships | page </title>
        <meta name="description fitness web app  menu page" content="/" />
      </Helmet>
      <Navbar />

      <div className="">
        <div className="swiper">
          <img
            src="../images/banner/banner17.jpg"
            className="session img-fluid"
            loading="lazy"
            alt=""
          />
          <div className="container-fluid">
            <div className="carousel-caption">
              <h1 className="text-shadow-3">
                Memberships for everyone and everydaylife
              </h1>
              <p className="fw-bold text-shadow-3">
                Why wait till new year to meet the new you!
              </p>
            </div>
          </div>
        </div>

        <div className="container py-5 mt-5">
          <div className="container col-lg-10 m-auto">
            <h1 className="text-center text-white mt-3 display-4 ">
              Memberships
            </h1>
            <p className="text-white text-center lead">
              Here at prime we beleive in flexiablity for every one see below
              which membership fits your need. Sign up for one of our daily
              tours and see why we were voted the number one fitness club in the
              area.
            </p>
          </div>
          <div className="mt-5">
            <Iconbar />
          </div>
          <hr className="hr " />
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-md-4 g-1 py-5">
            {members.map((members) => (
              <div key={members.id} className=" py-5 ">
                <Members className="" members={members} />
              </div>
            ))}
          </div>
        </div>
        <Details />
        <Services />
        <Testimonials />
        <Footers />
      </div>
    </>
  );
}
