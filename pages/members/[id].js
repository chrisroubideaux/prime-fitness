// membership details page
import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Navbar from '@/components/nav/Navbar';
import Nav from '@/components/memberships/Nav';
import Amenities from '@/components/memberships/Amenities';
import Member from '@/components/memberships/Member';
import Checkout from '@/components/payments/Checkout';
import Footer from '@/components/misc/Footer';

// react icon imports
import { FaAward, FaStar } from 'react-icons/fa';

export default function Details({ params }) {
  const [member, setMember] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/members/${id}`)
        .then((response) => {
          setMember(response.data);
        })
        .catch((error) => {
          console.error('Error fetching membership by id', error);
        });
    }
  }, [id]);
  return (
    <>
      <Head>
        <title>membership details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="layout py-2">
        <div className="container py-5">
          <div className="py-2">
            <Nav />
          </div>
        </div>
        {/* section */}
        <section className=" shadow-lg rounded-3 px-4 py-lg-4  ">
          <div className="py-lg-3 py-2 px-lg-3">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="d-flex align-items-center flex-wrap text-nowrap mb-sm-4 mb-3 fs-sm mx-2">
                  <h6 className="mb-2 me-sm-3 me-2 fs-6 ">
                    Membership Type: {member.title}
                  </h6>
                  <h6 className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start fs-6">
                    <FaStar className=" me-1 fs-base mt-n1 align-middle" />
                    {member.rating}
                  </h6>
                  <h6 className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start fs-6">
                    <FaAward className=" me-1 fs-base mt-n1 align-middle" />
                    {member.verified}
                  </h6>
                </div>
                <div className="position-relative rounded-3 overflow-hidden mb-lg-4 mb-2">
                  <Member members={member} />
                </div>
              </div>
              {/*section */}
              <div className="col-lg-6">
                <div className="ps-xl-5 ps-lg-3">
                  <div className="row row-cols-sm-2 row-cols-1 gy-3 gx-4 mb-4 pb-md-2">
                    <div className="col">
                      <div className=" position-relative h-100">
                        <h6 className=" fs-5">Amenities</h6>
                        <Amenities members={member} />
                      </div>
                    </div>
                    <div className="col">
                      <div className=" position-relative h-100">
                        <h6 className=" fs-5">Description</h6>
                        <p className="par">{member.description}</p>
                      </div>
                    </div>
                    {/*section */}
                  </div>
                  <div className="row row-cols-sm-2 row-cols-1 g-sm-4 g-3 mb-4">
                    <div className="col">
                      <h6 className="mt-2 ">
                        {`today's`} {member.price}
                      </h6>
                    </div>
                    <div className="col">
                      <Checkout members={member} />
                    </div>
                  </div>
                </div>
              </div>
              {/*section */}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

// getServerSideProps
export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(
      `http://localhost:3001/members/${params.id}`
    );
    const member = response.data;

    return {
      props: {
        member,
      },
    };
  } catch (error) {
    console.error('Error fetching trainer details', error);
    return {
      props: {
        member: {},
      },
    };
  }
}
