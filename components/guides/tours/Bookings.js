import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import CalendarEvent from './CalendarEvent';

export default function Bookings({
  guides,
  userId,
  appointments,
  onUpdateAppointment,
  onDeleteAppointment,
}) {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const getDayOfWeek = (date) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return days[date.getDay()];
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authToken = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');

    // Assuming you have these fields filled in by the user
    const name = 'Riley Roonie'; // Example, replace with the form value
    const phone = 'xxx-xxx-xxxx'; // Example, replace with the form value

    console.log('Auth Token:', authToken);
    console.log('User ID:', userId);
    console.log('Selected Slot:', selectedSlot);
    console.log('Selected Date:', selectedDate);

    if (!authToken || !userId) {
      showAlertMessage('You must be logged in to book an appointment.', true);
      return;
    }

    if (!selectedSlot) {
      showAlertMessage('Please select a time slot.');
      return;
    }

    if (!selectedDate || isNaN(new Date(selectedDate).getTime())) {
      showAlertMessage('Please select a valid date.');
      return;
    }

    // Make sure to include name and phone in the appointmentData
    const appointmentData = {
      name, // Adding name
      phone, // Adding phone
      guide: guides.name,
      date: selectedDate.toISOString(),
      slot: selectedSlot,
      guideId: guides._id,
      userId: userId,
    };

    console.log('Appointment Data:', appointmentData);

    try {
      const response = await axios.post(
        'http://localhost:3001/appointments',
        appointmentData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log('Success:', response.data);

      const { message, appointment } = response.data;

      showAlertMessage(
        `${message} for ${appointment.slot} on ${new Date(
          appointment.date
        ).toDateString()}.`,
        false,
        userId
      );

      // Use the name and phone from the response here
      console.log('Appointment Name:', appointment.name);
      console.log('Appointment Phone:', appointment.phone);
    } catch (error) {
      console.error('Error:', error.response || error);

      if (error.response?.status === 400) {
        showAlertMessage(
          'Invalid request. Please check your input and try again.'
        );
      } else if (error.response?.status === 401) {
        showAlertMessage('Authentication failed. Please log in again.', true);
      } else {
        showAlertMessage('Something went wrong. Please try again.');
      }
    }
  };

  const showAlertMessage = (
    message,
    showLoginButton = false,
    storedUserId = ''
  ) => {
    setAlertMessage(
      <div>
        <p className="mb-0">{message}</p>
        {showLoginButton && (
          <button
            className="btn btn-md badge mt-2 w-100"
            onClick={() => (window.location.href = '/login/Login')}
          >
            Log in to book an appointment
          </button>
        )}
        {storedUserId && (
          <Link
            href={`/user/${storedUserId}`}
            className="btn btn-sm badge mt-2"
          >
            View Appointments
          </Link>
        )}
      </div>
    );
    setShowAlert(true);
  };

  return (
    <>
      {/* First Modal - Calendar Selection */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="fw-normal fs-5">Book your tour</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <a
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                onClick={() => setShowAlert(false)}
              >
                <CalendarEvent onSelectDate={handleDayClick} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Modal - Time Slot Selection */}
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="fs-5">Select a time</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              {showAlert && (
                <div
                  className="card mb-2"
                  style={{ maxWidth: '540px' }}
                  role="alert"
                >
                  <div className="card-body">
                    <p className="fs-6">
                      {alertMessage}
                      <br />
                      Appointment Date: {selectedDate.toDateString()} (
                      {getDayOfWeek(selectedDate)})
                    </p>
                  </div>
                </div>
              )}
              <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                <Image
                  src={guides.photo || '/fallback-image.jpg'}
                  className="small-avatar avatar rounded-circle m-auto mt-2 mx-3 my-3 border-0"
                  width={200}
                  height={100}
                  alt="Guide Photo"
                />
                <div className="d-flex gap-2 w-100 justify-content-between mt-1">
                  <div>
                    <h6 className="fs-5 me-2">{guides.title}</h6>
                    <h6>{guides.name}</h6>
                    <h6>{guides.times}</h6>
                  </div>
                  <small className="opacity-50 text-nowrap">
                    <h6>{guides.days}</h6>
                    <h6>{guides.slot}</h6>
                    <select
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                    >
                      <option value="">Select a time slot</option>
                      {[
                        guides.slot,
                        guides.slot2,
                        guides.slot3,
                        guides.slot4,
                        guides.slot5,
                        guides.slot6,
                        guides.slot7,
                      ]
                        .filter(Boolean)
                        .map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                    </select>
                  </small>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-sm badge"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to calendar
              </button>
              <button
                type="submit"
                className="btn btn-md badge"
                onClick={handleSubmit}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Book Tour Button */}
      <button
        className="btn btn-md badge"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Book a tour
      </button>
    </>
  );
}
