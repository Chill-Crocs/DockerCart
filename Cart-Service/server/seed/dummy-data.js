const Cart = require('../../database/Cart');
const createData = require('./createData.js');

const data = {
  _id: 0,
  rating: {
    name: 'AjsValueDepot',
    sales: 135,
    stars: 4.5,
  },
  info: {
    tags: ['Buddha', 'Shoe Charms', 'Shoe Decor', 'Crok Charms', 'Christmas Gifts', 'Birthday Gifts', 'Shoe Plugs', 'Clog Shoe', 'Charms', 'Garden Charms', 'Plants'],
    price: 399,
    availability: true,
  },
  selectors: [
    {
      name: 'Style',
      options: ['Buddha', 'Plant Lady'],
    },
    {
      name: 'Quantity',
      options: ['1', '100'],
    },
  ],
  extDetails: {
    description: 'Legal Disclaimer: My items are unbranded and unlicensed products. I do not claim ownership to any character, brand, or person used. Copyrights and/or trademarks used belong to their respective owners. These are inspired designs.',
  },
  shipping: {
    origin: {
      latitude: 47.839958190918,
      longitude: -122.206146240234,
    },
    exchanges: true,
  },
  shopPolicy: {
    lastUpdated: '11/5/2020',
    returns: false,
    noReturnTypes: ['Custom or personalized orders', 'Items on sale'],
  },
  seller: {
    name: 'Ameka Jackson',
    role: 'Owner',
    imageURL: 'AjsImage',
  },
};

function add() {
  const arr = [];
  arr.push(data);

  for (let i = 1; i < 100; i += 1) {
    arr.push(createData(i));
  }

  Cart.CartModel.create(arr)
    .then(() => process.exit());
}

add();
