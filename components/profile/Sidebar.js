// Sidebar component
import Link from 'next/link';
import Image from 'next/image';
import {
  FaUser,
  FaHouseUser,
  FaSearch,
  FaProjectDiagram,
  FaRegHandPeace,
} from 'react-icons/fa';

export default function Sidebar({ setActiveComponent, users }) {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3001/users/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        window.location.href = data.redirectTo || '/login';
      } else {
        const errorData = await response.text();
        console.error('Logout failed:', errorData);
        alert('Failed to log out. Please try again.');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred during logout. Please try again.');
    }
  };

  return (
    <div className="d-flex flex-column p-4 gap-4 py-md-3">
      <div className="card mb-5">
        <div className="card-body" style={{ minWidth: '350px' }}>
          <div className="d-none d-lg-block mb-5">
            <div className="avatar avatar-xxl avatar-circle mb-3">
              <Image
                className="small-avatar avatar rounded-circle"
                src={users.image}
                width={60}
                height={60}
                alt=""
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Verified user"
              />
            </div>
            <h4 className="card-title mb-0">{users.name}</h4>
            <p className="card-text small">{users.email}</p>
            <span className="text-cap">
              <h4>Account</h4>
            </span>
            <ul className=" nav d-flex flex-column text-start mb-4 fw-bold">
              <li className="nav-item">
                <Link className="nav-link fs-5" href={`/users/${users._id}`}>
                  <FaUser className="me-1 fs-5 " />
                  Bio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" href="/sales/sales">
                  <FaSearch className="fs-5 me-1" />
                  Search
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fs-5" href="/calendar/calendar">
                  <FaProjectDiagram className="fs-5 fa-solid" /> Profile
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" href="#" onClick={handleLogout}>
                  <FaRegHandPeace className="fs-5 me-1" />
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
