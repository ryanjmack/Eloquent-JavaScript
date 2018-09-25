// https://eloquentjavascript.net/06_object.html#i_wcWSnr9zHV
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
