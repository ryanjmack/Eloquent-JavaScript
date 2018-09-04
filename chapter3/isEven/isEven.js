
// a recursive function that returns a Boolean
const isEven = (n) => {
  if (n < 0)
    return isEven(Math.abs(n));
  else if (n > 2)
    return isEven(n - 2);
  else
    return (n % 2 === 0);
}


module.exports = isEven;
