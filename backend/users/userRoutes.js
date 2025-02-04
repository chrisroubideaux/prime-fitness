// user routes
const express = require('express');
const userRoutes = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  login,
  logout,
} = require('../users/userController');

userRoutes.post('/login', login); // Login user
userRoutes.get('/logout', logout); // Logout user
userRoutes.post('/', createUser); // Create a new user
userRoutes.get('/', getAllUsers); // Get all users
userRoutes.get('/:id', getUserById); // Get a single user by ID
userRoutes.put('/:id', updateUserById); // Update an existing user by ID
userRoutes.delete('/:id', deleteUserById); // Delete an existing user by ID

module.exports = userRoutes;
