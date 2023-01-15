import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Nav from '../components/owners/Nav';
import OwnerBio from '../components/owners/OwnerBio';
import Toolbar from '../components/owners/Toolbar';
import Footers from '../components/misc/Footers';
//import owners from '../data/owners';

import axios from 'axios';

export default function OwnerDetails() {
  //  const { ownerId } = useParams();
  //  const owner = owners.find((owner) => owner.id === ownerId);
  //  const [title, Ownerbio] = useState([]);

  const { ownerId } = useParams();

  const [owner, setOwner] = useState([]);

  useEffect(() => {
    const fetchOwner = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/owners/${ownerId}`
      );
      setOwner(data);
    };

    fetchOwner();
  }, []);

  return (
    <>
      <Helmet>
        <title>Owner Details</title>
        <meta name="description detail page" content="/" />
      </Helmet>
      <Navbar />
      <div className="layout">
        <div className="container py-5">
          <div className="py-5">
            <Nav />
            <div className="row py-2">
              <div className="col-sm-6">
                <h4 className="display-5 mt-2 fs-sm pt-3 fw-bold">
                  {owner.title}
                </h4>
                <OwnerBio owners={owner} />
                <Toolbar owners={owner} />
              </div>
              <div className="col-lg-6">
                <div className="container-fluid py-3 m-4">
                  <h1 className="fw-bold m-2 text-white">{owner.name}</h1>
                  <p className=" par d-flex justify-content-end fs-4 lh-2 fw-bold m-2 text-white my-4">
                    {owner.bio}
                  </p>
                  <div className="d-flex justify-content-end p-2 me-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footers />
      </div>
    </>
  );
}
