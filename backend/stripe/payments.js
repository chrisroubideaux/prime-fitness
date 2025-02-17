// stripe routes
const express = require('express');
const {
  createSubscription,
  cancelSubscription,
  webhookHandler,
} = require('./stripeController');

const stripeRoutes = express.Router();

stripeRoutes.post('/subscribe', createSubscription);
stripeRoutes.delete('/cancel/:userId', cancelSubscription);
stripeRoutes.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  webhookHandler
);

module.exports = stripeRoutes;
