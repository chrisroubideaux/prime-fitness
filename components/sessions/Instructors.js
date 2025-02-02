// instructors component
import Link from 'next/link';

export default function Card({ sessions }) {
  return (
    <div className="">
      <Link className="card-link" href={`/sessions/${sessions._id}`}>
        <div className="card ">
          <img
            src={sessions.image}
            className="img opacity-75 "
            loading="lazy"
            alt="..."
          />
          <div className="carousel-caption pb-5 mt-5">
            <h4 className=" fw-bold text-center mb-5 pb-5 text-light">
              {sessions.title}
            </h4>
            <h5 className="text-center fw-bold text-white pt-5 my-5">View</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
