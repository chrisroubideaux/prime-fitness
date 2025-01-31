// details component

export default function Details() {
  return (
    <>
      <div className="container px-5 py-5 my-5">
        <h1 className=" text-grey">What we offer!</h1>
        <hr className="hr " />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <i
              className="social-icons fa-solid fa-heart-circle-check m-2"
              width="1.75em"
              height="1.75em"
            ></i>

            <div>
              <h4 className="fw-bold mb-0 fs-4">Wellness</h4>
              <p className="par fw-bold">
                Strength and Wellness is our top priority here at prime fitness.
                We offer a wide range of classes and training programs to help
                you reach your goals.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <i
              className="social-icons fa-solid fa-dumbbell m-2"
              width="1.75em"
              height="1.75em"
            ></i>

            <div>
              <h4 className="fw-bold mb-0 fs-4">Flexiblity</h4>
              <p className="par fw-bold">
                Memberships for everyone and everyday life, starting at 10$ a
                month upgrade to a newer plan at any time without the hassle and
                no contracts.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <i
              className="social-icons fa-solid fa-handshake-angle m-2"
              width="1.75em"
              height="1.75em"
            ></i>
            <div>
              <h4 className="fw-bold mb-0">Meet the team </h4>
              <p className="par fw-bold">
                Meet our staff to and get a free tour of our state of the art
                bulding and see for your self why prime is voted number 1
                fitness center in the city.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <i
              className="social-icons fa-solid fa-users-line m-2"
              width="1.75em"
              height="1.75em"
            ></i>
            <div>
              <h4 className="fw-bold mb-0 fs-4">Commuinty</h4>
              <p className="par fw-bold">
                Stay up to date with latest events and commuinty actions.Here at
                prime fitness we truly belive in the power of commuinty and
                giving back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
