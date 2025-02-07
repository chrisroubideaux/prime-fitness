// profile page
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Navbar from '@/components/nav/Navbar';
import Tab from '@/components/profile/Tab';
import Sidebar from '@/components/profile/Sidebar';
import Bio from '@/components/profile/Bio';
import Notifications from '@/components/profile/Notifications';
import Calendar from '@/components/profile/Calendar';

export default function User() {
  const [user, setUser] = useState([]);
  const [activeComponent, setActiveComponent] = useState('PersonalInfo');
  //const [message, setMessage] = useState([]);
  const [appointment, setAppointment] = useState([]);
  const [guideId, setGuideId] = useState('');
  const router = useRouter();
  const { id } = router.query;

  // Fetch user data
  useEffect(() => {
    if (id) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/users/${id}`);
          console.log('User data:', response.data);
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [id]);

  // Fetch guide data
  useEffect(() => {
    const fetchGuideData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/guides');
        if (response.data.length > 0) {
          setGuideId(response.data[0]._id);
        }
      } catch (error) {
        console.error('Error fetching tour guide data:', error);
      }
    };
    fetchGuideData();
  }, []);

  // Fetch appointments
  useEffect(() => {
    const fetchAppointment = async () => {
      const authToken = localStorage.getItem('authToken') || token;
      if (!authToken) {
        console.error('User is not logged in.');
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:3001/appointments/${id}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        setAppointment(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointment();
  }, [id]);

  // render component
  const renderComponent = () => {
    console.log('User data for Bio:', user);
    switch (activeComponent) {
      case 'Calendar':
        return (
          <Calendar
            appointments={appointment}
            setActiveComponent={setActiveComponent}
          />
        );

      case 'Notifications':
        return (
          <Notifications
            appointments={appointment}
            setActiveComponent={setActiveComponent}
          />
        );

      default:
        return <Bio users={user} />;
    }
  };
  return (
    <>
      <Head>
        <title>Prime Fitness | User Profile page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="layout h-100 mt-5 py-5">
        {/*<Navbar/> */}
        <Tab setActiveComponent={setActiveComponent} />
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-lg-4 col-xxl-3">
              <Sidebar users={user} setActiveComponent={setActiveComponent} />
            </div>
            <div className="col-lg-8 col-xxl-9">{renderComponent()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(
      `http://localhost:3001/users/${params.id}`
    );
    const user = response.data;

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.error('Error fetching user details', error);
    return {
      props: {
        user: {},
      },
    };
  }
}
