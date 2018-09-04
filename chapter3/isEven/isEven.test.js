
const isEven = require('./isEven');


/***********************************************************************
* Tests
*
* With a recursive function that tests evenness, our limits are very
* small or else we'll overflow the call stack
***********************************************************************/
it('-101 should return false', () => {
  expect(isEven(-101)).toBe(false);
});


it('-100 should return true', () => {
  expect(isEven(-100)).toBe(true);
});


it('-2 should return true', () => {
  expect(isEven(-2)).toBe(true);
});


it('-1 should return false', () => {
  expect(isEven(-1)).toBe(false);
});


it('1 should return false', () => {
  expect(isEven(1)).toBe(false);
});


it('2 should return true', () => {
  expect(isEven(2)).toBe(true);
});


it('100 should return true', () => {
  expect(isEven(100)).toBe(true);
});


it('101 should return true', () => {
  expect(isEven(101)).toBe(false);
});
