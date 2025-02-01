// toolbar component

export default function Toolbar({ sessions }) {
  return (
    <div>
      <ul className="nav list-unstyled d-flex py-2 overflow-hidden mt-3">
        <li className="nav-item ms-3">
          <h6 className=" fw-bold mb-2">
            <i className="card-icon fa-solid fa-users me-2"></i>
            {sessions.group}
          </h6>
        </li>
        <li className="nav-item ms-3">
          <h6 className=" fw-bold mb-2">
            <i className="card-icon fa-solid fa-ranking-star me-2"></i>
            {sessions.level}
          </h6>
        </li>

        <li className="nav-item ms-3">
          <h6 className=" fw-bold mb-2">
            <i className="card-icon fa-solid fa-laptop me-2"></i>
            {sessions.virtualSession}
          </h6>
        </li>
        <li className="nav-item ms-3">
          <h6 className=" fw-bold mb-2">
            <i className="card-icon fa-solid fa-message me-2"></i>
            {sessions.chat}
          </h6>
        </li>
      </ul>
    </div>
  );
}
