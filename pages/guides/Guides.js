// guides details page
import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
// component imports
import Navbar from '@/components/nav/Navbar';
import Hero from '@/components/guides/Hero';
import Iconbar from '@/components/misc/Iconbar';
import Details from '@/components/misc/Details';
import Guides from '@/components/guides/Guides';
import Footer from '@/components/misc/Footer';
import Service from '@/components/misc/Service';

export default function Guide() {
  const [guides, setGuides] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    // Fetch tour guide data
    axios
      .get('https://prime-fitness.onrender.com/guides')
      .then((response) => {
        setGuides(response.data);
      })
      .catch((error) => {
        console.error('Error fetching apartments:', error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Prime Fitness | tour guide page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="layout">
        <Hero />
        <div className="container py-5 mt-5">
          <div className="container col-lg-10 ">
            <h1 className="text-center mt-3 display-4 pt-3 ">
              Schedule a Tour
            </h1>
            <p className="par text-center lead">
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
          <h1 className=" text-center py-5 my-5">Tour Guides</h1>
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-md-4 g-4 py-5">
            {guides.slice(0, 8).map((guide, index) => (
              <div key={guide.id || `guide-${index}`} className="">
                <Guides guides={guide} />
              </div>
            ))}
          </div>
          <div className="container">
            <hr className="hr" />
            <h1 className=" text-center py-5 my-5">Testimonials</h1>
            <Service />
          </div>
          <Details />
        </div>
        <Footer />
      </div>
    </>
  );
}
