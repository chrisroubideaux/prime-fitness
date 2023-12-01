// trainers component
import Link from 'next/link';

export default function Card({ trainers }) {
  return (
    <div className="">
      <Link className="card-link" href={`/trainers/${trainers._id}`}>
        <div className="card ">
          <img
            src={trainers.image}
            className="img opacity-75"
            loading="lazy"
            alt="..."
          />
          <div className="carousel-caption pb-5 mt-5">
            <h3 className="text-center mb-5 pb-5 text-light">
              {trainers.title}
            </h3>
            <h6 className="text-center fs-5 fw-bold pt-5 my-5">View</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
