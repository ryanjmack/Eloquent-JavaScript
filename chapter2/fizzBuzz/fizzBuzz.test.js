
/***********************************************************************
* Tests for fizzBuzz.js
***********************************************************************/
const fizzBuzz = require('./fizzBuzz');


/***********************************************************************
* Edge case
***********************************************************************/
it('0 to return "0"', () => {
  expect(fizzBuzz(0)).toBe('0');
});

it('-1 to return "-1"', () => {
  expect(fizzBuzz(-1)).toBe('-1');
});

it('-3 to return "-3"', () => {
  expect(fizzBuzz(-3)).toBe('-3');
});

it('-5 to return "-5"', () => {
  expect(fizzBuzz(-5)).toBe('-5');
});

it('-15 to return "-15"', () => {
  expect(fizzBuzz(-15)).toBe('-15');
});


/***********************************************************************
* Tests for numbers being divisible by 3
***********************************************************************/
it('3 to return "Fizz"', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
});

it('6 to return "Fizz"', () => {
  expect(fizzBuzz(6)).toBe('Fizz');
});

it('9 to return "Fizz"', () => {
  expect(fizzBuzz(9)).toBe('Fizz');
});

it('90003 to return "Fizz"', () => {
  expect(fizzBuzz(90003)).toBe('Fizz');
});


/***********************************************************************
* Tests for numbers being divisible by 5
***********************************************************************/
it('5 to return "Buzz"', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
});

it('10 to return "Buzz"', () => {
  expect(fizzBuzz(10)).toBe('Buzz');
});

it('50000 to return "Buzz"', () => {
  expect(fizzBuzz(50000)).toBe('Buzz');
});


/***********************************************************************
* Tests for numbers being divisible by 3 && 5
***********************************************************************/
it('15 to return "Buzz"', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
});

it('30 to return "Buzz"', () => {
  expect(fizzBuzz(30)).toBe('FizzBuzz');
});

it('30000 to return "Buzz"', () => {
  expect(fizzBuzz(30000)).toBe('FizzBuzz');
});
