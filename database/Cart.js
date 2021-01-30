const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/croxy-cart', { useNewUrlParser: true, useUnifiedTopology: true });

const cartSchema = new mongoose.Schema({
  _id: Number,
  rating: { name: String, sales: Number, stars: Number },
  info: { tags: [String], price: Number, availability: Boolean },
  selectors: [{ name: String, options: [String] }],
  extDetails: { description: String },
  shipping: { origin: { latitude: String, longitude: String }, exchanges: Boolean },
  shopPolicy: { lastUpdated: String, returns: Boolean, noReturnTypes: [String] },
  seller: { name: String, role: String, imageUrl: String },
});

const Cart = mongoose.model('Cart', cartSchema);

exports.CartModel = Cart;
