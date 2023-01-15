import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Iconbar from '../components/misc/Iconbar';
import Owners from '../components/owners/Owners';
import Guides from '../components/team/Guides';
import Instructors from '../components/team/Instructors';
import Trainers from '../components/team/Trainers';
import Details from '../components/misc/Details';
import Services from '../components/misc/Services';
import Footers from '../components/misc/Footers';

//import owners from '../data/owners';
//import guides from '../data/guides';
//import sessions from '../data/sessions';
//import trainers from '../data/trainers';

import axios from 'axios';

export default function Team() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwners = async () => {
      const { data } = await axios.get('http://localhost:8000/api/owners/');
      setOwners(data);
    };

    fetchOwners();
  }, []);

  /* guide details */

  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      const { data } = await axios.get('http://localhost:8000/api/guides/');
      setGuides(data);
    };

    fetchGuides();
  }, []);

  /* session details */

  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const { data } = await axios.get('http://localhost:8000/api/sessions/');
      setSessions(data);
    };

    fetchSessions();
  }, []);

  /* trainer */

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      const { data } = await axios.get('http://localhost:8000/api/trainers/');
      setTrainers(data);
    };

    fetchTrainers();
  }, []);
  return (
    <>
      <Helmet>
        <title>Prime Fitness | Personal Trainers | page </title>
        <meta name="description fitness web app  menu page" content="/" />
      </Helmet>
      <Navbar />

      <div className="layout">
        <div className="swiper">
          <img
            src="../images/banner/banner15.jpg"
            className="session img-fluid"
            loading="lazy"
            alt=""
          />
          <div className="container-fluid">
            <div className="carousel-caption">
              <h1 className="text-shadow-3">
                Voted the best fitness club in town
              </h1>
              <p className="fw-bold text-shadow-3">
                Why wait till new year to meet the new you!
              </p>
            </div>
          </div>
        </div>

        <div className="container py-5 mt-5">
          <div className="container col-lg-10 ">
            <h1 className="text-center text-white mt-3 display-4 pt-3 ">
              Meet our Staff
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
          <hr className="hr" />
          <h1 className="text-white text-center py-5 my-5">Owners</h1>
          <div className="row row-cols-sm-2 row-cols-1 gy-3 gx-4 mb-4 pb-md-2 my-5 h-32 py-3">
            {owners.map((owners) => (
              <div key={owners.id} className="py-3 my-5">
                <Owners className="" owners={owners} />
              </div>
            ))}
          </div>
          <hr className="hr" />
          <h1 className=" text-white text-center py-3 my-3">Tour Guides</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-md-4 g-4 py-5">
            {guides.map((guides) => (
              <div key={guides.id} className="py-3 my-3">
                <Guides className="" guides={guides} />
              </div>
            ))}
          </div>
          <hr className="hr" />
          <h1 className=" text-white text-center py-3 my-3">
            Class Instructors
          </h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            {sessions.map((sessions) => (
              <div key={sessions.id} className="py-3 my-5">
                <Instructors className="" sessions={sessions} />
              </div>
            ))}
          </div>
          <hr className="hr" />
          <h1 className=" text-white text-center py-3 my-3">
            Personal Trainers
          </h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-5 ">
            {trainers.map((trainers) => (
              <div key={trainers.id} className="py-3 my-5">
                <Trainers className="" trainers={trainers} />
              </div>
            ))}
          </div>
        </div>
        <Details />
        <Services />
        <Footers />
      </div>
    </>
  );
}
