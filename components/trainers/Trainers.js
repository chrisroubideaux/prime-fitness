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
            <h3 className="text-center pb-4 text-light">{trainers.title}</h3>
            <h4 className="text-center fs-3 fw-bold pt-5 my-5 text-light">
              View
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
}
