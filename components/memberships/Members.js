// membership card component
import Link from 'next/link';

export default function Card({ members }) {
  return (
    <div className="">
      <Link className="card-link" href={`/members/${members._id}`}>
        <div className="card ">
          <img src={members.image} className="img " loading="lazy" alt="..." />
          <div className="carousel-caption pb-5 mt-5">
            <h4 className="fw-bold text-center mb-5 pb-5 text-light">
              {members.title}
            </h4>
            <h6 className="fw-bold text-center fs-5 fw-bold pt-5 my-5 text-light">
              View Plan
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
