// login page
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
//component imports
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/nav/Navbar';
import jumbotron2 from '@/public/images/jumbotron/jumbotron2.jpg';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the login endpoint using Axios
      const response = await axios.post(
        'http://localhost:3001/auth/login',
        formData
      );

      if (response.status === 200) {
        // Redirect to the profile page after successful login
        window.location.href = '/user';
      } else {
        const data = response.data;
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError('Internal server error');
    }
  };

  // Add Google login function
  const handleGoogleLogin = () => {
    // Redirect the user to Google OAuth login
    window.location.href = 'http://localhost:3001/auth/google/login';
  };

  // Facebook registration function
  const handleFacebookLogin = () => {
    // Define the Facebook OAuth registration URL
    const facebookOAuthURL = 'http://localhost:3001/auth/facebook/register';

    // Open the Facebook OAuth URL in a popup window
    window.open(
      facebookOAuthURL,
      'Facebook OAuth',
      'align-item-center',
      'width=300,height=300'
    );
  };
  return (
    <>
      <Head>
        <title>Prime Fitness | login page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="">
        <div className="container py-5">
          <hr className="hr " />
          <div className="container col-xxl-8 px-4 py-5 ">
            <div className="row flex-lg-row-reverse align-items-center g-5">
              <div className="col-10 col-sm-8 col-lg-6 mb-5">
                <Image
                  src={jumbotron2}
                  className=" img-fluid image"
                  alt="img"
                  width={500}
                  height={335}
                  loading="lazy"
                />
              </div>

              <div className="col-lg-6 mb-5 ">
                <h2 className="fw-bold text-center">Login to your Account</h2>

                <p className=" text-center text-white">
                  {" Don't have an account?"}
                  <Link
                    className="btn btn-lg badge me-1"
                    href="/register/Register"
                  >
                    Register
                  </Link>
                </p>
                <form className="form text-center" onSubmit={handleSubmit}>
                  <input
                    className="form-control m-2 fw-bold"
                    type="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-control m-2 fw-bold"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="container mt-3">
                    <button className="w-100 btn btn-md" type="submit">
                      Login
                    </button>
                  </div>
                  <div className="container mt-2">
                    <button
                      className="w-100 btn btn-md"
                      type="submit"
                      onClick={handleGoogleLogin}
                    >
                      <i className="fab fa-fw fa-google text-google-icon me-2"></i>
                      Login with Google
                    </button>
                  </div>
                  <div className="container mt-2">
                    <button
                      className="w-100 btn btn-md"
                      type="submit"
                      onClick={handleFacebookLogin}
                    >
                      <i className="fab fa-fw fa-facebook-f text-facebook me-2"></i>
                      Login with Facebook
                    </button>
                  </div>
                  <div className="container mt-3"></div>
                  <p className=" mt-5 mb-3 text-white">
                    &copy; Prime Fitness, 2023
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
