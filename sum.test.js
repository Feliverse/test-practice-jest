const MyTestModule = require('./sum');

test('find the number of given string characters', () => {
  expect(MyTestModule.stringLength('a')).toBe(1);
  expect(MyTestModule.stringLength('abcdefghij')).toBe(10);
});

test('reverse given string', () => {
  expect(MyTestModule.reverseString('hello')).toBe('olleh');
})

describe('Test Calculator', () => {
  test('test calculator', () => {
    expect(MyTestModule.calculator.add(1, 1)).toBe(2);
    expect(MyTestModule.calculator.add(-1, 2)).toBe(1);
    expect(MyTestModule.calculator.add(0, -1)).toBe(-1);
  });
  test('test calculator', () => {
    expect(MyTestModule.calculator.subtract(1, 1)).toBe(0);
    expect(MyTestModule.calculator.subtract(-1, 2)).toBe(-3);
    expect(MyTestModule.calculator.subtract(0, -1)).toBe(1);
  });
  test('test calculator', () => {
    expect(MyTestModule.calculator.divide(10, 2)).toBe(5);
    expect(MyTestModule.calculator.divide(-10, 5)).toBe(-2);
    expect(MyTestModule.calculator.divide(50, 0)).toBe(Infinity);
  });
  test('test calculator', () => {
    expect(MyTestModule.calculator.multiply(0, 14)).toBe(0);
    expect(MyTestModule.calculator.multiply(0.5, 2)).toBe(1);
    expect(MyTestModule.calculator.multiply(-5, -5)).toBe(25);
  });
});

test('check if first letter is capitalized', () => {
  expect(MyTestModule.capitalize('koenigsegg')).toBe('Koenigsegg');
});