// trainers page
import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/nav/Navbar';
import Hero from '@/components/trainers/Hero';
import Iconbar from '@/components/misc/Iconbar';
import Trainers from '@/components/trainers/Trainers';
import Features from '@/components/misc/Features';
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';

export default function Trainer() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios
      .get('https://prime-fitness.onrender.com/trainers')
      .then((response) => {
        setTrainers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching instructors:', error);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Prime Fitness | trainers page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="layout h-100">
        <Hero />
        <div className="container col-lg-10 m-auto my-5 py-5">
          <h1 className="text-center mt-3 display-4">Personal Trainers</h1>
          <p className="par text-center lead ">
            Here at prime we beleive in flexiablity for every one see below
            which membership fits your need. Sign up for one of our daily tours
            and see why we were voted the number one fitness club in the area.
          </p>
        </div>
        <div className="mt-5 container">
          <Iconbar />
        </div>
        <div className="container m-auto my-5 py-5">
          <hr className="hr " />
          <div className="container">
            <h1 className="mt-2 fs-3">Personal Trainers</h1>
          </div>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4  ">
            {trainers.map((trainers) => (
              <div key={trainers.id} className=" py-5 ">
                <Trainers className="" trainers={trainers} />
              </div>
            ))}
          </div>
        </div>
        <Features />
        <Details />
        <Footer />
      </div>
    </>
  );
}

// getServerSideProps
export async function getServerSideProps() {
  try {
    const response = await axios.get(
      'https://prime-fitness.onrender.com/trainers'
    );
    const trainers = response.data;

    return {
      props: {
        trainers,
      },
    };
  } catch (error) {
    console.error('Error fetching training sessions:', error);
    return {
      props: {
        trainers: [],
      },
    };
  }
}
