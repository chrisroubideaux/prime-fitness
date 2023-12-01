// bio component

function Avatar({ guides }) {
  return (
    <div className="">
      <img
        src={guides.cover}
        className="d-block mx-lg-auto img-fluid image"
        alt="img"
        width="600"
        height="500"
        loading="lazy"
      />
    </div>
  );
}

export default Avatar;
