import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Iconbar from '../components/misc/Iconbar';
import Trainers from '../components/trainers/Trainers';
import Details from '../components/misc/Details';
import Services from '../components/misc/Services';
import Testimonials from '../components/trainers/Testimonials';
import Footers from '../components/misc/Footers';
//import trainers from '../data/trainers';
import Slider from '../components/misc/Slider';

import promos from '../data/promos';
import axios from 'axios';
export default function Trainer() {
  const { promoId } = useParams();
  const promo = promos.find((promo) => promo.id === promoId);

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
            src="../images/banner/banner14.jpg"
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
          <div className="container col-lg-10 m-auto">
            <h1 className="text-center text-white mt-3 display-4 ">
              Personal Trainer
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
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-5">
            {trainers.map((trainers) => (
              <div key={trainers.id} className=" py-5 ">
                <Trainers className="" trainers={trainers} />
              </div>
            ))}
          </div>
        </div>
        <Details />
        <Services />
        <Testimonials />
        {promos.map((promos) => (
          <Slider className="py-2" key={promos.id} promos={promos} />
        ))}
        <Footers />
      </div>
    </>
  );
}
