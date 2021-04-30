const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: String,
  type: String,
  created_date: {
    type: Date,
    default: Date.now(),
  },
  updated_date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model('Product', ProductSchema);
