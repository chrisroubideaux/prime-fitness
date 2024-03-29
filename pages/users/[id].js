// profile page

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
// component imports
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/misc/Footer';
import User from '@/components/profile/User';

export default function UserInfo({}) {
  const [user, setUser] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fitness-server-c1a2fb04992c.herokuapp.com/users/${id}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error('Error fetching session:', error);
        });
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Prime Fitness | profile page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container py-5">
        <hr className="hr " />

        <div className="layout">
          <div className="container-fluid pt-5">
            <div className="container-fluid pt-5">
              {/* sidebar */}
              <div className="row">
                <aside className="col-lg-3 col-md-4 border-end pb-5 mt-n5">
                  <div className="position-sticky top-0">
                    <div className="text-center pt-5">
                      <div className="d-table position-relative mx-auto mt-2 mt-lg-4 pt-5 mb-3">
                        {/* test image */}
                        <button className="btn btn-md btn-accent d-block w-75 m-auto mt-3">
                          Refresh
                        </button>
                      </div>

                      {/* Display other user information */}
                    </div>
                  </div>
                </aside>
              </div>
              {/* main content */}
              <div className="col-lg-9 col-md-8">
                <User users={user} />

                {/*  */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
