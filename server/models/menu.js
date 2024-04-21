const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['veg', 'non-veg'], required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  tags: [String],
  description: String,
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
