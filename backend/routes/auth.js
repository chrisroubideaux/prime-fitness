// routes/auth.js
const express = require('express');
const User = require('../models/user');
const authRoutes = express.Router();
const { register, login } = require('../controllers/authController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator'); // Import the validator module

require('dotenv').config();

// Function to check if a string contains at least one digit and one special character
function isPasswordValid(password) {
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*]/; // Add more special characters as needed

  return (
    password.length >= 10 &&
    digitRegex.test(password) &&
    specialCharRegex.test(password)
  );
}

// Register a new user
authRoutes.post('/register', async (req, res) => {
  const { email, password, confirmPassword, fullName } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Validate email format using a library like 'validator'
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Check if the password meets the length and complexity requirements
    if (!isPasswordValid(password)) {
      return res.status(400).json({
        message:
          'Password must be at least 10 characters long and contain at least one number and one special character.',
      });
    }

    // Check if the password and its confirmation match
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: 'Password and password confirmation do not match.',
      });
    }

    // Hash the password before saving it
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password and fullName
    const newUser = new User({ email, password: hashedPassword, fullName });
    await newUser.save();

    // Generate a JWT token for the new user

    //  const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);
    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);
    console.log('Generated Token:', token); // Add this line

    // User registration successful, return a success response with the token and redirect URL
    res.status(201).json({
      message: 'User registered successfully',
      user: newUser,
      token,
      redirectTo: `/user/${newUser._id}`, // Provide URL to redirect to after successful registration
    });
    // User registration successful, return a success response with the token and redirect URL
  } catch (err) {
    // Handle any errors that occur during the registration process
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// login

authRoutes.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token for the user
    //  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {expiresIn: '1h',});
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    console.log('Generated Token:', token); // Add this line

    // Construct the redirect URL with the user's ID
    const redirectTo = `/user/${user._id}`;

    // User authentication successful, return the token and user data
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = authRoutes;
