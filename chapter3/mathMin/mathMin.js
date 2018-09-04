
// simulates JavaScript's Math.min() method
const mathMin = (a, b = Infinity) => {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }

  return (a < b) ? a : b;
}

module.exports = mathMin;
