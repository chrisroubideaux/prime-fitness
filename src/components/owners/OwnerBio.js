import React from 'react';

function Avatar({ owners }) {
  return (
    <div className="card">
      <img
        src={owners.cover}
        className="img-fluid image"
        alt="img"
        width="600"
        height="335"
        loading="lazy"
      />
    </div>
  );
}

export default Avatar;
