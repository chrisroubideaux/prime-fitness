// routes/auth.js
const express = require('express');
const passport = require('./googlePassport');
const authRoutes = express.Router();
const cors = require('cors');

// Google OAuth login route
authRoutes.get(
  '/google/login',
  passport.authenticate('google', { scope: ['email', 'openid', 'profile'] })
);

// Google OAuth callback route
authRoutes.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    console.log('req.user:', req.user);
    if (req.user) {
      res.redirect(`https://prime-jet.vercel.app/users/${req.user.id}`);
    } else {
      res.redirect('/');
    }
  }
);

// Logout Route
authRoutes.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
    res.redirect('https://prime-jet.vercel.app/login');
  });
});

// Facebook OAuth login route
authRoutes.get(
  '/facebook/register',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Facebook OAuth callback route
authRoutes.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    console.log('Authenticated user:', req.user);
    if (req.user) {
      const { role, id } = req.user;
      console.log(`Role: ${role}, ID: ${id}`);

      if (role === 'guide') {
        res.redirect(`https://prime-jet.vercel.app/guides/${id}`);
      } else {
        res.redirect(`https://prime-jet.vercel.app/users/${id}`);
      }
    } else {
      res.redirect('/login');
    }
  }
);

// Middleware to check roles
function checkRole(role) {
  return (req, res, next) => {
    if (req.isAuthenticated() && req.user && req.user.role === role) {
      return next();
    }
    res.status(403).json({ message: 'Forbidden: Insufficient role' });
  };
}

authRoutes.get('/users', checkRole('user'), (req, res) => {
  res.redirect(`/users/${req.user._id}`);
});

authRoutes.get('/guides', checkRole('guide'), (req, res) => {
  res.redirect(`/guides/${req.user._id}`);
});

module.exports = authRoutes;
