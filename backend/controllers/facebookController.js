// facebook controller
const passport = require('passport');
const jwt = require('jsonwebtoken'); // Import JWT library

// Facebook OAuth registration route
function authenticateWithFacebookRegister(req, res, next) {
  passport.authenticate('facebook', { scope: ['email'] })(req, res, next);
}

// Facebook OAuth login route
function authenticateWithFacebookLogin(req, res, next) {
  passport.authenticate('facebook', { scope: ['email'] })(req, res, next);
}

// Facebook OAuth callback route for registration
function handleFacebookRegisterCallback(req, res, next) {
  passport.authenticate('facebook', {
    failureRedirect: '/login', // Redirect to login page on failure
  })(req, res, (err) => {
    if (err) {
      // Handle any authentication errors here
      return next(err);
    }
    // Successful authentication, generate and send a JWT token
    const token = jwt.sign({ _id: req.user._id }, process.env.JWT_SECRET);

    // Redirect to a page or send a JSON response with the token
    res.json({ token });
  });
}

// Facebook OAuth callback route for login
function handleFacebookLoginCallback(req, res, next) {
  passport.authenticate('facebook', {
    failureRedirect: '/login', // Redirect to login page on failure
  })(req, res, (err) => {
    if (err) {
      // Handle any authentication errors here
      return next(err);
    }
    // Successful authentication, generate and send a JWT token
    const token = jwt.sign({ _id: req.user._id }, process.env.JWT_SECRET);

    // Redirect to a page or send a JSON response with the token
    res.json({ token });
  });
}

module.exports = {
  authenticateWithFacebookRegister,
  handleFacebookRegisterCallback,
  authenticateWithFacebookLogin,
  handleFacebookLoginCallback,
};