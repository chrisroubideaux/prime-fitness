//details page
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Correct import statement
import Head from 'next/head';
// components
import Navbar from '@/components/nav/Navbar';
import Nav from '@/components/sessions/Nav';
import Toolbar from '@/components/sessions/Toolbar';
import Instructor from '@/components/sessions/Instructor';
import Avatar from '@/components/sessions/Avatar';
import Amenities from '@/components/sessions/Amenities';
import Maps from '@/components/maps/Maps';
import Footer from '@/components/misc/Footer';
// data
//import sessions from '@/data/sessions';

function Details({}) {
  //  const session = sessions.find((session) => session.id === params.id);

  const [session, setSession] = useState([]);
  const router = useRouter(); // Use the useRouter hook to access route parameters
  const { id } = router.query; // Get the 'id' parameter from the route

  useEffect(() => {
    if (id) {
      // Ensure 'id' is defined before making the API request
      axios
        .get(`http://localhost:3001/sessions/${id}`)
        .then((response) => {
          setSession(response.data);
        })
        .catch((error) => {
          console.error('Error fetching session:', error);
        });
    }
  }, [id]);
  return (
    <>
      <Head>
        <title>session details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* page layout */}
      <div className="layout h-100">
        <div className="container my-5">
          <div className="container-fluid">
            <Nav />
          </div>
          <div className="mt-3">
            <div className="container">
              <h3>{session.title}</h3>
            </div>
            <Toolbar sessions={session} />
            <div className="row gx-2">
              <div className="col-md-8">
                <Instructor sessions={session} />
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-end">
                  <p className="text-white lh-3 fs-5 m-1">
                    {session.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="container mt-5 py-4 my-4">
              <hr className="hr w-25 mx-auto pt-5" />
              <div className="row">
                <div className="col-md-6">
                  <div className="container">
                    <h3 className="fw-bold me-5 text-center">Amenities</h3>
                  </div>
                  <div className=" ">
                    <Amenities sessions={session} />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="fw-bold text-center">Locations</h3>
                  <Maps />
                  <div className="container d-flex justify-content-end fs-6 m-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row py-4">
              <div className="col-md-6">
                <h4 className=" text-center fw-normal text-white">
                  Personal Trainer: {session.name}
                </h4>
                <Avatar sessions={session} />
              </div>
              <div className="col-md-6">
                <h2 className="text-center fw-bold">About</h2>
                <div className="d-flex justify-content-end">
                  <p className="text-white lh-2 fs-5 m-1">{session.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;

// Fetch data using server side using getServerSideProps
export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(
      `http://localhost:3001/sessions/${params.id}`
    );
    const session = response.data;

    return {
      props: {
        session,
      },
    };
  } catch (error) {
    console.error('Error fetching session details:', error);
    return {
      props: {
        session: {},
      },
    };
  }
}