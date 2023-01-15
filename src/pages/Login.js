import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import '../styles/forms.css';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description register/login Prime Fitness"
          content="login up page"
        />
      </Helmet>
      <Navbar />
      <div className="">
        <div className="container py-5">
          <hr className="hr " />
          <div className="container col-xxl-8 px-4 py-5 ">
            <div className="row flex-lg-row-reverse align-items-center g-5">
              <div className="col-10 col-sm-8 col-lg-6 mb-5">
                <img
                  src="../images/jumbotron/jumbotron2.jpg"
                  className=" img-fluid image"
                  alt="img"
                  width="500px"
                  height="335px"
                  loading="lazy"
                />
              </div>

              <div className="col-lg-6 mb-5 ">
                <h2 className="fw-bold text-center">Login to your Account</h2>
                <form className="form text-center">
                  <input
                    className="form-control m-2 fw-bold"
                    type="username"
                    placeholder="username"
                  />
                  <input
                    className="form-control m-2 fw-bold"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="container mt-3">
                    <Link className="w-100 btn btn-md" type="submit" to="/">
                      Login
                    </Link>
                  </div>
                  <div className="container mt-2">
                    <button className="w-100 btn btn-md" type="submit" to="">
                      <i className="fab fa-fw fa-google text-google-icon me-2"></i>
                      Login with Google
                    </button>
                  </div>
                  <div className="container mt-2">
                    <button className="w-100 btn btn-md" type="submit" to="">
                      <i className="fab fa-fw fa-facebook-f text-facebook me-2"></i>
                      Login with Facebook
                    </button>
                  </div>
                  <div className="container mt-3">
                    <p className="mt-1 fw-bold">
                      Dont have an account? sign up now!
                    </p>
                    <Link className="w-100 btn btn-md" to="/Register">
                      Register
                    </Link>
                  </div>
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
