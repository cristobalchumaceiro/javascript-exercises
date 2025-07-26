const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
	return arr.reduce((prev, current) => prev + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((prev, current) => prev * current)
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(x) {
  let product = 1
	for (i = x; i > 0; i--) {
    product *= i
  }
  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
