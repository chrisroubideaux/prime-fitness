// bio component
import Image from 'next/image';

function Avatar({ owners }) {
  return (
    <div className="card">
      <Image
        src={owners.cover}
        className="img-fluid image"
        alt="img"
        width={600}
        height={500}
        loading="lazy"
      />
    </div>
  );
}

export default Avatar;
