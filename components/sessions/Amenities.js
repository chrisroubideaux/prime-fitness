// amenities component

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

export default function Amenities({ sessions }) {
  return (
    <div>
      <ul className="list-group pt-2 pb-4 m-4 ">
        <h6 className="mb-0 p-3 pb-1 fw-semi-bold ">
          <FaDumbbell className="card-icon fa-solid fa-dumbbell mt-n1 me-2 " />
          {sessions.instructor}
        </h6>

        <h6 className="mb-0 p-3 pb-1 fw-semi-bold">
          <FaCalendar className="card-icon me-2" />
          {sessions.days}
        </h6>
        <h6 className="mb-0 p-3 pb-1 fw-semi-bold ">
          <FaHourglass className="card-icon me-2" />
          {sessions.time}
        </h6>
        <h6 className="mb-0 p-3 pb-1 fw-semi-bold">
          <FaUsers className="card-icon me-2" />
          {sessions.group}
        </h6>
        <h6 className="mb-0 p-3 pb-1 fw-semi-bold">
          <FaCheckCircle className="card-icon me-2" />
          {sessions.level}
        </h6>
        <h6 className="mb-0 p-3 pb-1 fw-semi-bold">
          <FaIdBadge className="card-icon me-2" />
          {sessions.memberships}
        </h6>
        <h6 className="mb-0 p-3 pb-1 fw-semi-bold">
          <FaLaptop className="card-icon me-2" />
          {sessions.virtualSession}
        </h6>
        <h6 className="mb-0 p-3 pb-1 fw-semi-bold">
          <FaComment className="card-icon me-2" />
          {sessions.chat}
        </h6>
      </ul>
    </div>
  );
}
