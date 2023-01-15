import React, { useState } from 'react';
import Calendar from 'react-calendar';
export default function Tile({ guides }) {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="">
        <button
          className="btn btn-sm btn-accent d-block"
          data-bs-target="#exampleModalToggle"
          data-bs-toggle="modal"
        >
          <Calendar onChange={setDate} value={value} selectRange={true} />
        </button>
      </div>
    </div>
  );
}
