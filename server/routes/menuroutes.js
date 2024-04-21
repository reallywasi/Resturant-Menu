const express = require('express');
const Menu = require('../models/menu');

const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
