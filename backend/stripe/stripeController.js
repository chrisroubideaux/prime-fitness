// Stripe controller
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../users/userModel');
const Member = require('../members/member');

// Create Checkout Session (Subscription)
const createSubscription = async (req, res) => {
  try {
    const { userId, memberId } = req.body;

    if (!userId || !memberId) {
      return res.status(400).json({ error: 'Missing userId or memberId' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const membership = await Member.findById(memberId);
    if (!membership)
      return res.status(404).json({ error: 'Membership plan not found' });

    if (!user.stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
        metadata: { userId: user._id.toString() },
      });
      user.stripeCustomerId = customer.id;
      await user.save();
    }

    const session = await stripe.checkout.sessions.create({
      customer: user.stripeCustomerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: membership.stripePriceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.YOUR_DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.YOUR_DOMAIN}?canceled=true`,
      metadata: {
        userId: user._id.toString(),
        memberId: membership._id.toString(),
      },
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Cancel Subscription
const cancelSubscription = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) return res.status(400).json({ error: 'Missing userId' });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (!user.stripeSubscriptionId) {
      return res.status(400).json({ error: 'No active subscription' });
    }

    await stripe.subscriptions.del(user.stripeSubscriptionId);

    user.stripeSubscriptionId = null;
    user.memberId = null;
    await user.save();

    res.json({ message: 'Subscription canceled successfully' });
  } catch (error) {
    console.error('Error canceling subscription:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Webhook Handler
const webhookHandler = async (req, res) => {
  try {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed':
        console.log('✅ Checkout session completed:', event.data.object);

        const session = event.data.object;
        const userId = session.metadata?.userId;

        if (userId) {
          const user = await User.findById(userId);
          if (user) {
            user.stripeSubscriptionId = session.subscription;
            user.memberId = session.metadata?.memberId;
            await user.save();
            console.log(
              `User ${userId} updated with subscription ID: ${session.subscription}`
            );
          } else {
            console.error(`User not found for ID: ${userId}`);
          }
        }
        break;

      case 'invoice.payment_succeeded':
        console.log('✅ Invoice payment succeeded:', event.data.object);
        break;

      case 'customer.subscription.deleted':
        console.log('🚨 Subscription canceled:', event.data.object);

        const subscription = event.data.object;
        const canceledUser = await User.findOne({
          stripeSubscriptionId: subscription.id,
        });

        if (canceledUser) {
          canceledUser.stripeSubscriptionId = null;
          canceledUser.memberId = null;
          await canceledUser.save();
          console.log(`Subscription removed from user ${canceledUser._id}`);
        }
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Error handling webhook:', error);
    res.status(500).json({ error: 'Webhook handling error' });
  }
};

module.exports = { createSubscription, cancelSubscription, webhookHandler };

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
