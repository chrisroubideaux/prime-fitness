// Hero component
import Link from 'next/link';
import Search from '../nav/Search';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Hero({}) {
  return (
    <>
      <div className="mt-4 pt-4">
        <div className="owners">
          <div className="containter text-center mt-5 pt-5">
            <h1 className="pt-5 mt-5">Owners</h1>
            <p className=" par fs-3">Locally owned and operated since 2019</p>
          </div>

          <div className="container pt-5">
            <ul className="nav justify-content-center list-unstyled d-flex">
              <li className="ms-3">
                <Link className="text-muted" href="/">
                  <FaFacebook className="social-icons m-2" />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-muted" href="/">
                  <FaInstagram className="social-icons m-2" />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-muted" href="/">
                  <FaYoutube className="social-icons m-2" />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="text-muted" href="/">
                  <FaTiktok className="social-icons m-2" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
