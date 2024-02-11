// avatar component
import Image from 'next/image';

export default function Avatar({ guides }) {
  return (
    <div className="">
      <Image
        src={guides.profile}
        className="d-block mx-lg-auto img-fluid image"
        alt="img"
        width={500}
        height={500}
        loading="lazy"
      />
    </div>
  );
}
