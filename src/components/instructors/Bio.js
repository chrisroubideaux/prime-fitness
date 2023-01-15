import React from 'react';

function Bio({ sessions }) {
  return (
    <div className="">
      <img
        src={sessions.photo}
        className="d-block mx-lg-auto img-fluid image"
        alt="img"
        width="600"
        height="500"
        loading="lazy"
      />
    </div>
  );
}

export default Bio;
