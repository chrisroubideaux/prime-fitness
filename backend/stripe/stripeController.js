// stripe controller
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../users/userModel');
const Member = require('../members/member');

// Create a monthly subscription
const createMonthlySubscription = async (req, res) => {
  try {
    const { memberId, priceId, userId } = req.body;

    const member = await Member.findOne({ _id: memberId, userId });
    if (!member) {
      return res
        .status(404)
        .json({ error: 'Membership not found or does not belong to user' });
    }

    // Retrieve user details
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log(`User ${userId} is subscribing to membership ${memberId}`);

    const subscription = await stripe.subscriptions.create({
      customer: member.stripeCustomerId,
      items: [{ price: priceId }],
    });

    // Update membership details in the database
    member.stripeSubscriptionId = subscription.id;
    member.planType = 'monthly';
    member.status = 'active';
    await member.save();

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
};

// Create an annual subscription
const createAnnualSubscription = async (req, res) => {
  try {
    const { memberId, priceId, userId } = req.body;

    // Ensure the membership belongs to the correct user
    const member = await Member.findOne({ _id: memberId, userId });
    if (!member) {
      return res
        .status(404)
        .json({ error: 'Membership not found or does not belong to user' });
    }

    // Retrieve user details
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    console.log(`User ${userId} is subscribing to membership ${memberId}`);

    const subscription = await stripe.subscriptions.create({
      customer: member.stripeCustomerId,
      items: [{ price: priceId }],
    });

    // Update membership details in the database
    member.stripeSubscriptionId = subscription.id;
    member.planType = 'annual';
    member.status = 'active';
    await member.save();

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
};

// Cancel a subscription
const cancelSubscription = async (req, res) => {
  try {
    const { memberId } = req.params;

    const member = await Member.findById(memberId);
    if (!member) {
      return res.status(404).json({ error: 'Membership not found' });
    }

    await stripe.subscriptions.del(membership.stripeSubscriptionId);

    // Update Membership status to "canceled"
    member.status = 'canceled';
    member.stripeSubscriptionId = null;
    await member.save();

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
  cancelSubscription,
};

{
  /*
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Membership = require('../models/membership');
const User = require('../models/user');

// Create a Stripe Checkout Session
const createCheckoutSession = async (userId, membershipId) => {
  try {
    const user = await User.findById(userId);
    const membership = await Membership.findById(membershipId);

    if (!user) return { success: false, error: 'User not found' };
    if (!membership) return { success: false, error: 'Membership not found' };

    // If user doesn't have a Stripe customer ID, create one
    if (!user.stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
      });
      user.stripeCustomerId = customer.id;
      await user.save();
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer: user.stripeCustomerId,
      line_items: [
        {
          price: membership.priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    return { success: true, sessionUrl: session.url };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

*/
}
