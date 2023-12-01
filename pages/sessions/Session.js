// menu page
import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
// components
import Navbar from '@/components/nav/Navbar';
import Sliders from '@/components/misc/Sliders';

import Iconbar from '@/components/misc/Iconbar';
import Instructors from '@/components/sessions/Instructors';
import Features from '@/components/misc/Features';
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';
// data
import banners from '@/data/banners';
//import sessions from '@/data/sessions';

const Session = () => {
  const [sessions, setSessions] = useState([]); // initialize state variable for instructors

  useEffect(() => {
    // Make a GET request to fetch intructors from your server
    axios
      .get('http://localhost:3001/sessions')
      .then((response) => {
        // Update the state with the fetched intructors
        setSessions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching instructors:', error);
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
      <div className="layout h-100">
        <div className="">
          {banners.map((banners) => (
            <Sliders key={banners.id} banners={banners} />
          ))}
          <div className="container col-lg-10 m-auto my-5 py-5">
            <h1 className="text-center text-white mt-3 display-4">
              Book a session today!
            </h1>
            <p className="text-white text-center lead ">
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
              <h2>Class Instructors</h2>
            </div>
            <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 py-5 mt-4">
              {sessions.map((sessions) => (
                <div key={sessions.id} className=" py-5 ">
                  <Instructors className="" sessions={sessions} />
                </div>
              ))}
            </div>
          </div>
          <Features />
          <Details />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Session;

// Fetch data using server side using getServerSideProps
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
