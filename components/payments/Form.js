import { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { FaCcPaypal, FaCreditCard, FaStripe } from 'react-icons/fa';
import Success from './Success'; // Import Success component

export default function Form({ members, user, selectedMemberId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Track if payment is successful
  const [paymentData, setPaymentData] = useState(null); // Store payment details to pass to Success component

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    setError(null); // Reset error if payment method changes
  }, [paymentMethod]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || loading) return;

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    // Create payment method and handle Stripe submission
    const { error: stripeError, paymentMethod: stripePaymentMethod } =
      await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: event.target.cardName.value,
          address: {
            line1: event.target.address.value,
            state: event.target.state.value,
            postal_code: event.target.zip.value,
          },
        },
      });

    if (stripeError) {
      setLoading(false);
      setError(stripeError.message);
      return;
    }

    // Send paymentMethod and user/member data to your backend for processing
    try {
      const response = await fetch('http://localhost:3001/stripe/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id, // Dynamically use the userId
          memberId: selectedMemberId, // Dynamically use the memberId
          paymentMethodId: stripePaymentMethod.id,
        }),
      });

      const session = await response.json();

      // Handle successful session creation
      if (session.success) {
        setPaymentSuccess(true);
        setPaymentData({
          userName: user.name, // User's name from user object
          members: members, // The selected membership details
          paymentIntentId: session.paymentIntentId, // From backend response
          totalPrice: members.price, // Assuming the price is in the membership details
          nextPaymentDate: session.nextPaymentDate, // From backend response
        });
      } else {
        setError('There was an error processing your payment.');
      }
    } catch (error) {
      setError('There was an error creating the payment session.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="needs-validation py-2" onSubmit={handleSubmit}>
        <div className="mb-1">
          <label className="form-label" htmlFor="nameoncard">
            Name on card
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            id="nameoncard"
            name="cardName"
            required
          />
        </div>

        <div className="mb-1">
          <label className="form-label">Card Number</label>
          <CardElement options={{ hidePostalCode: true }} />
        </div>

        <div className="mb-1">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Address"
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select className="form-select" id="state" name="state" required>
            <option value="">Choose...</option>
            <option>California</option>
            {/* Add more states as necessary */}
          </select>
        </div>

        <div className="mb-1">
          <label htmlFor="zip" className="form-label">
            Zip Code
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            name="zip"
            placeholder="Zip Code"
            required
          />
        </div>

        <h6 className="mt-3">Payment options</h6>
        <ul className="nav list-inline hstack gap-3 flex-wrap mt-3">
          <li className="nav-item">
            <input
              id="credit-card"
              name="paymentMethod"
              type="radio"
              className="form-check-input me-2"
              required
              checked={paymentMethod === 'credit-card'}
              onChange={() => setPaymentMethod('credit-card')}
            />
            <FaCreditCard className="card-icon fs-5" />
          </li>
          <li className="nav-item">
            <input
              id="stripe"
              name="paymentMethod"
              type="radio"
              className="form-check-input m-2"
              required
              checked={paymentMethod === 'stripe'}
              onChange={() => setPaymentMethod('stripe')}
            />
            <FaStripe className="card-icon fs-3" />
          </li>
          <li className="nav-item">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              className="form-check-input me-2"
              required
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
            />
            <FaCcPaypal className="card-icon fs-4" />
          </li>
        </ul>

        {error && <div className="alert alert-danger mt-3">{error}</div>}

        <div className="mt-4">
          <button className="btn btn-sm" type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Submit Payment'}
          </button>
          <button className="btn btn-sm me-2" type="button">
            Cancel
          </button>
        </div>
      </form>

      {/* Conditionally render Success modal after payment is successful */}
      {paymentSuccess && paymentData && (
        <Success
          userName={paymentData.userName}
          members={paymentData.members}
          nextPaymentDate={paymentData.nextPaymentDate}
          totalPrice={paymentData.totalPrice}
          paymentIntentId={paymentData.paymentIntentId}
        />
      )}
    </div>
  );
}
