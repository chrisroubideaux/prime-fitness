// google routes
const express = require('express');
const googleRoutes = express.Router();
const passport = require('passport');

// Google OAuth registration route
googleRoutes.get(
  '/auth/google/register',
  passport.authenticate('google', { scope: ['email', 'openid', 'profile'] })
);

// Google OAuth register/callback route
googleRoutes.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req, res) => {
    try {
      const { email, fullName } = req.user;
      const registrationTimestamp = new Date();
      const newUser = new User({
        email,
        fullName,
        registrationTimestamp,
      });

      await newUser.save();

      // const token = jwt.sign({ email, fullName }, process.env.JWT_SECRET);
      const token = jwt.sign({ email, fullName }, process.env.JWT_SECRET, {
        expiresIn: '30 min',
      });

      res.status(201).json({
        message: 'User registered successfully',
        user: req.user,
        token,
        redirectTo: '/user',
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

// Google OAuth login route
googleRoutes.get(
  '/auth/google/login',
  passport.authenticate('google', { scope: ['email', 'openid', 'profile'] })
);

// Google OAuth login/callback route
googleRoutes.get(
  '/auth/google/callback/login',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req, res) => {
    try {
      const { email, fullName } = req.user;

      // const token = jwt.sign({ email, fullName }, process.env.JWT_SECRET);
      const token = jwt.sign({ email, fullName }, process.env.JWT_SECRET, {
        expiresIn: '30 min',
      });

      res.status(200).json({
        message: 'User logged in successfully',
        user: req.user,
        token,
        redirectTo: '/user',
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

module.exports = googleRoutes;
