// times component
import Image from 'next/image';

import Select from './Select';
export default function Times({ guides }) {
  return (
    <div className="box list-group w-auto m-2">
      <div className="list-group-item list-group-item-action d-flex gap-3 py-3 bg-dark">
        <Image
          src={guides.photo}
          width={10}
          height={10}
          className="small-avatar rounded-circle m-auto mt-2 mx-3 my-3 border-0"
          alt="..."
        />

        <div className="d-flex gap-2 w-100 justify-content-between mt-3 ">
          <div>
            <h6 className=" text-white mb-0">{guides.appointments}</h6>
          </div>

          <small className="opacity-50 text-nowrap text-white">
            {}
            <Select guides={guides} />
          </small>
        </div>
      </div>
    </div>
  );
}
