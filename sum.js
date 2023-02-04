module.exports = {};

module.exports.stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  }
};

module.exports.reverseString = (string => {
  if (typeof string === 'string') {
    const reversed = string.split('').reverse().join('');
    return reversed;
  }
});

module.exports.calculator = {
  add: (a, b) => {
    return a + b
  },
  subtract: (a, b) => {
    return a - b
  },
  divide: (a, b) => {
    return a / b
  },
  multiply: (a, b) => {
    return a * b
  }
};

module.exports.capitalize = (string) => {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}