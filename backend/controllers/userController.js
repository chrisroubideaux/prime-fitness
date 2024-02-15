// userController from controllers folder
const User = require('../models/user');
const jwt = require('jsonwebtoken');

require('dotenv').config();

// Create a new user account
const createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    {
      /*
    // Hash the password before saving it to the database
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
*/
    }
    // Create a new user instance
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get user by ID

const getUser = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userUserData = {
      fullName: user.fullName,
      email: user.email,
    };

    res.status(200).json({ message: 'User profile data', user: userUserData });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// Function to get user profile (protected route)

const getUserById = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userData = {
      fullName: user.fullName,
      email: user.email,
    };

    res.status(200).json({ message: 'User profile data', user: userData });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to update user profile
const updateUser = async (req, res) => {
  try {
    const userId = req.userId;
    const { fullName, email, newPassword } = req.body;

    // Fetch user data from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user profile fields
    if (fullName) {
      user.fullName = fullName;
    }
    if (email) {
      user.email = email;
    }
    {
      /*
    // Update password if newPassword is provided
    if (newPassword) {
      // Hash the new password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
      user.password = hashedPassword;
    }
*/
    }
    // Save the updated user data
    await user.save();

    res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to delete user profile
const deleteUser = async (req, res) => {
  try {
    const userId = req.userId;

    await User.findByIdAndRemove(userId);

    res.status(200).json({ message: 'User profile deleted successfully' });
  } catch (error) {
    console.error('Error deleting user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
};
