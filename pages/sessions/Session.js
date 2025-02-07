// menu page
import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/nav/Navbar';
//import Sliders from '@/components/misc/Sliders';
import Iconbar from '@/components/misc/Iconbar';
import Instructors from '@/components/sessions/Instructors';
import Trainers from '@/components/trainers/Trainers';
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';
import Hero from '@/components/sessions/Hero';

const Session = () => {
  const [sessions, setSessions] = useState([]);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/sessions')
      .then((response) => {
        setSessions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching instructors:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3001/trainers')
      .then((response) => {
        setTrainers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching trainers:', error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Prime Fitness | menu page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <div className="layout h-100">
        <div className="">
          <div className="container col-lg-10 m-auto my-5 py-5">
            <h1 className="text-center mt-3 display-4">
              Book a session today!
            </h1>
            <p className="text-gray text-center lead ">
              Here at prime we beleive in flexiablity for every one see below
              which membership fits your need. Sign up for one of our daily
              tours and see why we were voted the number one fitness club in the
              area.
            </p>
          </div>
          <div className="mt-5 container">
            <Iconbar />
          </div>
          <div className="container m-auto my-5 py-5">
            <hr className="hr " />
            <div className="container">
              <h1>Class Instructors</h1>
            </div>
            <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-3 ">
              {sessions.map((sessions) => (
                <div key={sessions.id} className=" py-5 ">
                  <Instructors className="" sessions={sessions} />
                </div>
              ))}
            </div>
          </div>
          <div className=" container pt-5">
            <hr className="hr" />
            <h1 className=" py-3 my-3">Personal Trainers</h1>
            <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-5 ">
              {trainers.map((trainers) => (
                <div key={trainers.id} className="py-3 my-5">
                  <Trainers className="" trainers={trainers} />
                </div>
              ))}
            </div>
          </div>

          <Details />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Session;

// getServerSideProps
export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3001/sessions');
    const sessions = response.data;

    return {
      props: {
        sessions,
      },
    };
  } catch (error) {
    console.error('Error fetching sessions:', error);
    return {
      props: {
        sessions: [],
      },
    };
  }
}
