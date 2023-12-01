// member component
import Image from 'next/image';

function Member({ members }) {
  return (
    <div className="">
      <Image
        src={members.cover}
        className="d-block mx-lg-auto img-fluid image"
        alt="img"
        width={600}
        height={500}
        loading="lazy"
      />
    </div>
  );
}

export default Member;
