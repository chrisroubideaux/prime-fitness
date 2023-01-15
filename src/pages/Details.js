import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
/* components for details page */
import Navbar from '../components/navbar/Navbar';

import Toolbar from '../components/instructors/Toolbar';
import Bio from '../components/instructors/Bio';
import Nav from '../components/instructors/Nav';
import Instructor from '../components/instructors/Instructor';
import Iconbar from '../components/instructors/Iconbar';
import Footers from '../components/misc/Footers';

//import sessions from '../data/sessions';

import axios from 'axios';

const Details = () => {
  //  const { sessionId } = useParams();
  //  const session = sessions.find((session) => session.id === sessionId);
  //  const [description, title, instructor, bio] = useState([]);

  const { sessionId } = useParams();

  const [session, setSession] = useState([]);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/sessions/${sessionId}`
      );
      setSession(data);
    };

    fetchSession();
  }, []);

  return (
    <>
      <Helmet>
        <title>Instructor Details</title>
        <meta name="description detail page" content="/" />
      </Helmet>
      <Navbar />
      <div className="layout py-2">
        <div className="container py-3">
          <div className="py-5">
            <Nav />
            <div className="row py-2">
              <div className="col-md-6">
                <h1 className="text-white mt-2 fs-sm fw-bold">
                  {session.title}
                </h1>
                <Instructor sessions={session} />
                <Toolbar sessions={session} />
              </div>

              <div className="col-lg-6">
                <div className="container-fluid m-3">
                  <h4 className="fw-bold display-5">Class Details</h4>
                  <p className="d-flex justify-content-end text-white lh-1 fs-3">
                    {session.description}
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
                <h1 className=" text-white fw-bold">Trainer Bio</h1>
                <Bio sessions={session} />
                <Iconbar sessions={session} />
              </div>

              <div className="col-lg-6">
                <div className="container-fluid mx-4 ">
                  <h4 className="fw-bold fs-sm display-4">{session.name}</h4>
                  <p className="d-flex justify-content-end fw-bold text-white lh-1 fs-3">
                    {session.bio}
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

export default Details;
