/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

const createData = require('../server/seed/createData');

const testData1 = createData(1);
const testData2 = createData(2);
const testData3 = createData(3);

describe('Data generator function', () => {
  test('should create a new object with the correct id', () => {
    expect(testData1._id).toBe(1);
    expect(testData2._id).toBe(2);
    expect(testData3._id).toBe(3);
  });
  test('should create a new object with a tags array', () => {
    expect(Array.isArray(testData1.info.tags)).toBe(true);
    expect(Array.isArray(testData2.info.tags)).toBe(true);
    expect(Array.isArray(testData3.info.tags)).toBe(true);
  });
  test('should create selector lists with varying lengths', () => {
    const length1 = testData1.selectors.length;
    const length2 = testData2.selectors.length;
    const length3 = testData3.selectors.length;
    expect((length1 === length2 && length1 === length3)).toBe(false);
  });
});
