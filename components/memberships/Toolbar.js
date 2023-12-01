// toolbar component
import {
  FaCalendar,
  FaDumbbell,
  FaHourglass,
  FaStarHalf,
} from 'react-icons/fa';

function Toolbar({ members }) {
  return (
    <ul className="nav list-unstyled d-flex py-2 overflow-hidden">
      <li className="nav-item ms-3">
        <h6 className="mb-2 fs-sm fw-bold">
          <i className="card-icon fa-solid fa-dumbbell mt-n1 me-2 "></i>
          <FaDumbbell className="card-icon mt-n1 me-2" />
          {members.title}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-calendar-days me-2"></i>
          <FaCalendar className="card-icon mt-n1 me-2" />
          {members.days}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-hourglass-start me-2"></i>
          <FaHourglass className="card-icon mt-n1 me-2" />
          {members.time}
        </h6>
      </li>
      <li className="nav-item ms-3">
        <h6 className=" fw-bold  mb-2">
          <i className="card-icon fa-solid fa-ranking-star me-2"></i>
          <FaStarHalf className="card-icon mt-n1 me-2" />
          {members.level}
        </h6>
      </li>
    </ul>
  );
}

export default Toolbar;
