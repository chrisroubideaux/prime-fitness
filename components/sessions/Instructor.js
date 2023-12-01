// instructor component
import Image from 'next/image';

export default function Instructor({ sessions }) {
  return (
    <div className="">
      <Image
        src={sessions.cover}
        className="d-block mx-lg-auto img-fluid image"
        alt="img"
        width={500}
        height={500}
        loading="lazy"
      />
    </div>
  );
}
