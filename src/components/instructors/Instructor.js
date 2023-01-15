import React from 'react';

function Avatar({ sessions }) {
  return (
    <div className="">
      <img
        src={sessions.cover}
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
