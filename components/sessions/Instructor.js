// instructor component
import Image from 'next/image';

export default function Instructor({ sessions }) {
  return (
    <div className="container">
      <Image
        src={sessions.cover}
        className="d-block img-fluid image "
        alt="img"
        width={500}
        height={500}
        loading="lazy"
      />
    </div>
  );
}
