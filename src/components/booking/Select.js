import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Select({ guides }) {
  return (
    <div className="">
      <select
        className="form-select  form-select-sm  bg-dark text-white  d-block s"
        aria-label="Default select example"
      >
        <option selected className="form-select bg-dark">
          <h6 className="">Choose</h6>
        </option>
        <option value="1">
          <button className="nav-link">
            <h6 className="text-white">{guides.slot}</h6>
          </button>
        </option>
        <option value="2">
          <Link className="nav-link">
            <h6 className="text-white"> {guides.slot2} </h6>
          </Link>
        </option>
        <option value="3">
          <Link className="nav-link">
            <h6 className="text-white"> {guides.slot3} </h6>
          </Link>
        </option>
        <option value="4">
          <Link className="nav-link">
            <h6 className="text-white"> {guides.slot4} </h6>
          </Link>
        </option>
      </select>
    </div>
  );
}
