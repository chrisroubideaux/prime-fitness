// facebook passport configuration
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../users/userModel');
const Guide = require('../guides/guide');
require('dotenv').config();

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'emails', 'name', 'displayName', 'photos'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0]?.value;
        console.log('Facebook profile email:', email);

        let user = await User.findOne({ email });
        if (user) {
          user.role = 'user';
          console.log('User found:', user);
          return done(null, user);
        }

        user = await Guide.findOne({ email });
        if (user) {
          user.role = 'guide';
          console.log('Agent found:', user);
          return done(null, user);
        }

        console.log('User not found');
        return done(null, false, { message: 'User not found in any role' });
      } catch (err) {
        console.error('Error in Facebook Strategy:', err);
        return done(err, null);
      }
    }
  )
);
