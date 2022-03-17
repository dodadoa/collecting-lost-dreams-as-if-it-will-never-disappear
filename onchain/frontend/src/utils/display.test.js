import { displayEthereumPrice } from './display'

describe('display ethereum function', () => {
  test('should display 0.2 given 200000000000000000', () => {
    const result = displayEthereumPrice(200000000000000000)
    expect(result).toStrictEqual("0.2");
  })

  test('should display 1.9 given 1900000000000000000', () => {
    const result = displayEthereumPrice(1900000000000000000)
    expect(result).toStrictEqual("1.9");
  })

  test('should display 0.05 given 50000000000000000', () => {
    const result = displayEthereumPrice(50000000000000000)
    expect(result).toStrictEqual("0.05");
  })
});
