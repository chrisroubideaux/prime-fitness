// form component for stripe payment validation
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { loadStripe } from '@stripe/stripe-js';

import { FaCcPaypal, FaCreditCard, FaStripe } from 'react-icons/fa'; // Import the icons you want to use

export default function PaymentForm({ members }) {
  const [stripePublishableKey, setStripePublishableKey] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
    cardCvv: '',
  });

  // initialize state variables
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const stripePromise = loadStripe(stripePublishableKey);

  //  useEffect to fetch the Stripe publishable key from your server
  useEffect(() => {
    // Fetch the Stripe publishable key from your server
    axios
      .get('http://localhost:3001/stripe')
      .then((response) => {
        setStripePublishableKey(response.data.publishableKey);
      })
      .catch((error) => {
        console.error('Error fetching publishable key:', error);
      });
  }, []);

  // handele input change function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (processing) return; // Prevent multiple submissions

    // Basic form validation
    const validationErrors = {};
    if (!formData.firstName)
      validationErrors.firstName = 'First name is required';
    if (!formData.lastName) validationErrors.lastName = 'Last name is required';
    if (!formData.address) validationErrors.address = 'Address is required';
    if (!formData.state) validationErrors.state = 'State is required';
    if (!formData.zip) validationErrors.zip = 'Zip code is required';
    if (!formData.cardName)
      validationErrors.cardName = 'Name on card is required';
    if (!formData.cardNumber)
      validationErrors.cardNumber = 'Credit card number is required';
    if (!formData.cardExpiration)
      validationErrors.cardExpiration = 'Expiration date is required';
    if (!formData.cardCvv) validationErrors.cardCvv = 'CVV is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear any previous errors
    setErrors({});
    setProcessing(true);

    // Simulate payment processing (replace with your actual payment processing logic)
    setTimeout(() => {
      // Simulated success
      setPaymentSuccess(true);
      setProcessing(false);
    }, 2000);
  };

  // strip payment method
  const handlePayment = async () => {
    const stripe = await stripePromise;

    // Create a PaymentIntent on your server
    try {
      const response = await axios.post('/api/create-payment-intent', {
        amount: 100, // Replace with the actual amount to charge
        // other payment details as needed
      });

      const clientSecret = response.data.clientSecret;

      // Confirm the payment with the PaymentIntent and handle success or failure
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: stripe.elements.getElement('card'), // Replace with your card input element
        },
      });

      if (result.error) {
        // Handle payment failure
        console.error('Payment failed:', result.error.message);
      } else {
        // Payment succeeded
        console.log('Payment succeeded:', result.paymentIntent);
        // You can update your UI to indicate successful payment
        setPaymentSuccess(true);
      }
    } catch (error) {
      // Handle any server or network errors
      console.error('Error creating PaymentIntent:', error);
    }
  };

  return (
    <div>
      {paymentSuccess ? (
        <div className="alert alert-success">
          Payment successful! Thank you for your purchase.
        </div>
      ) : (
        <form className="needs-validation py-2" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-1">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className={`form-control fw-bold ${
                errors.firstName ? 'is-invalid' : ''
              }`}
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            {errors.firstName && (
              <div className="invalid-feedback">{errors.firstName}</div>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-1">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className={`form-control fw-bold  ${
                errors.lastName ? 'is-invalid' : ''
              }`}
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName}</div>
            )}
          </div>

          {/* Address */}
          <div className="mb-1">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className={`form-control fw-bold ${
                errors.address ? 'is-invalid' : ''
              }`}
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            {errors.address && (
              <div className="invalid-feedback">{errors.address}</div>
            )}
          </div>

          {/* Address 2 */}
          <div className="mb-1">
            <label htmlFor="address2" className="form-label">
              Address 2 (Optional)
            </label>
            <input
              type="text"
              className="form-control fw-bold"
              id="address2"
              name="address2"
              placeholder="Apartment or suite"
              value={formData.address2}
              onChange={handleInputChange}
            />
          </div>

          {/* State */}
          <div className="mb-1">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select
              className={`form-select fw-bold ${
                errors.state ? 'is-invalid' : ''
              }`}
              id="state"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose...</option>
              <option>California</option>
              {/* Add more state options as needed */}
            </select>
            {errors.state && (
              <div className="invalid-feedback">{errors.state}</div>
            )}
          </div>

          {/* Zip */}
          <div className="mb-1">
            <label htmlFor="zip" className="form-label">
              Zip Code
            </label>
            <input
              type="text"
              className={`form-control fw-bold  ${
                errors.zip ? 'is-invalid' : ''
              }`}
              id="zip"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleInputChange}
              required
            />
            {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
          </div>

          {/* Payment method selection */}
          <h6 className="mt-3 text-white semi-bold">Payment options</h6>
          <ul className="nav list-inline hstack gap-3 flex-wrap mt-3">
            <li className="nav-item">
              <h6 className="">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input me-2"
                  required
                />
                <FaCreditCard className="card-icon fs-5" />
              </h6>
            </li>
            <li className="nav-item">
              <h6 className="">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input m-2"
                  required
                />

                <FaStripe className="card-icon fs-3" />
              </h6>
            </li>
            <li className="nav-item">
              <h6 className="">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input me-2"
                  required
                />

                <FaCcPaypal className="card-icon fs-4 " />
              </h6>
            </li>
          </ul>

          {/* Error messages */}
          {errors.payment && (
            <div className="alert alert-danger">{errors.payment}</div>
          )}

          {/* Card Name */}
          <div className="">
            <label htmlFor="cardName" className="form-label">
              Name on Card
            </label>
            <input
              type="text"
              className={`form-control fw-bold ${
                errors.cardName ? 'is-invalid' : ''
              }`}
              id="cardName"
              name="cardName"
              placeholder="Name on Card"
              value={formData.cardName}
              onChange={handleInputChange}
              required
              disabled={paymentMethod !== 'card'} // Disable if payment method is not 'card'
            />
            {errors.cardName && (
              <div className="invalid-feedback">{errors.cardName}</div>
            )}
          </div>

          {/* Card Number */}
          <div className="mb-2">
            <label htmlFor="cardNumber" className="form-label">
              Credit Card Number
            </label>
            <input
              type="text"
              className={`form-control fw-bold ${
                errors.cardNumber ? 'is-invalid' : ''
              }`}
              id="cardNumber"
              name="cardNumber"
              placeholder="Credit Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
              disabled={paymentMethod !== 'card'} // Disable if payment method is not 'card'
            />
            {errors.cardNumber && (
              <div className="invalid-feedback">{errors.cardNumber}</div>
            )}
          </div>

          {/* Card Expiration */}
          <div className="mb-2">
            <input
              type="text"
              className={`form-control fw-bold ${
                errors.cardExpiration ? 'is-invalid' : ''
              }`}
              id="cardExpiration"
              name="cardExpiration"
              placeholder="Exp Date"
              value={formData.cardExpiration}
              onChange={handleInputChange}
              required
              disabled={paymentMethod !== 'card'} // Disable if payment method is not 'card'
            />
            {errors.cardExpiration && (
              <div className="invalid-feedback">{errors.cardExpiration}</div>
            )}
          </div>

          {/* Card CVV */}
          <div className="mb-1">
            <label htmlFor="cardCvv" className="form-label">
              CVV
            </label>
            <input
              type="text"
              className={`form-control fw-bold ${
                errors.cardCvv ? 'is-invalid' : ''
              }`}
              id="cardCvv"
              name="cardCvv"
              placeholder="CVV example: 123"
              value={formData.cardCvv}
              onChange={handleInputChange}
              required
              disabled={paymentMethod !== 'card'} // Disable if payment method is not 'card'
            />
            {errors.cardCvv && (
              <div className="invalid-feedback">{errors.cardCvv}</div>
            )}
          </div>

          {/* Payment buttons */}

          <div className="mt-4">
            <button
              className="btn btn-sm btn-accent"
              type="submit"
              disabled={processing}
            >
              {processing ? 'Processing...' : 'Confirm Purchase'}
            </button>

            {}

            <button
              className="btn btn-sm btn-secondary me-2"
              type="button"
              onClick={() => setPaymentSuccess(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
