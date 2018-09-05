
const countChars = require('./countChars');


/***********************************************************************
* Edge cases
***********************************************************************/
it('("", "") should return 0', () => {
  expect(countChars('', '')).toBe(0);
});


it('("asdfghjkl", "") should return 0', () => {
  expect(countChars('asdfghjkl', '')).toBe(0);
});


it('("", "a") should return 0', () => {
  expect(countChars('', 'a')).toBe(0);
});


it('("HELLO", "h") should return 0', () => {
  expect(countChars("HELLO", "h")).toBe(0);
});


it('("Hello world!", "O") should return 0', () => {
  expect(countChars("Hello world!", "O")).toBe(0);
});


/***********************************************************************
* Valid inputs
***********************************************************************/
it('("Hello world!", "o") should return 2', () => {
  expect(countChars("Hello world!", "o")).toBe(2);
});


it('("The quick brown fox jumps over the lazy dog", "o") should return 4', () => {
  expect(countChars("The quick brown fox jumps over the lazy dog", "o")).toBe(4);
});


it('("The quick brown fox jumps over the lazy dog", "q") should return 1', () => {
  expect(countChars("The quick brown fox jumps over the lazy dog", "q")).toBe(1);
});
