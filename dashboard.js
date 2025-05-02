const express = require('express');
const router = express.Router();

const authMiddleware = (req, res, next) => {
  if (!req.session.userId) return res.redirect('/login');
  next();
};

const adminMiddleware = (req, res, next) => {
  if (req.session.role !== 'admin') return res.status(403).send('Access denied');
  next();
};

router.get('/dashboard', authMiddleware, (req, res) => {
  res.render('dashboard', { role: req.session.role });
});

router.get('/admin', authMiddleware, adminMiddleware, (req, res) => {
  res.send('Welcome to the Admin Panel!');
});

module.exports = router;