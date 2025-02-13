//trainer bio page
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@/components/nav/Navbar';
import Nav from '@/components/trainers/Nav';
import Toolbar from '@/components/trainers/Toolbar';
import Trainer from '@/components/trainers/Trainer';
import Avatar from '@/components/trainers/Avatar';
import Amenities from '@/components/trainers/Amenities';
import Maps from '@/components/maps/Maps';
import Iconbar from '@/components/trainers/Iconbar';
import Footer from '@/components/misc/Footer';

const Details = ({}) => {
  const [trainer, setTrainer] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`https://prime-fitness.onrender.com/trainers/${id}`)
        .then((response) => {
          setTrainer(response.data);
        })
        .catch((error) => {
          console.error('Error fetching session:', error);
        });
    }
  }, [id]);
  return (
    <>
      <Head>
        <title>trainer details</title>
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
          <div className="row py-4">
            <div className="col-md-6">
              <h3 className="fw-bold">{trainer.title}</h3>
              <Avatar trainers={trainer} />
            </div>
            <div className="col-md-6">
              <Amenities trainers={trainer} />
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
};

export default Details;

// Fetch data using server side using getServerSideProps
export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(
      `https://prime-fitness.onrender.com/trainers/${params.id}`
    );
    const trainer = response.data;

    return {
      props: {
        trainer,
      },
    };
  } catch (error) {
    console.error('Error fetching trainer details', error);
    return {
      props: {
        trainer: {},
      },
    };
  }
}
