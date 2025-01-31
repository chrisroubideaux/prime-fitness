// membership page
import { useState, useEffect } from 'react';

import axios from 'axios';
// component imports
import Navbar from '@/components/nav/Navbar';
import Head from 'next/head';
import Hero from '@/components/memberships/Hero';
import Iconbar from '@/components/misc/Iconbar';
import Members from '@/components/memberships/Members';
import Features from '@/components/misc/Features';
import Details from '@/components/misc/Details';
import Footer from '@/components/misc/Footer';

export default function Memberships() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/members')
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching instructors:', error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Prime Fitness | memberships page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="layout">
        <Hero />
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
          <hr className="hr" />
          <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-md-4 g-1 py-5">
            {members.map((members) => (
              <div key={members.id} className=" py-5 ">
                <Members members={members} />
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
    const response = await axios.get('http://localhost:3001/members');
    const members = response.data;

    return {
      props: {
        members,
      },
    };
  } catch (error) {
    console.error('Error fetching memberships', error);
    return {
      props: {
        members: [],
      },
    };
  }
}
