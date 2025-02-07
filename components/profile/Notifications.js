// notifications component
import { useState, useEffect } from 'react';
import { format, isValid } from 'date-fns';
import axios from 'axios';

export default function Notifications({ setActiveComponent, userId }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) throw new Error('User is not logged in');

        const response = await axios.get('http://localhost:3001/appointments', {
          headers: { Authorization: `Bearer ${authToken}` },
        });

        setAppointments(response.data.appointments);
      } catch (err) {
        setError(err.response?.data?.error || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, [userId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isValid(date) ? format(date, 'MM/dd/yyyy (EEEE)') : 'Invalid Date';
  };

  const handleDeleteClick = (appointmentId) => {
    setAppointmentToDelete(appointmentId);
    setShowToast(true);
  };

  const confirmDelete = async () => {
    if (!appointmentToDelete) return;

    try {
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        console.error('User is not authenticated');
        return;
      }

      // Call to delete appointment
      await axios.delete(
        `http://localhost:3001/appointments/${appointmentToDelete}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      // Update local state after successful deletion
      setAppointments((prevAppointments) =>
        prevAppointments.filter(
          (appointment) => appointment._id !== appointmentToDelete
        )
      );

      setAppointmentToDelete(null);
      setShowToast(false);
      alert('Appointment successfully canceled.');
    } catch (err) {
      console.error(
        'Error deleting appointment:',
        err.response?.data || err.message
      );
      alert('Failed to cancel the appointment. Please try again.');
    }
  };

  const cancelDelete = () => {
    setShowToast(false);
    setAppointmentToDelete(null);
  };

  const deleteAllNotifications = () => {
    if (window.confirm('Delete appointments?')) setAppointments([]);
  };

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="mt-3 calendar">
      <div className="chat-container">
        <div className="card-body d-flex justify-content-between">
          <h6 className="fw-bold">Notifications</h6>
          <button className="btn btn-sm badge" onClick={deleteAllNotifications}>
            Delete All
          </button>
        </div>
        <div className="accordion card mt-2">
          <div className="accordion-item">
            <h5 className="accordion-header">
              <button
                className="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseMeetings"
              >
                Appointments
              </button>
            </h5>
            <div
              id="collapseMeetings"
              className="accordion-collapse collapse show"
            >
              {appointments.length ? (
                appointments.map(
                  ({
                    _id,
                    date,
                    slot,
                    guide,
                    name,
                    phone,
                    createdAt,
                    updatedAt,
                  }) => (
                    <div className="accordion-body" key={_id}>
                      <div>
                        <strong>Date:</strong> {formatDate(date)}
                      </div>
                      <div>
                        <strong>Time:</strong> {slot}
                      </div>
                      <div>
                        <strong>Tour Guide:</strong>
                        {guide || 'N/A'}
                      </div>
                      <div>
                        <strong>Client:</strong> {name}
                      </div>
                      <div>
                        <strong>Phone:</strong> {phone}
                      </div>
                      <div>
                        <strong>Booked:</strong> {formatDate(createdAt)}
                      </div>
                      <div>
                        <strong>Updated At:</strong> {formatDate(updatedAt)}
                      </div>
                      <button
                        className="btn btn-sm badge mt-2"
                        onClick={() => handleDeleteClick(appointments._id)}
                      >
                        Cancel Appointment
                      </button>
                      <a
                        className="btn btn-sm m-1 badge"
                        href="#"
                        onClick={() => setActiveComponent('Calendar')}
                      >
                        Reschedule
                      </a>
                      {showToast &&
                        appointmentToDelete === appointments._id && (
                          <div
                            className="toast show bg-transparent"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                          >
                            <div className="toast-header bg-transparent">
                              <strong className="me-auto">Confirmation</strong>
                              <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={cancelDelete}
                              ></button>
                            </div>
                            <div className="toast-body bg-transparent">
                              Are you sure you want to cancel appointment?
                              <div className="mt-2">
                                <button
                                  className=" btn btn-sm badge me-2"
                                  onClick={deleteAllNotifications}
                                >
                                  Confirm
                                </button>
                                <button
                                  className="btn btn-sm badge"
                                  onClick={cancelDelete}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  )
                )
              ) : (
                <p>No appointments available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
