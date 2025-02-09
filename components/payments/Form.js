// payment form

import { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { FaCcPaypal, FaCreditCard, FaStripe } from 'react-icons/fa';
import { useRouter } from 'next/router'; // Using useRouter to navigate

export default function Form({ members }) {
  const [stripePublishableKey, setStripePublishableKey] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    state: '',
    zip: '',
    cardName: '', // Correct state field for cardholder's name
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const router = useRouter(); // Initialize useRouter for redirect

  // Fetch Stripe publishable key from server
  useEffect(() => {
    axios
      .get('http://localhost:3001/stripe/subscribe')
      .then((response) => {
        setStripePublishableKey(response.data.publishableKey);
      })
      .catch((error) => {
        console.error('Error fetching publishable key:', error);
      });
  }, []);

  // Load Stripe only if the publishable key is available
  const stripePromise = stripePublishableKey
    ? loadStripe(stripePublishableKey)
    : null;

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate and submit form data
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (processing) return;

    const validationErrors = {};
    if (!formData.firstName)
      validationErrors.firstName = 'First name is required';
    if (!formData.lastName) validationErrors.lastName = 'Last name is required';
    if (!formData.address) validationErrors.address = 'Address is required';
    if (!formData.state) validationErrors.state = 'State is required';
    if (!formData.zip) validationErrors.zip = 'Zip code is required';
    if (!formData.cardName)
      validationErrors.cardName = 'Name on card is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setProcessing(true);

    try {
      const paymentResult = await handlePayment();
      if (paymentResult.success) {
        setPaymentSuccess(true);
      } else {
        console.error('Payment failed:', paymentResult.error);
      }
    } catch (error) {
      console.error('Error during payment processing:', error);
      setPaymentSuccess(false);
    } finally {
      setProcessing(false);
    }
  };

  // Handle Stripe payment processing
  const handlePayment = async () => {
    if (!members || members.length === 0) {
      console.error('No membership data available.');
      return { success: false, error: 'No membership data available.' };
    }

    const stripe = await stripePromise;
    if (!stripe) {
      console.error('Stripe has not been loaded properly.');
      return { success: false, error: 'Stripe not loaded.' };
    }

    const selectedMember =
      members.find((member) => member.isSelected) || members[0];
    if (!selectedMember) {
      console.error('No valid membership selected.');
      return { success: false, error: 'No valid membership selected.' };
    }

    const memberId = selectedMember._id;
    const userId = localStorage.getItem('userId');
    const priceId =
      selectedMember.subscriptionType === 'monthly'
        ? 'price_monthly_id'
        : 'price_annual_id';

    try {
      const response = await axios.post(
        `http://localhost:3001/stripe/subscribe/${selectedMember.subscriptionType}`,
        {
          memberId,
          priceId,
          userId,
        }
      );

      if (response.status === 200) {
        console.log('Subscription created:', response.data.subscription);
        return { success: true };
      } else {
        console.error('Subscription creation failed');
        return { success: false, error: 'Subscription creation failed' };
      }
    } catch (error) {
      console.error('Error creating subscription:', error);
      return { success: false, error: error.message };
    }
  };

  // Redirect to Success component after payment
  const handleRedirect = () => {
    router.push('/success'); // Redirect to the Success component in the same directory
  };

  return (
    <div>
      {paymentSuccess ? (
        <div className="alert alert-success">
          Payment successful! Thank you for your purchase.
          <button onClick={handleRedirect} className="btn btn-primary ms-3">
            Go to Success Page
          </button>
        </div>
      ) : (
        <form className="needs-validation py-2" onSubmit={handleSubmit}>
          {/* Name on Card */}
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
              value={formData.cardName}
              onChange={handleInputChange}
            />
            {errors.cardName && (
              <div className="invalid-feedback">{errors.cardName}</div>
            )}
          </div>

          {/* Card Element */}
          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <CardElement />
          </div>

          {/* Address */}
          <div className="mb-1">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
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

          {/* Address 2 (Optional) */}
          <div className="mb-1">
            <label htmlFor="address2" className="form-label">
              Address 2 (Optional)
            </label>
            <input
              type="text"
              className="form-control"
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
              className={`form-select ${errors.state ? 'is-invalid' : ''}`}
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            {errors.state && (
              <div className="invalid-feedback">{errors.state}</div>
            )}
          </div>

          {/* Zip Code */}
          <div className="mb-1">
            <label htmlFor="zip" className="form-label">
              Zip Code
            </label>
            <input
              type="text"
              className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
              id="zip"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleInputChange}
              required
            />
            {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
          </div>

          {/* Payment Method */}
          <h6 className="mt-3">Payment options</h6>
          <ul className="nav list-inline hstack gap-3 flex-wrap mt-3">
            <li className="nav-item">
              <input
                id="credit-card"
                name="paymentMethod"
                type="radio"
                className="form-check-input me-2"
                required
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
              />
              <FaCcPaypal className="card-icon fs-4" />
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-4">
            <button
              className="btn btn-sm btn-accent"
              type="submit"
              disabled={processing}
            >
              {processing ? 'Processing...' : 'Confirm Purchase'}
            </button>
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

// Stripe wrapper
export function StripePaymentWrapper({ members }) {
  if (!stripePublishableKey) {
    return <div>Loading...</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <Form members={members} />
    </Elements>
  );
}

{
  /*
// payment form
import { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { FaCcPaypal, FaCreditCard, FaStripe } from 'react-icons/fa';

export default function Form({ members }) {
  const [stripePublishableKey, setStripePublishableKey] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    state: '',
    zip: '',
    cardName: '', // This is the correct state field for the cardholder's name
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Fetch Stripe publishable key from server
  useEffect(() => {
    axios
      .get('http://localhost:3001/stripe/subscribe')
      .then((response) => {
        setStripePublishableKey(response.data.publishableKey);
      })
      .catch((error) => {
        console.error('Error fetching publishable key:', error);
      });
  }, []);

  // Load Stripe only if the publishable key is available
  const stripePromise = stripePublishableKey
    ? loadStripe(stripePublishableKey)
    : null;

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate and submit form data
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (processing) return;

    const validationErrors = {};
    if (!formData.firstName)
      validationErrors.firstName = 'First name is required';
    if (!formData.lastName) validationErrors.lastName = 'Last name is required';
    if (!formData.address) validationErrors.address = 'Address is required';
    if (!formData.state) validationErrors.state = 'State is required';
    if (!formData.zip) validationErrors.zip = 'Zip code is required';
    if (!formData.cardName)
      validationErrors.cardName = 'Name on card is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setProcessing(true);

    try {
      const paymentResult = await handlePayment();
      if (paymentResult.success) {
        setPaymentSuccess(true);
      } else {
        console.error('Payment failed:', paymentResult.error);
      }
    } catch (error) {
      console.error('Error during payment processing:', error);
      setPaymentSuccess(false);
    } finally {
      setProcessing(false);
    }
  };

  // Handle Stripe payment processing
  const handlePayment = async () => {
    if (!members || members.length === 0) {
      console.error('No membership data available.');
      return { success: false, error: 'No membership data available.' };
    }

    const stripe = await stripePromise;
    if (!stripe) {
      console.error('Stripe has not been loaded properly.');
      return { success: false, error: 'Stripe not loaded.' };
    }

    const selectedMember =
      members.find((member) => member.isSelected) || members[0];
    if (!selectedMember) {
      console.error('No valid membership selected.');
      return { success: false, error: 'No valid membership selected.' };
    }

    const memberId = selectedMember._id;
    const userId = localStorage.getItem('userId');
    const priceId =
      selectedMember.subscriptionType === 'monthly'
        ? 'price_monthly_id'
        : 'price_annual_id';

    try {
      const response = await axios.post(
        `http://localhost:3001/stripe/subscribe/${selectedMember.subscriptionType}`,
        {
          memberId,
          priceId,
          userId,
        }
      );

      if (response.status === 200) {
        console.log('Subscription created:', response.data.subscription);
        return { success: true };
      } else {
        console.error('Subscription creation failed');
        return { success: false, error: 'Subscription creation failed' };
      }
    } catch (error) {
      console.error('Error creating subscription:', error);
      return { success: false, error: error.message };
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
              value={formData.cardName}
              onChange={handleInputChange}
            />
            {errors.cardName && (
              <div className="invalid-feedback">{errors.cardName}</div>
            )}
          </div>

    
          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <CardElement />
          </div>

      
          <div className="mb-1">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
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

      
          <div className="mb-1">
            <label htmlFor="address2" className="form-label">
              Address 2 (Optional)
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              name="address2"
              placeholder="Apartment or suite"
              value={formData.address2}
              onChange={handleInputChange}
            />
          </div>

    
          <div className="mb-1">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select
              className={`form-select ${errors.state ? 'is-invalid' : ''}`}
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            {errors.state && (
              <div className="invalid-feedback">{errors.state}</div>
            )}
          </div>

    
          <div className="mb-1">
            <label htmlFor="zip" className="form-label">
              Zip Code
            </label>
            <input
              type="text"
              className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
              id="zip"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleInputChange}
              required
            />
            {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
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
              />
              <FaCcPaypal className="card-icon fs-4" />
            </li>
          </ul>

      
          <div className="mt-4">
            <button
              className="btn btn-sm btn-accent"
              type="submit"
              disabled={processing}
            >
              {processing ? 'Processing...' : 'Confirm Purchase'}
            </button>
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

// Stripe wrapper
export function StripePaymentWrapper({ members }) {
  if (!stripePublishableKey) {
    return <div>Loading...</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <Form members={members} />
    </Elements>
  );
}

*/
}
