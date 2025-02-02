// checkout component
import Form from './Form';
import SubDetails from './SubDetails.js';

export default function Checkout({ members }) {
  // card info

  return (
    <div>
      <button
        className="btn btn-sm btn-accent d-block"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Continue to Payment
      </button>

      <div
        className="offcanvas offcanvas-top  h-100"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title display-5" id="offcanvasTopLabel">
            Checkout
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            {' '}
            <i className="card-icon fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body ">
          <div className="py-5">
            <div className="py-lg-3 py-2 px-lg-3">
              <div className="row py-4">
                <div className="col-md-6">
                  <h1 className=" text-center">Billing Address</h1>
                  <div>
                    {/* order form component */}
                    <Form />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* sub details component */}
                  <div>
                    <SubDetails members={members} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*checkout component */}
        </div>
      </div>
    </div>
  );
}
