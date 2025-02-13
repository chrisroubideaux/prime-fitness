//details page
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
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

function Details({}) {
  const [session, setSession] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
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
        <div className="container-fluid my-5">
          <div className="container-fluid">
            <Nav />
          </div>

          <div className="row ">
            <div className="col-md-6">
              <h4 className="fw-bold ">Class: {session.title}</h4>
              <Avatar sessions={session} />
            </div>
            <div className="col-md-6">
              <div className="mt-1">
                <Amenities sessions={session} />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <h4 className="text-center display-5 mt-2 fs-sm pt-3 fw-normal">
            Locations
            <Maps />
          </h4>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Details;

//getServerSideProps
export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(
      `https://prime-fitness.onrender.com/sessions/${params.id}`
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
