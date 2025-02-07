// membership card component
import Link from 'next/link';

export default function Card({ members }) {
  return (
    <div className="">
      <Link className="card-link" href={`/members/${members._id}`}>
        <div className="card me-3">
          <img
            src={members.image}
            className="media "
            loading="lazy"
            alt="..."
          />
          <div className="carousel-caption pb-5 mt-5">
            <h4 className="fw-bold text-center mb-5 pb-5 text-light">
              {members.title}
            </h4>
            <h4 className="fw-bold text-center pt-5 my-5 fw-bold  text-light">
              View Plan
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
}
