const express = require('express');
const {
  createSubscription,
  cancelSubscription,
  webhookHandler,
} = require('./stripeController'); // Ensure this import is correct

const stripeRoutes = express.Router();

// Create a subscription (handles both monthly & annual)
stripeRoutes.post('/subscribe', createSubscription);

// Cancel a subscription (using user ID as a parameter)
stripeRoutes.delete('/cancel/:userId', cancelSubscription); // Ensure userId matches in your route and controller

// Stripe webhook listener (make sure the body parser is correct for webhook events)
stripeRoutes.post(
  '/webhook',
  express.raw({ type: 'application/json' }), // This is required for Stripe webhook signature verification
  webhookHandler
);

module.exports = stripeRoutes;

{
  /*
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripeRoutes = express.Router();

// Create a monthly subscription
stripeRoutes.post('/', async (req, res) => {
  try {
    const { customerId, priceId } = req.body;

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
    });

    res.status(200).json({
      message: 'Monthly subscription created successfully',
      subscription,
      redirectUrl: '/',
    });
  } catch (error) {
    console.error('Error creating monthly subscription:', error);
    res.status(500).json({
      error: 'An error occurred while creating the monthly subscription',
    });
  }
});
// Create annual subscription
stripeRoutes.post('/', async (req, res) => {
  try {
    const { customerId, priceId } = req.body;

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
    });

    res.status(200).json({
      message: 'Annual subscription created successfully',
      subscription,
      redirectUrl: '/',
    });
  } catch (error) {
    console.error('Error creating annual subscription:', error);
    res.status(500).json({
      error: 'An error occurred while creating the annual subscription',
    });
  }
});

// Fetch a subscription by ID
stripeRoutes.get('/:id', async (req, res) => {
  try {
    const { subscriptionId } = req.params;

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    if (!subscription) {
      res.status(404).json({ error: 'Subscription not found' });
      return;
    }

    res.status(200).json({ subscription });
  } catch (error) {
    console.error('Error fetching subscription:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the subscription' });
  }
});

// Update a subscription
stripeRoutes.put('/:id', async (req, res) => {
  try {
    const { subscriptionId } = req.params;
    const { priceId } = req.body;

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    await stripe.subscriptions.update(subscriptionId, {
      items: [{ id: subscription.items.data[0].id, price: priceId }],
    });

    res.status(200).json({ message: 'Subscription updated successfully' });
  } catch (error) {
    console.error('Error updating subscription:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while updating the subscription' });
  }
});

// Cancel a subscription
stripeRoutes.delete('/:id', async (req, res) => {
  try {
    const { subscriptionId } = req.params;

    await stripe.subscriptions.del(subscriptionId);

    res.status(204).send();
  } catch (error) {
    console.error('Error canceling subscription:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while canceling the subscription' });
  }
});

module.exports = stripeRoutes;
*/
}
