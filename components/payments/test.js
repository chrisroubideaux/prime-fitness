// payment form component
import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

export default function Form({ members }) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a payment intent on your server
    const response = await axios.post('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentMethod }),
    });

    if (response.ok) {
      const clientSecret = await response.json();

      // Initialize Stripe.js
      const stripe = await stripePromise;

      // Create a payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: paymentMethod,
        card: {
          number: document.getElementById('cc-number').value,
          exp_month: document.getElementById('cc-expiration').value,
          exp_year: document.getElementById('cc-expiration').value,
          cvc: document.getElementById('cc-cvv').value,
        },
      });

      if (error) {
        console.error(error);
      } else {
        // Confirm the payment on the client side
        const { error } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

        if (error) {
          console.error(error);
        } else {
          // Payment was successful, handle success here
          console.log('Payment successful');
        }
      }
    }
  };
  return (
    <>
      <form className="needs-validation py-5" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName" className="form-label text-white">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="first name"
              value=""
              required
            />
            <div className="invalid-feedback text-white">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label text-white">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="last name"
              value=""
              required
            />
            <div className="invalid-feedback text-white">
              Valid last name is required.
            </div>
          </div>

          <div className="col-12">
            <label for="address" className="form-label text-white">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              required
            />
            <div className="invalid-feedback text-white">
              Please enter your mailing address.
            </div>
          </div>

          <div className="col-12">
            <label for="address2" className="form-label text-white">
              Address 2 <span className="text-white">(Optional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Apartment or suite"
            />
          </div>
          {/* col*/}
          <div className="col-md-4">
            <label for="state" className="form-label text-white">
              State
            </label>
            <select className="form-select" id="state" required>
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback text-white">
              Please provide a valid state.
            </div>
          </div>
          {/* col*/}
          <div className="col-md-3">
            <label for="zip" className="form-label text-white">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="Zip code"
              required
            />
            <div className="invalid-feedback text-white">
              Zip code required.
            </div>
          </div>
        </div>

        <hr className="hr mt-5 " />
        {/* form*/}
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="same-address"
          />
          <label className="form-check-label text-white" for="same-address">
            Shipping address is the same as my billing address
          </label>
        </div>

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="save-info" />
          <label className="form-check-label text-white" for="save-info">
            Save this information for next time
          </label>
        </div>

        <hr className="hr mt-5 " />

        <h4 className="mb-3">Payment</h4>

        <div className="my-3">
          {/*form*/}
          <div className="form-check">
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label text-white" for="debit">
              Debit card
            </label>
          </div>
          <div className="form-check">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label text-white" for="paypal">
              PayPal
            </label>
          </div>
        </div>
        {/* row*/}
        <div className="row gy-3">
          <div className="col-md-6">
            <label for="cc-name" className="form-label text-white">
              Name on card
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-name"
              placeholder="Name"
              required
            />
            <small className="text-white">Full name as displayed on card</small>
            <div className="invalid-feedback text-white">
              Name on card is required
            </div>
          </div>
          {/* col*/}
          <div className="col-md-6">
            <label for="cc-number" className="form-label text-white">
              Credit card number
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-number"
              placeholder="cc-number"
              required
            />
            <small className="text-white">CC Number</small>
            <div className="invalid-feedback text-white">
              Credit card number is required
            </div>
          </div>
          {/* col*/}
          <div className="col-md-3">
            <label for="cc-expiration" className="form-label text-white">
              Expiration
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-expiration"
              placeholder="Expiration"
              required
            />
            <div className="invalid-feedback text-white">
              Expiration date required
            </div>
          </div>

          <div className="col-md-3">
            <label for="cc-cvv" className="form-label text-white">
              CVV
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-cvv"
              placeholder=" CVV"
              required
            />
            <div className="invalid-feedback text-white">
              Security code required
            </div>
          </div>
        </div>

        <hr className="hr mt-5 " />

        <button className="btn btn-sm btn-accent d-block " type="submit">
          Confirm Purchase
        </button>
        <button className="btn btn-sm btn-accent d-block mt-2 " type="submit">
          Cancel
        </button>
      </form>
    </>
  );
}
