// service component

export default function Service() {
  return (
    <div>
      <div className="container px-5 py-5 my-5 ">
        <h1 className=" text-white my-5">Our services</h1>
        <hr className="hr " />

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 my-2">
          <div className="text-center">
            <i
              className="social-icons fa-solid fa-dumbbell m-2 "
              width="1.75em"
              height="1.75em"
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Best Equipment</h3>
              <div className="cards pt-3  ">
                <ul className="list-unstyled text-small pt-3">
                  <li className="nav-links fs-5">Treadmills</li>
                  <li className="nav-links fs-5">Ellipticals</li>
                  <li className="nav-links fs-5">Stair Climbers</li>
                  <li className="nav-links fs-5">Rowing Machines</li>
                  <li className="nav-links fs-5">Free Weights</li>
                  <li className="nav-links fs-5">Kettlebells</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <i
              className="social-icons fa-solid fa-person-chalkboard m-2 "
              width="1.75em"
              height="1.75em"
            ></i>

            <div className="">
              <h3 className="fw-bold mb-0 fs-4 "> Daily Classes</h3>
              <div className="cards pt-3  ">
                <ul className="list-unstyled text-small pt-3">
                  <li className="nav-links fs-5">Daily Classes</li>
                  <li className="nav-links fs-5">Personal Trainer</li>
                  <li className="nav-links fs-5">Cross Fit</li>
                  <li className="nav-links fs-5">Yoga</li>
                  <li className="nav-links fs-5">Tai-Chi</li>
                  <li className="nav-links fs-5">Body Break</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <i
              className="social-icons fa-solid fa-ribbon m-2"
              width="1.75em"
              height="1.75em"
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Our Services </h3>
              <div className="cards pt-3 ">
                <ul className="list-unstyled text-small pt-3">
                  <li className="nav-links fs-5">24/hour Accsess</li>
                  <li className="nav-links fs-5">Secure Building</li>
                  <li className="nav-links fs-5">Free Consoltaion</li>
                  <li className="nav-links fs-5">Wellness Programs</li>
                  <li className="nav-links fs-5">Weekly Perks</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <i
              className="social-icons fa-solid fa-calendar-days m-2"
              width="1.75em"
              height="1.75em"
            ></i>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Calendar/Events</h3>
              <div className="cards pt-3 ">
                <ul className="list-unstyled text-small pt-3">
                  <li className="nav-links fs-5">Daily Tours</li>
                  <li className="nav-links fs-5">Free Trial</li>
                  <li className="nav-links fs-5">Holiday Giveaways</li>
                  <li className="nav-links fs-5">Meet the Staff</li>
                  <li className="nav-links fs-5">Softball Leauge</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
