// membership card component
import Link from 'next/link';

export default function Card({ members }) {
  return (
    <div className="">
      <Link className="card-link" href={`/members/${members._id}`}>
        <div className="card ">
          <img src={members.image} className="img  " loading="lazy" alt="..." />
          <div className="carousel-caption pb-5 mt-5">
            <h4 className=" fw-bold text-center mb-5 pb-5 text-light">
              {members.title}
            </h4>
            <h5 className="text-center fw-bold text-white pt-5 my-5">View</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
