// authController
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Google OAuth callback handler
const googleAuthCallback = async (req, res) => {
  try {
    // Assuming the user information is populated by the OAuth middleware
    const user = req.user;

    // Generate a JWT token for the user
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // Redirect to the profile page after successful authentication
    res.redirect(`/profile/${user._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  googleAuthCallback,
  // Add other controller functions as needed
};
