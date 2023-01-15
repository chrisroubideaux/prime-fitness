import axios from 'axios';
import {
  CALENDAR_CHOOSE_SLOT,
  CALENDAR_CHOOSE_SLOT2,
  CALENDAR_CHOOSE_SLOT3,
  CALENDAR_CHOOSE_SLOT4,
  CALENDAR_ADD_APPOINTMENT,
  CALENDAR_CHANGE_APPOINTMENT,
  CALENDAR_CHANGE_TIME,
  CALENDAR_CANCEL_APPOINTMENT,
  CALENDAR_SAVE_APPOINTMENT,
} from '../constants/calendarConstants';

export const chooseSLOT = (time) => (dispatch, getState) => {
  dispatch({
    type: CALENDAR_CHOOSE_SLOT,
    payload: time,
  });

  localStorage.setItem(
    'calendarTime',
    JSON.stringify(getState().calendar.calendarTime)
  );
};

export const chooseSLOT2 = (time) => (dispatch, getState) => {
  dispatch({
    type: CALENDAR_CHOOSE_SLOT2,
    payload: time,
  });

  localStorage.setItem(
    'calendarTime',
    JSON.stringify(getState().calendar.calendarTime)
  );
};

export const chooseSLOT3 = (time) => (dispatch, getState) => {
  dispatch({
    type: CALENDAR_CHOOSE_SLOT3,
    payload: time,
  });

  localStorage.setItem(
    'calendarTime',
    JSON.stringify(getState().calendar.calendarTime)
  );
};

export const chooseSLOT4 = (time) => (dispatch, getState) => {
  dispatch({
    type: CALENDAR_CHOOSE_SLOT4,
    payload: time,
  });

  localStorage.setItem(
    'calendarTime',
    JSON.stringify(getState().calendar.calendarTime)
  );
};

export const addAppointment = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/guides/${id}`);

  dispatch({
    type: CALENDAR_ADD_APPOINTMENT,
    payload: {
      member: data.id,
      title: data.title,
      image: data.image,
      times: data.times,
      appointments: data.appointments,
      slot: data.slot,
      slot2: data.slot2,
      slot3: data.slot3,
      slot4: data.slot4,
    },
  });
  localStorage.setItem(
    'members',
    JSON.stringify(getState().calendar.calendarTime)
  );
};

export const changeTime = (id, time) => (dispatch, getState) => {
  dispatch({
    type: CALENDAR_CHANGE_TIME,
    payload: { id, time },
  });

  localStorage.setItem(
    'calendarTimes',
    JSON.stringify(getState().calendar.calendarTime)
  );
};

export const cancelAppoinetment = (id) => (dispatch, getState) => {
  dispatch({
    type: CALENDAR_CANCEL_APPOINTMENT,
    payload: id,
  });

  localStorage.setItem(
    'calendarTimes',
    JSON.stringify(getState().calendar.calendarTime)
  );
};

export const changeAppointment = (id) => (dispatch, getState) => {
  dispatch({
    type: CALENDAR_CHANGE_APPOINTMENT,
    payload: { id },
  });
  localStorage.setItem(
    'calendarTimes',
    JSON.stringify(getState().calendar.calendarTime)
  );
};

export const saveAppointment = (appointment) => (dispatch, getState) => {
  dispatch({
    type: CALENDAR_SAVE_APPOINTMENT,
    payload: appointment,
  });

  localStorage.setItem(
    'calendarTimes',
    JSON.stringify(getState().calendar.calendarTime)
  );
};
