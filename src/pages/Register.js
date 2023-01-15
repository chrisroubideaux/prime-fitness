import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import '../styles/forms.css';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta
          name="description register/login Prime Fitness"
          content="sign up page"
        />
      </Helmet>
      <Navbar />
      <div className="container py-5">
        <hr className="hr " />
        <div className="container col-xxl-8 px-4 py-4 ">
          <div className="row flex-lg-row-reverse align-items-center g-5 ">
            <div className="col-10 col-sm-8 col-lg-6 ">
              <img
                src="../images/jumbotron/jumbotron3.jpg"
                className=" img-fluid image m-4"
                alt="img"
                width="500px"
                height="335px"
                loading="lazy"
              />
            </div>

            <div className="col-lg-6  ">
              <h2 className="fw-bold text-center">Create your Account</h2>

              <form className="form text-center">
                <input
                  className="form-control m-2 fw-bold"
                  required
                  type="name"
                  placeholder="Enter name"
                />
                <input
                  className="form-control m-2 fw-bold"
                  required
                  type="email"
                  placeholder="Enter Email"
                />
                <input
                  className="form-control m-2 fw-bold"
                  required
                  type="password"
                  placeholder="Enter Password"
                />
                <input
                  className="form-control m-2 fw-bold"
                  required
                  type="password"
                  placeholder="Confirm Password"
                />

                <div className="container mt-3">
                  <button className="w-100 btn btn-md" type="submit" to="">
                    Sign up
                  </button>
                </div>
                <div className="container mt-3">
                  <button className="w-100 btn btn-md" type="submit" to="">
                    <i className="fab fa-fw fa-facebook-f text-facebook me-2"></i>
                    Sign up with Facebook
                  </button>
                </div>
                <div className="container mt-3">
                  <button className="w-100 btn btn-md" type="submit" to="">
                    <i className="fab fa-fw fa-google text-google-icon me-2"></i>
                    Sign up with Google
                  </button>
                </div>
                <p className="pt-2 fw-bold">Already have an account?</p>
                <Link className="w-100 btn btn-md" to="/Login">
                  Login
                </Link>

                <p className="mt-5 mb-3 text-white">
                  &copy; Prime Fitness, 2023
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
