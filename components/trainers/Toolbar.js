// toolbar component

import {
  FaCalendar,
  FaCheckCircle,
  FaComment,
  FaDumbbell,
  FaHourglass,
  FaLaptop,
  FaUsers,
  FaIdBadge,
} from 'react-icons/fa';

export default function Toolbar({ trainers }) {
  return (
    <div>
      <ul className="nav list-unstyled d-flex py-2 overflow-hidden mt-3">
        <li className="nav-item ms-3">
          <h6 className="fw-normal mb-2 text-white">
            <FaUsers className="card-icon me-2" />
            {trainers.group}
          </h6>
        </li>

        <li className="nav-item ms-3 text-white">
          <h6 className="fw-normal mb-2 text-white">
            <FaCheckCircle className="card-icon me-2" />
            {trainers.level}
          </h6>
        </li>

        <li className="nav-item ms-3">
          <h6 className="fw-normal mb-2 text-white">
            <FaLaptop className="card-icon me-2" />
            {trainers.virtualSession}
          </h6>
        </li>
        <li className="nav-item ms-3">
          <h6 className=" fw-bold mb-2 text-white">
            <FaComment className="card-icon me-2" />
            {trainers.chat}
          </h6>
        </li>
      </ul>
    </div>
  );
}
