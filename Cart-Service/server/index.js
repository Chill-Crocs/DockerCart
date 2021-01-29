const express = require('express');
// const Rating = require('../database/Rating');
const Cart = require('../database/Cart');

const app = express();
const port = 3003;

app.use(express.static('public'));

app.get('/api/item/:itemID', (req, res) => {
  Cart.CartModel.findById(req.params.itemID)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
