/* eslint-disable @next/next/no-img-element */
// avatar component
import Image from 'next/image';

export default function Avatar({ sessions }) {
  return (
    <div className="">
      <Image
        src={sessions.photo}
        className="d-block mx-lg-auto img-fluid image"
        alt="img"
        width={500}
        height={500}
        loading="lazy"
      />
    </div>
  );
}
