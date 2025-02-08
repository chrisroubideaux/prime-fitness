// service component

export default function Service() {
  return (
    <div>
      <section className="my-xl-7 py-5">
        <div className="container pb-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12 order-lg-2 order-1">
              <div
                className="position-relative rellax mb-7 mb-lg-0"
                data-rellax-percentage="1"
                data-rellax-speed="0.8"
                data-disable-parallax-down="md"
              >
                <figure
                  style={{
                    backgroundImage: 'url(../../images/banner/banner12.png)',
                    height: '90vh',
                    backgroundSize: 'cover',
                    borderRadius: '10px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '0 0 20px 0 rgb(0 0 0 / 30%)',
                  }}
                ></figure>
                <div className="d-flex flex-column position-absolute bottom-0 ms-4 mb-4">
                  <img
                    src="../../images/testimonials/bio.png"
                    alt="avatar"
                    className="avatar avatar-lg rounded-circle border border-white border-2 mb-2 rellax"
                    data-rellax-percentage="0.4"
                    data-rellax-speed="0.4"
                    data-disable-parallax-down="md"
                  />
                  <img
                    src="../../images/testimonials/bio2.png"
                    alt="avatar"
                    className="avatar avatar-lg rounded-circle border border-white border-2 mb-2 rellax"
                    data-rellax-percentage="0.5"
                    data-rellax-speed="0.5"
                    data-disable-parallax-down="md"
                  />
                  <img
                    src="../../images/testimonials/bio3.png"
                    alt="avatar"
                    className="avatar avatar-lg rounded-circle border border-white border-2 rellax"
                    data-rellax-percentage="0.6"
                    data-rellax-speed="0.6"
                    data-disable-parallax-down="md"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-6 col-12 order-lg-2">
              <div className="mt-md-5">
                <small className="text-gray text-uppercase ls-md fw-semibold">
                  Testimonials
                </small>
                <div className="mb-5 mt-4">
                  <h2 className="mb-3">See what others say about us.</h2>
                  <p className="par lead mb-0">
                    Stop in today for a free consultation and a tour of our
                    wonderful facilities. We look forward to seeing you!
                  </p>
                </div>
                <ul className="list-unstyled mb-5">
                  <li className="mb-2 d-flex">
                    <i
                      className=" icons fa-solid fa-circle-check"
                      width="16"
                      height="16"
                    ></i>
                    <span className="ms-2 text-dark">
                      Excatly what I was looking for.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <i
                      className=" icons fa-solid fa-circle-check"
                      width="16"
                      height="16"
                    ></i>
                    <span className="ms-2 text-dark">
                      A wide variety of workout plans.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <i
                      className=" icons fa-solid fa-circle-check"
                      width="16"
                      height="16"
                    ></i>
                    <span className="ms-2 text-dark">
                      Love the flexiablity to choose what works for you.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
