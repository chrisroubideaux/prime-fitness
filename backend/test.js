// main app
const express = require('express');
const session = require('express-session');
const { json, urlencoded } = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const passport = require('passport');

// auth routes
const appointmentRoutes = require('./appointments/appointments');
const authRoutes = require('./routes/auth');
const sessionRoutes = require('./sessions/sessions');
const trainerRoutes = require('./trainers/trainers');
const memberRoutes = require('./members/members');

//const profileRoutes = require('./routes/profile');
const guideRoutes = require('./guides/guides');
const ownerRoutes = require('./owners/owners');
const adminRoutes = require('./admin/admin');
const userRoutes = require('./routes/user'); // Import the userRoutes module
const User = require('./models/user'); // Import the User model

// stripe routes
const stripeRoutes = require('./stripe/memberships/stripe');

// Import the Stripe secret key from the environment variables
const stripeSecretKey = 'your_stripe_secret_key';

// Google Strategy

// Facebook Strategy
const { Strategy: FacebookStrategy } = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Facebook Strategy

// Load environment variables from .env file
require('dotenv').config();

const app = express();
const port = 3001;

const mongoURI = process.env.MONGO_URI;

// mongoose
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// cors
const corsOptions = {
  origin: 'http://localhost:3000',
};

//
app.use(cors(corsOptions));
app.use(json());
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Define the verifyToken middleware function

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  console.log('Token for Verification:', token);
  if (!token) {
    return res.status(401).json({ error: 'Authentication token is missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token has expired' });
      }
      console.error('Token verification error:', err);
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.userId = decoded.id;
    next();
  });
}

// Configure session middleware (optional if you're using JWT)
const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || 'default-secret-key',
  resave: false,
  saveUninitialized: true,
});
// Configure session middleware (optional if you're using JWT)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if using HTTPS
    },
  })
);
app.use(sessionMiddleware);

// Initialize Passport and restore authentication state, if any, from the session
// Import and configure dotenv at the top of your application

// Use these variables in your Stripe integration and other parts of your app

// google passport oAuth

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        'http://localhost:3001/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if the Google user is already registered in your database
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

// google passport oAuth serialize and deserialize
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// google passport oAuth serialize and deserialize
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
// facebook passport oAuth
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL:
        process.env.FACEBOOK_CALLBACK_URL ||
        'http://localhost:3001/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'emails'],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('Facebook Profile Data:', profile); // Add this line to inspect the profile data

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
          // Add other user properties as needed
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
// facebook passport oAuth serialize and deserialize
passport.serializeUser((user, done) => {
  done(null, user.id); // Store the user's ID in the session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user); // Attach the user object to the request (req.user)
  } catch (err) {
    done(err);
  }
});
// routes

// cover page
app.get('/cover', (req, res) => {
  res.send('cover page.');
});

// instructors route

app.use('/sessions', sessionRoutes);

// trainers route
app.use('/trainers', trainerRoutes);

// members route
app.use('/members', memberRoutes);

// guides route
app.use('/guides', guideRoutes);

// owners route
app.use('/owners', ownerRoutes);

//route for fetching a single appointment by ID

// appointments route
app.use('/appointments', appointmentRoutes);

// admin routes
app.use('/admin', adminRoutes);

// auth routes and profile routes
app.use('/auth', authRoutes);

app.post('/auth', authRoutes);

app.use('/user', userRoutes);

app.get('/about', (req, res) => {
  res.send('About page');
});

// Google OAuth registration route
app.get(
  '/auth/google/register',
  passport.authenticate('google', {
    scope: ['openid', 'profile', 'email'],
  })
);

// Google OAuth registration callback route
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful registration/authentication
    // Redirect to the user profile page or any other desired destination
    res.redirect('http://localhost:3000/user'); // Make sure this URL is correct
  }
);

// Google OAuth login route
app.get(
  '/auth/google/login',
  passport.authenticate('google', {
    scope: ['openid', 'profile', 'email'],
  })
);

// Google OAuth login callback route
app.get(
  '/auth/google/callback/login',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful login/authentication
    // Redirect to the user profile page or any other desired destination
    res.redirect('http://localhost:3000/user'); // Make sure this URL is correct
  }
);
// end of google oAuth

// Facebook OAuth registration route
app.get(
  '/auth/facebook/register',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Facebook OAuth registration route
app.get(
  '/auth/facebook/register',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Facebook OAuth callback route for registration
app.get(
  '/auth/facebook/callback/register',
  passport.authenticate('facebook', {
    failureRedirect: '/login', // Redirect to login page on failure
  }),
  (req, res) => {
    // Successful authentication, redirect to a page or send a response as needed
    res.redirect('http://localhost:3000/users'); // Replace with the appropriate redirect URL
  }
);

// Callback routes for both registration and login
app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login', // Redirect to login page on failure
  }),
  (req, res) => {
    // Successful authentication, you can redirect to the home page or any other desired destination
    res.redirect('http://localhost:3000/users');
  }
);
// stripe routes
app.use('/stripe', stripeRoutes); // Use the Stripe routes for Stripe-related operations

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
