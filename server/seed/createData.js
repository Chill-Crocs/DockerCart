const faker = require('faker');

function createData(id) {
  function getTags() {
    const arr = [];
    for (let i = 0; i < Math.round(Math.random() * 12 + 1); i += 1) {
      arr.push(faker.commerce.productAdjective());
    }
    return arr;
  }
  function getRandBool() {
    const rand = Math.random();
    if (rand < 0.5) {
      return true;
    }
    return false;
  }
  function getOptions() {
    const arr = [];
    for (let i = 0; i < Math.round(Math.random() * 9 + 1); i += 1) {
      arr.push(faker.commerce.color());
    }
    return arr;
  }
  function getSelectors() {
    const arr = [];
    for (let i = 0; i < Math.round(Math.random() * 4 + 1); i += 1) {
      arr.push({ name: faker.commerce.productMaterial(), options: getOptions() });
    }
    return arr;
  }
  function getDescription() {
    let str = '';
    for (let i = 0; i < 3; i += 1) {
      if (i < 2) {
        str += `${faker.commerce.productDescription()}\n`;
      } else {
        str += faker.commerce.productDescription();
      }
    }
    return str;
  }
  return (
    {
      _id: id,
      rating: {
        name: faker.company.companyName(),
        sales: Math.round(Math.random() * 1000),
        stars: Math.round(Math.random() * 50) / 10,
      },
      info: {
        tags: getTags(),
        price: faker.commerce.price(),
        availability: getRandBool(),
      },
      extDetails: {
        description: getDescription(),
      },
      selectors: getSelectors(),
      shipping: {
        origin: {
          latitude: 47.839958190918,
          longitude: -122.206146240234,
        },
        exchanges: getRandBool(),
      },
      shopPolicy: {
        lastUpdated: faker.date.past(),
        returns: getRandBool(),
        noReturnTypes: ['Custom or personalized orders', 'Items on sale'],
      },
      seller: {
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        role: faker.name.jobTitle(),
        imageURL: faker.image.imageUrl(),
      },
    }
  );
}

module.exports = createData;
