import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Form from './Form';
import SubDetails from './SubDetails';

// Ensure you load Stripe only once
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout({ members, user }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    if (!members) {
      console.error('No membership selected');
      setLoading(false);
      return;
    }

    try {
      const userId = user.id;

      const response = await fetch('http://localhost:3001/stripe/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          memberId: members._id,
        }),
      });

      const session = await response.json();

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Error redirecting to Stripe Checkout:', error);
      }
    } catch (error) {
      console.error('Error creating Stripe session:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className="btn btn-sm btn-accent d-block"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Continue to Payment'}
      </button>

      <div
        className="offcanvas offcanvas-top h-100"
        tabIndex="-1"
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
                    <Form />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <SubDetails members={members} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*
import Form from './Form';
import SubDetails from './SubDetails';

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
                    <Form />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <SubDetails members={members} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
}
