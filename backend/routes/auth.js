// routes/auth.js
const mongoose = require('mongoose');
const express = require('express');
const User = require('../models/user');
const authRoutes = express.Router();
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const { Strategy: FacebookStrategy } = require('passport-facebook');

require('dotenv').config();

// google passport oAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        'https://fitness-server-c1a2fb04992c.herokuapp.com/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({
          email: profile.emails[0].value,
        });

        if (existingUser) {
          return done(null, existingUser);
        }

        // Create a new user with Google account details
        const newUser = new User({
          email: profile.emails[0].value,
          fullName: profile.displayName,
        });

        // Save the new user to the database
        await newUser.save();

        return done(null, newUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Google OAuth login route
authRoutes.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth login callback route
authRoutes.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('https://client-prime-5b6b37e08f74.herokuapp.com/users/Users');
  }
);

// facebook passport oAuth

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL:
        process.env.FACEBOOK_CALLBACK_URL ||
        'https://fitness-server-c1a2fb04992c.herokuapp.com/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'emails'],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('Facebook Profile Data:', profile);

      try {
        // Check if the Facebook user is already registered in your database
        const existingUser = await User.findOne({ 'facebook.id': profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        // Create a new user with Facebook account details
        const newUser = new User({
          facebook: {
            id: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
          },
        });

        await newUser.save();

        return done(null, newUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Facebook OAuth login route
authRoutes.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Facebook OAuth callback route
authRoutes.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('https://client-prime-5b6b37e08f74.herokuapp.com/users/Users');
  }
);

module.exports = authRoutes;
