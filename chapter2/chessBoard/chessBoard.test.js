
const chessBoard = require('./chessBoard');

/***********************************************************************
* Edge cases
***********************************************************************/
it('Input less than 1 should return ""', () => {
  expect(chessBoard(0)).toBe('');
});

it('Input less than 1 should return ""', () => {
  expect(chessBoard(-1)).toBe('');
});

it('Input less than 1 should return ""', () => {
  expect(chessBoard(-100)).toBe('');
});


/***********************************************************************
* Tests for valid inputs
***********************************************************************/
it('2 should return:\n #\n #\n', () => {
  expect(chessBoard(2)).toBe(' #\n# \n');
});

it('3 should return:\n # \n# #\n # \n', () => {
  expect(chessBoard(3)).toBe(' # \n# #\n # \n');
});

it('8 should return:\n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # #\n', () => {
  expect(chessBoard(8)).toBe(' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n');
});
