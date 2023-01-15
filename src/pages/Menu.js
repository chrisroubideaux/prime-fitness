import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar/Navbar';
import Slider from '../components/navbar/Slider';
import Iconbar from '../components/misc/Iconbar';
import Details from '../components/misc/Details';
import Testimonials from '../components/misc/Testimonials';
import Footers from '../components/misc/Footers';
import banners from '../data/banners';
import Features from '../components/misc/Features';

export default function Menu() {
  return (
    <>
      <Helmet>
        <title>Prime Fitness| Menu page </title>
        <meta name="description fitness web app  menu page" content="/" />
      </Helmet>

      <div className="">
        <Navbar />
        {banners.map((banners) => (
          <Slider className="py-2" key={banners.id} banners={banners} />
        ))}
        <div className="container col-lg-10 m-auto my-5 py-5">
          <h1 className="text-center text-white mt-3 display-4">
            Welcome to Prime
          </h1>
          <p className="text-white text-center lead ">
            Here at prime we beleive in flexiablity for every one see below
            which membership fits your need. Sign up for one of our daily tours
            and see why we were voted the number one fitness club in the area.
          </p>
        </div>
        <div className="mt-5 container">
          <Iconbar />
          <hr className="hr mt-5 " />
        </div>

        <Features />
        <Details />
        <Testimonials />

        <Footers />
      </div>
    </>
  );
}
