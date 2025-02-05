// Calendar component
import { useState, useEffect } from 'react';
import {
  format,
  addMonths,
  subMonths,
  addYears,
  subYears,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  parse,
  setHours,
  setMinutes,
} from 'date-fns';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const CalendarEvent = ({ setActiveComponent, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const today = new Date();
  const [eventTime, setEventTime] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventTitle, setEventTitle] = useState('');

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) setEvents(storedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy';
    return (
      <div className="header py-3">
        <button className="btn btn-sm badge" onClick={prevMonth}>
          <FaLongArrowAltLeft className="fs-4" />
        </button>
        <div>{format(currentDate, dateFormat)}</div>
        <button className="btn btn-sm badge" onClick={nextMonth}>
          <FaLongArrowAltRight className="fs-4" />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return (
      <div className="daysRow">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day container-fluid">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        const event = events.find((event) =>
          isSameDay(day, parse(event.date, 'yyyy-MM-dd', new Date()))
        );
        days.push(
          <div
            className={`cell ${
              !isSameMonth(day, monthStart)
                ? 'disabled'
                : isSameDay(day, selectedDate)
                ? 'selected'
                : isSameDay(day, today)
                ? 'today'
                : ''
            } ${event ? event.type : ''}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            {event && <span className="event">{event.title}</span>}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);

    if (onSelectDate) {
      onSelectDate(day);
    }

    if (!eventTime) {
      console.error('eventTime is not set');
      return;
    }

    const [hours, minutes] = eventTime.split(':');
    const eventDateTime = setMinutes(
      setHours(day, parseInt(hours, 10)),
      parseInt(minutes, 10)
    );

    setEvents([
      ...events,
      {
        date: format(eventDateTime, 'yyyy-MM-dd HH:mm:ss'),
        type: eventType,
        title: eventTitle,
      },
    ]);
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const nextYear = () => {
    setCurrentDate(addYears(currentDate, 1));
  };

  const prevYear = () => {
    setCurrentDate(subYears(currentDate, 1));
  };

  return (
    <div className="calendar" style={{ minWidth: '350px' }}>
      <div className="align-items-center">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
};

export default CalendarEvent;
