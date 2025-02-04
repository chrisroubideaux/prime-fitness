// main app
const express = require('express');
const session = require('express-session');
const { json, urlencoded } = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const passport = require('passport');
const appointmentRoutes = require('./appointments/appointments');
const authRoutes = require('./routes/auth');
const sessionRoutes = require('./sessions/sessions');
const trainerRoutes = require('./trainers/trainers');
const memberRoutes = require('./members/members');
//const profileRoutes = require('./routes/profile');
const guideRoutes = require('./guides/guides');
const ownerRoutes = require('./owners/owners');
//const adminRoutes = require('./admin/admin');
const userRoutes = require('./users/userRoutes');
const paymentsRoute = require('./stripe/payments');
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

// cors middleware

const corsOptions = {
  // origin: 'http://localhost:3000',
  origin: process.env.CLIENT_BASE_URL || 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};

app.use(cors(corsOptions));
app.use(json());
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Verify Token  for middleware function
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log('Authorization Header:', authHeader);

  if (!authHeader) {
    return res.status(401).json({ error: 'Authentication token is missing' });
  }

  const token = authHeader.split(' ')[1];
  console.log('Extracted Token:', token);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err.message);
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.userId = decoded._id;
    console.log('Token Verified, User ID:', req.userId);
    next();
  });
}

{
  /*
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
*/
  /// Session middleware
}
const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
});

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

app.use(sessionMiddleware);

// API routes
app.get('/', (req, res) => {
  res.send('cover page.');
});
app.use('/sessions', sessionRoutes); // sessions route
app.use('/trainers', trainerRoutes); // trainers route
app.use('/members', memberRoutes); // members route
app.use('/guides', guideRoutes); // guides route
app.use('/owners', ownerRoutes); // owners route
app.use('/appointments', appointmentRoutes); // appointments route
//app.use('/admin', adminRoutes);
app.use('/auth', authRoutes); // auth routes
app.use('/users', userRoutes); // user routes
app.use('/payments', paymentsRoute); // payments route
app.get('/about', (req, res) => {
  res.send('About page');
});

// Oauth
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

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(`http://localhost:3000/users/${userId}`);
  }
);

// Facebook OAuth registration route
app.get(
  '/auth/facebook/register',
  passport.authenticate('facebook', { scope: ['email'] })
);
// Facebook OAuth callback route
app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    console.log('Authenticated user:', req.user);
    if (req.user) {
      const { role, id } = req.user;

      if (role === 'guide') {
        res.redirect(`http://localhost:3000/guides/${id}`);
      } else if (role === 'user') {
        res.redirect(`http://localhost:3000/users/${id}`);
      } else {
        res.redirect('/login');
      }
    } else {
      res.redirect('/login');
    }
  }
);

app.get(
  '/auth/facebook/login',
  passport.authenticate('facebook', { scope: ['email'] })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
