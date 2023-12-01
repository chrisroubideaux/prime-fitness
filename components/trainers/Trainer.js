// trainer component
import Image from 'next/image';

export default function Trainer({ trainers }) {
  return (
    <div className="">
      <Image
        src={trainers.cover}
        className="d-block mx-lg-auto img-fluid image"
        alt="img"
        width={500}
        height={500}
        loading="lazy"
      />
    </div>
  );
}
