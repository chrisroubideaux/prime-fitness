// bio component for instructors
import Image from 'next/image';

export default function Bio({ trainers }) {
  return (
    <>
      <div className="">
        <Image
          src={trainers.photo}
          className="d-block mx-lg-auto img-fluid image"
          alt="img"
          width="400"
          height="500"
          loading="lazy"
        />
      </div>
    </>
  );
}
