
// returns a string (triangle) of height n
const createTriangle = function printTriangle(n) {
  let output = '';

  for (let i = 1; i <= n; i++) {
  	output += `${'#'.repeat(i)}\n`;
  }
  return output;
}

module.exports = createTriangle;
