// select time component
import Link from 'next/link';

export default function Select({ guides }) {
  return (
    <>
      <div className="">
        <select
          className="form-select  form-select-sm  bg-dark text-white  d-block s"
          aria-label="Default select example"
        >
          <option selected className="form-select bg-dark">
            <h6 className="">Choose</h6>
          </option>
          <option className="text-white" value="1">
            {guides.slot}
          </option>
          <option className="text-white" value="2">
            {guides.slot2}
          </option>
          <option className="text-white" value="3">
            {guides.slot3}
          </option>
          <option className="text-white" value="4">
            {guides.slot4}
          </option>
        </select>
      </div>
    </>
  );
}
