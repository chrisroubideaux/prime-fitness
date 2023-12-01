// stripe controller
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a monthly subscription
const createMonthlySubscription = async (req, res) => {
  try {
    const { customerId, priceId } = req.body;

    // Create a subscription with Stripe
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
    });

    // Send a success message and redirect to the home page
    res.status(200).json({
      message: 'Monthly subscription created successfully',
      subscription,
      redirectUrl: '/', // redirect URL
    });
  } catch (error) {
    console.error('Error creating monthly subscription:', error);
    res.status(500).json({
      error: 'An error occurred while creating the monthly subscription',
    });
  }
};

// Create an annual subscription
const createAnnualSubscription = async (req, res) => {
  try {
    const { customerId, priceId } = req.body;

    // Create a subscription with Stripe
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
    });

    // Send a success message and redirect to the home page
    res.status(200).json({
      message: 'Annual subscription created successfully',
      subscription,
      redirectUrl: '/', // Replace with your desired redirect URL
    });
  } catch (error) {
    console.error('Error creating annual subscription:', error);
    res.status(500).json({
      error: 'An error occurred while creating the annual subscription',
    });
  }
};

// Fetch a subscription by ID
const getSubscriptionById = async (req, res) => {
  try {
    const { subscriptionId } = req.params;

    // Retrieve the subscription with Stripe
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
};

// Update a subscription
const updateSubscription = async (req, res) => {
  try {
    const { subscriptionId } = req.params;
    const { priceId } = req.body;

    // Retrieve the existing subscription
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    // Update the subscription with the new price
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
};

// Cancel a subscription
const cancelSubscription = async (req, res) => {
  try {
    const { subscriptionId } = req.params;

    // Cancel the subscription with Stripe
    await stripe.subscriptions.del(subscriptionId);

    res.status(204).send();
  } catch (error) {
    console.error('Error canceling subscription:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while canceling the subscription' });
  }
};

module.exports = {
  createMonthlySubscription,
  createAnnualSubscription,
  getSubscriptionById,
  updateSubscription,
  cancelSubscription,
};
