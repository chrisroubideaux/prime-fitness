// modal component for booking a tour

import React, { useState } from 'react';
import Image from 'next/image';
import Calendar from 'react-calendar';
import axios from 'axios';

export default function Bookings({
  guides,
  appointments,
  onUpdateAppointment,
  onDeleteAppointment,
}) {
  const [selectedSlot, setSelectedSlot] = useState(''); // State to store the selected time slot
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDayClick = (date) => {
    // Handle the selected day
    setSelectedDay(date);
    setSelectedDate(date);
  };

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSlot) {
      // Handle validation or show an error message
      return;
    }
    try {
      // Send a POST request to create or reschedule the appointment
      const response = await axios.post('http://localhost:3001/appointments', {
        guideId: guides._id, // Send the guide ID
        selectedSlot, // Send the selected time slot
        appointmentId: selectedAppointment ? selectedAppointment._id : null, // Send the existing appointment ID if rescheduling
      });

      // Handle successful appointment creation or rescheduling
      console.log('Appointment created or rescheduled:', response.data);

      if (selectedAppointment) {
        // Appointment has been rescheduled
        showAlertMessage(
          `Your appointment has been rescheduled ${selectedSlot}.`
        );
      } else {
        // New appointment has been created
        showAlertMessage(
          `Your appointment has been successfully created for one hour from ${selectedSlot}.`
        );
      }

      // Close the modal or perform any other desired actions
      setSelectedAppointment(null);
      setSelectedSlot('');
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error creating or rescheduling appointment:', error);

      // Display an error message to the user
      showAlertMessage(
        `Selected time slot is not available. Please choose another time slot ${selectedSlot}.`
      );
    }
  };

  // Function to delete an appointment
  const handleDeleteAppointment = async (appointmentId) => {
    try {
      // Send a DELETE request to delete the appointment
      const response = await axios.delete(
        `http://localhost:3001/appointments/${appointmentId}`
      );

      // Handle successful appointment deletion
      console.log('Appointment deleted:', response.data);

      // Close the modal or perform any other desired actions
      alert('Appointment has been canceled successfully.');

      onDeleteAppointment(appointmentId);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error deleting appointment:', error);

      // Display an error message to the user
      alert('Error deleting appointment. Please try again later.');
    }
  };

  // Function to display the alert message
  const showAlertMessage = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="fw-normal fs-5" id="exampleModalToggleLabel">
                Book your tour
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <a data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                <Calendar
                  className="calendar text-center "
                  onClickDay={handleDayClick}
                  value={selectedDay}
                />
              </a>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="fs-5" id="exampleModalToggleLabel2">
                Select a time
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* alert component */}
              {showAlert && (
                <div
                  className="modal-body bg-dark mb-2"
                  style={{ maxWidth: '540px' }}
                  role="alert"
                >
                  <div className="card-body bg-dark">
                    <p className="fs-6 text-white">
                      {alertMessage} || {selectedDate.toDateString()}
                    </p>
                    <h3 className="fs-6"> </h3>
                  </div>
                  <div className="card-footer d-flex text-nowrap m-auto">
                    <button className="btn btn-sm" onClick={handleSubmit}>
                      veiw your appointment
                    </button>
                  </div>
                </div>
              )}
              {/* list group component */}
              <div className="">
                <div className="list-group-item list-group-item-action d-flex gap-3 py-3 ">
                  <Image
                    src={guides.profile}
                    className="avatar"
                    width={200}
                    height={100}
                    alt="..."
                  />
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div className="">
                      <h6 className="fs-5 me-2">{guides.title}</h6>
                      <h6 className="text-white">{guides.name}</h6>
                    </div>
                    <small className="opacity-50 text-nowrap">
                      <h6 className="">{guides.days}</h6>
                      <h6 className="">{guides.slot}</h6>
                      {/* select time slot component */}
                      <select
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                      >
                        <option value="">Select a time slot</option>
                        <option value={guides.slot}>{guides.slot}</option>
                        <option value={guides.slot2}>{guides.slot2}</option>
                        <option value={guides.slot3}>{guides.slot3}</option>
                        <option value={guides.slot4}>{guides.slot4}</option>
                        <option value={guides.slot5}>{guides.slot5}</option>
                        <option value={guides.slot6}>{guides.slot6}</option>
                        <option value={guides.slot7}>{guides.slot7}</option>
                      </select>
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-md"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to calendar
              </button>

              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-md"
                  onClick={handleSubmit}
                >
                  Book Appointment
                </button>

                {/* */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-md"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Book a tour
      </button>
    </>
  );
}