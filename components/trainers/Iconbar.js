// iconbar component

export default function Iconbar({ trainers }) {
  return (
    <ul className="nav list-inline hstack gap-4 flex-wrap justify-content-center mt-4 mt-3">
      <li className="nav-item ">
        <h6 className=" mb-2 fs-sm fw-bold text-white">
          <i className="card-icon fa-solid fa-mobile-screen mt-n1 me-1"></i>
          {trainers.phone}
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold text-white">
          <i className=" card-icon fa-solid fa-envelope mt-n1 me-1"></i>
          {trainers.email}
        </h6>
      </li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold text-white">
          <i className=" card-icon fa-solid fa-briefcase mt-n1 me-1"></i>
          {trainers.experience}
        </h6>
      </li>
    </ul>
  );
}
