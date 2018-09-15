
// Specs:
// https://eloquentjavascript.net/05_higher_order.html#i_aIOczlLyX1
// Altered the function to be able to flatten deeply nested arrays
let arr = [[1], [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]], [11], [12]];

const flattenArr = function flattenArr(input) {
  if (!Array.isArray(input)) {
  	return input;
  }

	return input.reduce((a, b) => a.concat(flattenArr(b)), []);
};

console.log(flattenArr(arr\));
// → [1, 2, 3, 4, 5, 6]
