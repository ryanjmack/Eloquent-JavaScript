
const mathMin = require('./mathMin');

/***********************************************************************
* Edge cases
*
* One thing to note: JavaScript's Math.min coerces the arguments to a
* number before checking for the minimum value. Strings, null, false
* etc. can be coerced. What can't be coerced is undefined or strings
* with alphabetic chars.
*
* Yes, I went over the top with my tests for a simple Math.min function.
***********************************************************************/

it('One argument (null) should return 0', () => {
  expect(mathMin(null)).toBe(0);
});


it('One argument (undefined) should return NaN', () => {
  expect(mathMin(undefined)).toBe(NaN);
});


it('One argument ("a") should return NaN', () => {
  expect(mathMin("a")).toBe(NaN);
});


it('One argument ("1") should return 1', () => {
  expect(mathMin("1")).toBe(1);
});


it('Two arguments (1, "a"), one invalid should return NaN', () => {
  expect(mathMin(1, "a")).toBe(NaN);
});


it('Two arguments ("a", 1), one invalid should return NaN', () => {
  expect(mathMin("a", 1)).toBe(NaN);
});


/***********************************************************************
* Typical inputs
***********************************************************************/
it('One argument (42) should return 42', () => {
  expect(mathMin(42)).toBe(42);
});


it('Arguments of (0, 0) should return 0', () => {
  expect(mathMin(0, 0)).toBe(0);
});


it('Arguments of (-1, 1) should return -1', () => {
  expect(mathMin(-1, 1)).toBe(-1);
});


it('Arguments of (1, -1) should return -1', () => {
  expect(mathMin(1, -1)).toBe(-1);
});
