
// Specs:
// https://eloquentjavascript.net/05_higher_order.html#i_SmbRSAd5GA
const every = function every(arr, test) {
  for (let i = 0; i < arr.length; i++) {
  	if (!test(arr[i])) {
    	return false;
    }
  }

  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
