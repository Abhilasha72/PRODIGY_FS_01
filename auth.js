const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

// Show login page
router.get('/login', (req, res) => res.render('login'));

// Show register page
router.get('/register', (req, res) => res.render('register'));

// Handle registration
router.post('/register', async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Check for existing user
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({ username, password: hashedPassword, role: role || 'user' });
    await user.save();

    console.log('✅ User saved successfully:', user);
    res.redirect('/login');
  } catch (error) {
    console.error('❌ Error saving user:', error);
    res.status(500).send('Error registering user');
  }
});

// Handle login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).send('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      req.session.userId = user._id;
      req.session.role = user.role;
      res.redirect('/dashboard');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error('❌ Error logging in:', error);
    res.status(500).send('Login failed');
  }
});

// Handle logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('❌ Error destroying session:', err);
    }
    res.redirect('/login');
  });
});

module.exports = router;
