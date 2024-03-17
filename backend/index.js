// main app
const express = require('express');
const session = require('express-session');
const { json, urlencoded } = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const passport = require('passport');
// Import the verifyToken function

// auth routes
const appointmentRoutes = require('./appointments/appointments');
const authRoutes = require('./routes/auth');
const sessionRoutes = require('./sessions/sessions');
const trainerRoutes = require('./trainers/trainers');
const memberRoutes = require('./members/members');
//const profileRoutes = require('./routes/profile');
const guideRoutes = require('./guides/guides');
const ownerRoutes = require('./owners/owners');
//const adminRoutes = require('./admin/admin');
const userRoutes = require('./routes/user');
const User = require('./models/user');

// stripe routes
const stripeRoutes = require('./stripe/stripe');

// Import for secret key from the environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// Import for Stripe secret key from the environment variables
const stripe = require('stripe')(stripeSecretKey);

// Google Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Facebook Strategy
const FacebookStrategy = require('passport-facebook').Strategy;

// Load environment variables from .env file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

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
  origin: 'https://client-prime-5b6b37e08f74.herokuapp.com',
};

// Import the verifyToken function
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
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
});

// cors middleware
app.use(cors(corsOptions));
app.use(json());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(sessionMiddleware);

// Configure session middleware
{
  /*
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);
*/
}
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
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({
          email: profile.emails[0].value,
        });

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = new User({
          email: profile.emails[0].value,
          fullName: profile.displayName,
        });

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
        'https://fitness-server-c1a2fb04992c.herokuapp.com/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'emails'],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('Facebook Profile Data:', profile); // inspect profile data

      try {
        const existingUser = await User.findOne({ 'facebook.id': profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

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

// facebook passport oAuth serialize and deserialize
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
// routes

// cover page
app.get('/', (req, res) => {
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

// appointments route
app.use('/appointments', appointmentRoutes);

// admin routes
//app.use('/admin', adminRoutes);

// auth routes and profile routes
app.use('/auth', authRoutes);
app.use('/user', verifyToken, userRoutes);

app.get('/about', (req, res) => {
  res.send('About page');
});

// Google OAuth register route
app.get(
  '/auth/google/register',
  passport.authenticate('google', { scope: ['openid', 'profile', 'email'] })
);

// Google OAuth login route
app.get(
  '/auth/google/login',
  passport.authenticate('google', {
    scope: ['openid', 'profile', 'email'],
  })
);

// Google OAuth callback route
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('https://client-prime-5b6b37e08f74.herokuapp.com/user');
  }
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
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('https://client-prime-5b6b37e08f74.herokuapp.com/user');
  }
);

// Callback routes for both registration and login
app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('https://client-prime-5b6b37e08f74.herokuapp.com/user');
  }
);

// stripe routes
app.use('/stripe', stripeRoutes);

// Backend route to fetch Stripe subscription ID based on selected card ID
app.get('/api/get-stripe-subscription', async (req, res) => {
  try {
    const { id } = req.query;

    const stripeSubscriptionId = await stripeSubscriptionId(id);

    res.status(200).json({ stripeSubscriptionId });
  } catch (error) {
    console.error('Error fetching Stripe subscription ID:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the subscription ID' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
