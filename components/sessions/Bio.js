// bio component for instructors

export default function Bio({ sessions }) {
  return (
    <div>
      <div className="media" style={{ maxWidth: '540px' }}>
        <img src={sessions.image} alt="mls" className="profile  " />
        <div className="container py-2">
          <h5 className=" mb-2 fs-sm fw-bold">{sessions.title}</h5>
          <h6 className=" fw-bold">{sessions.name}</h6>
          <h6 className=" mb-2 fs-sm fw-bold">
            <i className="card-icon fa-solid fa-mobile-screen mt-n1 me-2"></i>
            {sessions.phone}
          </h6>
          <h6 className=" mb-2 fs-sm fw-bold">
            <i className=" card-icon fa-solid fa-envelope mt-n1 me-2"></i>
            {sessions.email}
          </h6>
          <h6 className=" mb-2 fs-sm fw-bold">
            <i className=" card-icon fa-solid fa-briefcase mt-n1 me-2"></i>
            Years Active: {sessions.expereince}
          </h6>
        </div>
      </div>
    </div>
  );
}
