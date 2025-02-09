// payment form component
// payment form component
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export default function PaymentForm({ members }) {
  const [stripePublishableKey, setStripePublishableKey] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const stripe = useStripe();
  const elements = useElements();
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

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (processing) return;

    const selectedMember =
      members.find((member) => member.isSelected) || members[0];

    if (!selectedMember) {
      console.error('No valid membership selected.');
      return;
    }

    const memberId = selectedMember._id;
    const userId = localStorage.getItem('userId');
    const priceId =
      selectedMember.subscriptionType === 'monthly'
        ? 'price_monthly_id' // Use your actual Stripe price ID
        : 'price_annual_id'; // Use your actual Stripe price ID

    setProcessing(true);

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
        setPaymentSuccess(true);
      } else {
        console.error('Subscription creation failed');
        setPaymentSuccess(false);
      }
    } catch (error) {
      console.error('Error creating subscription:', error);
      setPaymentSuccess(false);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="container">
      <div className="container mt-3">
        <h1>Payment method</h1>
        <h6>For demo purposes only</h6>
        Enter test cc # 4242 4242 4242 4242 for Exp: 55555
        <div className="card card-bordered shadow-none mb-2 mt-2">
          <div className="card-body p-6">
            <div className="d-flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paypal"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="paypal"
                ></label>
              </div>
              <div>
                <h5 className="mb-1 h6">Payment with Paypal</h5>
                <p className="mb-0 small">
                  You will be redirected to PayPal website to complete your
                  purchase securely.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-bordered shadow-none mb-2">
          <div className="card-body p-6">
            <div className="d-flex mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="creditdebitcard"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="creditdebitcard"
                ></label>
              </div>
              <div>
                <h5 className="mb-1 h6">Credit / Debit Card</h5>
                <p className="mb-0 small">
                  Safe money transfer using your bank account. We support
                  Mastercard, Visa, Discover, and Stripe.
                </p>
              </div>
            </div>
            <div className="row g-2">
              <div className="col-12">
                <div className="col-md-6 col-12">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label" htmlFor="nameoncard">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                      id="nameoncard"
                      value={formData.cardName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label" htmlFor="nameoncard">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      id="nameoncard"
                      value={formData.cardName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <CardElement />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-end">
          <button type="button" className="btn btn-outline-gray-400 text-muted">
            Prev
          </button>
          <button
            type="submit"
            className="btn btn-sm ms-2"
            onClick={handleSubmit}
            disabled={processing}
          >
            {processing ? 'Processing...' : 'Place order'}
          </button>
        </div>
      </div>
    </div>
  );
}
