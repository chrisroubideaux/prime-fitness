// Hero component for the apartments page
import Link from 'next/link';
import Search from '../nav/Search';

export default function Hero({}) {
  return (
    <>
      <div className="mt-4 pt-4">
        <div className="trainers">
          <div className="containter text-center mt-5 pt-5">
            <h1 className="pt-5 mt-5">Personal Training</h1>
            <p className="fs-3 text-white">Find the right trainer for you.</p>
          </div>
          <div className="container pt-5">
            <ul className="nav justify-content-center list-unstyled d-flex pt-5 ">
              <li className="ms-3">
                <Link className="text-muted" href="/">
                  <i className="social-icons fab fa-facebook-f m-2"></i>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-muted" href="/">
                  <i className="social-icons fab fa-instagram m-2 "></i>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-muted" href="/">
                  <i className=" social-icons fa-brands fa-youtube m-2"></i>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-muted" href="/">
                  <i className=" social-icons fa-brands fa-tiktok m-2"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
