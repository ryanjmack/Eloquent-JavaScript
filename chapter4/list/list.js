
// https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M
const prepend = (value, list) => ({value: value, rest: list});


const arrayToList = function arrayToList(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = prepend(arr[i], list);
  }

  return list;
};


const listToArray = function listToArray(list) {
  const arr = [];
  let curr = list;

  while (curr !== null) {
    arr.push(curr.value);
    curr = curr.rest;
  }

  return arr;
}


const nth = function nth(list, n) {
  if (list === null) {
    return null;
  }
  else if (n === 0) {
  	 return list.value;
  }

  return nth(list.rest, n - 1);
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
