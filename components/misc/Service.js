// service component

export default function Service() {
  return (
    <div>
      <section class="my-xl-7 py-5">
        <div class="container pb-lg-5">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-12 order-lg-2 order-1">
              <div
                class="position-relative rellax mb-7 mb-lg-0"
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
                <div class="d-flex flex-column position-absolute bottom-0 ms-4 mb-4">
                  <img
                    src="../../images/profile/profile1.jpg"
                    alt="avatar"
                    class="avatar avatar-lg rounded-circle border border-white border-2 mb-2 rellax"
                    data-rellax-percentage="0.4"
                    data-rellax-speed="0.4"
                    data-disable-parallax-down="md"
                  />
                  <img
                    src="../../images/profile/profile11.jpg"
                    alt="avatar"
                    class="avatar avatar-lg rounded-circle border border-white border-2 mb-2 rellax"
                    data-rellax-percentage="0.5"
                    data-rellax-speed="0.5"
                    data-disable-parallax-down="md"
                  />
                  <img
                    src="../../images/testimonials/testimonial1.png"
                    alt="avatar"
                    class="avatar avatar-lg rounded-circle border border-white border-2 rellax"
                    data-rellax-percentage="0.6"
                    data-rellax-speed="0.6"
                    data-disable-parallax-down="md"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-5 offset-lg-1 col-md-6 col-12 order-lg-2">
              <div class="mt-md-5">
                <small class="text-gray text-uppercase ls-md fw-semibold">
                  Collaborate
                </small>
                <div class="mb-5 mt-4">
                  <h2 class="mb-3">Move team ideas to action, faster.</h2>
                  <p class="par lead mb-0">
                    Collaborate and build total alignment on your project by
                    adding comments to any task or document.
                  </p>
                </div>
                <ul class="list-unstyled mb-5">
                  <li class="mb-2 d-flex">
                    <i
                      className=" icons fa-solid fa-circle-check"
                      width="16"
                      height="16"
                    ></i>
                    <span class="ms-2 text-dark">
                      Fusce ultricies velit fel dignissim
                    </span>
                  </li>
                  <li class="mb-2 d-flex">
                    <i
                      className=" icons fa-solid fa-circle-check"
                      width="16"
                      height="16"
                    ></i>
                    <span class="ms-2 text-dark">
                      Suspendisse potenti. Mauris et ipsum odio.
                    </span>
                  </li>
                  <li class="mb-2 d-flex">
                    <i
                      className=" icons fa-solid fa-circle-check"
                      width="16"
                      height="16"
                    ></i>
                    <span class="ms-2 text-dark">
                      Pellentesque imperdiet blandit pretium.
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
