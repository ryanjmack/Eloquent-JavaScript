
// function that reverses an array without mutating the input
const reverseArray = function reverseArray(arr) {
  const output = [];

  // iterate over the elements in the array and push to the front of output
  arr.forEach(el => output.unshift(el));
  return output;
};

/*
* Example call
*/
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];



// simulates javascript's Array.prototype.reverse method - mutates the input
const reverseArrayInPlace = function reverseArrayInPlace(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
  	[arr[i], arr[j]] = [arr[j], arr[i]];

    i++;
    j--;
  }
};


/*
* Example call
*/
const arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
