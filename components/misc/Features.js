// Features component
import Link from 'next/link';

export default function Features() {
  return (
    <section className="my-xl-9 my-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="mb-5">
              <h2 className="mb-3">
                Memberships for everyone.
                <span className="text-gray">#1 fitness center</span>
                in the area.
              </h2>
              <p className="par lead mb-0">
                Here at prime fitness we have a wide variety of classes and
                Memberships to fit the schedule of everyday life. Stop in today
                and check out our classes.
              </p>
            </div>
            <ul className="mb-5 list-unstyled">
              <li className="mb-3 d-flex">
                <i
                  className=" icons fa-solid fa-circle-check"
                  width="16"
                  height="16"
                ></i>
                <span className="ms-2 text-dark">
                  First 7days is free. Join the event from anywhere.
                </span>
              </li>
              <li class="mb-3 d-flex">
                <i
                  className=" icons fa-solid fa-circle-check"
                  width="16"
                  height="16"
                ></i>
                <span class="ms-2 text-dark">
                  Enjoy lengthy, interactive sessions for all members.
                </span>
              </li>
              <li class="mb-3 d-flex">
                <i
                  className=" icons fa-solid fa-circle-check"
                  width="16"
                  height="16"
                ></i>
                <span class="ms-2 text-dark">
                  Join live Q&A in the events with industry experts.
                </span>
              </li>
            </ul>
            <Link href="/" className="btn btn-md">
              See all features
              <span class="ms-2 text-dark">
                <i
                  className=" icons fa-solid fa-circle-check"
                  width="16"
                  height="16"
                ></i>
              </span>
            </Link>
          </div>
          <div class="col-lg-6">
            <figure
              style={{
                backgroundImage: 'url(../../images/sessions/bio2.png)',
                height: '90vh',
                backgroundSize: 'cover',
                borderRadius: '10px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0 0 20px 0 rgb(0 0 0 / 30%)',
              }}
            ></figure>
          </div>
        </div>
      </div>
    </section>
  );
}
