
// code requirements
// https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC
const deepEqual = function deepEqual(a, b) {
  // could be a primitive or the same object
  if (a === b) {
      return true;
  }
  // make sure it's an object and NOT null
  else if (typeof a !== 'object' || a === null
          || typeof b !== 'object' || b === null)
  {
    return false;
  }

  // ensure that a and b has the same number of keys
  // b could have all the same key/value pairs as a, but have extra keys
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every(key => {
    if (!bKeys.includes(key)) {
      return false;
    }

    return deepEqual(a[key], b[key]);
  });
}


let obj = {here: {is: "an"}, object: 2};
 console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
