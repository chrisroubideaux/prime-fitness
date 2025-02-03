// guides details page
import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
// component imports
import Navbar from '@/components/nav/Navbar';
import Nav from '@/components/guides/Nav';
import Avatar from '@/components/guides/Avatar';
import Bookings from '@/components/guides/tours/Bookings';
import Toolbar from '@/components/guides/Toolbar';
import Maps from '@/components/maps/Maps';
import Footer from '@/components/misc/Footer';

export default function Details({}) {
  const [guide, setGuide] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/guides/${id}`)
        .then((response) => {
          setGuide(response.data);
        })
        .catch((error) => {
          console.error('Error fetching guide by id', error);
        });
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Prime Fitness | guide details page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="layout h-100">
        <div className="container-fluid py-5">
          <Nav />
          <div className="row py-3">
            <div className="col-md-6">
              <Avatar guides={guide} />
              <Toolbar guides={guide} />
            </div>
            <div className="col-lg-6">
              <div className="container-fluid ">
                <h4 className="text-center display-5 fs-sm fw-normal">
                  {guide.name}
                </h4>
                <p className=" par d-flex justify-content-end fs-4 lh-2 fw-normal m-2 my-4">
                  {guide.bio}
                </p>
                <div className="d-flex justify-content-end p-2 me-5">
                  <Bookings guides={guide} />
                </div>
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

// getServerSideProps
export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(
      `http://localhost:3001/guides/${params.id}`
    );
    const guide = response.data;

    return {
      props: {
        guide,
      },
    };
  } catch (error) {
    console.error('Error fetching tour guide details', error);
    return {
      props: {
        guide: {},
      },
    };
  }
}
