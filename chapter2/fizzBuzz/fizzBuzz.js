
// function that returns 'Fizz', 'Buzz', 'FizzBuzz' or simply the number
const fizzBuzz = function fizzBuzz(n) {
	if (n <= 2) {
		return n.toString();
	}

	let output = '';

	if (n % 3 === 0) {
    output += 'Fizz';
  }

  if (n % 5 === 0) {
    output += 'Buzz';
  }

	return (output||n.toString());
}

module.exports = fizzBuzz;
