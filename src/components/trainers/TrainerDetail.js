import React from 'react';

function Avatar({ trainers }) {
  return (
    <div className="">
      <h3 className=" text-muted fw-bold">{trainers.name}</h3>

      <img
        src={trainers.photo}
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
