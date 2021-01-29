/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
/* eslint-disable no-undef */
import '@babel/polyfill';

const { MongoClient } = require('mongodb');

const data = {
  _id: 0,
  rating: {
    name: 'AjsValueDepot',
    sales: 135,
    stars: 4.5,
  },
  info: {
    tags: ['Buddha', 'Shoe Charms', 'Shoe Decor', 'Crok Charms', 'Christmas Gifts', 'Birthday Gifts', 'Shoe Plugs', 'Clog Shoe', 'Charms', 'Garden Charms', 'Plants'],
    price: 3.99,
    availability: true,
  },
  selectors: [
    {
      name: 'Style',
      options: ['Buddha', 'Plant Lady'],
    },
    {
      name: 'Quantity',
      options: [1, 100],
    },
  ],
  extDetails: {
    details: [
      {
        iconUrl: 'Hand',
        description: 'Handmade Item',
      },
      {
        iconUrl: 'Stars',
        description: 'Materials: Pvc',
      },
    ],
    description: 'Legal Disclaimer: My items are unbranded and unlicensed products. I do not claim ownership to any character, brand, or person used. Copyrights and/or trademarks used belong to their respective owners. These are inspired designs.',
  },
  shipping: {
    origin: 98038,
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

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost/croxy-cart', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
    await db.collection('tests').deleteMany({});
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const tests = db.collection('tests');

    const mockData = data;
    await tests.insertOne(mockData);

    const insertedData = await tests.findOne({ _id: 0 });
    expect(insertedData).toEqual(mockData);
  });
});
