import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/nav/Navbar';
import jumbotron3 from '@/public/images/jumbotron/jumbotron3.jpg';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'password' || name === 'confirmPassword') {
      if (name === 'confirmPassword' && value !== formData.password) {
        setPasswordError('Passwords must match.');
      } else if (
        name === 'password' &&
        formData.confirmPassword !== '' &&
        value !== formData.confirmPassword
      ) {
        setPasswordError('Passwords must match.');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords must match.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/users',
        formData
      );

      if (response.status === 201) {
        const { token } = response.data;
        localStorage.setItem('token', token);

        if (response.data.redirectTo) {
          router.push(response.data.redirectTo);
        }

        setSuccessMessage('Registration successful!');
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('Internal server error');
    }
  };
  // Facebook registeration
  const handleFacebookRegister = () => {
    const facebookOAuthURL = 'http://localhost:3001/auth/facebook/register';

    window.open(
      facebookOAuthURL,
      'Facebook OAuth',
      'align-item-center',
      'width=300,height=300'
    );
  };
  // Google registration
  const handleGoogleRegister = () => {
    const googleOAuthURL = 'http://localhost:3001/auth/google/login';
    window.open(
      googleOAuthURL,
      'Google OAuth',
      'align-item-center',
      'width=300,height=300'
    );
  };

  // end of oAuth registration function
  return (
    <>
      <Head>
        <title>Prime Fitness | register page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className=" layout h-100">
        <hr className="hr " />
        <div className="container col-xxl-8 px-4 py-5 mt-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 ">
            <div className="col-10 col-sm-8 col-lg-6 ">
              <Image
                src={jumbotron3}
                className=" img-fluid image mb-5"
                alt="img"
                width={500}
                height={335}
                loading="lazy"
              />
            </div>

            <div className="col-lg-6">
              <h4 className=" text-center">Create your Account</h4>
              <p className=" text-center">
                Already have an account?{' '}
                <Link className="btn btn-lg badge" href="/login/Login">
                  Login.
                </Link>
              </p>
              <hr />
              <ul className="nav justify-content-center list-unstyled d-flex ">
                <ul
                  className=" text-dark  justify-content-center "
                  style={{
                    fontSize: '0.85rem',
                    lineHeight: '1.4rem',

                    paddingLeft: '1.5rem',
                  }}
                >
                  <li className="text-dark">
                    Password must contain at least{' '}
                    <strong>10 characters</strong>.
                  </li>
                  <li className="text-dark">
                    At least <strong>1 special character</strong> (e.g.,{' '}
                    <code>@</code>, <code>#</code>, <code>$</code>).
                  </li>
                  <li className="text-dark">
                    At least <strong>1 number</strong> (e.g., <code>1</code>,{' '}
                    <code>2</code>, <code>3</code>).
                  </li>
                </ul>
              </ul>
              <form className="form text-center" onSubmit={handleSubmit}>
                <input
                  className="form-control m-2 fw-bold"
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                />
                <input
                  className="form-control m-2 fw-bold"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                />

                <input
                  className={`form-control m-2 fw-bold ${
                    passwordError ? 'is-invalid' : ''
                  }`}
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                />
                <input
                  className={`form-control m-2 fw-bold ${
                    passwordError ? 'is-invalid' : ''
                  }`}
                  required
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
                {passwordError && (
                  <p className="text-danger fw-bold">{passwordError}</p>
                )}
                <button className="w-100 btn bt-sm" type="submit">
                  Register
                </button>
                {/** */}
                {passwordError && (
                  <p className="text-danger fw-bold">{passwordError}</p>
                )}
                <div className="">
                  <h6 className="text-muted text-center pt-3">
                    or register with
                  </h6>
                  <ul className="nav justify-content-center list-unstyled d-flex pt-2 ">
                    <li className="ms-3">
                      <button
                        className="text-muted bg-transparent border-0"
                        onClick={handleFacebookRegister}
                      >
                        <i className="social-icons fs-2 fa-brands fa-facebook mt-1"></i>
                      </button>
                    </li>
                    <li className="ms-3">
                      <button
                        className="text-muted bg-transparent border-0"
                        onClick={handleGoogleRegister}
                      >
                        <i className="social-icons fs-2 fa-brands fa-google mt-1"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                {successMessage && (
                  <p className="text-success">{successMessage}</p>
                )}

                <p className="par mt-5 mb-3 text-dark">
                  &copy; Prime Fitness, 2025
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
