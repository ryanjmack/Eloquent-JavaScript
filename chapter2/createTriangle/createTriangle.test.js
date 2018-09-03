
const createTriangle = require('./createTriangle');

/***********************************************************************
* Edge cases
***********************************************************************/
it('Input less than 1 should return ""', () => {
  expect(createTriangle(0)).toBe('');
});

it('Input less than 1 should return ""', () => {
  expect(createTriangle(-1)).toBe('');
});

it('Input less than 1 should return ""', () => {
  expect(createTriangle(-100)).toBe('');
});


/***********************************************************************
* Tests for valid inputs
***********************************************************************/
it('2 should return:\n#\n##\n', () => {
  expect(createTriangle(2)).toBe('#\n##\n');
});

it('3 should return:\n#\n##\n###\n', () => {
  expect(createTriangle(3)).toBe('#\n##\n###\n');
});

it('8 should return: \n#\n##\n###\n####\n#####\n######\n#######\n########\n', () => {
  expect(createTriangle(8)).toBe('#\n##\n###\n####\n#####\n######\n#######\n########\n');
});
