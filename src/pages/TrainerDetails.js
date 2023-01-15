import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
/* components for details page */
import Navbar from '../components/navbar/Navbar';
import Nav from '../components/trainers/Nav';
import Toolbar from '../components/trainers/Toolbar';
import TrainerBio from '../components/trainers/TrainerBio';
import TrainerDetail from '../components/trainers/TrainerDetail';
import Iconbar from '../components/trainers/Iconbar';
import Trainer from '../components/trainers/Trainer';
import Footers from '../components/misc/Footers';

//import trainers from '../data/trainers';

import axios from 'axios';

const TrainerDetails = () => {
  //  const { trainerId } = useParams();
  //  const trainer = trainers.find((trainer) => trainer.id === trainerId);
  //  const [description, title, instructor, Trainerbio] = useState([]);

  const { trainerId } = useParams();

  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    const fetchTrainer = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/trainers/${trainerId}`
      );
      setTrainer(data);
    };

    fetchTrainer();
  }, []);
  return (
    <>
      <Helmet>
        <title>Trainer Details</title>
        <meta name="description detail page" content="/" />
      </Helmet>
      <Navbar />
      <div className="layout py-5">
        <div className="container py-4">
          <div className="py-5">
            <Nav />
            <div className="row py-2">
              <div className="col-sm-6">
                <h1 className="text-white mt-2 fs-sm pt-3 fw-bold">
                  {trainer.title}
                </h1>
                <Trainer trainers={trainer} />
                <Toolbar trainers={trainer} />
              </div>

              <div className="col-lg-6">
                <div className="container-fluid py-3 m-4">
                  <h1 className="fw-bold m-2 text-white">{trainer.title}</h1>
                  <p className="d-flex justify-content-end fw-bold m-2 text-white">
                    {trainer.description}
                  </p>
                  <div className="d-flex justify-content-end p-2"></div>
                </div>
              </div>
            </div>

            {/* <div className="row py-4">
              <div className="col-lg-8">
                <h1 className="fw-bold text-center">Class Details</h1>
                <div className="d-flex justify-content-end p-2">
                  <InstructorDetails sessions={session} />
                </div>
              </div>
              <div className="col-lg-4">
                <h1 className="fw-bold text-center">Test</h1>
                <div className="d-flex justify-content-end">
                  <h1>Test</h1>
                </div>
              </div>
            </div>*/}
          </div>
          <div className="py-5">
            <div className="row py-2">
              <div className="col-md-6">
                <h1 className="text-white ">Trainer Bio</h1>
                <TrainerBio trainers={trainer} />
                <Iconbar trainers={trainer} />
              </div>

              <div className="col-lg-6">
                <div className="container-fluid m-4">
                  <h1 className="text-white mt-2 fs-sm pt-3 fw-bold">
                    {trainer.name}
                  </h1>
                  <p className="d-flex justify-content-end fw-bold m-2 text-white">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footers />
      </div>
    </>
  );
};

export default TrainerDetails;
